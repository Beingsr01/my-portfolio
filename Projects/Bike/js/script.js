var x = document.getElementById("t1");
x.addEventListener("mouseover", overFun);
x.addEventListener("mouseout", outFun);

function overFun(){
    var fun = document.getElementById("para1");
    fun.innerHTML="With Exclusive Offers!!<br>";
    fun.style.display="block";
    fun.style.background="grey";
    fun.style.color="white";
    fun.style.width="25%";
    fun.style.marginTop="25px";
    fun.style.textAlign="center";
}

function outFun(){
    var fun1 = document.getElementById("para1");
    fun1.style.display="none";

}