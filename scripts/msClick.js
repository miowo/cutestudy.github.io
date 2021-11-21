const toggleBtn = document.querySelector('#button2');
const toggleBtn2=document.querySelector('#button1')

if(toggleBtn){
  toggleBtn.addEventListener('click',()=>{
    if(todo.style.display === 'block'){
      todo.style.display = 'none';
    }else{
      todo.style.display = 'block';
    }
  });
}

if(toggleBtn2){
  toggleBtn2.addEventListener('click',()=>{
    if(music.style.display === 'block'){
      music.style.display = 'none';
    }else{
      music.style.display = 'block';
    }
  });
}
