function appendText(val){
      let resDiv = document.getElementById("res");
     resDiv.innerHTML= resDiv.innerHTML + val;
}

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btnsum = document.getElementById("btnSum");
const btnsub = document.getElementById("btnSub");
const btnmul = document.getElementById("btnMul");
const btndiv = document.getElementById("btnDiv");
const btnclr = document.getElementById("btnClr");
const btneql = document.getElementById("btnEql");

btn0.addEventListener("click" , () => appendText("0"));
btn1.addEventListener("click" , () => appendText("1"));
btnsum.addEventListener("click" , () => appendText("+"));
btnsub.addEventListener("click" , () => appendText("-"));
btnmul.addEventListener("click" , () => appendText("*"));
btndiv.addEventListener("click" , () => appendText("/"));

btnclr.addEventListener("click" , () =>{
    let resDiv = document.getElementById("res");
    resDiv.innerHTML="";
});

btneql.addEventListener("click", () =>{
    const resDiv = document.getElementById("res");
    const entered = resDiv.innerHTML;
    if(entered === ""){
        resDiv.innerHTML=""; 
    }
    else if(entered.includes("*")||entered.includes("/")||entered.includes("-")||entered.includes("+")){
        const lastChar=entered.charAt(entered.length-1);
        if(lastChar ==='*' || lastChar ==='/' || lastChar ==='+' || lastChar ==='-'){
                  resDiv.innerHTML=entered;
        }
        else{
            let expression="";
            let num=0;
            let count =0;
            for(let i=entered.length -1; i>=0; i--){
                    const cchar=entered.charAt(i);
                    if(cchar ==='*' || cchar ==='/' || cchar==='+' || cchar ==='-'){
                            expression= cchar + num + expression;
                            num=0;count =0;
                    }
                    else if(i === 0){
                                num = num + ( cchar * Math.pow(2, count));
                            expression = num + expression;
                    }else{
                            num = num + ( cchar * Math.pow(2, count));
                count++;
                    }
                    }
            num = eval(expression);
                expression="";
            while(true){
                expression = (num %2) + expression;
                num = Math.floor(num/2);
                if(num===0 || num===1){
                break;
                }
            }
            if(num ===0){
                resDiv.innerHTML=expression;
            }else{
                resDiv.innerHTML=num + expression;
            }
        }
    }else{
        resDiv.innerHTML=entered;    
    }

});
