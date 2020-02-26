function getFibonator(){
  let previousElemeent = 0;
  let current = 1;

  return function(){
      const result = previousElemeent + current;
      previousElemeent = current;
      current = result;

      return previousElemeent;
  }
}