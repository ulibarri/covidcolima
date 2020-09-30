var valeur = data.valeur;
// var date = [
//     "Mzo. 0%", "Tecomán 40%", "V. de A. 20%,", "Colima 20%", "Cuauh 20%", "Armería 0%", "Coqui 0%", "Mina 0%", "Ixtla 0%", "Comala 0%"
// ];
var date = data.municipios_acum_chart;
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

var valeur = data.chart_area_positivos;
// var date = [
//     "Mzo. 0%", "Tecomán 40%", "V. de A. 20%,", "Colima 20%", "Cuauh 20%", "Armería 0%", "Coqui 0%", "Mina 0%", "Ixtla 0%", "Comala 0%"
// ];
var date = data.dias;
// data.municipios_acum_chart;
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
        enabled: false,
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
            text: "Número de casos"
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

var chart_estado = new ApexCharts(document.querySelector("#chart_column_estado"), options);

chart_estado.render();