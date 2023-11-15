function addone(id) {
    var elem = document.getElementById(id);
    var presnt = parseInt(elem.value) || 0;
    elem.value = presnt + 1;
}