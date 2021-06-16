function camelize(str) {
  let splitedString = str.split('-');
  let resultedString = [];
  for ( let i = 0; i < splitedString.length; i++ ) {

    if ( i == 0 ) resultedString.push(splitedString[i]);
    else {
      let combinedWord =  splitedString[i].charAt(0).toUpperCase() + splitedString[i].slice(1); 
      resultedString.push(combinedWord);
    }
  }
   return resultedString.join("");
}
