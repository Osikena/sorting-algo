
//Bubble Sort
function bubbleSort(num){
    for(let i = 0; i < num.length; i++){
        for(let j = 0; j < num.length - i - 1; j++){
            if(num[j + 1] < num[j]){
                [num[j + 1],num[j]] = [num[j],num[j + 1]]
            }
        }
    };
    return num;
};

var num = [5,3,8,4,6];

console.log(bubbleSort(num));