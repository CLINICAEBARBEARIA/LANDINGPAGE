// --- Lógica de Interação do Formulário --- //

// Como o script é chamado com 'defer' no HTML, não é necessário
// o 'DOMContentLoaded', pois o DOM já estará pronto.

const form = document.getElementById('interactive-form');
const submitButton = document.getElementById('submit-button');

// Verifica se os elementos existem antes de adicionar o listener
if (form && submitButton) {
    const originalButtonText = submitButton.textContent;

    form.addEventListener('submit', (e) => {
        // Validação nativa do navegador para campos 'required'
        if (!form.checkValidity()) {
            // Se o formulário for inválido, o navegador mostrará os erros.
            // O evento de submit é cancelado automaticamente.
            return;
        }
        
        // Se o formulário for válido, este código executa:
        // Desabilita o botão para prevenir múltiplos envios
        submitButton.disabled = true;
        // Altera o texto para dar um feedback visual ao usuário
        submitButton.textContent = 'Enviando...';

        // O formulário prossegue com o envio para a URL do webhook.
    });
}