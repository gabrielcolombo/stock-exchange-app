export function required(param) {
  throw new Error(`The ${param} param is required.`);
}