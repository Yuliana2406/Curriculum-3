//4 formas de impresion
// alert("HOLA DESDE UN ARCHIVO EXTERNO")
// console.log("HOLA DESDE LA CONSOLA")
// document.write("HOLA DESDE LA INTERFAZ")
// //Swal.fire("HOLA DESDE SWEETALERT");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "error"
//   });

//VARIABLES Y TIPOS DE DATOS
const pi = 3.14; //decimal
const pul = 2.54;
var name = "Yuliana Velasquez"; //string
let edad = 19; //entero
var ver = true; //boolean
let fal = false;//boolean

//OPERADORES BASICOS
var suma = 5+2;
console.log (suma)
var var_uno = 10;
var var_dos = 5;
console.log(var_uno-var_dos);
console.log(var_uno*var_dos);
console.log(var_uno/var_dos);
console.log(var_uno%var_dos);

//OPERADORES DE COMPARACION
= Asignaciòn
== comparaciòn (valor)
=== estrictamente (valor y el tipo de dato)

console.log("Mi edad es: " + edad );

function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton: false,
        timer: 2000
      });
 
}

function send_form(){
    let name       =document.getElementById("name").value;
    let last_name  =document.getElementById("last_name").value;
    if(name.length == 0 last_name == 0){
        Swal.fire({
              title: "cajas de texto vacias",
              text: "alguna de las cajas de texto se encuentra vacia",
             icon: "error"
         });
         if (name.length ==0){
            document.getElementById("name").style.border = "2px solid red"
         }
         else{
            document.getElementById("name").style.border = "2px solid green"
         }
         if (name.length ==0){
            document.getElementById("name").style.border = "2px solid red"
         }
         else{
            document.getElementById("name").style.border = "2px solid green"
         }
    }
    else{
        document.getElementById("print").innerText ="su nombre es: " name+" "+ last_name,
    }
}