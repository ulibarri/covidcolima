var valeur = [25, 17, 14, 25, 2, 1, 1, 0, 0, 1];
var date = [
    "Manzanillo 29.07%",
    "Tecomán 19.77%",
    "V. De A. 16.28%",
    "Colima 29.07%",
    "Cuauhtémoc 2.33%",
    "Armería 1.16%",
    "Coquimatlán 1.16%",
    "Minatitlán 0%",
    "Ixtlahuacán 0%",
    "Comala 1.16%"

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
