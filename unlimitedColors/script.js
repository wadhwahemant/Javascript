// to generate random color
const randomColorgenerator = function(){
    const hexRange = '0123456789ABCDEF'
    let color = '#'
    for (let index = 0; index < 6; index++) {
        color += hexRange[Math.floor(Math.random()*16)];
    }
    return color
}
let colorChanger;
console.log(randomColorgenerator());
document.querySelector('#start').addEventListener('click',function(){
    colorChanger = setInterval(function(){
        document.querySelector('body').style.backgroundColor = randomColorgenerator()
    },2000)
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(colorChanger)
})  