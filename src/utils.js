export function formatTimeStamp(timeStamp) {
  const now = new Date();
  const diff = Math.floor((now.getTime() - timeStamp) / 1000);

  if (diff < 60) {
    return `${diff} second${diff > 1 ? "s" : ""} ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minute${
      Math.floor(diff / 60) > 1 ? "s" : ""
    } ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hour${
      Math.floor(diff / 3600) > 1 ? "s" : ""
    } ago`;
  } else if (diff < 86400 * 30) {
    return `${Math.floor(diff / 86400)} day${
      Math.floor(diff / 86400) > 1 ? "s" : ""
    } ago`;
  } else if (diff < 86400 * 30 * 12) {
    return `${Math.floor(diff / (86400 * 30))} month${
      Math.floor(diff / (86400 * 30)) > 1 ? "s" : ""
    } ago`;
  } else {
    return `${Math.floor(diff / (86400 * 30 * 12))} year${
      Math.floor(diff / (86400 * 30 * 12)) > 1 ? "s" : ""
    } ago`;
  }
}
