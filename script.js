const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll('.list');

for (const card of cards){
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
}

for(const list of lists){
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e){
  // this allows the drop location to know which element is being moved
  // when you release it
  e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd(){
  console.log('Drag Ended');
}

function dragOver(e){
  // this is important because by default broswers dont allow you to 
  // drag and drop elements
  e.preventDefault();
}

function dragEnter(e){
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e){
  this.classList.remove("over");
}

function dragDrop(e){
  const id = e.dataTransfer.getData('text/plain');

  const card = document.getElementById(id);
  
// Here "this" refers to the list over which our mouse is hovering and the drop event will be registered on that list and card 
  // is the original card we picked up from earlier
  this.appendChild(card);

  this.classList.remove('over');
}

