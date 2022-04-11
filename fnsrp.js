// 
// alert("hello");
function submit(){
    alert("login success");
    var uname = document.getElementById("uname").value;
    var psw = document.getElementById("psw").value;

    localStorage.setItem("uname",uname);
    localStorage.setItem("pass",psw);
}

function storedata(){

    alert("username is "+localStorage.getItem("uname")+". Password is "+localStorage.getItem("pass")+".");

    document.getElementById("p1").innerHTML = localStorage.getItem("uname")
    document.getElementById("p2").innerHTML = localStorage.getItem("pass")
}