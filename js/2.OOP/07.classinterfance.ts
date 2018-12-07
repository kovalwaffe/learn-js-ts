interface Serializable {
  toJSON(): string;
}

interface Drawable {
  draw(ctx: CanvasRenderingContext2D): void;
}

function naszaFunkcja(obiekt: Serializable) {
  obiekt.toJSON(); // ta funkcja tutaj na pewno jest!
}

// klasa User musi zaimplementować metodę z interfejsu
class User implements Serializable, Drawable {
  toJSON() {
    return '{}';
  }

  draw(ctx: CanvasRenderingContext2D) {
    //ctx.drawImage(...);
  }
}

const user = new User();
naszaFunkcja(user);
