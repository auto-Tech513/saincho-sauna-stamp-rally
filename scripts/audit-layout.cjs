async (page) => {
  const base = "http://127.0.0.1:8788";
  const routes = ["/", "/passport/", "/ranking/", "/gear/", "/stay/", "/sameshi/", "/guide/", "/community/", "/add/", "/contact/", "/about/", "/sauna-stamp-rally/", "/sauna-goshuin/", "/facility/st-aichi-4936/"];
  const layouts = [];
  for (const width of [320,390,1440]) {
    await page.setViewportSize({width,height:900});
    for (const route of routes) {
      await page.goto(base+route);
      await page.locator("#searchInput").waitFor({state:"attached"});
      await page.waitForTimeout(350);
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth+1,
        visibleViews: [...document.querySelectorAll(".view-active")].filter(el=>el.getBoundingClientRect().height>0).length,
      }));
      if (result.overflow || !result.visibleViews) throw new Error(`Layout failed: ${width} ${route} ${JSON.stringify(result)}`);
      layouts.push({width,route,...result});
    }
  }
  await page.setViewportSize({width:390,height:844});
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Emulation.setCPUThrottlingRate",{rate:4});
  try {
    await page.goto(base);
    await page.locator("#facilityList .facility-card").first().waitFor();
    await page.evaluate(()=>{
      window.auditSlowDelays=[];window.auditSlowTasks=[];
      document.querySelector("#searchInput").addEventListener("input",()=>{
        const start=performance.now();requestAnimationFrame(()=>window.auditSlowDelays.push(performance.now()-start));
      });
      new PerformanceObserver(list=>window.auditSlowTasks.push(...list.getEntries().map(e=>e.duration))).observe({type:"longtask",buffered:false});
    });
    await page.locator("#searchInput").pressSequentially("sauna monkey",{delay:30});
    await page.waitForFunction(()=>document.querySelector("#facilityList h3")?.textContent==="SAUNA MONKEY");
    const perf = await page.evaluate(()=>{
      const delays=window.auditSlowDelays.sort((a,b)=>a-b);
      return {cpuSlowdown:4,samples:delays.length,p95NextFrameMs:delays[Math.floor(delays.length*.95)],longTasksMs:window.auditSlowTasks};
    });
    await page.getByRole("button",{name:"設定を開く",exact:true}).click();
    await page.getByRole("button",{name:"ランキングに参加する",exact:true}).click();
    await page.locator("#profileNickname").waitFor({state:"visible"});
    const focused = await page.locator("#profileNickname").evaluate(e=>document.activeElement===e);
    if (!focused) throw new Error("Registration menu does not focus nickname");
    await page.screenshot({path:"output/playwright/audit-2026-10-18/07-after-registration-menu.png"});
    return {ok:true,layouts,perf,registrationMenu:focused};
  } finally {
    await cdp.send("Emulation.setCPUThrottlingRate",{rate:1});
    await cdp.detach();
  }
}
