<template>
  <div class="line-chart">
    <canvas id="line-chart"></canvas>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  export default {
    data() {
      return {
        color: null,
      }
    },
    methods: {
      createChart(chartId) {
        const ctx = document.getElementById(chartId);
        const gradientFill = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.getContext('2d').canvas.height);
        gradientFill.addColorStop(0, 'rgba(16, 156, 241, 0.2)');
        gradientFill.addColorStop(1, 'rgba(16, 156, 241, 0)');

        const myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
            datasets: [
              {
                label: 'Deals',
                borderColor: '#109CF1',
                fill: true,
                borderWidth: 2,
                pointBackgroundColor: '#ffffff',
                pointRadius: 3,
                pointBorderWidth: 2,
                backgroundColor: gradientFill,
                data: [{
                  x: 10,
                  y: 70
                }, {
                  x: 20,
                  y: 50
                }, {
                  x: 30,
                  y: 200
                }, {
                  x: 40,
                  y: 150
                }]
              },
            ]
          },
          options: {
            legend: false,
            responsive: true,
            lineTension: 1,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  stepSize: 50,

                },
                gridLines: {
                  borderDash: [5],
                  drawBorder: false,
                  zeroLineBorderDash: [5]
                }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                }
              }]
            },

          }
        });
      }
    },
    mounted() {
      this.createChart('line-chart');
    }
  }
</script>

<style scoped>
  .line-chart {
    width: 100%;
    height: 100%;
  }

  #line-chart {
   width: 100% !important;
   height: 100% !important;
  }
</style>
