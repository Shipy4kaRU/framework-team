export const setDebounce = (title: string, time: number): void => {
  let timeout: number;
  clearTimeout(timeout!);
  timeout = setTimeout(() => {
    return title;
  }, time);
};
