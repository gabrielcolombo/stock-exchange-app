export function debounce(milliseconds = 500) {
  return function(target, key, descriptor) {
    const originalMethod = descriptor.value;

    let timeout = 0;

    descriptor.value = function(...args) {

      if(event) {
        event.preventDefault();
      }

      clearTimeout(timeout);

      timer = setTimeout(() => originalMethod.apply(this, args), milliseconds);
    }
    
    return descriptor;
  }
}