var valeur = [12, 21, 6, 9, 2, 0, 1, 0, 0, 3];
var date = [
    "Manzanillo 22.22%",
    "Tecomán 38.89%",
    "V. De A. 11.11%",
    "Colima 16.67%",
    "Cuauhtémoc 3.70%",
    "Armería 0%",
    "Coquimatlán 1.85%",
    "Minatitlán 0%",
    "Ixtlahuacán 0%",
    "Comala 5.56%"

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
