const Calculadora = require("./calculadora");

describe("Calculadora", () => {
  const valor1 = 2;
  const valor2 = 5;
  test("Deve realizar a soma dos dois valores recebidos", () => {
    // setup
    const resultadoEsperado = valor1 + valor2;
    // implementação
    const resultado = Calculadora.soma(valor1, valor2);
    // asserções
    expect(resultado).toBe(resultadoEsperado);
  });

  test("Deve realizar a subtração dos dois valores recebidos", () => {
    // setup
    const resultadoEsperado = valor1 - valor2;
    // implementação
    const resultado = Calculadora.subtracao(valor1, valor2);
    // asserções
    expect(resultado).toBe(resultadoEsperado);
  });

  test("Deve realizar a multiplicação dos dois valores recebidos", () => {
    // setup
    const resultadoEsperado = valor1 * valor2;
    // implementação
    const resultado = Calculadora.multiplicacao(valor1, valor2);
    // asserções
    expect(resultado).toBe(resultadoEsperado);
  });

  test("Deve realizar a divisao dos dois valores recebidos", () => {
    // setup
    const resultadoEsperado = valor1 / valor2;
    // implementação
    const resultado = Calculadora.divisao(valor1, valor2);
    // asserções
    expect(resultado).toBe(resultadoEsperado);
  });

  test("Deve realizar a soma do quadrado dos dois valores recebidos", () => {
    // setup
    const resultadoEsperado = Math.pow(valor1, 2) + Math.pow(valor2, 2);
    // implementação
    const resultado = Calculadora.teste(valor1, valor2);

    // asserções
    expect(resultado).toBe(resultadoEsperado);
  });
});
