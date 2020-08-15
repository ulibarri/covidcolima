// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Manzanillo", "Tecomán", "V. Álvarez", "Colima"],
    datasets: [{
      data: [936, 556, 395, 549],
      backgroundColor: ['#e74a3b', '#1cc88a', '#36b9cc', '#4e73df'],
      hoverBackgroundColor: ['#fd7e14', '#17a673', '#2c9faf', '#2e59d9'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});



// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("mySexPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Hombres", "Mujeres"],
    datasets: [{
      data: [180, 105],
      backgroundColor: ['#13855c', '#6f42c1'],
      hoverBackgroundColor: ['#1cc88a', '#9b7cd4'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});




// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx3 = document.getElementById("defunciones-totales-edad");
var myPieChart = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ["0-40 años", "41-50  años", "51-60  años", "61-70  años", "71-80  años", "81+  años"],
    datasets: [{
      data: [24, 27, 75, 83, 67, 42],
      backgroundColor: ['#3498DB', '#512E5F', '#1B4F72', '#D4AC0D', '#0E6251', '#D35400', '#1B2631'],
      hoverBackgroundColor: ['#D6EAF8', '#C39BD3', '#7FB3D5', '#F9E79F', '#73C6B6', '#EDBB99', '#85929E'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});




// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx4 = document.getElementById("defunciones-mujeres-edad");
var myPieChart = new Chart(ctx4, {
  type: 'doughnut',
  data: {
    labels: ["0-40 años", "41-50  años", "51-60  años", "61-70  años", "71-80  años", "81+  años"],
    datasets: [{
      data: [6, 8, 24, 38, 24, 16],
      backgroundColor: ['#3498DB', '#512E5F', '#1B4F72', '#D4AC0D', '#0E6251', '#D35400', '#1B2631'],
      hoverBackgroundColor: ['#D6EAF8', '#C39BD3', '#7FB3D5', '#F9E79F', '#73C6B6', '#EDBB99', '#85929E'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});




// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx5 = document.getElementById("defunciones-hombres-edad");
var myPieChart = new Chart(ctx5, {
  type: 'doughnut',
  data: {
    labels: ["0-40 años", "41-50  años", "51-60  años", "61-70  años", "71-80  años", "81+  años"],
    datasets: [{
      data: [18, 19, 51, 45, 43, 26],
      backgroundColor: ['#3498DB', '#512E5F', '#1B4F72', '#D4AC0D', '#0E6251', '#D35400', '#1B2631'],
      hoverBackgroundColor: ['#D6EAF8', '#C39BD3', '#7FB3D5', '#F9E79F', '#73C6B6', '#EDBB99', '#85929E'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
