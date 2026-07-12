export const NEARBY_RADIUS_KM = 2;
export const MAX_NEARBY_GEO_ACCURACY_METERS = 1000;

export function findNearestFacilities(facilities, latitude, longitude, options = {}) {
  const radiusKm = Number.isFinite(options.radiusKm) ? options.radiusKm : NEARBY_RADIUS_KM;
  const limit = Number.isFinite(options.limit) ? Math.max(1, Math.floor(options.limit)) : 5;
  const excludedSources = new Set(options.excludeSources || []);

  if (!isValidLatitude(latitude) || !isValidLongitude(longitude) || radiusKm <= 0) return [];

  return facilities
    .map((facility) => {
      const lat = Number(facility?.lat);
      const lng = Number(facility?.lng);
      if (!isValidLatitude(lat) || !isValidLongitude(lng)) return null;
      if (options.requireAddress && !String(facility?.address || "").trim()) return null;
      if (excludedSources.has(facility?.source)) return null;
      return { facility, distanceKm: haversineDistanceKm(latitude, longitude, lat, lng) };
    })
    .filter((item) => item && item.distanceKm <= radiusKm)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

export function haversineDistanceKm(lat1, lng1, lat2, lng2) {
  if (![lat1, lng1, lat2, lng2].every(Number.isFinite)) return Number.POSITIVE_INFINITY;
  const toRadians = (value) => value * Math.PI / 180;
  const earthRadiusKm = 6371;
  const latDelta = toRadians(lat2 - lat1);
  const lngDelta = toRadians(lng2 - lng1);
  const a = Math.sin(latDelta / 2) ** 2
    + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(lngDelta / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function isUsableNearbyPosition(position) {
  const latitude = Number(position?.coords?.latitude);
  const longitude = Number(position?.coords?.longitude);
  const accuracy = Number(position?.coords?.accuracy);
  return isValidLatitude(latitude)
    && isValidLongitude(longitude)
    && Number.isFinite(accuracy)
    && accuracy >= 0
    && accuracy <= MAX_NEARBY_GEO_ACCURACY_METERS;
}

function isValidLatitude(value) {
  return Number.isFinite(value) && value >= -90 && value <= 90;
}

function isValidLongitude(value) {
  return Number.isFinite(value) && value >= -180 && value <= 180;
}
