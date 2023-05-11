/*Problema 1 */
const suma = () => {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    let suma= parseFloat(num1) + parseFloat(num2);
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(suma));
}

const resta = () => {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    let resta= (num1-num2);
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(resta));
}

const multi = () => {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    let multi= num1*num2;
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(multi));
}

const div = () => {
    let num1=document.getElementById('num1').value;
    let num2=document.getElementById('num2').value;

    let div= num1/num2;
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(div));
}

/*Problema 2 */
const mitad = () => {
    let num1=document.getElementById('num1').value;

    let div= num1/(2);
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(div));
}

const doblar = () => {
    let num1=document.getElementById('num1').value;

    let multi= num1*(2);
    document.getElementById('resultado').textContent = 'R= ' + (parseFloat(multi));
}

/*Problema 3 */
const per = () =>{
    const persona = {
    nombre: "Dafne Pineda",
    edad: 17,
    direccion: {
        calle: "Av. Independencia",
        numero: 1234,
        ciudad: "Buenos Aires"
        }
    }
    document.getElementById('per').textContent = 'Mi nombre es '+ persona.nombre + ', tengo '+ persona.edad+
        ' años y vivo en '+persona.direccion.calle + ' ' + persona.direccion.numero + ', ' 
        + persona.direccion.ciudad;
}

/*Problema 4*/
const cambiarTexto = () =>{
    let parrafo=document.getElementById('parrafo1');
    parrafo.innerHTML = "Nuevo parrafo aquí";
}
