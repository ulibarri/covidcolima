var valeur = [21, 10, 21, 30, 1, 3, 4, 1, 0, 0];
var date = [
    "Manzanillo 23.08%",
    "Tecomán 10.99%",
    "V. de Álvarez 23.08%",
    "Colima 32.97%",
    "Cuauhtémoc 1.10%",
    "Armería 3.30%",
    "Coquimatlán 4.40%",
    "Minatitlán 1.10%",
    "Ixtlahuacán 0%",
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
