document.getElementsByTagName("h1")[0].style.fontSize = "50px";

const btn= document.getElementById('btn-siguiente');
const btn1=document.getElementById('btn-tema1');
const btn2=document.getElementById('btn-tema2');

let inicio = document.getElementById('inicio')
let historiap = document.getElementById('historiap')
let historiau = document.getElementById('historiau')
let temas=document.getElementById('temas')

//el visual ya lo lee en cambio si fuera otra plataforma no por eso se coloca

btn.addEventListener('click', function(){
  const nameUser = document.getElementById('name').value;
  alert("Bienvenido " +  nameUser );
  inicio.style.display = 'none';
  temas.style.display = 'block';
})

 btn1.addEventListener('click', function(){
   temas.style.display = 'none';
   historiap.style.display = 'block';
 })

btn2.addEventListener('click',function(){
  temas.style.display = 'none';
  historiau.style.display = 'block';
})

function fQuestion1(){
  var sCorrectAnswer = document.getElementById("ans2");
var sCorrectAnswer1  = document.getElementById("ans1.1");
var sCorrectAnswer2 = document.getElementById("ans3.2");

  if(sCorrectAnswer.checked === true && sCorrectAnswer1.checked === true && sCorrectAnswer2.checked === true){
  alert("Ganaste");
  historiap.style.display='none';
  temas.style.display = 'block';
  }
else{
  alert("Sigue intentando");
  historiap.style.display='none';
  temas.style.display = 'block';
}
}

function fQuestion2(){
var sCorrectAnswer = document.getElementById("ans3q1");
var sCorrectAnswer1  = document.getElementById("ans2.3q2");
var sCorrectAnswer2 = document.getElementById("ans3.1q3");

  if(sCorrectAnswer.checked === true && sCorrectAnswer1.checked === true && sCorrectAnswer2.checked === true){
  alert("Ganaste");
  historiau.style.display='none';
  temas.style.display = 'block';
  }
else{
  alert("Sigue intentando");
  historiau.style.display='none';
  temas.style.display = 'block';
}
}
