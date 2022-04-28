class Calculadora {
  static soma(valor1, valor2) {
    return valor1 + valor2;
  }

  static subtracao(valor1, valor2) {
    return valor1 - valor2;
  }

  static multiplicacao(valor1, valor2) {
    return valor1 * valor2;
  }

  static divisao(valor1, valor2) {
    return valor1 / valor2;
  }

  static teste(valor1, valor2) {
    return Math.pow(valor1, 2) + Math.pow(valor2, 2);
  }
}

// para implementar depois dos testes
const calculadora = new Calculadora();

module.exports = Calculadora;
