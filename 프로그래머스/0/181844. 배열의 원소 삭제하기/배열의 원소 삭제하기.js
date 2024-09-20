function solution(arr, delete_list) {
    var answer = [];
    return arr.filter(x=>!delete_list.includes(x));
}