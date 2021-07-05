function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  for ( let i in friends) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
  }
  return ul;
}
