var valeur = [25, 19, 12, 27, 0, 0, 4, 1, 1, 1];
var date = [
    "Manzanillo 27.78%",
    "Tecomán 21.11%",
    "V. De A. 13.33%",
    "Colima 30%",
    "Cuauhtémoc 0%",
    "Armería 0%",
    "Coquimatlán 4.44%",
    "Minatitlán 1.11%",
    "Ixtlahuacán 1.11%",
    "Comala 1.11%"

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
