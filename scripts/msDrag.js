/***drag feature in mysite.html****/
const todo = document.querySelector('.to-do');
const music=document.querySelector('.playlist');

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

if(music){

  function onDrag2({movementX, movementY}){
    let getStyle = window.getComputedStyle(music);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    music.style.left = `${left + movementX}px`;
    music.style.top = `${top + movementY}px`;
  }

  music.addEventListener("mousedown", ()=>{
    music.addEventListener("mousemove", onDrag2);
  });

  document.addEventListener("mouseup", ()=>{
    music.removeEventListener("mousemove", onDrag2);
  });
}
