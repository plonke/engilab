export function debounce<T extends (...args: any) => any>(
  callback: T,
  wait: number,
) {
  let timeoutId: number | null = null;
  return (...args: Parameters<T>) => {
    if (typeof timeoutId === "number") {
      window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
