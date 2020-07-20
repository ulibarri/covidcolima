var valeur = [7, 18, 12, 16, 0, 0, 2, 0, 0, 0];
var date = [
    "Manzanillo 12.73%",
    "Tecomán 32.73%",
    "V. De A. 21.82%",
    "Colima 29.09%",
    "Cuauhtémoc 0%",
    "Armería 0%",
    "Coquimatlán 3.64%",
    "Minatitlán 0%",
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
