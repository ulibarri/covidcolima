var options = {
    series: [
        {
            name: "V. de A.",
            data: [10, 10, 11, 12, 13, 13, 13, 13, 15, 15, 16, 18, 18, 18, 20, 20, 20, 21, 21, 22, 23, 25, 28, 28, 28, 28, 28, 29, 33, 33, 37, 38, 39, 40, 44, 47, 49, 50, 52, 54, 56, 61, 63, 65, 68, 75, 81, 82, 82, 97, 111, 115, 123, 129, 141, 146, 148, 160, 169, 194, 207, 214, 221, 235]
        },
        {
            name: "Colima",
            data: [8, 10, 10, 10, 10, 11, 13, 14, 15, 15, 19, 19, 19, 21, 22, 23, 24, 25, 26, 27, 27, 28, 28, 28, 29, 32, 33, 35, 36, 37, 38, 39, 41, 43, 43, 46, 52, 58, 62, 74, 74, 76, 77, 83, 92, 102, 108, 114, 117, 124, 128, 137, 159, 170, 186, 196, 197, 224, 234, 261, 273, 280, 285, 310]
        },
        {
            name: "Tecomán",
            data: [10, 10, 11, 12, 13, 13, 13, 14, 14, 17, 19, 20, 22, 22, 22, 23, 24, 26, 27, 27, 28, 28, 29, 29, 33, 35, 37, 45, 48, 52, 54, 60, 62, 65, 71, 73, 79, 86, 88, 92, 93, 103, 108, 115, 121, 139, 157, 166, 169, 184, 207, 214, 226, 240, 258, 262, 267, 286, 307, 327, 351, 361, 372, 389]
        },
        {
            name: "Manzanillo",
            data: [77, 87, 89, 91, 95, 99, 101, 108, 117, 124, 131, 139, 140, 141, 152, 165, 171, 185, 195, 199, 207, 216, 232, 243, 250, 264, 267, 280, 294, 308, 319, 334, 342, 352, 356, 367, 377, 398, 411, 426, 436, 441, 453, 461, 470, 485, 515, 517, 518, 536, 544, 554, 572, 578, 585, 586, 601, 626, 643, 661, 676, 676, 677, 702]
        }

    ],
    chart: {
        height: 500,
        type: "line",
        dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ["#f6c23e", "#6610f2", "#14CD10", "#387AED", "#c0c0c0"],
    dataLabels: {
        enabled: false,
        style: {
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "bold"
        },
        background: {
            enabled: true,
            foreColor: "#fff",
            padding: 8,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#fff"
        }
    },
    grid: {
        borderColor: "#e7e7e7",
        row: {
            colors: ["#f3f3f3", "transparent"] // takes an array which will be repeated on columns
        }
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ["27 May", "28", "29", "30", "31", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1 Jul", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"],
        title: {
            text: "Día"
        }
    },
    yaxis: {
        title: {
            text: ""
        }
    }
};

var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);
chart.render();


// ++++++++++++++++++++++++++++ POSITIVOS - DEFUNCIONES

var options = {
    series: [
        {
            name: "Casos positivos acumulados",
            data: [121, 133, 138, 142, 148, 154, 158, 167, 179, 189, 203, 214, 217, 220, 234, 249, 257, 275, 287, 294, 305, 318, 338, 349, 361, 382, 389, 413, 436, 456, 474, 500, 514, 532, 548, 568, 593, 630, 652, 686, 699, 722, 743, 768, 797, 855, 920, 940, 948, 1012, 1067, 1101, 1165, 1205, 1280, 1305, 1395, 1460, 1558, 1630, 1659, 1684, 1770, 1824]
        },
        {
            name: "Defunciones",
            data: [23, 24, 25, 25, 26, 27, 27, 29, 29, 29, 30, 33, 33, 35, 37, 37, 37, 39, 40, 42, 44, 45, 46, 47, 50, 50, 56, 61, 63, 64, 68, 71, 76, 78, 78, 83, 85, 87, 89, 91, 95, 96, 98, 99, 105, 109, 115, 120, 128, 134, 137, 142, 147, 150, 155, 162, 167, 176, 182, 184, 185, 196, 204, 211]
        }

    ],
    chart: {
        height: 500,
        type: "line",
        dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ["#f6c23e", "#6610f2", "#14CD10", "#387AED", "#c0c0c0"],
    dataLabels: {
        enabled: false,
        style: {
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "bold"
        },
        background: {
            enabled: true,
            foreColor: "#fff",
            padding: 8,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#fff"
        }
    },
    grid: {
        borderColor: "#e7e7e7",
        row: {
            colors: ["#f3f3f3", "transparent"] // takes an array which will be repeated on columns
        }
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ["27 May", "28", "29", "30", "31", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
        title: {
            text: "Día"
        }
    },
    yaxis: {
        title: {
            text: ""
        }
    }
};

var chart2 = new ApexCharts(document.querySelector("#chart-positivos-defunciones"), options);
chart2.render();