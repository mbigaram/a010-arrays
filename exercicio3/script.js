
//Exercicio 3

//crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const numeros = [51, 33, 27, 65, 79]
const itens = ["cola", "lapis", "caneta", "borracha"]
const misto = [13, "lixa", true]

const copiaNumeros = numeros.slice()
const copiaItens = itens.slice()
const copiaMisto = misto.slice()

//- Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

numeros.push(40)
console.log("original = "+numeros)
console.log("copia = "+copiaNumeros)


//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

itens.pop()
console.log("original = "+itens)
console.log("cópia = "+copiaItens)


//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

misto.splice(1,1)
console.log("original = "+misto)
console.log("cópia = "+copiaMisto)


