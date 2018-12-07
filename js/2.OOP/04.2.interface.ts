// parametr ? oznacza ze parametr jest opcjonalny
interface SquareConfig {
    color?: string;
    width?: number;
    // 2. Dowolna ilosc parametrow o dowolnej nazwie z typem ANY
    [propName: string]: any
}

function createSqueare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: 'white', area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

//let newSquare = createSqueare({color: 'black', width: 5});
// 1. Dodajemy nieznany parametr - mam komunikat o bledzie - brak 'opacity'
let newSquare = createSqueare({color: 'black', opacity: 10});

console.log(newSquare);