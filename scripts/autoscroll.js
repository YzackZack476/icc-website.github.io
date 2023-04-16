const LAYOUTS = ["chapter1","chapter2","chapter3"];

// for(let i = 0; i < LAYOUTS.length; i++) {
//   setTimeout(()=>{
//     let destino = document.getElementById(LAYOUTS[i]);
//     destino.scrollIntoView({behavior: 'smooth', block: 'start'});
//   },2500*i);
// }

// Evitar scroll al usuario
window.addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });