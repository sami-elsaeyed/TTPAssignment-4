document.getElementsByTagName("button")[0].addEventListener("click",function(event){document.getElementById("one").innerHTML= "I am right";document.getElementById("two").innerHTML= ""});
document.getElementsByTagName("button")[1].addEventListener("click",function(event){document.getElementById("two").innerHTML= "No I am right";document.getElementById("one").innerHTML= ""});
document.getElementById("hover").addEventListener("mouseover",function func(event){alert("Hey! I told You no tto Hover Over Me!")});
if (document.getElementById("password").value===12345678) { 
    document.getElementById("correct").innerHTML= "Dont worry its valid"; 
    alert("Password not Valid");
}




