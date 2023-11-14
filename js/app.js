setInterval(function(){
 let red = Math.floor(Math.random()*255);
 let green = Math.floor(Math.random()*255);
 let blue = Math.floor(Math.random()*255);


    console.log(red,green,blue)

    document.body.style.background=`rgb(${red},${green},${blue})`

},100)