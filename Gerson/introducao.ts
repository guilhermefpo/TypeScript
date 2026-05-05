class Somador {
  public somar(a: number, b: number): number {
    return a + b;
  }
}

let somador = new Somador();
console.log(somador.somar(10, 5));
