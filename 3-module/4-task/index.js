function showSalary(users, age) {
  return resultString = users.filter(function (user) {
    if ( user.age <= age ) return user;   
  }).map(function (user) {
    return `${user.name}, ${user.balance}`
  }).join("\n");
}
