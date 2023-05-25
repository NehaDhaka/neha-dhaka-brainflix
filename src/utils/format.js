export function formatTimeStamp(timeStamp) {
  const now = new Date();
  const diff = Math.floor((now.getTime() - timeStamp) / 1000);

  const timeUnits = [
    { unit: "year", duration: 86400 * 30 * 12 },
    { unit: "month", duration: 86400 * 30 },
    { unit: "day", duration: 86400 },
    { unit: "hour", duration: 3600 },
    { unit: "minute", duration: 60 },
    { unit: "second", duration: 1 },
  ];

  for (const unit of timeUnits) {
    if (diff >= unit.duration) {
      const value = Math.floor(diff / unit.duration);
      return `${value} ${unit.unit}${value > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}
