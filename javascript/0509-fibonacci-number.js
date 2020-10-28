// 10/28

// var fib = function(N) {

//     if(N < 2) return N

//     return fib(N-1) + fib(N-2)

// };

var fib = function(N, cache = []) {
  if (cache[N]) {
    return cache[N];
  } else {
    if (N < 2) return N;
    else {
      cache[N] = fib(N - 1, cache) + fib(N - 2, cache);
    }
  }
  return cache[N];
};
