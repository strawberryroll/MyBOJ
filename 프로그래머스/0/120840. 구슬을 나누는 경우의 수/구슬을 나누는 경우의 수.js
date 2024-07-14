function solution(balls, share) {
    let nmrtr = 1; let dnmntr = 1;
 
    for (let i=balls; i>balls-share; i--) {
        nmrtr *= i;
    }
    for (let i=share; i>0; i--) {
        dnmntr *= i;
    }

    return nmrtr/dnmntr;
}