const loader = document.querySelector('.loader');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blur, 30);

function blur() {
    load++;

    if(load > 99) {
        clearInterval(int);
        loader.style.display = 'none';
    }
    console.log(load);

    loader.innerText = `${load}%`;
    loader.style.opacity = 1-load/100;
    bg.style.filter = `blur(${50-load/100*50}px)`;
}