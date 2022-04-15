const messageToggle = () =>{
    const convenorMessage = document.getElementById('convenor-message');
    const principalMessage = document.getElementById('principal-message');
    convenorMessage.addEventListener('click',()=>{
        // principalMessage.classList.toggle('principal-message-animation');
        if(convenorMessage.classList.contains('convenor-message-inactive')){
            convenorMessage.classList.replace('convenor-message-inactive','convenor-message-active');
            setTimeout(() => {
                convenorMessage.style.zIndex="1";
            }, 500);
        }
        else if(convenorMessage.classList.contains('convenor-message-active')){
            convenorMessage.classList.replace('convenor-message-active','convenor-message-inactive');
            setTimeout(() => {
                convenorMessage.style.zIndex="-1";
            }, 500);
        }
    })
}

messageToggle();