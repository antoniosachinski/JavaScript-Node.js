a = "Aaaaaaaa"
function verificaSenha(senha){
    if(/[A-Z]/.test(senha)){
        console.log("Sua senha tem maiúscula")
        if(/[a-z]/.test(senha)){
            console.log("Sua senha tem minúscula")
            if(/[0-9]/.test(senha)){
               console.log("Sua senha tem número") 
            }     

        }
    }
}
/*/[A-Z]/.test(str)    // verifica se tem maiúscula
/[a-z]/.test(str)    // minúscula
/[0-9]/.test(str)    // número
/[^A-Za-z0-9]/.test(str)  // caractere especial*/
 verificaSenha(a)