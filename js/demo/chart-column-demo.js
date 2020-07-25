var valeur = [18, 20, 25, 27, 3, 2, 1, 0, 1, 1];
var date = [
    "Manzanillo 18.37%",
    "Tecomán 20.41%",
    "V. De A. 25.51%",
    "Colima 27.55%",
    "Cuauhtémoc 3.06%",
    "Armería 2.04%",
    "Coquimatlán 1.02%",
    "Minatitlán 0%",
    "Ixtlahuacán 1.02%",
    "Comala 1.02%"

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
