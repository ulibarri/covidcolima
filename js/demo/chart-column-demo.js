var valeur = [14, 8, 20, 14, 1, 4, 2, 1, 1, 2];
var date = [
    "Manzanillo 20.90%",
    "Tecomán 11.94%",
    "V. De A. 29.85%",
    "Colima 20.90%",
    "Cuauhtémoc 1.490%",
    "Armería 5.97%",
    "Coquimatlán 2.99%",
    "Minatitlán 1.49%",
    "Ixtlahuacán 1.49%",
    "Comala 2.99%"

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
