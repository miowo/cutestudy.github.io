const toggleBtn = document.querySelector('#button2');

if(toggleBtn){
  toggleBtn.addEventListener('click',()=>{
    if(todo.style.display === 'block'){
      todo.style.display = 'none';
    }else{
      todo.style.display = 'block';
    }
  });
}
