function displayShop() {
    var qwerty = document.querySelector('.test1');
    var shadow1 = document.querySelector('.no-shadow');
    const azerty = qwerty.getAttribute('class');

    if (azerty == 'test1'){
        qwerty.setAttribute('class', 'test2');
        shadow1.setAttribute('class', 'shadow')
    } 
}
function displayShopReturn() {
    var qwerty = document.querySelector('.test2');
    var shadow1 = document.querySelector('.shadow');
    const azerty = qwerty.getAttribute('class');
    if (azerty == 'test2'){
        qwerty.setAttribute('class', 'test1');
        shadow1.setAttribute('class', 'no-shadow')
    } 
}
