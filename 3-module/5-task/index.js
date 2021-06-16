function getMinMax(str) {
  
  let sortedArray = str.split(',').map(function (num) {
    if(num.includes(' ')) {
      return num.split(' ').filter((n) => parseFloat(n));
    } else {
      return num;
    }
  }).flat();

  sortedArray.sort((a,b) => a - b );
  
  return {
    min: +sortedArray[0],
    max: +sortedArray[sortedArray.length - 1],
  };

}
