function highlight(table) {
  for ( let i = 0; i < table.tBodies[0].rows.length; i++ ) {
    for ( let j = 0; j < table.tBodies[0].rows[i].cells.length; j++ ) {
      let currentElement = table.tBodies[0].rows[i].cells[j];

      if( currentElement.dataset.available == 'true') {
        table.tBodies[0].rows[i].classList.add('available');
      } else if (currentElement.dataset.available == 'false') {
        table.tBodies[0].rows[i].classList.add('unavailable');
      } else if (currentElement.innerHTML == 'm') {
        table.tBodies[0].rows[i].classList.add('male');
      } else if (currentElement.innerHTML == 'f') {
        table.tBodies[0].rows[i].classList.add('female');
      } else if (currentElement.innerHTML < 18 ) {
        table.tBodies[0].rows[i].style.cssText = 'text-decoration: line-through';
      } else if ( currentElement.cellIndex == 3 && currentElement.dataset.available == undefined) {
        console.log(currentElement);
        table.tBodies[0].rows[i].hidden='true';        
      }

    }
  }

}
