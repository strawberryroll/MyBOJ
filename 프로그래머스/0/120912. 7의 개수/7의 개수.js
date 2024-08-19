function solution(array) {
    let count = 0;
    let arr = array.map((e) => e.toString());
    arr.map((e) => {
        for (i of e) {
            if (i === "7") count++;
        }
    });
    return count;
    
}