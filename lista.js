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

    // Inicio da pagina de usuários
    htmlElementListUsuarios.scrollTop = 0
    
    
    setTimeout(function() {
        
        var timeouts = [];
        var resolvidos = 0;
        
        for (let height = 0; height <= (scrollHeight); height += 112) {
            timeouts.push( setTimeout( ()=>{ 
                try{
                    // Percorre a lista de usuários atual
                    document.querySelectorAll(".NkoVdd").forEach((elUser) => {
                        let user = elUser.innerHTML;
                        // Ignorados
                        let ignore = ['(apresentação)'].every((el)=> user.includes(el))
                        if(!ignore){
                            users[user] = date;
                        }
                    })
                    resolvidos++
                    htmlElementListUsuarios.scrollTop = height
                }catch(e){console.log(e)}	
            }, height + 200) );
        }
        
        var fimChamada = setInterval(()=> {
            if(timeouts.length = resolvidos){
                console.log("Fim da chamada!!!")
                console.log("Presentes: ")
                console.table(users)
                console.log(Object.keys(users).toString().split(",").join("\n"))
                console.log("Total de presentes: ", Object.keys(users).length+1)
                htmlElementListUsuarios.scrollTop = 0
                clearInterval(fimChamada);
            }
        }, 9000);
        
        
    }, 3000);
    
},6000);
