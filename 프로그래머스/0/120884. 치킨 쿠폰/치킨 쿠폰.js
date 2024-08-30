function solution(chicken) {
    let result = 0;
    let coupons = chicken;
    
    while (coupons >= 10) {
        let newChicken = Math.floor(coupons / 10);
        result += newChicken;
        coupons = Math.floor(coupons / 10) + (coupons % 10); 
    }
    
    return result;
    
    
}