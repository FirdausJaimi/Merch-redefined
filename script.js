
let anim = gsap.timeline();


anim.from("nav",{
y:-300,
opacity:0,
duration:1
})


anim.from(".left h1",{
    y:100,
    opacity:0,
    duration:0.5
    },'a')

 anim.from(".left p",{
    y:100,
    opacity:0,
    duration:0.5
    })


    anim.from(".left .btn",{
        y:100,
        opacity:0,
        duration:0.5
        })   

    anim.from("video",{
        y:100,
        opacity:0,
        duration:0.5
        },'a')
    