let listaPrimeraFila = [3,6,9,12,15,18,21,24,27,30,33,36];
let listaSegundaFila = [2,5,8,11,14,17,20,23,26,29,32,35];
let listaTerceraFila = [1,4,7,10,13,16,19,22,25,28,31,34];

const losNumerosPrimeraFila = document.getElementById("losNumerosPrimera12");
const losNumerosSegundaFila = document.getElementById("losNumerosSegunda12");
const losNumerosTerceraFila = document.getElementById("losNumerosTercera12");

const mostrarNumeros = () => {

    listaPrimeraFila.forEach(el => {
      
      const numero = document.createElement("div");
              numero.classList.add(
              "border"                                          
              );
              numero.style.width = "100%";
              numero.style.height = "100%";
              numero.role="button";
                        
              numero.innerHTML = `<div id="numero${el}" class="border rounded-circle" style="background-color:hsl(0, 82%, 35%);">${el}</div>`
            
              losNumerosPrimeraFila.appendChild(numero)
    })

    listaSegundaFila.forEach(el => {

      const numero = document.createElement("div");
              numero.classList.add( 
                "border",
                "cursor-pointer"                                          
              );
              numero.style.width = "100%";
              numero.style.height = "100%";
              numero.role="button";
                          
              numero.innerHTML = `<div id="numero${el}" class="border rounded-circle" style="background-color:hsl(0, 82%, 35%);">${el}</div>`
              
              losNumerosSegundaFila.appendChild(numero)
    })

    listaTerceraFila.forEach(el => {

      const numero = document.createElement("div");
              numero.classList.add(
                "border"                                    
              );
              numero.style.width = "100%";
              numero.style.height = "100%";
              numero.role="button";
                          
              numero.innerHTML = `<div id="numero${el}" class="border rounded-circle" style="background-color:hsl(0, 82%, 35%);">${el}</div>`
              
              losNumerosTerceraFila.appendChild(numero)
    })

  };
      
      
      // if ((i = 3) || ( i = 6)) {
          
          // i++

      // }
      //  if(i = 2){
      //     // losNumerosSegunda12.appendChild(div)
      // }
      // if(i = 3){
      //     // losNumerosTercera12.appendChild(div)
      // }
       
       
        
  // }  

mostrarNumeros()

  
  
