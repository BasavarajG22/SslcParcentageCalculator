let parcentage=null;
document.getElementById("calculate").onclick=function(){
    let kannada=document.getElementById("kannada").value;
    let english=document.getElementById("english").value;
    let hindi=document.getElementById("hindi").value;
    let maths=document.getElementById("maths").value;
    let science=document.getElementById("sceince").value;
    let social=document.getElementById("social").value;

    kannada=Number(kannada);
    english=Number(english);
    hindi=Number(hindi);
    maths=Number(maths);
    science=Number(science);
    social=Number(social);

    let parcentage=((kannada+english+hindi+maths+science+social)/625)*100;
    console.log(parcentage);
    document.getElementById("h2").innerHTML="Parcentage: "+parcentage+" %";
    document.getElementById("h21").innerHTML="Result: "+result(kannada,english,hindi,maths,science,social);
}
function result(k,e,h,m,sc,so){
    if(k<35 || e<35 || h<35 || m<35 || sc<35 || so<35){
        return "Fail";
    }
    else{
        return "Pass";
    }
}
function reset(){
    document.getElementById("kannada").value="";
    document.getElementById("english").value="";
    document.getElementById("hindi").value="";
    document.getElementById("maths").value="";
    document.getElementById("sceince").value="";
    document.getElementById("social").value="";
    document.getElementById("h2").innerHTML="";
    document.getElementById("h21").innerHTML="";
}