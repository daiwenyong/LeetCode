function quickSort(arr){
    if(arr.length===1)return arr
    const n = arr[0]
    const left = []
    const right = []
    arr.slice(1).forEach(item => {
        if(item>=n) right.push(item)
        else left.push(item)
    });
    return [...quickSort(left),n,...quickSort(right)]
}

const arr = [2,4,9,1,3]
const r = quickSort(arr)
console.log(r)