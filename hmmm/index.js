var a = "Aa6aaaaaaaaaaaa!"
const tipoSenha = []
function verificaSenha(senha){
    if(senha.length > 7){
        if(/[A-Z]/.test(senha)){
            tipoSenha.push = ("letra maiúscula,")
            console.log(tipoSenha)
            if(/[a-z]/.test(senha)){
                tipoSenha.push = ("letra minúscula,")
                console.log(tipoSenha)
                if(/[0-9]/.test(senha)){
                   tipoSenha.push = ("número,")
                   console.log(tipoSenha)
                   if(/[^A-Za-z0-9]/.test(senha)){
                    tipoSenha.push = "especial"
                    console.log(tipoSenha)
                   }else{
                    console.log("Sua senha tem pelo menos uma letra maiúscula, uma letra minúscula e um número, mas não possui caractere especial")
                   }
                }else{
                    console.log("Sua senha tem pelo menos uma letra maiúscula e uma letra minúscula, mas não possui número e caractere especial")
                }   
            }else{
                console.log("Sua senha tem pelo menos uma letra maiúscula, mas não possui letra minúscula, número e caractere especial")
            }
        }else{
            console.log("Sua senha não possui nenhuma das características")
        }
    }else{
        console.log("Muito curta")
    }
}

/*/[A-Z]/.test(str)    // verifica se tem maiúscula
/[a-z]/.test(str)    // minúscula
/[0-9]/.test(str)    // número
/[^A-Za-z0-9]/.test(str)  // caractere especial*/
 verificaSenha(a)