let myId = document.getElementById('string');
let myButton = document.getElementById('cbut');
let mySpan = document.getElementById('dom_result')


myButton.addEventListener('click', () => {

    let id_ = myId.value

    let id_odd = (Number(id_[0]) + Number(id_[2]) + Number(id_[4]) + Number(id_[6]) + Number(id_[8]));
    let id_even = (Number(id_[1]) + Number(id_[3]) + Number(id_[5]) + Number(id_[7]));

    let id_ten = (id_odd * 7 - id_even) % 10;

    let id_eleven = (id_odd + id_even + id_ten) % 10;

    if (id_.length == 11 && id_[0] != "0" && id_ten == id_[9] && id_eleven == id_[10]) {
        mySpan.innerHTML = 'valid Id number'
    } else {
        mySpan.innerHTML = 'invalid Id number'
    };

});