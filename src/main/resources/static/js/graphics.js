$(document).ready(
    function() {
        $.ajax({
            url : "/admin/reports/api/logs/visits",
            success : function(result) {
                var date = [];
                var visitsCount = [];
                console.log(result);
                Object.keys(result).forEach(
                    function(key) {
                        date.push(key);
                        visitsCount.push(result[key]);
                    });
                drawHistoryChart(date, visitsCount);
            }
        });
    });

function drawHistoryChart(date, visitsCount) {
    Highcharts.chart('container-bar', {
        chart : {
            type : 'line',
            // styledMode : true
        },
        title : {
            text : $('#history_title').val()
        },
        xAxis : [ {
            title : {
                text : $('#history_axis_x').val()
            },
            categories : date
        } ],
        yAxis : [ {
            className : 'highcharts-color-0',
            title : {
                text : $('#history_axis_y').val()
            }
        } ],
        series : [ {
            name: $('#history_data').val(),
            data : visitsCount
        } ]
    });
}