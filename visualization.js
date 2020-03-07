fetch('2019.json', { mode: 'no-cors' })
        .then(res => res.json())
		.then(json => handleData(json))
        .catch(err => console.log(err.message))

function handleData(data) {
    console.log(`From which year is the data? 2019`)
    document.getElementById("totalCountries").innerHTML = (`How many total countries? ${data.length}`)
}

var ctx = document.getElementById('canvas').getContext('2d');

var myChart = new Chart(ctx, {
        responsive: false,
        type: 'bar',
        data: {
                labels: ['Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands', 'Switzerland','Sweden','New Zealand','Canada','Austria'],
                datasets: [{
                        label:'GDP Per Capita',
                        data: [ 1.34,1.383,1.488,1.38,1.396,1.452,1.387,1.303,1.365,1.376],
                        backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                }]
        },
        options: {
                scales: {
                        yAxes: [{
                                ticks: {
                                        beginAtZero: true
                                }
                        }]
                }
        }
});

const colors = new Array(9).fill(0).map((v,i) => `hsla(${i*360/9},100%, 50%, 0.4)`)
// Make a chart - 
const chart2 = new Chart('canvas2', {
    type: 'bar', 
    data: {
        labels: ['Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands', 'Switzerland','Sweden','New Zealand','Canada','Austria'],
        datasets: [{
            label: 'Social support',
            data: [ 1.587,1.573,1.582,1.624,1.522,1.526,1.487, 1.557,1.365,1.475,],
            backgroundColor: colors
        }]
    }
})

const colors2 = new Array(9).fill(0).map((v,i) => `hsla(${i*360/9},100%, 50%, 0.4)`)
// Make a chart - 
const chart3 = new Chart('canvas3', {
    type: 'bar', 
    data: {
        labels: ['Finland', 'Denmark', 'Norway', 'Iceland', 'Netherlands', 'Switzerland','Sweden','New Zealand','Canada','Austria'],
        datasets: [{
            label: 'Social support',
            data: [ 1.587,1.573,1.582,1.624,1.522,1.526,1.487, 1.557,1.365,1.475,],
            backgroundColor: colors2
        }]
    }
})