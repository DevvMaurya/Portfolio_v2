
let project = document.getElementById('project')

project.addEventListener('animationend',()=>
{
    window.scrollTo(0,1000)
});

let home = document.getElementById('home')
home.addEventListener('animationend',()=>
{
    window.scrollTo(1000,0);
});

let about = document.getElementById('about');
about.addEventListener('animationend',()=>
{
    location.href("https://github.com/DevvMaurya/")
    // window.open("https://github.com/DevvMaurya/")
});

