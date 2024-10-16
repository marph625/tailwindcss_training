// let a = +prompt('a?', '');
//
// if (a == 0) {
//     alert( 0 );
// }
// if (a == 1) {
//     alert( 1 );
// }
//
// if (a == 2 || a == 3) {
//     alert( '2,3' );
// }


// + converts the prompt into a number so it can be caught by the switch
let b = +prompt('b?', '');

switch (b) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2, 3');
}