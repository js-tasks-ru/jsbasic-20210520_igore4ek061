function factorial(n) {
  let number = n;
  if ( n > 1 ) {
    while(n > 1) {
      n--;
      number = number * n;
    }
    return number;
   }
   return 1;
}
