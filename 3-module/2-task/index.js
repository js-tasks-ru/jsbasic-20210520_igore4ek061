function filterRange(arr, a, b) {
  if (a > 0 && b > 0) {
  
    return arr.filter(function (n) {
      if (n <= a || n <= b) {
        return n;
    }
    });
  } else { return arr; }
}
