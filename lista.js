// Usuários
var users = {}

// Data atual
var dt = new Date()
var date = `${dt.toLocaleDateString()} ${dt.toLocaleTimeString()}`


// Abre lista de usuários
document.querySelector("span[jscontroller='FTBAv']").click()

setTimeout(function() {
    // Scroll de usuários
    var htmlElementListUsuarios = document.querySelector("div[jsname='KYYiw']").querySelector("span")

    var scrollHeight = htmlElementListUsuarios.scrollHeight
    var scrollOffSetHeight = htmlElementListUsuarios.offsetHeight

    // Inicio da pagina de usuários
    htmlElementListUsuarios.scrollTop = 0

    for (let height = 0; height <= scrollHeight; height += scrollOffSetHeight) {
        // Percorre a lista de usuários atual
        document.querySelectorAll(".NkoVdd").forEach((elUser) => {
            users[elUser.innerHTML] = date;
        })
        htmlElementListUsuarios.scrollTop = height
    }

    // Mostra a lista
    console.log("Lista de presentes: ")
    console.table(users)
    console.log("Total de presentes: ", Object.keys(users).length)

}, 3000);