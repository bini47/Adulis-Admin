$(function () {
    new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
});
function getChartJs(type) {
    var config = null;   
    if (type === 'radar') {
        config = {
            type: 'radar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [65, 25, 90, 81, 56, 55, 40],
                    borderColor: 'rgba(241,95,121, 0.8)',
                    backgroundColor: 'rgba(241,95,121, 0.5)',
                    pointBorderColor: 'rgba(241,95,121, 0)',
                    pointBackgroundColor: 'rgba(241,95,121, 0.8)',
                    pointBorderWidth: 1
                }, {
                        label: "My Second dataset",
                        data: [72, 48, 40, 19, 96, 27, 100],
                        borderColor: 'rgba(140,147,154, 0.8)',
                        backgroundColor: 'rgba(140,147,154, 0.5)',
                        pointBorderColor: 'rgba(140,147,154, 0)',
                        pointBackgroundColor: 'rgba(140,147,154, 0.8)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }    
    return config;
}

//=========================
$(function() {
    var options;

    var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 150, 100],
        ]
    };

    // line chart
    options = {
        height: "300px",
        showPoint: true,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
        plugins: [
            Chartist.plugins.tooltip({
                appendToBody: true
            }),
        ]
    };
    new Chartist.Line('#line-chart', data, options);


    // bar chart
    options = {
        height: "300px",
        axisX: {
            showGrid: false
        },
        plugins: [
            Chartist.plugins.tooltip({
                appendToBody: true
            }),
        ]
    };
    new Chartist.Bar('#bar-chart', data, options);


    // area chart
    options = {
        height: "270px",
        showArea: true,
        showLine: false,
        showPoint: true,
        axisX: {
            showGrid: false
        },
        lineSmooth: false,
    };
    new Chartist.Line('#area-chart', data, options);


    // multiple chart
    var dataMultiple = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
            name: 'series-real',
            data: [200, 380, 350, 320, 410, 450, 570, 400, 555, 620, 150, 100],
        }, {
            name: 'series-projection',
            data: [240, 350, 360, 380, 400, 450, 480, 523, 555, 600, 700, 800],            
        }]
    };
    options = {
        lineSmooth: false,
        height: "230px",
        low: 0,
        high: 'auto',
        series: {
            'series-projection': {
                showPoint: true,                
            },
        },
        
        options: {
            responsive: true,
            legend: false
        },

        plugins: [
            Chartist.plugins.legend({
                legendNames: ['Actual', 'Projection']
            })
        ]
    };
    new Chartist.Line('#multiple-chart', dataMultiple, options);


    // pie chart
    var dataPie = {
        series: [5, 3, 4]
    };
    var labels = ['Direct', 'Organic', 'Referral'];
    var sum = function(a, b) {
        return a + b;
    };
    new Chartist.Pie('#pie-chart', dataPie, {
        height: "270px",
        labelInterpolationFnc: function(value, idx) {
            var percentage = Math.round(value / dataPie.series.reduce(sum) * 100) + '%';
            return labels[idx] + ' (' + percentage + ')';
        }
    });


    // donut chart
    var dataDonut = {
        series: [20, 10, 30, 40]
    };
    new Chartist.Pie('#donut-chart', dataDonut, {
        height: "270px",
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 270,
        showLabel: true
    });


    // stacked bar chart
    var dataStackedBar = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
            [800000, 1200000, 1400000, 1300000],
            [200000, 400000, 500000, 300000],
            [100000, 200000, 400000, 600000]
        ]
    };
    new Chartist.Bar('#stackedbar-chart', dataStackedBar, {
        height: "270px",
        stackBars: true,
        axisX: {
            showGrid: false
        },
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1000) + 'k';
            }
        },
        plugins: [
            Chartist.plugins.tooltip({
                appendToBody: true
            }),
        ]
    }).on('draw', function(data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });


    // horizontal bar chart
    var dataHorizontalBar = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: [
            [5, 4, 3, 7, 5, 10, 3],
            [3, 2, 9, 5, 4, 6, 4]
        ]
    };
    new Chartist.Bar('#horizontalbar-chart', dataHorizontalBar, {
        height: "270px",
        seriesBarDistance: 15,
        reverseData: true,
        horizontalBars: true,
        axisY: {
            offset: 75
        }
    });


    var randomScalingFactor = function() {
        return Math.round(Math.random() * 100);
    };    
    var chartColors = window.chartColors;
    var color = Chart.helpers.color;
    var config = {
        data: {
            datasets: [{
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                backgroundColor: [
                    color(chartColors.red).alpha(0.5).rgbString(),
                    color(chartColors.orange).alpha(0.5).rgbString(),
                    color(chartColors.yellow).alpha(0.5).rgbString(),
                    color(chartColors.green).alpha(0.5).rgbString(),
                    color(chartColors.blue).alpha(0.5).rgbString(),
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow",
                "Green",
                "Blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
                ticks: {
                    beginAtZero: true
                },
                reverse: false
            },
            animation: {
                animateRotate: false,
                animateScale: true
            }
        }
    };    
    window.onload = function() {
        var ctx = document.getElementById("chart-area");
        window.myPolarArea = Chart.PolarArea(ctx, config);
    };

});
    