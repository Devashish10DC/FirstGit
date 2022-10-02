
//var headerTitle = document.getElementsByClassName('main-header');
//headerTitle.style.borderBottom = 'solid 3px #000';
//var Title = document.getElementById('title');
//console.log(Title);
//var Title = document.getElementById('title');
//Title.style.fontWeight = 'bold';
//Title.style.backgroundColor = 'green';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}
 

