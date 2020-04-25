<template>
  <div>
    <div class="row">
      <div class="col-lg-4 col-sm-4" v-for="stats in statsCards">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <div class="row">

      <div class="col-lg-6 col-sm-6">
        <chart-card :chart-data="earningsChart.data" :chart-options="earningsChart.options">
          <span slot="title">$34,657</span>
          <span slot="title-label" class="label label-success">
            +18%
          </span>
          <h6 slot="subtitle">
            total earnings
          </h6>
          <div slot="footer-title">
            Financial Statistics
          </div>
          <button slot="footer-right" class="btn btn-info btn-fill btn-icon btn-sm">
            <i class="ti-plus"></i>
          </button>
        </chart-card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="70"
                          title="Dashboard"
                          description="Monthly sales target"
                          color="blue">
        </circle-chart-card>
      </div>
      
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="37"
                          title="Task"
                          description="Complete task"
                          color="brown">
        </circle-chart-card>
      </div>
    </div>
  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
    },
    data () {
      return {
        statsCards: [
          {
            type: 'success',
            icon: 'ti-wallet',
            title: 'Revenue',
            value: '$1,345',
            footerText: 'Last day',
            footerIcon: 'ti-calendar'
          },
          {
            type: 'info',
            icon: 'ti-email',
            title: 'Notification',
            value: '2',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            type: 'danger',
            icon: 'ti-user',
            title: 'Total Employees',
            value: '31',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          }
        ],
        earningsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
              [230, 340, 400, 300, 570, 500, 800]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-green'
            }
          }
        }

      }
    }
  }

</script>
<style>

</style>
