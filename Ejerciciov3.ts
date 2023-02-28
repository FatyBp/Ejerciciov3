class Ejerciciov3{
        public Ejercicio1(){
        // Ejercicio 1
        // La asociación de vinicultores tiene como política fijar un precio inicial al kilo de uva, la cual se clasifica en tipos A y B,
        //  y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar 
        // cuánto recibirá un productor por la uva que entrega en un embarque, considerando lo siguiente: si es de tipo A, se le cargan 
        // 20 céntimos al precio inicial cuando es de tamaño 1; y 30 céntimos si es de tamaño 2. Si es de tipo B, se rebajan 30 céntimos
        // cuando es de tamaño 1, y 50 céntimos cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
    
            let precio_a:number = 8.5;
            let precio_b:number = 7.4;
            let tamano_1_a:number = 0.2;
            let tamano_2_a:number = 0.3;
            let tamano_1_b:number = -0.3;
            let tamano_2_b:number = -0.5;
            let inicio:any;
            let final:any;
            const uva =String( prompt('Ingrese el tipo de uva (A o B):'?? ""));
            const tamanoUva = prompt('Ingrese el tama\xF1o de la uva (1 o 2):');
            const kilos = Number(prompt('Ingrese la cantidad de kilos de uva entregados:'));
            if (uva.toUpperCase() === "A") {
                inicio = precio_a;
                if (tamanoUva === "1") {
                final = tamano_1_a;
                } else if (tamanoUva === "2") {
                final = tamano_1_b;
                }else{
                    console.log("Tama\xF1o invalido");
                } 
            } else if (uva.toUpperCase() === "B") {
                inicio = precio_b;
                if (tamanoUva === "1") {
                final = tamano_2_a;
                } else if (tamanoUva === "2") {
                final = tamano_2_b;
                }
            } else {
                console.log("Tipo de uva no valido.");
            }
            const total = inicio + final;
            const ganancia = total * kilos;
            if (kilos === 0 || '') {
                console.log("no es valido los kg intentelo de nuevo")
            }
            console.log("La ganancia obtenida es de: " + ganancia + " euros.");
        }
        public Ejercicio2(){
    //     Ejercicio 2
    //     El director de una escuela está organizando un viaje de estudios, y requiere determinar cuánto debe cobrar a cada alumno y cuánto
    //      debe pagar a la compañía de viajes por el servicio. La forma de cobrar es la siguiente: si son 100 alumnos o más, el costo por 
    //     cada alumno es de 65 euros; de 50 a 99 alumnos, el costo es de 70 euros, de 30 a 49, de 95 euros, y si son menos de 30, el costo 
    //     de la renta del autobús es de 4000 euros, sin importar el número de alumnos. Realice un algoritmo que permita determinar el pago 
    //     a la compañía de autobuses y lo que debe pagar cada alumno por el viaje.
                const alumnos = prompt("Ingrese el número de alumnos que participarán en el viaje:")?? "  ";

                // Convertimos el valor ingresado a un número entero
                const cantidad = parseInt(alumnos);

                // Inicializamos las variables de costo por alumno y costo total del viaje
                let costo: number;
                let costoTotal:number;
                if (cantidad >= 100?Number(costo=65)
                : cantidad>=50?Number(costo=70)
                : cantidad>=30?Number(costo=95)
                :costo=4000) {
                    (costoTotal = cantidad * costo)

                // Calculamos el costo por alumno y lo mostramos en pantalla
                const costoxAlumno = costoTotal / cantidad;
                console.log(`El costo por alumno es de: `+ costoxAlumno +` euros`);

                // Mostramos el costo total del viaje en pantalla
                console.log(`El costo total del viaje es de: `+ costoTotal + ` euros`);
                    
                }
        }
        public Ejercicio3(){
             // Ejercicio 3
        // La política de cobro de una compañía telefónica es: cuando se realiza una llamada, el cobro es por el tiempo que ésta dura, de tal 
        // forma que los primeros cinco minutos cuestan 1 euro, los siguientes tres, 80 céntimos, los siguientes dos minutos, 70 céntimos, y 
        // a partir del décimo minuto, 50 céntimos. Además, se carga un impuesto de 3 % cuando es domingo, y si es otro día, en turno de mañana,
        //  15 %, y en turno de tarde, 10 %. Realice un algoritmo para determinar cuánto debe pagar por cada concepto una persona que realiza 
        // una llamada.
                const tiempoLlamada=Number( prompt('cuanto duro la llamada?\n en minutos')?? "");
                const domingo = true;
                const respuesta = domingo ? "Si" : "No";
                const turno = true;
                const respuesta2 = turno ? "Dia" : "Tarde";

                function costosLlamada(tiempoLlamada: number, domingo: boolean, turno: boolean): number {
                    let costoTotal:number = 0;
                    let costoPorMinuto:number = 1;
                    let minutos_extra:number;

                    if (tiempoLlamada <= 5? Number(costoPorMinuto=5):
                    tiempoLlamada<=6 && tiempoLlamada>=8?Number(costoPorMinuto=.80):
                    tiempoLlamada<=9 && tiempoLlamada>=10? Number(costoPorMinuto=0.70):0.50) {
                        
                    minutos_extra = tiempoLlamada-10;
                    costoTotal = (minutos_extra*.50)+(1+.80+.70);
                    }

                    let impuesto:number = 0;
                    if (domingo?Boolean(impuesto=0.3): turno?Boolean(impuesto=0.15):(impuesto=0.10)) {
                    costoTotal = tiempoLlamada * costoPorMinuto;
                    costoTotal = costoTotal + (costoTotal * impuesto);
                    }   
                    return costoTotal;
                }

                const costoTotal = costosLlamada(tiempoLlamada, domingo, turno);
                console.log('la llamada duro: ' + tiempoLlamada + ` min`+ '\nEs domingo: ' + respuesta + '\nes turno de: ' 
                + respuesta2 + '\nEl costo total de la llamada es de '+costoTotal + ' euros');
            }
        }       

