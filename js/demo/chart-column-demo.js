var valeur = [13, 6, 11, 22, 2, 0, 0, 0, 1, 0];
var date = [
    "Manzanillo 23.64%",
    "Tecomán 10.91%",
    "V. de Álvarez 20.00%",
    "Colima 40.00%",
    "Cuauhtémoc 3.64%",
    "Armería 0%",
    "Coquimatlán 0%",
    "Minatitlán 0%",
    "Ixtlahuacán 1.82%",
    "Comala 0%"

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
