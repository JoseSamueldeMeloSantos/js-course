(function () { // Função auto-executável para evitar poluição do escopo global
    'use strict'; // Ativa o modo estrito do JS, que ajuda a evitar erros comuns

    // Captura elementos do DOM
    const txtTitulo = document.getElementById("txtTitulo") // Input do título
    const btn = document.getElementById("btn") // Botão de envio
    const formCadastro = document.querySelector(".formCadastro") // Formulário

    // Adiciona um listener para o envio do formulário
    formCadastro.addEventListener("submit", function (e) {
        console.log(txtTitulo.value) // Mostra no console o valor digitado no título

        // Validação: se o campo título estiver vazio
        if (!txtTitulo.value) {
            // Mostra mensagem de erro e foca no campo
            showErrorMessage("Preencha todos os campos", function () {
                txtTitulo.focus()
            })

            e.preventDefault() // Evita que o formulário seja enviado
        }
    })

    // Captura elementos do feedback de erro
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0] // Botão de fechar a mensagem

    // Função que mostra mensagem de erro
    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show") // Adiciona classe para mostrar o feedback
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg // Insere a mensagem

        feedbackMessageCloseBtn.focus() // Coloca foco no botão de fechar

        // Função que esconde a mensagem de erro
        function hideErrorMessage() {
            console.log("clicado close")
            //quando for lidar com classe use o classlist
            feedbackMessage.classList.remove("show") // Remove a classe de exibição

            // Remove os event listeners para evitar duplicação
            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn)

            // Executa callback se fornecida
            if (typeof cb === "function") {
                cb()
            }
        }

        // Fecha a mensagem ao pressionar ESC
        function pressedKeyboardOnBtn(e) {
            if (e.keyCode === 27) {
                hideErrorMessage()
            }
        }

        // Adiciona eventos para fechar a mensagem
        feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)
        feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn)
    }

    // Contador de caracteres para descrição
    const txtDescricao = document.getElementById("txtDescricao") // Campo de texto
    const contadorContainer = document.getElementById("contador") // Container do contador
    const resta = contadorContainer.getElementsByTagName("span")[0] // Elemento que mostra caracteres restantes
    const maxima = txtDescricao.maxLength // Máximo de caracteres permitido

    mostrarNumero(maxima) // Inicializa contador com o valor máximo

    // Exibe o container do contador
    contadorContainer.style.display = "block"

    // Função que verifica quantidade de caracteres digitados
    function checkLength() {
        let numeroLetrasDigitdas = this.value.length
        let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitdas)
        mostrarNumero(caractersRestantes)
    }

    // Atualiza visualmente o contador
    function mostrarNumero(n) {
        resta.textContent = n
    }

    // Adiciona listener para atualizar contador enquanto digita
    txtDescricao.addEventListener("input", checkLength)

    // Inicialmente, desativa o botão de envio
    btn.disabled = true

    // Habilita o botão apenas se checkbox estiver marcado
    const chkAceito = document.getElementById("chkAceito")
    chkAceito.addEventListener("change", function () {
        btn.disabled = !this.checked
    })

})() // Fim da função auto-executável
