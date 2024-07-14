function solution(balls, share) {
    let nmrtr = 1; let dnmntr = 1;
    let count = share;
    while (count > 0) {
        nmrtr *= balls;
        balls--;
        count--;
    }
    for (let i=share; i>0; i--) {
        dnmntr *= i;
    }

    return nmrtr/dnmntr;
}