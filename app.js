 const generatebutton=document.getElementById('generatebutton')
 const generatepassword=document.getElementById('generatepassword');

 function gene(){
    let pass="";
    let item="DL:fjkglfgok393943*&%%$^*&_+";

    for(let i=0;i<8;i++){
        pass=pass+item.charAt(Math.floor(Math.random()*item.length));
    }
    generatepassword.value=pass;


 }
 generatebutton.addEventListener('click',gene)

