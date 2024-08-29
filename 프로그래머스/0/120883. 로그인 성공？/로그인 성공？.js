function solution(id_pw, db) {
    let [id, pw] = id_pw;
    
    for ([a,b] of db) {
        if (a === id) {
            if (b === pw) return "login";
            else if (b !== pw) return "wrong pw";
        }
    }
    return "fail";
}