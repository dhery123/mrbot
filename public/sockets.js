const socket = io();

let fecha = document.getElementById('fecha_cita');
//fecha en el fronted

//todas la horas
export const loadForm = (callback) =>{
    socket.on('server:loadForm', callback);
    
};

export const Fechaa = (F) => {
    socket.emit('date', {
        fecha_cita: fecha_cita.value,     
    }
    
    );
    F = fecha_cita.value
    
    

   
}
export const Fecha = (callback) =>{
    socket.on('server:Query', callback);
    
};


fecha.addEventListener("change", (event) => {
    
    

}


);


