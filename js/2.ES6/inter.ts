//Interfejs to wymaganie stawiane obiektom
//Interfejs to "kształt" obiektu
//
interface Message {
  text: string;
  sender: string;
  receiver: string;
}
const message: Message = {
  text: 'Hello',
  sender: 'Michal',
  receiver: 'Anna'
};

//Interfejs wymusza implementacje metod, aby klasa spełniała interfejs
interface Serializable {  
  toJSON():string;
}

function naszaFunkcja(obiekt:Serializable) {  
  obiekt.toJSON(); // ta funkcja tutaj na pewno jest!
}

class User implements Serializable {  
  toJSON() {
      return '{}';
  }
}

const user = new User();  
naszaFunkcja(user); 

//Implemetacje wielu interfejsów

//Opcjonalne wlasciwosci oznaczone sa znakiem "?"
interface Serializable {
    option?: string;
    toJSON(): string;
}

interface Drawable {
    draw(ctx: CanvasRenderingContext2D): void;
}



class User implements Serializable, Drawable {
    toJSON() {
        return '{}';
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(…);
    }
}