// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Beispiel: Marktanalyse-Diagramm
    const ctx = document.getElementById('market-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Europa', 'Nordamerika', 'Asien', 'Lateinamerika', 'Afrika'],
            datasets: [{
                label: 'Marktverteilung',
                data: [35, 30, 20, 10, 5],
                backgroundColor: ['#0044cc', '#76c7c0', '#ffcc00', '#ff5733', '#c70039']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});