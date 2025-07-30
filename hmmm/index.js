a = "Aaaaaaaa"
function verificaSenha(senha){
    if(/[A-Z]/.test(senha)){
        console.log("Sua senha tem pelo menos uma letra maiúscula")
        if(/[a-z]/.test(senha)){
            console.log("Sua senha tem pelo menos uma letra minúscula")
            if(/[0-9]/.test(senha)){
               console.log("Sua senha tem pelo menos um número") 
               if(/[^A-Za-z0-9]/.test(sennha)){
                console.log("Sua senha tem pelo menos um caracter especial")
               }else{
                
               }
            }     

        }
    }
}
/*/[A-Z]/.test(str)    // verifica se tem maiúscula
/[a-z]/.test(str)    // minúscula
/[0-9]/.test(str)    // número
/[^A-Za-z0-9]/.test(str)  // caractere especial*/
 verificaSenha(a)