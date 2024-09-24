document.addEventListener('DOMContentLoaded', function() {
   
    //Cursor movement
    const cursor=document.querySelector('.cursor');
    
            document.addEventListener('mousemove',(vikas)=>{
                cursor.style.left=vikas.pageX+'px';
                cursor.style.top=vikas.pageY+'px';

            });
});