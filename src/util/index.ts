/** 等待指定时间 (毫秒) */
export function wait_time(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, time);
  });
}