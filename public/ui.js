import {Fechaa} from "./sockets.js";
const notesList2 = document.querySelector('#uno')
const notesList3 = document.querySelector('#dos')
const notesList4 = document.querySelector('#tres')
const notesList5 = document.querySelector('#cuatro')
const notesList6 = document.querySelector('#cinco')
let fecha = document.getElementById('fecha_cita');

fecha.addEventListener("change", () => Fechaa());
export const renderForms = notes => { 
  notesList2.innerHTML = ""
  notesList2.innerHTML = 
      ` 
        <option value="2:00pm">2:00pm</option>
        `;
    notesList3.innerHTML = 
      ` 
        <option value="3:00pm">3:00pm</option>
        
        `;
    notesList4.innerHTML = 
      ` 
        <option value="4:00pm">4:00pm</option>
        
        `;
    notesList5.innerHTML = 
        ` 
          <option value="5:00pm">5:00pm</option>
          
          `;
    notesList6.innerHTML = 
          ` 
            <option value="6:00pm">6:00pm</option>
            
            `;
  
  
  notes.forEach(note => {
    console.log(note)
    if (note.hora == "2:00pm"){
      notesList2.innerHTML =``;}
    if (note.hora == "3:00pm"){
        notesList3.innerHTML =``;}
    if (note.hora == "4:00pm"){
        notesList4.innerHTML =``;}
    if (note.hora == "5:00pm"){
       notesList5.innerHTML =``;}
    if (note.hora == "6:00pm"){
        notesList5.innerHTML =``;}

  }
    );
    
}
 
















