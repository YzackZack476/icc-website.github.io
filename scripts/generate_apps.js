let $dashoard = document.getElementById('Slider__Project_layout');

projects = [
    {
        title: "Monkey JS",
        icon:"monkey.svg",
        color:"#F7D060",
        link: "https://github.com/YzackZack476/monkey-js"
    },
    {
        title:"FIlm Hub",
        icon:"filmhub.svg",
        color:"#576CBC",
        link:"https://github.com/YzackZack476/FilmHub"
    },{
        title:"Desings Hub",
        icon:"desinghub.svg",
        color:"#408E91",
        link:"https://github.com/YzackZack476/Templates-CSS"
    }

];

const fragmet = document.createDocumentFragment();
const project_template = `
<div title="__REPLACE_TITLE__" class="project" style="background-color:__REPLACE_COLOR__">
    <a href="__REPLACE_LINK__" target="_blank">
        <img src="./img/icons/__REPLACE_ICON__">
    </a>
</div>`;

projects.forEach(project => {
    console.table(project);

    let current_project = project_template;
    current_project = current_project.replace('__REPLACE_TITLE__', project.title);
    current_project = current_project.replace('__REPLACE_ICON__', project.icon);
    current_project = current_project.replace('__REPLACE_COLOR__', project.color);
    current_project = current_project.replace('__REPLACE_LINK__', project.link);

    const element = document.createElement('div'); // Create div container
    element.innerHTML = current_project;
    fragmet.appendChild(element.lastChild); // To ignores the div container
});

//+ Add to dashboard
$dashoard.appendChild(fragmet);