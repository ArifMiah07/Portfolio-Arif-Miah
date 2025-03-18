{
    
    // Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]



function ninton(size){
    const arrContainer = []
    for(let i = 1; i <= size; i++){
        // const a = ;

        let b = i;
        let c = b + i;
        const arr2 = Array(size).fill( i);
        // console.log(arr2)
        arrContainer.push([i,b + i, c + b])
        // console.log(arrContainer)
    }
    console.log(arrContainer)
    const arr = [];
    arr.push([1,2,3])
    arr.push([4,5,6])
    arr.push([7,8,9])
    // console.log(arr);
    return size * size;
}

console.log(ninton(5));




    // 



}