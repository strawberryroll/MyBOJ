function solution(spell, dic) {
    let str = spell.sort().join("");
    
    dic = dic.map((e) => {
        return e.split("").sort().join("")
    })
    
    for (let s of dic) {
        if (s.includes(str)) return 1;
    }
    return 2;
}