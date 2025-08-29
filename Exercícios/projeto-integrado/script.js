const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00"
];

document.getElementById('data').addEventListener('change', function () {
    const selectHorario = document.getElementById('horario');
    selectHorario.innerHTML = '<option value="">Selecione um horário</option>';

    horariosDisponiveis.forEach(horario => {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        selectHorario.appendChild(option);
    });
});

document.getElementById('formAgendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    if (!data || !horario || !nome || !telefone || !email) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const resumoDiv = document.getElementById('resumo');
    resumoDiv.style.display = 'block';
    resumoDiv.innerHTML = `
        <h3>Agendamento Confirmado</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
    `;

    document.getElementById('formAgendamento').reset();
    document.getElementById('horario').innerHTML = '<option value="">Selecione uma data primeiro</option>';
});
