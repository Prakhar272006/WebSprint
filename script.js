
function navBarAnimation(){
    gsap.from("#nav", {
        y:-40,
        opacity:0,
        duration:0.5,
    })
}
function homeAnimation(){
    gsap.from('#left h1,#left p',{
        y:50,
        opacity:0,
        stagger:0.2
    })
    gsap.from("#img",{
        y:50,
        opacity:0,
    })
}


navBarAnimation();
homeAnimation();