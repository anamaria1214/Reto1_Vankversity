alert("Bienvenido a EcoTracker: Aprende sobre el cambio climático y cómo reducir tu impacto en el medio ambiente.");

let opcion;

mostrarMenu();

function mostrarMenu(){
    opcion=parseInt(prompt("Ingrese una opción: \n 1. Introducción al Cambio Climático. \n 2. Huella de Carbono Personal. \n 3. Consejos Prácticos para Reducir tu Impacto. \n 4. Salir"));
}

let respuestas = {};
let huella1=0;

function calcularTransporte(opcion){
    if(opcion==1){
        return 0.5;
    }else if(opcion==2){
        return 0.2;
    }else if(opcion==3){
        return 2;
    }else{
        alert("Opción no valida");
    }
}

function calcularAlimentacion(opcion){
    if(opcion==1){
        return 1.5;
    }else if(opcion==2){
        return 0.5;
    }else{
        alert("Opción no valida");
    }
}
function calcularBasura(opcion){
    if(opcion==1){
        return 0.8;
    }else if(opcion==2){
        return 0.3;
    }else{
        alert("Opción no valida");
    }
}


flag=true;

while(flag){
    switch(opcion){
        case 1:
        alert("Introducción al Cambio Climático \n El cambio climático es un cambio a largo plazo de las temperaturas y patrones climáticos de la Tierra. Las actividades humanas, como la quema de combustibles fósiles, son las principales causas. \n  Causas: \nEmisiones de gases de efecto invernadero (CO₂, metano, etc.), deforestación, agricultura intensiva \n Consecuencias: \nCalentamiento global, aumento del nivel del mar, eventos climáticos extremos (sequías, inundaciones) y pérdida de biodiversidad ");
            mostrarMenu();
            break;
        case 2:
            let huella= 0;
            let transporte= parseInt(prompt("¿Usas transporte público? \n 1. Diario \n 2. Semanal \n 3. Nunca"));
            respuestas.transporte = transporte;
            let alimentacion= parseInt(prompt("¿Consumes carne roja más de 3 veces por semana? \n 1. Si \n 2. No"));
            respuestas.alimentacion= alimentacion;
            let avion= parseInt(prompt("¿Viajas en avión más de 2 veces al año? \n 1. Si \n 2. No "));
            respuestas.avion= avion;
            let solar= parseInt(prompt("¿Tu hogar usa energía solar? \n 1. Si \n 2. No"));
            respuestas.solar= solar;
            let basura= parseInt(prompt("¿Generas más de 3 bolsas de basura a la semana? \n 1. Si \n 2. No"));
            respuestas.basura= basura;
            huella+=calcularTransporte(transporte);
            huella+=calcularAlimentacion(alimentacion);
            huella+=calcularBasura(basura);
            if(avion==1){
                huella+=1;
            }
            if(solar==1){
                huella-=0.5;
            }
            huella1= huella;
            alert("Tu huella de carbono estimada es de "+huella+" toneladas de CO₂ al año. La media global es de 4 toneladas");
            mostrarMenu();
            break;
    
        case 3:
            if(respuestas.alimentacion==1){
                alert("Reducir el consumo de carne roja a una vez por semana puede disminuir tu huella de carbono en 0.8 toneladas al año.");
            }
            if(respuestas.transporte==2 || respuestas.transporte==3){
                alert("Optar por transporte público, bicicleta o caminar puede reducir tu huella de carbono en hasta 2 toneladas al año.");
            }
            if(respuestas.avion==1){
                alert("Evita los vuelos cortos y opta por alternativas como el tren o bus cuando sea posible.");
            }
            if(respuestas.solar==2){
                alert("Deberías considerar el uso de paneles solares");
            }
            if(respuestas.basura==1){
                alert("Compra productos con poco o ningún empaque. Evita los productos de un solo uso, como plásticos desechables.");
            }
            mostrarMenu();
            break;
        case 4:
            flag=false;
            alert("Se cierra la aplicación");
            break;
        default:
            alert("Opción no válida");
            mostrarMenu();
            break;
    }
}


