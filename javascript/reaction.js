const btn = document.getElementById('reactionbtn')
const box = document.getElementById('reactionarea')
const result = document.getElementById('result')
let startTime;
let gamestarted=false;
let timeout

btn.addEventListener('click', ()=>{
    result.innerText = ''
    btn.disabled = true
    box.innerText = 'Wait for it...'
    const delay = Math.random() * 3000 + 2000;
    timeout = setTimeout(()=>{
        gamestarted = true
        box.style.backgroundColor = 'green'
        box.innerText = 'click!'
        startTime = new Date().getTime()
    }, delay)
    
})

box.addEventListener('click', ()=>{
        if(!btn.disabled) return

        if(!gamestarted){
            clearTimeout(timeout)
            box.style.backgroundColor = 'red'
            box.innerText = 'Too soon!'
            setTimeout(()=>{
                box.innerText = ''
                box.style.backgroundColor = 'white'
                btn.disabled = false
            }, 1500)
        }
        else {
        const endTime = new Date().getTime()
        const reactionTime =  endTime-startTime
        result.innerText = `Reaction time: ${reactionTime} ms (1000ms = 1sec)`
        box.style.backgroundColor = 'white'
        box.innerText = ''
        gamestarted = false
        btn.disabled = false
        }
    })