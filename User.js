
class User{
    constructor (fullname, email, password) {
        this.fullname= fullname
        this.email= email
        this.password= password
    }

    login(email, password) {
            
        if(this.email === email && this.password === password){
            console.log("Login bem sucedido!")
        }
        else{
            console.log("Falha no login, tente novamente!")
            }
        }
    }
          
const usuario = new User("Jefferson@gmail.com", "207024")
usuario.login("Jefferson@gmail.com", "207024")
