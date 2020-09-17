var users = {}
var date = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date)

// Abre a lista de usuários meet / Click
document.querySelector("span[jscontroller='FTBAv']").click()

var htmlElementListUsuarios = document.querySelector("div[jsname='KYYiw']").querySelector("span")

var scrollHeight = htmlElementListUsuarios.scrollHeight
var scrollOffSetHeight = htmlElementListUsuarios.offsetHeight

htmlElementListUsuarios.scrollTop = 0

for (let height = 0; height <= scrollHeight; height += scrollOffSetHeight) {

    // Percorre a lista de usuários atual
    document.querySelectorAll(".NkoVdd").forEach((e) => {
        users[e.innerHTML] = date;
    })
    htmlElementListUsuarios.scrollTop = height
}


// String de usuários
var list_presente = ""
for (const user in users) {
    list_presente += `\n${user} \t${users[user]}`
}

// Mostra a lista
console.log(list_presente)
console.log(Object.keys(users).length)
