/**
 * uma função recursiva é quando ela chama ela mesmo dentro do seu corpo
 */

function recursiva(max) {
    console.log(max)
    if (max >= 10) return
    max++
    recursiva(max)
}

recursiva(0)