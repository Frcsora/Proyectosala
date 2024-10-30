const fechaHoy = new Date(Date.now());
function calculoHoras(fechaConcierto){
    
    return Math.ceil((fechaConcierto.getTime() - fechaHoy.getTime())
    /(1000 * 60 * 60));
}
function calculoDias(fechaConcierto){
    const totalHoras = calculoHoras(fechaConcierto);
    const dias = parseInt(totalHoras / 24);
    const horas = totalHoras % 24;
    return [dias, horas];
}
function determinarTemporada(fecha){
    const temporada = ["Invierno", "Primavera", "Verano", "Otoño"];
    const mes = fecha.getMonth();
    let index = parseInt(mes / 3);
    if(fecha.getMonth() % 3 === 2 && fecha.getDate() >= 21){
        index++;
    }
    if(index >= 4){
        index = 0;
    }
    return temporada[index];
}
function programarRecordatorio(fechaConcierto, diasAntes){
    const [dias, horas] = calculoDias(fechaConcierto);
    if(dias < diasAntes){
        alert(dias < 0 ?  "No puedes poner una fecha anterior"
            : "Queda" + (dias === 1  ? " " +  dias + " dia" :
                dias > 1 ? "n " + dias + " días" :
                    dias === 0 && horas > 1 ? "n" : ""))
        
    }
}

/*setInterval(function(){
    fecha = new Date(Date.now())
    fechaFormateada = fecha.toLocaleString()
        [dias, horas] = timestamp(fechaConcierto)
    console.log(dias < 0 ?  "No puedes poner una fecha anterior" : "Queda" + (dias === 1  ? " " +  dias + " dia" :
            dias > 1 ? "n " + dias + " días" :
                dias === 0 && horas > 1 ? "n" : "") +
        (dias > 0 ? " y " : "") +
        ( horas === 1 ? " " + + horas + " hora" :
            horas > 1 ? " " + horas + " horas" : ""))

}, 1000 * 60 * 60 * 24)
*/
/*function timestamp(fecha_concierto){
    const dias = Math.ceil((fecha_concierto.getTime() - fecha.getTime())
        / (1000 * 60 * 60 * 24))
    const horas = Math.abs(fecha_concierto.getHours() - fecha.getHours())
    return [dias, horas];
}*/