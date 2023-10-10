Array.prototype.bubbleSort = function(){
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for(let i = 0; i < this.length - 1; i++){
            if (this[i] > this[i+1]){
                [this[i],this[i+1]] = [this[i+1], this[i]];
                sorted = false;
            }
        };
    }
    return this;
}

// console.log([2,4,1,3].bubbleSort());

String.prototype.substrings = function() {
    let arr = [];

    for(let i = 0; i < this.length; i++) {
        for(let j = i + 1; j <= this.length; j++) {
            arr.push(this.slice(i,j));
        }
    }
    return arr;
}

console.log("Francis".substrings());