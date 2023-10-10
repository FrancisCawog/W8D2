Array.prototype.myEach = function(callback) {
    
    for (let i =0; i < this.length; i++) {
        callback(this[i]);
    }
}

// function square(num) {
//     return num * num;
// }

// function cube(num) {
//     return num * num * num;
// }

// let arr = [1,2,3]
// arr.myEach(square);
// console.log(arr);
// console.log(arr.myEach(cube));

Array.prototype.myMap = function(callback) {
    let arr = [];
    this.myEach(function(el) {
        x = callback(el);
        arr.push(x);
    });
    return arr;
}

// let arr = [1,2,3];
// console.log(arr.myMap(cube));

// function addone(num) {
//     return num +1;
// }

// console.log([1,2,3].myMap(addone));

Array.prototype.myReduce = function(callback, initialValue) {
    if (initialValue === null){
        initialValue = 0
    }

    let accumulator = initialValue;

    this.myEach(function(ele){
        accumulator = callback(accumulator, ele);
    });
    return accumulator;
};

    function adder(accumulator, num) {
        return accumulator + num;
    }

// console.log([1,2,3].myReduce(adder, 10));