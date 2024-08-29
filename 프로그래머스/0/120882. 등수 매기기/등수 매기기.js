function solution(score) {
    let averages = score.map((element) => (element[0]+element[1])/2 );
    let sorted = [...averages].sort((a,b) => b-a);
    let ranks = averages.map((average) => sorted.indexOf(average) + 1);
    return ranks;
}