function changeIcon() {
    var icon = document.querySelector('.icon');
    const iconType = icon.getAttribute('type');
    if (iconType == ''){
        icon.setAttribute('type', 'solid');
    } else {
        icon.setAttribute('type', '');
    }
   
}
