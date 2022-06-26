export const debounce = <F extends (...args: string[]) => void>(func: F, waitFor: number) => {
  let timeout: number | ReturnType<typeof setTimeout> = 0;

  const debounced = (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
