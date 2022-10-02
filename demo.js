
//var headerTitle = document.getElementsByClassName('main-header');
//headerTitle.style.borderBottom = 'solid 3px #000';
//var Title = document.getElementById('title');
//console.log(Title);
//var Title = document.getElementById('title');
//Title.style.fontWeight = 'bold';
//Title.style.backgroundColor = 'green';

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[2].style.backgroundColor = 'green';

//for(var i = 0; i < items.length; i++){
 //   items[i].style.fontWeight = 'bold';
//}

//var li = document.getElementsByTagName('li');
//console.log(li);
//li[1].style.backgroundColor = 'green';

//for(var i = 0; i < li.length; i++){
  //  li[i].style.fontWeight = 'bold';
//}

//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 3px #000';

//var seconditems = document.querySelector('.list-group-item:nth-child(2)');
//console.log(items);
//seconditems.style.color = 'red';
//var thirditems = document.querySelector('.list-group-item:nth-child(3)');
//console.log(items);
//thirditems.style.color = 'white';

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//items[2].style.backgroundColor = 'green';

//var items = document.querySelectorAll('li:nth-child(2)');
//seconditems.style.color = 'green';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//for(var i = 0; i < odd.length; i++){
  //  odd[i].style.backgroundColor = 'green'
//}

//var itemList = document.querySelector('#items');
//parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = 'grey';
//console.log(itemList.parentNode.parentNode.parentNode);

var itemList = document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'grey';
console.log(itemList.parentElement.parentElement.parentElement);
 
//childNodes
console.log(itemList.childNodes);

//children
console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);
itemList.firstChild.textContent = 'Hello';

//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = 'Hello1';
newDiv.setAttribute('title','Hello');
var newDivText = document.createTextNode('Hello');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
container.insertBefore(newDiv, h1);


