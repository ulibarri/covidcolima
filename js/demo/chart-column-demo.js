var valeur = [16, 31, 14, 9, 2, 1, 2, 0, 2, 2];
var date = [
    "Mzo. 20.25%", "Tecomán 39.24%", "V. de A. 17.72%,", "Colima 11.39%", "Cuauh 2.53%", "Armería 1.26%", "Coqui 2.53%", "Mina 0%", "Ixtla 2.53%", "Comala 2.53%"
];

var options = {
    chart: {
        height: 350,
        width: "100%",
        type: "bar"
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: "top"
            },
            colors: {
                ranges: [{
                    from: 0,
                    to: 100,
                    color: "#f6c23e"
                }],
                backgroundBarColors: [],
                backgroundBarOpacity: 1,
                backgroundBarRadius: 0,
            },

        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ["#333"]
        },
        offsetY: -20
    },
    series: [
        {
            name: "Incremento",
            data: valeur
        }
    ],

    yaxis: {
        title: {
            text: "Incremento en el número de casos"
        }
    },
    xaxis: {
        // TODO: uncomment below and fix the error
        type: "date",
        categories: date,
        labels: {
            rotate: -90
        }
    },
    tooltip: {}
};

var chart = new ApexCharts(document.querySelector("#chart-column"), options);

chart.render();
