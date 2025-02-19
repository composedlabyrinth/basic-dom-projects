function RandomColorGenerator(){
    let hex = '0123456789ABCDEF'
    color = '#'
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

function attachBgColor(){
    document.body.style.backgroundColor = RandomColorGenerator()
}

let intervalId;

document.getElementById('start').addEventListener('click',(e)=>{
    if(!intervalId){
        intervalId = setInterval(attachBgColor,1000);
    }
})

document.getElementById('stop').addEventListener('click',(e)=>{
    clearInterval(intervalId)
    intervalId=null;
})