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