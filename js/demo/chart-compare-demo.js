var options = {
    series: [
        {
            name: "Colima",
            data: [8, 10, 10, 10, 10, 11, 13, 14, 15, 15, 19, 19, 19, 21, 22, 23, 24, 25, 26, 27, 27, 28, 28, 28, 29, 32, 33, 35, 36, 37, 38, 39, 41, 43, 43, 46, 52, 58, 62, 74, 74, 76, 77, 83, 92, 102, 108, 114, 117, 124, 128, 137, 159, 170]
        },
        {
            name: "Tecomán",
            data: [10, 10, 11, 12, 13, 13, 13, 14, 14, 17, 19, 20, 22, 22, 22, 23, 24, 26, 27, 27, 28, 28, 29, 29, 33, 35, 37, 45, 48, 52, 54, 60, 62, 65, 71, 73, 79, 86, 88, 92, 93, 103, 108, 115, 121, 139, 157, 166, 169, 184, 207, 214, 226, 240]
        },
        {
            name: "Manzanillo",
            data: [77, 87, 89, 91, 95, 99, 101, 108, 117, 124, 131, 139, 140, 141, 152, 165, 171, 185, 195, 199, 207, 216, 232, 243, 250, 264, 267, 280, 294, 308, 319, 334, 342, 352, 356, 367, 377, 398, 411, 426, 436, 441, 453, 461, 470, 485, 515, 517, 518, 536, 544, 554, 572, 578]
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
    colors: ["#6610f2", "#14CD10", "#387AED", "#c0c0c0"],
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
        categories: ["27 May", "28", "29", "30", "31", "1 Jun", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "1 Jul", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
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