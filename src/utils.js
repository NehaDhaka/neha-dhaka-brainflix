export function formatTimeStamp(timeStamp) {
  const now = new Date();
  let diff = Math.floor((now.getTime() - timeStamp) / 1000);
  const intervals = [
    { unit: "second", duration: 60 },
    { unit: "minute", duration: 60 },
    { unit: "hour", duration: 24 },
    { unit: "day", duration: 30 },
    { unit: "month", duration: 12 },
    { unit: "year", duration: Infinity },
  ];

  let index = 0;
  while (diff >= intervals[index].duration && index < intervals.length - 1) {
    diff /= intervals[index].duration;
    index++;
  }

  diff = Math.floor(diff);
  const unit = intervals[index].unit;
  return `${diff} ${unit}${diff > 1 ? "s" : ""} ago`;
}
