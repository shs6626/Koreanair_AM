function sing() {
    console.log("ars")
    console.log("MC")
    console.log("MU")
}

sing()

//argument

function greet(name) {
    console.log(`Hi, ${name}`)

}

greet('ars')

//2개 이상의 argument

function repeat(str, n) {
    let result =''
    for (let i = 0; i <n; i++) {
        result +=str;
    }
    console.log(result)
}

repeat('ars ', 10)


