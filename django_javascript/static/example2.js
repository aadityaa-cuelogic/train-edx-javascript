//reference : http://www.w3schools.com/js/
//url : http://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html
function updateContent(){
    document.getElementById('demo2').innerHTML = "I update you !!!";
}

function turnOnLight(){
    document.getElementById('myImage').src = '/static/images/pic_bulbon.gif';
}

function turnOffLight(){
    document.getElementById('myImage').src = "/static/images/pic_bulboff.gif";
}

function updateMyStyle(){
    document.getElementById('demo3').style.fontSize = "50px";
}

function hideMe(){
    document.getElementById('demo4').style.display = "none"
}
