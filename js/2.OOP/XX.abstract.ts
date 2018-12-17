// Klasy abstrakcyjne nie tylko zawierają deklaracje pól i metod,
// ale mogą też zawierać ich implementacje
// Klasę abstrakcyjną nie można instancjonować
abstract class Animal3 {
  constructor(protected name: string) {}

  giveVoice() {
    console.log(`Nazywam sie ${this.name}!`);
  }

  abstract eat(): void;
}
