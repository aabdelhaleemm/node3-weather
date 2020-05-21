console.log("client side java script loadrad");


// fetch('/weather?adress=jeddah').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error);
            
//         }
//         else{
//             console.log(data.forcast);
            
//         }
//     })
// })

const weather = document.querySelector('form')
const loc=document.querySelector('input')

weather.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.querySelector('.fres').textContent=('loading..')
    document.querySelector('.res').textContent=''
    
    fetch('/weather?adress='+loc.value).then((response)=>{
        
    response.json().then((data)=>{
        if(data.error){
            document.querySelector('.res').textContent=data.error;
            
        }
        else{
            document.querySelector('.fres').textContent= data.location
            document.querySelector('.res').textContent='the temp outside is ' + data.forcast.temp
            console.log(data.forcast);
            
        }
    })
})
    console.log(loc.value);
    

})