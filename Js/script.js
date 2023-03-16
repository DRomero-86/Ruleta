let listaNumeros = [];

 for (let i = 1; i < 37; i++) {
  listaNumeros[i] = [i];
  console.log(listaNumeros);  
 }

const numerosTodos = document.getElementById("numerosTodos")

const mostrarNumeros = () => {
  listaNumeros.forEach((el) => {
      const numero = document.createElement("div");
                    numero.classList.add("border");
                    numero.style.display = "flex";
                    numero.innerHTML = `<div id="numero${el}" class="border rounded-circle" style="background-color:hsl(0, 82%, 35%);">${el}</div>`
                  
                    numerosTodos.appendChild(numero);
          })
  }
mostrarNumeros()

  
  
