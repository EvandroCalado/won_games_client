var a = 10
var b = 20
var aux = 10
var total = 0

a = b + aux
b = a + aux
aux = a + b

total = aux - (aux - a - b)

if (aux == total) {
    a = b - a
    b = aux - b - a
    aux = total - 2 * b - 2 * a
} else {
    a = a - b
    b = aux - b
    aux = total - a
}

console.log(a, b, aux)
