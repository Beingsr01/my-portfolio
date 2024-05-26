var x = document.getElementById("im1");
x.addEventListener("mouseover", over);
x.addEventListener("mouseout", out);

function over(){
    var fun1 = document.getElementById("name1");
    var fun2 = document.getElementById("para1");
    fun1.innerHTML="Andrew Hoaking";
    fun1.style.display="block";
    fun1.style.background="black";
    fun1.style.opacity="0.8";
    fun1.style.color="white";
    fun1.style.marginTop="-100px";

    fun2.innerHTML="Co-Founder";
    // fun2.style.background="black";
    // fun2.style.opacity="0.5";
    fun2.style.color="black";
    fun2.style.display="block";
    // fun2.style.marginTop="0px";
}

function out(){
    var outfun1 = document.getElementById("name1");
    var outfun2 = document.getElementById("para1");
    outfun1.style.display="none";
    outfun2.style.display="none";

}


var x = document.getElementById("im2");
x.addEventListener("mouseover", over1);
x.addEventListener("mouseout", out1);

function over1(){
    var fun3 = document.getElementById("name2");
    var fun4 = document.getElementById("para2");
    fun3.innerHTML="Annah Martulen";
    fun3.style.display="block";
    fun3.style.background="black";
    fun3.style.opacity="0.8";
    fun3.style.color="white";
    fun3.style.marginTop="-100px";

    fun4.innerHTML="Co-Founder";
    // fun2.style.background="black";
    // fun2.style.opacity="0.5";
    fun4.style.color="black";
    fun4.style.display="block";
    // fun2.style.marginTop="0px";
}

function out1(){
    var outfun3 = document.getElementById("name2");
    var outfun4 = document.getElementById("para2");
    outfun3.style.display="none";
    outfun4.style.display="none";

}


var x = document.getElementById("im3");
x.addEventListener("mouseover", over2);
x.addEventListener("mouseout", out2);

function over2(){
    var fun5 = document.getElementById("name3");
    var fun6 = document.getElementById("para3");
    fun5.innerHTML="Adam Jhons";
    fun5.style.display="block";
    fun5.style.background="black";
    fun5.style.opacity="0.8";
    fun5.style.color="white";
    fun5.style.marginTop="-100px";

    fun6.innerHTML="General manager";
    // fun2.style.background="black";
    // fun2.style.opacity="0.5";
    fun6.style.color="black";
    fun6.style.display="block";
    // fun2.style.marginTop="0px";
}

function out2(){
    var outfun5 = document.getElementById("name3");
    var outfun6 = document.getElementById("para3");
    outfun5.style.display="none";
    outfun6.style.display="none";

}