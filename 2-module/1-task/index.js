function sumSalary(salaries) {
  let result = 0;
  for ( let key in salaries ) {
    if ( !isNaN(salaries[key]) && salaries[key] !== Infinity && salaries[key] !== -Infinity  && typeof salaries[key] !== "boolean" ) {
      result += salaries[key];
    }
  }
  return result;
}
