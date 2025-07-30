var a = "Aa6aaaaaaaaaaaa!"
/*console.log("Uma senha forte deve:\n
    Ter no mínimo 8 caracteres;\n
    Conter ao menos uma letra maiúscula;\n
    Conter ao menos uma letra minúscula;\n
    Conter ao menos um número;\n
    Conter ao menos um caractere especial (!@#$%^&*()).")*/
function verificaSenha(senha) {
    const tipoSenha = []; // reinicia a cada execução

    if (senha.length < 8) {
        console.log("Muito curta");
        return;
    }

    if (/[A-Z]/.test(senha)) {
        tipoSenha.push("letra maiúscula");
    }

    if (/[a-z]/.test(senha)) {
        tipoSenha.push("letra minúscula");
    }

    if (/[0-9]/.test(senha)) {
        tipoSenha.push("número");
    }

    if (/[^A-Za-z0-9]/.test(senha)) {
        tipoSenha.push("caractere especial");
    }

    if (tipoSenha.length === 4) {
        console.log("Senha forte: contém " + tipoSenha.join(", "));
    } else {
        console.log("Senha fraca: contém " + tipoSenha.join(", ") + ".");
    }
}


/*/[A-Z]/.test(str)    // verifica se tem maiúscula
/[a-z]/.test(str)    // minúscula
/[0-9]/.test(str)    // número
/[^A-Za-z0-9]/.test(str)  // caractere especial*/

 verificaSenha(a)