const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

function time(){
 let timeactually = new Date()
 let hr = timeactually.getHours()
 let mnt = timeactually.getMinutes()
 let sgds = timeactually.getSeconds()

 if(hr < 10){'0' + hr}
 if(mnt < 10){'0' + mnt}
 if(sgds < 10){'0' + sgds}

 horas.textContent = hr;
 minutos.textContent = mnt;
 segundos.textContent = sgds;
 
}

const clock = setInterval(time, 1000)
