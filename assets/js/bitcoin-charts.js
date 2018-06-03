/**
 * Chart types:
 * price, priceUSD, priceEUR, priceCNY - requires div "price-chart-" + currency
 *
 * All chart types of the "old API" are supported. Just convert their url / name to camelCase. For example:
 * transactionsPerDay, hashRate, averageTransactionFees, transactionFees, outputsVolume, coinsInCirculation, etc.
 */

Chart.defaults.global.responsive = true;
Chart.defaults.Line.scaleShowHorizontalLines = false;
Chart.defaults.Line.scaleShowVerticalLines = false;

// Custom type of chart, which only displays half the x axis labels
Chart.types.Line.extend({
    name: "LineCompact",
    initialize: function (data) {
        Chart.types.Line.prototype.initialize.apply(this, arguments);
        var xLabels = this.scale.xLabels;

        xLabels.forEach(function (label, i) {
          if (i % 3 != 0){
            xLabels[i] = '';
          }
        });
    }
});

/* I'll try to write a month chart here.

Chart.types.Line.extend({
  name: "LineMonth",
  initialize: function(data){
    Chart.types.Line.prototype.initialize.apply(this, arguments);
    var xLabels = this.scale.xLabels;

    xLabels.foreach(function(label, i) {

    });
  }
});*/

// This function formats a date to the desired format for charts.
Date.prototype.chartLabel = function() {
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 var yyyy = this.getFullYear().toString();
 var dd  = this.getDate().toString();
 return (dd[1]?dd:"0"+dd[0]) + ' ' + monthNames[this.getMonth()] + ' ' + yyyy;
};

Date.prototype.chartUrl = function() {
  var month = '' + (this.getMonth() + 1),
      day = '' + this.getDate(),
      year = this.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

var BitcoinCharts = {
  DATE: new Date(),
  KAIKO_URL: 'https://api.kaiko.com/v1/stats/%NAME%?json=true&from=%DATE%',
  colors: null,
  defaultChartData: null,
  oldApiChartOptions: null,

  /**
   * This function initializes a bitcoin chart, takes a type of chart as parameter.
   * It is used for easier, automatic intialization.
   */
  initChart: function(chart){
    var self = this;
    self.DATE.setMonth(self.DATE.getMonth() - 3);
    self.KAIKO_URL = self.KAIKO_URL.replace('%DATE%', self.DATE.chartUrl());
    self.colors = {
      'primary': 'rgba(170, 200, 101, 1)',
      'primaryFill': 'rgba(170, 200, 101, 0.2)',
      'secondary': 'rgba(188,150,1,1)',
      'secondaryFill': 'rgba(188,150,1,0.2)'
    };
    self.defaultChartData = {
      labels: [],
      datasets: [
        {
          label: '',
          fillColor: this.colors['primaryFill'],
          strokeColor: this.colors['primary'],
          pointColor: this.colors['primary'],
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: []
        }
      ]
    };
    self.oldApiChartOptions = {
      pointHitDetectionRadius: 1,
      pointDot: false
    };

    switch(chart){
      case 'price':
        self.createPriceChart();
        break;
      case 'priceUSD':
        self.createPriceChart('usd');
        break;
      case 'priceEUR':
        self.createPriceChart('eur');
        break;
      case 'priceCNY':
        self.createPriceChart('cny');
        break;
      default:
        self.createSimpleChart(chart);
        break;
    }
  },

  createSimpleChart: function(name){
    var self = this,
        realName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        url = (typeof realName != 'undefined' ? self.KAIKO_URL.replace("%NAME%", realName) : null),
        container = (typeof realName != 'undefined' ? '#' + realName + '-chart' : null),
        chartData = self.defaultChartData,
        chartOptions = self.oldApiChartOptions;

    $.getJSON(url, function(data){
      $.extend(true, chartData, { 'datasets': [{ 'label': data.name }]});

      $.each(data.dates.reverse(), function(index, value){
        chartData['labels'].push(new Date(value).chartLabel());
      });

      $.each(data.values.reverse(), function(index, value){
        chartData['datasets'][0]['data'].push(value);
      });
    }).done(function(){
      new Chart($(container).get(0).getContext("2d")).LineCompact(chartData, chartOptions);
    });
  },

  createPriceChart: function(currency){
    var self = this,
        currencies = {
          usd: '$',
          eur: '€',
          cny: 'CNY'
        },
        currency = currency || 'usd',
        exchange = (currency === 'cny' ? 'btcchina' : 'coinbase'),

        // This is the object passed to the chart for formatting, styling, etc.
        chartOptions = {
          // Set the templates for the axis labels and tooltips.
          scaleLabel: (currency === 'usd' ? currencies[currency] : '' )
                      + '<%= value %>'
                      + (currency != 'usd' ? currencies[currency] : ''),
          multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%>"
                                + (currency === 'usd' ? currencies[currency] : '')
                                + "<%= value %>"
                                + (currency != 'usd' ? currencies[currency] : ''),
        },

        /*
         * This is the option containing the chart data, we're only initializing
         * the necessary empty objects and a minimum amount of data, as that
         * will be loaded dynamically from our source.
         */
        chartData = {
          labels: [],
          datasets: [
            {
              label: 'High',
              fillColor: this.colors['primaryFill'],
              strokeColor: this.colors['primary'],
              pointColor: this.colors['primary'],
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            },
            {
              label: 'Low',
              fillColor: this.colors['secondaryFill'],
              strokeColor: this.colors['secondary'],
              pointColor: this.colors['secondary'],
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: []
            }
          ]
        },
        ctx = $("#price-chart-" + currency).get(0).getContext("2d");

    // Retrieve the JSON data from Kaiko's API and format it for our chart.
    $.getJSON('https://api.kaiko.com/v1/history/exchanges?exchanges=' + exchange, function(data){
      var tmpValues = data[exchange]['btc' + currency].reverse();

      $.each(tmpValues, function(){
        chartData['labels'].push(new Date(this['timestamp'] * 1000).chartLabel());
        chartData['datasets'][0]['data'].push(this['h']);
        chartData['datasets'][1]['data'].push(this['l']);
      });
    }).done(function(){
      // Draw the chart with the data and options.
      new Chart(ctx).LineCompact(chartData, chartOptions);
    });
  }
};
