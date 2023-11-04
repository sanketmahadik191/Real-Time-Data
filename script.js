const ctx = document.getElementById("myChart").getContext('2d')
let chart;
let initialData = {
    labels: [],
    datasets: [{
        label: 'CE 44500',
        data: [120],
        borderColor: 'black',
        borderWidth: 2,
        fill: false,
    }],
};

const config = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Stock Price',
                },
            },
        },
        animation: false,
    },
};

chart = new Chart(ctx, config);

function updateGraph() {
    const newData = Math.random() * 100;


    chart.data.labels.push(chart.data.labels.length)
    chart.data.datasets[0].data.push(newData)
    chart.update()
}
setInterval(updateGraph, 1500)