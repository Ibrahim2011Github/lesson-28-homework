
document.getElementById("demo").style.width = "80%";

document.getElementById("demo").style.height = "400px" ;

document.getElementById("demo").style.float = "left";

document.getElementById("inputs_and_button").style.float = "left";

function change(){
    let w = document.getElementById("w").value
    let h = document.getElementById("h").value
    let bg = document.getElementById('bg').value
    let br = document.getElementById('br').value
    let float = document.getElementById("float").value  
    let kv = document.getElementById("kv")
    let bgsize = document.getElementById('bgsize').value
    let text = document.getElementById("text").value
    let color = document.getElementById("color").value
    kv.style.width = w
    kv.style.height = h
    kv.style.background = bg
    kv.style.borderRadius = br
    kv.style.float = float
    kv.style.backgroundSize = bgsize
    kv.style.color = color
    document.getElementById("kv").innerHTML = `${text}`
    let bgimg = document.getElementById("bgimg").value 
    let img = "batman"
    let img2 = "mcqueen"
     if(bgimg == img){
        kv.style.backgroundImage = "url(https://i.pinimg.com/736x/8e/2f/12/8e2f1271a9a6750f5492c85c2a7299b5.jpg)"
     }else if(bgimg == img2){
        kv.style.backgroundImage = "url(https://static.wikia.nocookie.net/disney/images/1/10/Profile_-_Lightning_McQueen.png/revision/latest?cb=20221003093816)"
     }else{
        kv.style.background = "white"
     }

}


