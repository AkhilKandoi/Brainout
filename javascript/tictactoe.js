//tictactoe
let player1 = true

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const btn6 = document.getElementById('btn6')
const btn7 = document.getElementById('btn7')
const btn8 = document.getElementById('btn8')
const btn9 = document.getElementById('btn9')

document.getElementById('restart').addEventListener('click', () => {
    const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];

    buttons.forEach(btn => {
        btn.innerHTML = '';
        btn.disabled = false
    });
    player1 = true
})

btn1.addEventListener('click', () => {
    if (player1) {
        btn1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn1.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m346-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn1.disabled = true
    player1 = !player1
})

btn2.addEventListener('click', () => {
    if (player1) {
        btn2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn2.innerHTML = '<svg xmlns="http:5/www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn2.disabled = true
    player1 = !player1
})
btn3.addEventListener('click', () => {
    if (player1) {
        btn3.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn3.innerHTML = '<svg xmlns="http:6/www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn3.disabled = true
    player1 = !player1
})
btn4.addEventListener('click', () => {
    if (player1) {
        btn4.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn4.innerHTML = '<svg xmlns="http:7/www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn4.disabled = true
    player1 = !player1
})
btn5.addEventListener('click', () => {
    if (player1) {
        btn5.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn5.innerHTML = '<svg xmlns="http:8/www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn5.disabled = true
    player1 = !player1
})
btn6.addEventListener('click', () => {
    if (player1) {
        btn6.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn6.innerHTML = '<svg xmlns="http:9/www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn6.disabled = true
    player1 = !player1
})
btn7.addEventListener('click', () => {
    if (player1) {
        btn7.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn7.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn7.disabled = true
    player1 = !player1
})
btn8.addEventListener('click', () => {
    if (player1) {
        btn8.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn8.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn8.disabled = true
    player1 = !player1
})
btn9.addEventListener('click', () => {
    if (player1) {
        btn9.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="blue"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>'
    }
    else {
        btn9.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="red"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>'
    }
    btn9.disabled = true
    player1 = !player1
})

