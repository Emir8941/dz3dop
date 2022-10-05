let array = [1,2,3,4,5,6,7,8,9,10];

function nums (array) {
    if (array.length === 0){
        return 0;
    }
    let summa = 0;

    for (let i = 0; i < array.length; i++) {
        summa += array[i];
    }

    return summa / array.length;
}
console.log(nums(array)); 