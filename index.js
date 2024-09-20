const btns = document.querySelectorAll('.btn');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const screen = document.getElementById('result');
const counterDisplay = document.querySelector('h4');
counter = 0;

//Calculator
btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        screen.textContent += e.target.id;
    })
})

equal.addEventListener('click', (e)=>{
    screen.textContent = eval(screen.textContent);
})

clear.addEventListener('click', (e)=>{
    screen.textContent = '';
})


//Bubble
const bubbleMaker = () =>{
    const bubble = document.createElement('span');
    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    const size = Math.random() * 200 + 100 + "px";

    document.body.appendChild(bubble);
    bubble.classList.add('bubble'); 
    bubble.textContent = 'ljcDev';
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 * plusMinus + "%";
    bubble.style.setProperty('--left', Math.random()* 100 + "%");

    bubble.addEventListener('click', (e)=>{
        counter ++;
        counterDisplay.textContent = counter;
        bubble.remove();
    })
    setTimeout(()=>{
        bubble.remove();     
    }, 5000)
}

setInterval(bubbleMaker, 1000);
