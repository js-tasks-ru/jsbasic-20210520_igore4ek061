function truncate(str, maxlength) {
  let finalStr="…";
  if ( str.length > maxlength ) {
    str = str.slice(0,maxlength-1);
    str += finalStr;
    return str;

  }
  
  return str;
}

//truncate("Вот, что мне хотелось бы сказать на эту тему:",20);
