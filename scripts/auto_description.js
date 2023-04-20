//*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ [FUNCIONES SOPORTE] ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
function sleep(delay) {
    return new Promise(resolve=>setTimeout(resolve,delay));
}

const base_template = `<h1  class="body__title"
                            data-aos="fade"
                            data-aos-delay="400"
                            data-aos-once="false">
                            MESSAGE
                        </h1>`;

const $c1_body_title = document.getElementById('chapter1').querySelectorAll('div')[1];
async function setMessages(messages_array){
    let message, time;
    for(let i=0; i<messages_array.length; i++){
        [message, time]=messages_array[i];
        $c1_body_title.innerHTML = base_template.replace('MESSAGE', message);
        await sleep(time);
    }
    return new Promise(resolve=>resolve())
}

function volume_down(){
    const $player = document.getElementById('player');
    const set_volume = setInterval(()=>{
        if($player.volume<=0){
            $player.pause();
            clearInterval(set_volume);
        }
        $player.volume = Math.max(0, ($player.volume - 0.1));
    },1000);
}

//@▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ [INICIO] ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

//+ Mensajes para el capitulo 1
const mensajes = [
    ["Hey!", 2000],
    ["Welcome to my website", 3000],
    ["My name is Issac, Robotic Engineer", 3200],
    ["& programmer teachnician", 2700],
    ["I'll show you some of my work",2000],
    ["Are you ready?",3000],
    ["Let's start",2000]
];

setMessages(mensajes).then(
    () => {
        const $first_btn = document.querySelectorAll('.body__button')[0];
        $first_btn.classList.add('blinding');
        volume_down();
    });


