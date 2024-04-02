let str = prompt("So'z kiriting: ")
let letters = +prompt("Qancha harf kesmoqchisiz : ")
function cut(word , letters) {
    alert(str.slice(-(letters+1)))
}
cut(str , letters)