export function debounce(fn, milliseconds) {
  let timeout = 0;

  return () => {
    clearTimeout(timeout);

    timeout = setTimeout(fn, milliseconds);
  }
}