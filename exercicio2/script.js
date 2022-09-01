
// Exercicio 2

const numeros = [51, 33, 27, 65, 79]
const itens = ["cola", "lapis", "caneta", "borracha"]
const misto = [13, "lixa", true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log("A quantidade no 1º array é "+numeros.length)
console.log("A quantidade no 2º array é "+itens.length)
console.log("A quantidade no 3º array é "+misto.length)

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log("O 1º item do 1º array é "+numeros[0])
console.log("O 2º item do 2º array é "+itens[1])
console.log("O 3º item do 3º array é "+misto[2])

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

numeros.push(40)
console.log("Essa inclusão é "+numeros.includes(40))

misto.push("carregador")
console.log("Essa inclusão é "+misto.includes("caregador"))

