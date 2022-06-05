
let display="";
let tempnum=""; 
let first_num="";
let operation="";
let result=0;

function btn1(){
    display=display+1                                   //update display value
    document.getElementById('display').value=display;   //for value displayed
    tempnum=tempnum+1                         //store first num
    
    
      
}
function btn2(){
    display=display+2
    document.getElementById('display').value=display;
    tempnum=tempnum+2
    
    
}
function btn3(){
    display=display+3
    document.getElementById('display').value=display;
    tempnum=tempnum+3
    
    
}
function btn4(){
    display=display+4
    document.getElementById('display').value=display;
    tempnum=tempnum+4
    
    
}
function btn5(){
    display=display+5
    document.getElementById('display').value=display;
    tempnum=tempnum+5
    
    
}
function btn6(){
    display=display+6
    document.getElementById('display').value=display;
    tempnum=tempnum+6
    
    
}
function btn7(){
    display=display+7
    document.getElementById('display').value=display;
    tempnum=tempnum+7
    
    
}
function btn8(){
    display=display+8
    document.getElementById('display').value=display;
    tempnum=tempnum+8
    
    
}
function btn9(){
    display=display+9
    document.getElementById('display').value=display;
    tempnum=tempnum+9
    
    
}
function btn0(){
    display=display+0
    document.getElementById('display').value=display;
    tempnum=tempnum+0
    
    
}

function btndot(){
    display=display+"."
    document.getElementById('display').value=display;
    tempnum=tempnum+"."
    
}

function btnp(){
    

    display=display+"+"
    document.getElementById('display').value=display
    first_num=tempnum;
    operation="Plus";
    tempnum="";  

}
function btns(){
    display=display+"-"
    document.getElementById('display').value=display
    first_num=tempnum;
    operation="Sub";
    tempnum="";  

}
function btnm(){
    display=display+"x"
    document.getElementById('display').value=display
    first_num=tempnum;
    operation="Mul";
    tempnum="";  

}
function btnd(){
    display=display+"/"
    document.getElementById('display').value=display
    first_num=tempnum;
    operation="Div";
    tempnum="";  

}

function btneq(){
    
    switch(operation){
        case "Plus":    
            result=(parseFloat(first_num)+parseFloat(tempnum))
            break

        case "Sub":
            result=(parseFloat(first_num)-parseFloat(tempnum))
            break
        case "Mul":
            result=(parseFloat(first_num)*parseFloat(tempnum))
            break
        case "Div":
            result=(parseFloat(first_num)/parseFloat(tempnum))
            break
    }

    document.getElementById('display').value=result;
    display=result
    tempnum=result;
}

function btnclr(){
    display="";
    tempnum=""; 
    first_num=0;
    operation="";
    result=0;
    document.getElementById('display').value=display;
    

}


