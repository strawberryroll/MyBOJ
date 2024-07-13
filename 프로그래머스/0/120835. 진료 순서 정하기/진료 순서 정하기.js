function solution(emergency) {
    let first = [...emergency];
    let answer = [];
    emergency.sort((a,b) => b-a);
    console.log(emergency);
    
    let index = 0;
    for (let i of first){
        for (let j=0; j<emergency.length; j++){
            if (i === emergency[j]) answer.push(j+1);
        }
    }
    return answer;
}