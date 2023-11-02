//focus Event
document.getElementById("box").addEventListener('focus',function(){
    document.body.style.backgroundColor = "red";
});

//blur Event
document.getElementById("box").addEventListener('blur',function(){
    document.body.style.backgroundColor = "white";
});

//keydown Event
document.getElementById("box").addEventListener('keydown',function(){
    document.body.style.color = "yellow";
    //alert("Keydown Event");
});

//kepress Event
document.getElementById("box").addEventListener('keypress',function(){
    document.body.style.color = "white";
    //alert("Keydown Event");
});

//key up event
document.getElementById("box").addEventListener('keyup',function(){
    document.body.style.color = "purple";
    //alert("Keydown Event");
});

//change Event
document.getElementById("box").addEventListener('change',function(){
    document.body.style.color = "pink";
    //alert("Keydown Event");
});

//Remove Attribute
const textArea = document.getElementById("box").value;
document.getElementById("box").addEventListener('keyup',function(event){
    if (event.target.value == "delete"){
        document.getElementById("dlt-button").removeAttribute('disabled');
    }
    else{
        document.getElementById("dlt-button").setAttribute('disabled',true);
    }
})

//On Click
document.getElementById("dlt-button").onclick= function() {
    document.getElementById('name').style.display = "none"
}
