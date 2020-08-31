// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var series = ["26 May", "27", "28", "29", "30", "31", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1 Ago", "2", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// tasa de letalidad

var ctx2 = document.getElementById("myAreaChart2");
var myLineChart2 = new Chart(ctx2, {
  type: 'line',
  data: {

    labels: series,
    datasets: [{
      label: "Tasa",
      lineTension: 0.2,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(70,208,172,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(70,208,172, 1)",
      pointBorderColor: "rgba(70,208,172, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(70,208,172, 1)",
      pointHoverBorderColor: "rgba(70,208,172, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,

      data: [18.18, 17.29, 17.39, 17.61, 16.89, 16.88, 17.09, 16.17, 16.20, 15.34, 14.29, 14.02, 15.21, 15.00, 14.96, 14.86, 14.40, 13.45, 13.59, 13.61, 13.77, 13.84, 13.31, 13.18, 13.02, 13.09, 12.85, 13.56, 13.99, 13.82, 13.50, 13.60, 13.81, 14.29, 14.23, 13.73, 14.00, 13.49, 13.34, 12.97, 13.02, 13.16, 12.92, 12.76, 12.42, 12.28, 11.85, 12.23, 12.66, 12.65, 12.56, 12.44, 12.19, 12.20, 11.90, 12.11, 12.41, 11.97, 12.05, 11.68, 11.29, 11.15, 11.64, 11.53, 11.57, 11.45, 11.56, 11.67, 11.74, 12.07, 12.24, 12.09, 12.15, 12.34, 12.24, 12.17, 12.29, 12.42, 12.41, 12.44, 12.37, 12.05, 12.09, 12.25, 12.07, 11.88, 11.76, 11.77, 11.71, 11.62, 11.70, 12.03, 12.01, 12.03, 12.03, 11.88
      ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: true,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel, 2);
        }
      }
    }
  }
});

// recuperados
var ctx3 = document.getElementById("myAreaChart3");
var myLineChart3 = new Chart(ctx3, {
  type: 'line',
  data: {

    labels: series,
    datasets: [{
      label: "Recuperados",
      lineTension: 0.2,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(255,151,115,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255,151,115,1)",
      pointBorderColor: "rgba(255,151,115,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(255,151,115,1)",
      pointHoverBorderColor: "rgba(255,151,115,1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,

      data: [3, 15, 3, 0, 3, 0, 6, 5, 2, 4, 9, 2, 9, 14, 4, 0, 12, 3, 1, 14, 8, 9, 7, 1, 0, 0, 31, 20, 10, 6, 12, 15, 14, 14, 8, 8, 14, 14, 13, 22, 27, 24, 12, 20, 13, 26, 25, 14, 27, 24, 0, 0, -1, 0, 39, 13, 25, 18, 13, 0, -12, 12, 86, 28, 93, 96, 101, 92, 52, 10, 77, 80, 50, 27, 45, 60, 51, 32, 41, 18, 9, 9, 0, 85, 123, 48, 49, 36, 39, 73, 0, 83, 126, 32, 39, 42, 0
      ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

// defunciones
var ctx4 = document.getElementById("myAreaChart4");
var myLineChart4 = new Chart(ctx4, {
  type: 'line',
  data: {

    labels: series,
    datasets: [{
      label: "Defunciones",
      lineTension: 0.2,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(255,0,0,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(255,0,0,1)",
      pointBorderColor: "rgba(255,0,0,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(255,0,0,1)",
      pointHoverBorderColor: "rgba(255,0,0,1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,

      data: [1, 1, 1, 0, 1, 1, 0, 2, 0, 0, 1, 3, 0, 2, 2, 0, 0, 2, 1, 2, 2, 1, 1, 1, 3, 0, 6, 5, 2, 1, 4, 3, 5, 2, 0, 5, 2, 2, 2, 2, 4, 1, 2, 1, 6, 4, 6, 5, 8, 6, 3, 5, 5, 3, 5, 7, 5, 9, 6, 2, 1, 11, 8, 7, 2, 6, 9, 6, 12, 8, 5, 6, 12, 4, 4, 14, 10, 6, 7, 6, 1, 4, 10, 4, 1, 13, 8, 6, 4, 8, 15, 11, 7, 6, 7, 1
      ],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});

// positivos
var ctx5 = document.getElementById("myAreaChart5");
var myLineChart5 = new Chart(ctx5, {
  type: 'line',
  data: {

    labels: series,
    datasets: [{
      label: "Positivos",
      lineTension: 0.2,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(254,184,30,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(254,184,30,1)",
      pointBorderColor: "rgba(254,184,30,1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(254,184,30,1)",
      pointHoverBorderColor: "rgba(254,184,30,1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,

      data: [12, 5, 4, 6, 6, 4, 9, 12, 10, 14, 11, 3, 3, 14, 15, 8, 18, 22, 7, 11, 13, 20, 11, 12, 21, 7, 24, 23, 20, 18, 26, 14, 18, 16, 20, 25, 37, 22, 34, 13, 23, 22, 25, 29, 58, 65, 20, 8, 64, 55, 34, 64, 40, 55, 20, 25, 90, 65, 98, 72, 29, 25, 86, 54, 37, 34, 59, 39, 45, 37, 42, 39, 64, 50, 46, 91, 55, 51, 51, 62, 79, 24, 46, 75, 55, 141, 65, 66, 60, 45, 35, 98, 50, 50, 71, 43],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});


