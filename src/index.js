// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    const towel = [];
    for (let i = 0; i < matrix.length; i++) {
        ((i + 1) % 2 === 0) ? towel.push(matrix[i].reverse()) : towel.push(matrix[i])
    }
    return towel.flat()
}
