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
    
    // Inicio da pagina de usuários
    htmlElementListUsuarios.scrollTop = 0
    
    setTimeout(function() {
        
        // Percorre a lista de usuários atual
        var saltos = 0
        var percorreChamada = setInterval(()=> {
            document.querySelectorAll(".NkoVdd").forEach((elUser) => {
                let user = elUser.innerHTML;
                // Ignorados
                let ignore = ['(apresentação)'].every((el)=> user.includes(el))
                if(!ignore){
                    users[user] = date;
                }
            })
            if(saltos > htmlElementListUsuarios.scrollHeight){
                console.log("Fim da chamada!")
                
                console.log("Presentes: ")
                console.table(users)
                console.log(Object.keys(users).toString().split(",").join("\n"))
                console.log("Total de presentes: ", Object.keys(users).length)
                htmlElementListUsuarios.scrollTop = 0
                clearInterval(percorreChamada);
            }
            saltos = saltos + 224
            htmlElementListUsuarios.scrollTop = saltos
        }, 1000);
        
    }, 3000);
    
},6000);
