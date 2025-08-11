let post = 0
let neg = 0
let zero = 0

for (i = 1; i >= 10; i++) {
    if (i > 0) {
        post = post + 1
    } else if (i < 0) {
        neg = neg - 1
    } else {zero = zero + 1}
    }

    console.log (`Positivos: ${post}`)
    console.log (`Negativos: ${neg}`)
    console.log (`Zeros: ${zero}`)