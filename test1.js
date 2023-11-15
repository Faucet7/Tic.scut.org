function addone(id) {
    var elem = document.getElementById(id);
    var presnt = parseInt(elem.value) || 0;
    elem.value = presnt + 1;
}
function changecolor() {
    let button = document.getElementById("num2"); // access the button by id
    let color = button.style.color;
    if (color == "red") { // if button color is red change it green otherwise change it to red.
       button.style.color = 'green';
    } else {
       button.style.color = 'red';
    }
 }