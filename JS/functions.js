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
// = Asignaciòn
// == comparaciòn (valor)
// === estrictamente (valor y el tipo de dato)

console.log("Mi edad es: " + edad );

function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton: false,
        timer: 2000
      });
      document.getElementById("text").innerText="el array calcular es:" + array_num;
      document.getElementById("impresion").value = array_num;
 
}

function send_form(){
    let name       =document.getElementById("name").value;
    let last_name  =document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
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
        document.getElementById("print").innerText ="su nombre es: " +name+" "+ last_name;
    }
}

//ARRAYS
var array_semana = ["Lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var array_gral = [1,2,2,5,"abc","soy Yuliana"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi =[
    {name: "yuliana",age: 19, color:"purple"},
    {name: "eilyn",age: 4, color:"green"},
    {name: "wilder",age: 32, color:"yellow"},
    {name: "paula",age: 18, color:"red"},

]

var json_ajn = {
    name: "yuliana",
    last_name: "velasquez",
    phone: "3209428064",
    email:"yyvelasquezg@ufpso.edu.co",
}

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(array_ajn);

function action(){
    //swal.fire(array_num);
    //swal.fire(""+array_num);
    //console.log(array_num);
    //console.log(array_num.length);
    var result =0;
    for(let i=0;i<array_num.length;i++){
        result = result+array_num[i]
    }
    document.getElementById("result").innerHTML = "<strong>EL resultado es:"+result+"</strong"
    document.getElementById("result").style.color = "green";
    
    var total = 0;
    for (var j=0;j<array_multi.length;j++){
        total = array_multi[j].age + total;
    }
    alert(total);
    // CON UN WHILE
    var total_dos = 0;
    var w = 0;
    while(w<array_multi.length){
        total_dos = array_multi[w].age + total_dos
        w++;

    }
    alert(total_dos);

}
var array_numerico =[1,2,3,4,5,6,7,8,9];

function eliminar(){
    let array_delete = array_numerico.pop();
    console.log(array_delete);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;
                                                                             
}

function añadir(){
    let num= document.getElementById("num").value;
    let array_add = array_numerico.push(num);
    console.log(array_add);
    console.log(array_numerico);
    document.getElementById("impresion").value = array_numerico;
}

function reves(){
    document.getElementById("impresion").value = array_numerico.reverse();

}

function limpiar(){
    document.getElementById("num").value = "";
    document.getElementById("name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("print").innerText = "";


}



