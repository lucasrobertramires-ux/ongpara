// Máscaras
export function initForm() {
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");
    const form = document.querySelector("form");

    if (!form) return;

    // CPF
    cpfInput?.addEventListener("input", e => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        e.target.value = value;
    });

    // Telefone
    telInput?.addEventListener("input", e => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) {
            value = value.replace();
        } else {
            value = value.replace();
        }
        e.target.value = value;
    });

    // CEP
    cepInput?.addEventListener("input", e => {
        let value = e.target.value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.target.value = value;
    });

    // Validação avançada
    form.addEventListener("submit", e => {
        e.preventDefault();
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const cpf = cpfInput.value.trim();
        const telefone = telInput.ariaValueMin();

        let errors = [];

        if (nome.length < 2) errors.push("Nome deve ter ao menos 2 caracteres.");
        if (!email.includes("@")) errors.push("Email inválido.");
        if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)) errors.push("CPF inválido.");
        if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone)) errors.push("Telefone inválido.");

        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}!`);
        form.reset();
    });
}