var options = {
    chart: {
        width: 380,
        type: "donut"
    },
    colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '22px',
                        fontFamily: 'Rubik',
                        color: '#dfsda',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val
                        }
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#373d3f',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            }
        }
    },
    series: [76, 67, 61, 90],
    tooltip: {
        enabled: true,
        y: {
            formatter: function (val) {
                return val
            },
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        }
    },
    legend: {
        show: false
    }
};

var chart_edades_totales = new ApexCharts(document.querySelector("#chart_edades_totales"), options);

chart_edades_totales.render();


var options = {
    chart: {
        width: 380,
        type: "donut"
    },
    colors: ["#E74C3C", "#884EA0", "#2471A3", "#0077B5", "#148F77", "#B7950B", "#B9770E", "#F5B7B1", "#58D68D", "#5D6D7E", "#1F618D"],
    dataLabels: {
        enabled: true
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '22px',
                        fontFamily: 'Rubik',
                        color: '#dfsda',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        color: undefined,
                        offsetY: 16,
                        formatter: function (val) {
                            return val
                        }
                    },
                    total: {
                        show: true,
                        label: 'Defunciones',
                        color: '#373d3f',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            }
        }
    },

    series: [1, 0, 2, 17, 27, 76, 85, 68, 37, 2],
    tooltip: {
        enabled: true,
        y: {
            formatter: function (val) {
                return val
            },
            title: {
                formatter: function (seriesName) {
                    return ''
                }
            }
        }
    },
    legend: {
        show: true
    }
};

var chart_edades_totales_mujeres = new ApexCharts(document.querySelector("#chart_edades_totales_mujeres"), options);

chart_edades_totales_mujeres.render();
