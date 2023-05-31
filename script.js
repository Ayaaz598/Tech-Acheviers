function open(url)
{
    window.location=url;
}

function fun1(){
    let temp=10000;
    document.getElementById("hh").innerHTML=document.getElementById("inp1").value;
    document.getElementById("hh").innerHTML="Total Balance :"+(temp-document.getElementById("inp1").value);
    temp=document.getElementById("hh").innerHTML;
}
function fun2(){
    let temp=10000;
    document.getElementById("hh").innerHTML=document.getElementById("inp2").value;
    document.getElementById("hh").innerHTML="Total Balance :"+(temp-document.getElementById("inp2").value);
    temp=document.getElementById("hh").innerHTML;
}
function fun3(){
    let temp=10000;
    let vari=document.getElementById("inp3").value;
    if(document.getElementById("5d").value!=NaN){
        let total=(500*vari)+temp;
        document.getElementById("hh").innerHTML="Total Balance :"+(total);
    }
    if(document.getElementById("10d").value!=NaN){
        let total=(1000*vari)+temp;
        document.getElementById("hh").innerHTML="Total Balance :"+(total);
    }
}


// var ex = require("express");
// script.use(ex.static("public"));
// var http=require('http');
// var fs=require('fs');
// fs.readFile("./login.html",function(err,html){
//     if(err) throw err;
//     http.createServer(function(req,res){
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(html);
//         res.end();
//     }).listen(4200);
// });
