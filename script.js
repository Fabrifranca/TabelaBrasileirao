// script.js
const tabela = document.getElementById('tabelaBrasileiro');
const tbody = tabela.querySelector('tbody');

const times = [
    { nome: 'São Paulo', pts: 12, j: 6, v: 4, e: 0, d: 2, gp: 10, gc: 5, sg: 5 },
    { nome: 'Corinthians', pts: 6, j: 6, v: 2, e: 0, d: 4, gp: 5, gc: 10, sg: -5 }
];

times.forEach((time, index) => {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${index + 1}</td>
        <td>${time.nome}</td>
        <td>${time.pts}</td>
        <td>${time.j}</td>
        <td>${time.v}</td>
        <td>${time.e}</td>
        <td>${time.d}</td>
        <td>${time.gp}</td>
        <td>${time.gc}</td>
        <td>${time.sg}</td>
    `;
    if (index === 0) {
        novaLinha.classList.add('primeiro');
    }
    tbody.appendChild(novaLinha);
});