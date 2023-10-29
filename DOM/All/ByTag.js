var h3tag = document.getElementsByTagName("h3")
for (const h3 of h3tag){
    document.write(h3.innerText)
    
}

var tag2 = document.getElementsByTagName("h3")[1];
tag2.innerHTML = "This blog is edited by JS";

