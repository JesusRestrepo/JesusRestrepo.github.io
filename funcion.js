//codigo efectos
var parrafo = document.querySelector("#titulo");
 
parrafo.addEventListener('mouseover', function(){
    event.target.style.color = 'aqua';
})

parrafo.addEventListener('mouseout', function(){
    event.target.style.color = '';
})


//codigo principal
function imc(){
    var a, b, imc;
    //obtener datos insertados
    a = document.getElementById("estatura").value;
    a = Number(a)
    b = document.getElementById("peso").value;
    b = Number(b)
    //operacion
    imc = b / Math.pow(a, 2);
    t = imc.toFixed(2);
    resultado = "su I.M.C es: " + t
    //poner resultado en html
    document.getElementById("resultado").innerHTML = resultado;

    if (t<18.5){
        var fila1 = document.getElementById('fila1');
        fila1.style.backgroundColor = 'red';
        fila1.style.color = 'white';
        definicion = 'Tu I.M.C es ' + t +'. Estás bajo de peso, te recomendamos que comiences una dieta rica en calorías, llamada dieta hipercalórica,que consiste en consumir más calorías de las que gastas (teniendo en cuenta consumir calorías saludables, para no llegar a un posible sobrepeso), además, puedes incrementar la proteína en tu dieta.';
        document.getElementById("definicion").innerHTML = definicion
    } 
    else if (t>=18.5 && t<=24.9){
        var fila2 = document.getElementById('fila2');
        fila2.style.backgroundColor = 'red'; 
        fila2.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Estás en un buen nivel de masa corporal, procura mantenerte en esta zona, ya que esta es una zona saludable, además, sigue cuidando tu alimentación, para que no llegues a pasar a un sobrepeso, y tampoco te descuides para no llegar a un bajo peso.';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>=25 && t<=26.9){
        var fila3 = document.getElementById('fila3');
        fila3.style.backgroundColor = 'red';
        fila3.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Estas en una zona de advertencia, procura realizar un poco de ejercicio para llegar a la masa corporal ideal, además debes de cuidar tu alimentación, para permitirte lograr tu objetivo y no llegar a una zona de peligro.';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>=27 && t<=29.9){
        var fila4 = document.getElementById('fila4');
        fila4.style.backgroundColor = 'red';
        fila4.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Estas en una zona de advertencia, procura realizar un poco de ejercicio para llegar a la masa corporal ideal, además debes de cuidar tu alimentación, para permitirte lograr tu objetivo y no llegar a una zona de peligro.';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>=30 && t<=34.9){
        var fila5 = document.getElementById('fila5');
        fila5.style.backgroundColor = 'red';
        fila5.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Atención, estas en una zona de riesgo, por tu condición, probablemente estas expuesto a sufrir graves enfermedades que resultan de la obesidad, tal como diabetes, hipertensión, etc, además podrias estar en riesgo de sufrir un accidente cerebrovascular. Te aconsejamos que realizes actividad física, y procures llevar una dieta balanceada';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>=35 && t<=39.9){
        var fila6 = document.getElementById('fila6');
        fila6.style.backgroundColor = 'red';
        fila6.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Atención, estas en una zona de riesgo, por tu condición, probablemente estas expuesto a sufrir graves enfermedades que resultan de la obesidad, tal como diabetes, hipertensión, etc, además podrias estar en riesgo de sufrir un accidente cerebrovascular. Te aconsejamos que realizes actividad física, y procures llevar una dieta balanceada';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>=40 && t<=49.9){
        var fila7 = document.getElementById('fila7');
        fila7.style.backgroundColor = 'red';
        fila7.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Atención, estas en una zona de mucho peligro, por tu condición, probablemente estas expuesto a sufrir graves enfermedades que resultan de la obesidad, tal como diabetes, hipertensión, etc, además podrias estar en riesgo de sufrir un accidente cerebrovascular. Te aconsejamos que realizes actividad física, y procures llevar una dieta balanceada';
        document.getElementById("definicion").innerHTML = definicion;
    }
    else if (t>50){
        var fila8 = document.getElementById('fila8');
        fila8.style.backgroundColor = 'red';
        fila8.style.color = 'white';
        definicion = 'Tu I.M.C es '+t+'. Atención, estas en una zona de mucho peligro, por tu condición, probablemente estas expuesto a sufrir graves enfermedades que resultan de la obesidad, tal como diabetes, hipertensión, etc, además podrias estar en riesgo de sufrir un accidente cerebrovascular. Te aconsejamos que realizes actividad física, y procures llevar una dieta balanceada';
        document.getElementById("definicion").innerHTML = definicion;
    }
}
