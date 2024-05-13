

document.title = 'Tugas Kecil 2'
const body = document.body

// Button 2
const btn1 = document.getElementById('btn-1')
const btn = document.querySelector('button')

const defaultText = 'Halo, Klik Saya!'
btn1.textContent = defaultText


btn1.style.border = 'none'
btn1.style.padding = '10px'
btn1.style.fontSize = '24px'
btn1.style.background = 'cyan'

function clickButton(){
    btn1.style.background = 'tomato'
    const NewText = document.createElement('p')
    NewText.textContent = 'Terimakasih sudah klik!'
    body.append(NewText)
}

function changeText(){
    btn1.textContent = 'Hi, Oke Saya Klik!'
}

function oriText(){
    btn1.textContent = defaultText
}


// Button 2
const btn2 = document.getElementById("btn-2")

btn2.textContent = 'Klik Saya Saja!'

//styling
btn2.style.padding = '1.5em'
btn2.style.fontSize = '20px'
btn2.style.background = 'lightgreen'

//func

function clickButton2(){
    btn2.style.fontWeight = 'bold'
    btn2.style.padding = '1em'
}

function addText(){
    NewText = document.createElement('p')
    NewText.textContent = 'Ega Naww'
    body.append(NewText)
}

function outofButton(){
    NewText.style.color = 'red'
    NewText.style.fontWeight = 'bold'
}

