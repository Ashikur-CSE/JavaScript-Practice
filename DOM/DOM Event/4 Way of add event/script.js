// way - 02
//Alada kore Function create & call in HTML
function myName(){
    var name = document.getElementById("myName");
    name.innerText="Ashikur Rahman";
    name.style.color="green";
    name.style.fontSize='100px';
    name.style.textAlign='center';
    document.body.style.backgroundColor='yellow';
    alert("Background color will be yellow");
};

// Way - 03
//Id diye dhore property set and Event set kora
function dateTime(){
    var date = document.getElementById("date");
    date.innerText=Date();
    document.body.style.backgroundColor="green";
    }

var dateButton = document.getElementById("date");
// function call but dont use braket..use only function name...
dateButton.onclick= dateTime;


// way -04
//Handle event with anonymous function
var bgPink = document.getElementById("pinlBg");
bgPink.onclick=function (){
    document.body.style.backgroundColor="pink";
}


//way -05
//Handle Event with addEventListener 
var lightBlue = document.getElementById("lightBlue");
lightBlue.addEventListener('click',lightBlueBg);

function lightBlueBg(){
    document.body.style.backgroundColor="lightblue";
}

//way -06
var purpleBg = document.getElementById("purpleBg");
purpleBg.addEventListener('click',function(){
    document.body.style.backgroundColor="purple";
});

/////Direct Shortcut ////  Most Common
document.getElementById('close').addEventListener('click',function(){
    document.body.style.backgroundColor="black";
});