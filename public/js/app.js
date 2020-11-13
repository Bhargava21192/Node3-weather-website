//const request = require("request")

console.log("received the input from client end!")

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)

//     })
// })

// fetch("http://localhost:3000/weather?address=!").then((response)=>{
    
//     response.json().then((databuffer)=>{  
//         if(databuffer.error)
//         console.log(databuffer.error)
//         else
//         {
//             console.log(databuffer.forecast)
//             console.log(databuffer.Location)
//         }})
// })

const weatherform= document.querySelector('form')
const search= document.querySelector('input')
const messageone= document.querySelector('#message-1')
const messagetwo= document.querySelector('#message-2')
// messageone.textContent="From javascript"

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const Location=search.value
    messageone.textContent="Loading..."
    messagetwo.textContent=""
    fetch("http://localhost:3000/weather?address="+Location).then((response)=>{
    
    response.json().then((databuffer)=>{  
        if(databuffer.error)
        {  
           messageone.textContent=databuffer.error
           messagetwo.textContent=""
        }
        // console.log(databuffer.error)}
        else
        {
            messageone.textContent=databuffer.forecast
            messagetwo.textContent=databuffer.Location
            // console.log(databuffer.forecast)
            // console.log(databuffer.Location)
        }})
})

    
})