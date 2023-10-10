Array.prototype.uniq = function() {
    let uniq = [];

    for (let i = 0; i < this.length; i++) {
        if(!uniq.includes(this[i])){
            uniq.push(this[i]);
        }
    }

    return uniq;
}

// console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let twosum = [];

    let i = 0;
    while (i < this.length) {
        let j = 0;
        // debugger
        while(j < this.length){
            if ((this[i] + this[j] === 0 ) && (i < j)) {
                twosum.push([i, j]);
            }
            j++;
        }
        i++;
    }

    return twosum;
}

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.transpose = function() {
    let transpose = [];

    let i = 0;
    while(i < this.length) {
        transpose.push([]);
        i++;
    }

    let x = 0;
    while(x < this.length){
        let y = 0;
        while(y < this[0].length) {
            transpose[x].push(this[y][x]);
            y++;
        }
        x++;
    }
    return transpose;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())