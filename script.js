mouse=document.getElementById('rect')

window.addEventListener("mousemove",function(details)
{
    let xVal=gsap.utils.mapRange(0,window.innerWidth,100+mouse.getBoundingClientRect().width/2,window.innerWidth-(100+mouse.getBoundingClientRect().width/2),details.clientX)
    
    mouse.style.left=xVal+"px"
    
    
}
)
