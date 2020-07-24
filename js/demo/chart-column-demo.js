var valeur = [17, 21, 9, 10, 1, 1, 2, 0, 2, 2];
var date = [
    "Manzanillo 26.15%",
    "Tecomán 32.31%",
    "V. De A. 13.85%",
    "Colima 15.38%",
    "Cuauhtémoc 1.54%",
    "Armería 1.54%",
    "Coquimatlán 4.44%",
    "Minatitlán 0%",
    "Ixtlahuacán 3.08%",
    "Comala 3.08%"

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
