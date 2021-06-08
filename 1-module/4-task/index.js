function checkSpam(str) {
  let filterStr=['1xBet','XXX'];
  let regex = new RegExp( filterStr.join( "|" ), "i");
  if ( regex.test(str) ) {
    return true;
  }
  return false;
}
