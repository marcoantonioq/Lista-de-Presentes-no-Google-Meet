// Usuários
if(typeof user === 'undefined'){
 var users = {}
 var counter=0
}
counter++

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
            document.querySelectorAll(".ZjFb7c").forEach((elUser) => {
                let user = elUser.innerHTML;
                // Ignorados
                let ignore = ['(apresentação)'].every((el)=> user.includes(el))
                if(!ignore){
                    if(typeof users[user] === 'undefined'){
                        users[user] = []
                    }
                    users[user].push(date)
                }
            })
            if(saltos > htmlElementListUsuarios.scrollHeight){
                console.log("Fim da chamada!")
                
                console.log("Presentes: ")
                Object.entries(users).map((user)=>{
                    console.log(user[0], `%${counter/(user[1].length)}`)
                })
                console.log("Total de presentes: ", Object.keys(users).length)
                htmlElementListUsuarios.scrollTop = 0
                clearInterval(percorreChamada);
            }
            saltos = saltos + 224
            htmlElementListUsuarios.scrollTop = saltos
        }, 1000);
        
    }, 3000);
    
},6000);
