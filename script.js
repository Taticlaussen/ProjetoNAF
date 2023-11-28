document.addEventListener("DOMContentLoaded", function() {
    // Simulando dados dinâmicos (pode ser substituído com dados reais do seu sistema)
    var dadosAgenda = [
        { data: "2023-11-27", clientes: [{ nome: "Cliente 1", status: "Confirmado" }, { nome: "Cliente 2", status: "Pendente" }] },
        // Adicionar mais dados conforme necessário
    ];

    var calendario = document.getElementById('calendario');

    // Preencher o calendário dinamicamente
    dadosAgenda.forEach(function(item) {
        var dia = document.createElement('div');
        dia.classList.add('dia');
        dia.textContent = new Date(item.data).getDate(); // Apenas o dia, você pode personalizar conforme necessário

        // Adicionar clientes ao dia
        item.clientes.forEach(function(cliente) {
            var clienteDiv = document.createElement('div');
            clienteDiv.textContent = cliente.nome;

            // Adicionar classe conforme o status do cliente
            if (cliente.status === 'Confirmado') {
                clienteDiv.classList.add('cliente-confirmado');
            } else if (cliente.status === 'Pendente') {
                clienteDiv.classList.add('cliente-pendente');
            }

            // Adicionar tooltip de status
            var tooltip = document.createElement('div');
            tooltip.classList.add('cliente-tooltip');
            tooltip.textContent = cliente.status;

            clienteDiv.appendChild(tooltip);
            dia.appendChild(clienteDiv);
        });

        calendario.appendChild(dia);
    });
});
