<template>
  <div class="dashboard">
    <div class="dashboard__content">
      <div class="dashboard__section dashboard__section--big">
        <div class="dashboard__box"></div>
      </div>
      <div class="dashboard__section dashboard__section--small">
        <div class="dashboard__item">
          <div class="dashboard__box">
            <div class="dashboard__header">
              <p class="dashboard__title">Deals</p>
              <div class="dashboard__select">
                <DashboardSelect/>
              </div>
            </div>
            <div class="dashboard__chart">
              <DashboardLineChart/>
            </div>
          </div>
        </div>
        <div class="dashboard__item">
          <div class="dashboard__box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DashboardLineChart from '../components/dashboard/DashboardLineChart.vue';
  import DashboardSelect from '../components/dashboard/DashboardSelect.vue';
  export default {
    components: {DashboardLineChart, DashboardSelect},
  }


</script>

<style>
  .dashboard {
    height: calc(100% - 60px);
    padding: 35px;
    box-sizing: border-box;
  }

  .dashboard__content {
    display: flex;
    height: 100%;
    margin: 0 -15px;
  }

  .dashboard__section {
    width: 41%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .dashboard__section--big {
    width: 59%;
  }

  .dashboard__section--small {
    display: flex;
    flex-direction: column;
    margin: -15px 0;
  }

  .dashboard__item {
    min-height: 270px;
    height: 50%;
    padding: 15px 0;
    box-sizing: border-box;
  }

  .dashboard__box {
    height: 100%;
    background-color: var(--color-white);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
  }

  .dashboard__header{
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #EBEFF2;
  }

  .dashboard__title {
    flex-grow: 1;
    color: #192A3E;
    font-size: 0.9375rem;
    letter-spacing: 0.01em;
    line-height: 1.5;
    font-weight: 500;
  }

  .dashboard__chart {
    padding: 16px 24px;
  }
</style>
