
let main_grid_DOM = document.getElementById("Main-Grid");
const sleep = ms => new Promise(r => setTimeout(r, ms));

let fragment = new DocumentFragment();
const words = 'Welcome to my web page!';
const word = '__this__';
let template = `
    <div>
    <h1>${word}</h1>
    </div>
`;


words.split(' ').forEach(word=>{
    sleep(10000);
    main_grid_DOM.innerHTML += template.replace('__this__',word);
});
