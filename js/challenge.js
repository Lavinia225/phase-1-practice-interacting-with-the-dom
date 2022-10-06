const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const heart = document.getElementById('heart')
const likeList = document.querySelector('ul')
const pause = document.getElementById('pause')
const form = document.getElementById('comment-form')
let time = 0

let timer = setInterval(()=>{  //Timer incrementer
    time += 1
    counter.textContent = time
}, 1000)

plus.addEventListener('click', incrementTime)
minus.addEventListener('click', decrementTime)
heart.addEventListener('click', () =>{
    if(document.getElementById(time)){
        const listElement = document.getElementById(time)
        const start = listElement.textContent.indexOf('liked')
        const end = listElement.textContent.indexOf('times')
        let likeCounter = parseInt(listElement.textContent.slice(start + 6, end - 1)) + 1
        
        listElement.textContent = `${time} has been liked ${likeCounter} times!`
    
    }
    else{
        const li = document.createElement('li')
        let likeCounter = 1
        li.textContent = `${time} has been liked ${likeCounter} times!`
        li.id = time
        likeList.appendChild(li)
    }
})

pause.addEventListener('click', () =>{
    if (pause.textContent === ' pause '){
        clearInterval(timer)
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        pause.textContent = " resume "
    }
    else if (pause.textContent === ' resume '){
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        pause.textContent = " pause "
        timer = setInterval(()=>{  //Timer incrementer
            time += 1
            counter.textContent = time
        }, 1000)
        
    }

})

form.addEventListener('submit', e =>{
    e.preventDefault()
    const commentSection = document.getElementById('list')
    const p = document.createElement('p')

    p.textContent = e.target['comment-input'].value
    commentSection.appendChild(p)
    form.reset()
})

function incrementTime(){
    time += 1
    counter.textContent = time
}

function decrementTime(){
    time -= 1
    counter.textContent = time
}