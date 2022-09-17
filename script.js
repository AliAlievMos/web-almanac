const main = document.getElementById('sym')

let menu = new Map([['cont', 'contacts'], ['a', 'about'], ['thx', 'thanks'], ['m', 'map']])


menu.forEach(MenuElements)
function MenuElements(value, key, map) {
    const key1 = document.getElementById(key);
    const value1 = document.getElementById(value);

    key1.addEventListener('click', function(){
        if(document.getElementById(value).classList.contains('show') === false){
            value1.classList.toggle('show');
            key1.classList.toggle('decorate')
        }
        var menu2 = new Map(menu)
        menu2.delete(key)
        menu2.forEach(HideAnother)


    });

}
function HideAnother(value, key, map){
    const value1 = document.getElementById(value);
    const key1 = document.getElementById(key);
    value1.classList.remove('show')
    key1.classList.remove('decorate')
}

window.onload = function () {
    Particles.init({
        selector: ".background"
    });
};
const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
        {
            breakpoint: 768,
            options: {
                color: ["#faebd7", "#03dac6", "#ff0266"],
                maxParticles: 43,
                connectParticles: false
            }
        }
    ]
});




