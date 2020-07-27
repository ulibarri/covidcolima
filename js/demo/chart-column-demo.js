var valeur = [0, 10, 7, 7, 1, 0, 1, 1, 1, 1];
var date = [
    "Manzanillo 0%",
    "Tecomán 34.48%",
    "V. De A. 24.14%",
    "Colima 24.14%",
    "Cuauhtémoc 3.45%",
    "Armería 0%",
    "Coquimatlán 3.45%",
    "Minatitlán 3.45%",
    "Ixtlahuacán 3.45%",
    "Comala 3.45%"

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
