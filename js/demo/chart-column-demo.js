var valeur = [16, 12, 10, 10, 0, 0, 0, 1, 2, 0];
var date = [
    "Manzanillo 31.37%",
    "Tecomán 23.53%",
    "V. de Álvarez 19.61",
    "Colima 19.61%",
    "Cuauhtémoc 0%",
    "Armería 0%",
    "Coquimatlán 0%",
    "Minatitlán 1.96%",
    "Ixtlahuacán 3.92%",
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
