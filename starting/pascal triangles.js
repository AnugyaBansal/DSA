let numRows = 5
function generate(numRows) {
    // //Method I
    // let output = [[1]];
    // for (let i = 0; i < numRows - 1; i++) {
    //     let x = output[output.length - 1];
    //     let row = [1];
    //     for (let j = 1; j < x.length; j++) {
    //         row.push(x[j] + x[j - 1])
    //     }
    //     row.push(1);
    //     output.push(row);
    // }
    // return output;

    // //Method II
    let final = [];
    for (let i = 0; i < numRows; i++) {
        final[i] = [];
        final[i][0] = final[i][i] = 1;
        for (let j = 1; j < i; j++) {
            final[i][j] = final[i - 1][j] + final[i - 1][j - 1];
        }
    }
    return final;

    // //Method III
    // let pascalsTriangles = [];
    // if (numRows === 0) {
    //     return pascalsTriangles;
    // }
    // pascalsTriangles.push([1]);
    // let last = [];
    // while (pascalsTriangles.length < numRows) {
    //     let newEntry = [];
    //     newEntry[0] = 1;
    //     for (let i = 0; i < last.length - 1; i++) {
    //         newEntry[i + 1] = last[i] + last[i + 1];
    //     }
    //     newEntry.push(1);
    //     pascalsTriangles.push(newEntry);
    //     last = newEntry;
    // }
    // return pascalsTriangles;

    // // Method IV
    // let res = []
    // let prev = []
    // for (let i = 0; i < numRows; i++) {
    //     let row = []
    //     for (let j = 0; j <= i; j++) {
    //         if (j == 0 || j == i) {
    //             row.push(1)
    //         } else {
    //             row.push(prev[j - 1] + prev[j]);
    //         }
    //     }
    //     prev = row;
    //     res.push(row);
    // }
    // return res
};
console.log(generate(numRows))