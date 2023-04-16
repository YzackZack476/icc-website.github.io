function sleep(delay) {
    return new Promise(resolve=>setTimeout(resolve,delay));
}

async function setMessages(messages_array){
    let message, time;
    for(let i=0; i<messages_array.length; i++){
        [message, time]=messages_array[i];
        $c1_body_title.innerHTML = base_template.replace('MESSAGE', message);
        await sleep(time);
    }
}

const $c1_body_title = document.getElementById('chapter1').querySelectorAll('div')[1];
const base_template = `<h1  class="body__title"
                            data-aos="fade"
                            data-aos-delay="400"
                            data-aos-once="false">
                            MESSAGE
                        </h1>`;


//+ Mensajes para el capitulo 1
const mensajes = [
    ['Hey!', 2000],
    ['Welcome to my page', 3000],
    ['My name is Issac, Robotic Engineer', 4500]
];

setMessages(mensajes);


