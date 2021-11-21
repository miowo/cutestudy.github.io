/***drag feature in mysite.html****/
const todo = document.querySelector('.to-do');

if(todo){

  function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(todo);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    todo.style.left = `${left + movementX}px`;
    todo.style.top = `${top + movementY}px`;
  }

  todo.addEventListener("mousedown", ()=>{
    todo.addEventListener("mousemove", onDrag);
  });

  document.addEventListener("mouseup", ()=>{
    todo.removeEventListener("mousemove", onDrag);
  });
}
