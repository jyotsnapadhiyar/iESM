google.charts.load('current', {packages:['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function week() {
    var data = google.visualization.arrayToDataTable([
        ['Week', 'kWh'],
        ['Sun', 576],
        ['Mon', 1256],
        ['Tue', 1286],
        ['Wed', 1233],
        ['Thu', 1301],
        ['Fri', 1202]
      ]);
    
    //   var view = new google.visualization.DataView(data);
    //   view.setColumns([0, 1,
    //                    { calc: "stringify",
    //                      sourceColumn: 1,
    //                      type: "string",
    //                      role: "annotation",
    //                      displayZoomButtons: true },
    //                     ]);
    
      var options = {
        'legend':'bottom',
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        backgroundColor: {
            fill: '#23232D',
            },
        legendTextStyle: { color: '#ffffff' },
        hAxis: {title: 'Days',
            textStyle:{color: '#FFF'}
        },
        vAxis: {title: 'kWh',
            textStyle:{color: '#FFF'}
        },
        colors: ['cyan', '#28a8a8'],
      };
      var chart = new google.visualization.ComboChart(document.getElementById("weekly-cons"));
      chart.draw(data, options);
}

function topBranch() {
    var data = google.visualization.arrayToDataTable([
        ['Branch', 'kWh', 'Baseline'],
        ['Wakad', 976, 1400],
        ['Andheri', 1325, 1500],
        ['Milind', 1586, 1700],
        ['Goregaon', 1233, 1500],
        ['Law Col.', 1401, 1700],
        ['Kalyan', 1202, 1400]
      ]);
    
    //   var view = new google.visualization.DataView(data);
    //   view.setColumns([0, 1,
    //                    { calc: "stringify",
    //                      sourceColumn: 1,
    //                      type: "string",
    //                      role: "annotation",
    //                      displayZoomButtons: true },
    //                     ]);
    
      var options = {
        'legend':'bottom',
        seriesType: 'bars',
        series: {1: {type: 'line'}},
        backgroundColor: {
            fill: '#23232D',
            },
        legendTextStyle: { color: '#ffffff' },
        hAxis: {title: 'Days',
            textStyle:{color: '#FFF'}
        },
        vAxis: {title: 'kWh',
            textStyle:{color: '#FFF'}
        },
        colors: ['cyan', '#28a8a8'],
      };
      var chart = new google.visualization.ComboChart(document.getElementById("top-branch"));
      chart.draw(data, options);
}

function allSitesMonthly (){
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Forecasted Consumption', 'Actual Consumption'],
        ['Sep', 1200, 1134],
        ['Oct', 1000, 987],
        ['Nov', 1000, 950],
        ['Dec', 1000, 809],
        ['Jan', 1100, 790],
        ['Feb', 1100, 920]
      ]);
    
      var options = {
        'legend':'bottom',
        'is3D':true,
        backgroundColor: {
            fill: '#23232D',
            },
        legendTextStyle: { color: '#ffffff' },
        hAxis: {
            textStyle:{color: '#FFF'}
        },
        vAxis: {
            textStyle:{color: '#FFF'}
        },
        colors: ['cyan', '#28a8a8'],
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("month-cons"));
      chart.draw(data, options);
}

function ytdPie1(){
    var data = google.visualization.arrayToDataTable([
        ['Focasted Consumption', 'Actual Consumption'],
        ['Focasted Consumption',     11],
        ['Actual Consumption',      9]
      ]);

      var options = {
        'legend':'bottom',
        'is3D':true,
        backgroundColor: {
            fill: '#23232D',
            },
        legendTextStyle: { color: '#ffffff' },
        
        colors: ['cyan', '#28a8a8'],
        pieSliceTextStyle: {
            color: 'black'
        }
      }

      var chart = new google.visualization.PieChart(document.getElementById("pie1"));
      chart.draw(data, options);
}

function ytdPie2(){
    var data = google.visualization.arrayToDataTable([
        ['Focasted Saving', 'Actual Saving'],
        ['Focasted Saving',     11],
        ['Actual Saving',      10.5]
      ]);

      var options = {
        'legend':'bottom',
        'is3D':true,
        backgroundColor: {
            fill: '#23232D',
            },
        legendTextStyle: { color: '#ffffff' },
        
        colors: ['cyan', '#28a8a8'],
        pieSliceTextStyle: {
            color: 'black'
        }
      }

      var chart = new google.visualization.PieChart(document.getElementById("pie2"));
      chart.draw(data, options);
}

function savingINR(){
  var data = google.visualization.arrayToDataTable([
    ['Date','INR'],
    ['2023-03-01', 21],
    ['2023-03-02', 24],
    ['2023-03-03', 28],
    ['2023-03-04', 17],
    ['2023-03-05', 23],
    ['2023-03-06', 21],
    ['2023-03-07', 19]
  ]);

  var options = {
    'legend':'none',
    backgroundColor: {
        fill: '#23232D',
        },
    legendTextStyle: { color: '#ffffff' },
    
    colors: ['cyan', '#28a8a8'],
    vAxis: {
      gridlines: {
        interval: 0
      }
    },
    pointSize: 6,
  };

  var chart = new google.visualization.LineChart(document.getElementById("savingsINR"));
  chart.draw(data, options);
}

function drawVisualization() {
    week()
    topBranch()
    allSitesMonthly()
    ytdPie1()
    ytdPie2()
    savingINR()
}


