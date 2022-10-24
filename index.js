function typingTXT(){
   let myEle= document.getElementById("subTxt");
   let myText="d"
    for(let i=0;i<9;i++){
        myText+=myText;
        myEle.textContent=myText;
    }
}