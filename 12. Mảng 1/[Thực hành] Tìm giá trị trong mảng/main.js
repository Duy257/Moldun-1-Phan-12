let numbers = [-3, 5, 1, 3, 2, 10];

function timkiem() {
    let search = prompt('tìm kiếm');
    for(let i = 0; i <= numbers.length; i++) {
        if(search == numbers[i]) {
            console.log(i);
        }
        else {
            alert('nhập lại');
            break;
        }
    };
    
}
timkiem()