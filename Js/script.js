let listaNumeros = [];
let fila = ""

const numerosTodos = document.getElementById("numerosTodos")



 for (let i = 3; i < 37;) {
  listaNumeros[i] = [i];
  i = i + 3
 }
 for (let i = 2; i < 37;) {
  listaNumeros[i+36] = [i];
  i = i + 3
 }
 for (let i = 1; i < 37;) {
  listaNumeros[i+72] = [i];
  i = i + 3
}


const mostrarNumeros = () => {
  listaNumeros.forEach((el) => {
      const numero = document.createElement("div");
                    numero.classList.add("border");
                    numero.style.display = "flex";
                    numero.innerHTML = `<div id="numero${el}" class="border rounded-circle" style="background-color:hsl(0, 82%, 35%);">${el}</div>`
                  
                    numerosTodos.appendChild(numero);
                    
                    const numeroElegido = document.getElementById(`numero${el}`);
                    numeroElegido.addEventListener("click", () => {      
                    // agregarNumero(el);      
                    console.log(numeroElegido.innerText);
                  });
          })
  
  }

mostrarNumeros()

const numeroCero = document.getElementById("numeroCero")  
numeroCero.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(numeroCero.innerText);
});

const primeraFila = document.getElementById("primeraFila")  
const segundaFila = document.getElementById("segundaFila")  
const terceraFila = document.getElementById("terceraFila")

primeraFila.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(primeraFila.innerText);
});
segundaFila.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(segundaFila.innerText);
});
terceraFila.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(terceraFila.innerText);
});

const primeraDocena = document.getElementById("primeraDocena")  
const segundaDocena = document.getElementById("segundaDocena")  
const terceraDocena = document.getElementById("terceraDocena")

primeraDocena.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(primeraDocena.innerText);
});
segundaDocena.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(segundaDocena.innerText);
});
terceraDocena.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(terceraDocena.innerText);
});

const primera18 = document.getElementById("primera18")  
const segunda18 = document.getElementById("segunda18")  


primera18.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(primera18.innerText);
});
segunda18.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(segunda18.innerText);
});

const rojo = document.getElementById("rojo")
const negro = document.getElementById("negro")


rojo.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(rojo.innerText);
});
negro.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(negro.innerText);
});

const par = document.getElementById("par")
const impar = document.getElementById("impar")

par.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(par.innerText);
});
impar.addEventListener("click", () => {      
  // agregarNumero(el);      
  console.log(impar.innerText);
});