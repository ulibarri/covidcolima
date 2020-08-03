var valeur = [8, 4, 9, 13, 3, 1, 0, 0, 0, 1];
var date = [
    "Manzanillo 20.51%",
    "Tecomán 10.26%",
    "V. De A. 23.08%",
    "Colima 33.33%",
    "Cuauhtémoc 7.69%",
    "Armería 2.56%",
    "Coquimatlán 0.00%",
    "Minatitlán 0.00%",
    "Ixtlahuacán 0.00%",
    "Comala 2.56%"

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
