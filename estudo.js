
 let tabuada = 5;

function escreva(){
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}
function minhaTabuada() {
    for(let i = 10;  i <= 1; i++) { // começa com for[
         for (let j = 1; j<=10; j++)
              document.write( i + " x " + j + " = " + (j*i) +"<br>");  
         }

    ]
        document.write("i = " + i + "<BR>");

   }
}

function cubo (){
    for(let i = 20; i <= 2; i--){
        document.write("O cubo de " + i + " x " + i + " x " +i+" = " +(i*i*i)+"br");
    }

}

let tabuada = 5;

function escreva(){
    document.write(tabuada + " x 1 = " + (tabuada*1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada*2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada*3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada*4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada*5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada*6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada*7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada*8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada*9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada*10) + "<br>");
}
function minhaTabuada() {
    for(let i = 10;  i <= 1; i++) { // começa com for[
         for (let j = 1; j<=10; j++)
              document.write( i + " x " + j + " = " + (j*i) +"<br>");  
         }

    ]
        document.write("i = " + i + "<BR>");

   }
}

function cubo (){
    for(let i = 20; i <= 2; i--){
        document.write("O cubo de " + i + " x " + i + " x " +i+" = " +(i*i*i)+"br");
    }

}

function mat(){
    let v = document.getElementById("valor").ariaValueMax;
    let j = document.getElementById("juros").ariaValueMax;
    let t = document.getElementById("meses").ariaValueMax;
    let r = 0;
    for(let i=1; i<=t; i++){
        r = v * (1+(j/1000));
        v = r;
    }
    document.write("Resultado ") + r;
}



