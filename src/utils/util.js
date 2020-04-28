export function convertForTyping(s,lang='fr') {
    
    let res = '';

    if (lang === 'fr') {
        for (let i = 0; i < s.length; i++){
            let c = s[i];
            switch (c) {
                case 'à':
                    res += '`a';
                    break;
                case 'è':
                    res += '`e';
                    break;
                case 'ù':
                    res += '`u';
                    break;
                
                case 'â':
                    res += '^a';
                    break;
                case 'ê':
                    res += '^e';
                    break;
                case 'î':
                    res += '^i';
                    break;
                case 'ô':
                    res += '^o';
                    break;
                case 'û':
                    res += '^u';
                    break;
                
                
                case 'é':
                    res += '\'e';
                    break;
                case 'É':
                    res += '\'E';
                    break;

                case 'ë':
                    res += ':e';
                    break;
                case 'ï':
                    res += ':i';
                    break;
            
                
                case 'ç':
                    res += 'cz';
                    break;
                case 'œ':
                    res += 'oe';
                    break;
                
                default:
                    res += c;
                    break;
            }

    
        }
    
    }

    else {
        res = s;
    }




    return res;

}

export function convertForTypingNoSpecial(s,lang='fr') {
    
    let res = '';

    if (lang === 'fr') {
        for (let i = 0; i < s.length; i++){
            let c = s[i];
            switch (c) {
                case 'à':
                    res += 'a';
                    break;
                case 'è':
                    res += 'e';
                    break;
                case 'ù':
                    res += 'u';
                    break;
                
                case 'â':
                    res += 'a';
                    break;
                case 'ê':
                    res += 'e';
                    break;
                case 'î':
                    res += 'i';
                    break;
                case 'ô':
                    res += 'o';
                    break;
                case 'û':
                    res += 'u';
                    break;
                
                
                case 'é':
                    res += 'e';
                    break;
                case 'É':
                    res += 'E';
                    break;

                case 'ë':
                    res += 'e';
                    break;
                case 'ï':
                    res += 'i';
                    break;
            
                
                case 'ç':
                    res += 'c';
                    break;
                case 'œ':
                    res += 'oe';
                    break;
                
                default:
                    res += c;
                    break;
            }

    
        }
    
    }

    else {
        res = s;
    }




    return res;

}

export function getIdByRandom(l,r){

    let x = Math.random();
    let res =  l + (Math.floor(x * (r-l+1))) ;

    return res
}