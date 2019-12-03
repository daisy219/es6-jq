/** 等待指定时间 (毫秒) */
export function wait_time(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, time);
  });
}

export function cached (fn: any): any {
  const cache = Object.create(null);
  return (function cachedFn (str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
}

const camelizeRE = /-(\w)/g

export const camelize = cached((str: string): string => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
})