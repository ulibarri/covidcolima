var valeur = [14, 9, 10, 9, 0, 0, 1, 1, 0, 1];
var date = [
    "Manzanillo 31.11%",
    "Tecomán 20.00%",
    "V. De A. 22.22%",
    "Colima 20.00%",
    "Cuauhtémoc 0%",
    "Armería 0%",
    "Coquimatlán 2.22%",
    "Minatitlán 2.22%",
    "Ixtlahuacán 0%",
    "Comala 2.22%"

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
