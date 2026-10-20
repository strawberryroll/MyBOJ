function solution(schedules, timelogs, startday) {
    // timelogs를 처음 요소부터 확인해서 6, 7이면 제외. 1,2,3,4,5만 출근 희망 시각과 비교해서 10분 이내이면 +1. 총 +5이면 상품 받을 인원수에 추가
    let answer = 0;
    for (let i=0; i<schedules.length; i++) {
        let time = schedules[i];
        let min = Math.floor(time / 100) * 60 + (time % 100) + 10;
        let limit = Math.floor(min / 60) * 100 + (min % 60);
        let total = 0;
        
        for (let j=0; j<7; j++) {
            if ((j+startday)%7 === 6 || (j+startday)%7 === 0) {
             continue;
        } else {
            if (timelogs[i][j] <= limit) {
                total++;
            }   
        }
        
    }
        
        if (total == 5) {
            answer++;
        }
     }
    return answer;
        
    }