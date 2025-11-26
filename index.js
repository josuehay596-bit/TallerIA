//suma dos numeros a + b
function suma(a,b) {
    return a + b;
}


function sumaEnteros(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error('ambos parametrosdeben ser numero enteros');
    }
}
    