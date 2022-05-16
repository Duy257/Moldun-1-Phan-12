let Arr = [];
let pushArr = () => {
    let element = document.getElementById('element').value;
    Arr.push(element);
    document.getElementById('element').value = "";
    
    
    
}
let display = () => {
    let dis = document.getElementById('dis').innerHTML = 'Element :' + Arr;

}



