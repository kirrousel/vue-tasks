<template>
  <div class="dashboard">
    <div class="dashboard__content">
      <div class="dashboard__section dashboard__section--big">
        <div class="dashboard__box">
          <DashboardSectionHeader
            class="dashboard-section-header--extended"
            is-extended="true"
          />
          <div class="dashboard__tasks">
            <DashboardTaskList/>
          </div>
        </div>
      </div>

      <div class="dashboard__section dashboard__section--small">
        <div class="dashboard__item">
          <div class="dashboard__box">
            <DashboardSectionHeader/>
            <div class="dashboard__chart">
              <DashboardLineChart/>
            </div>
          </div>
        </div>
        <div class="dashboard__item">
          <div class="dashboard__box">
            <DashboardSectionHeader/>
            <div class="dashboard__chart">
              <DashboardPieChart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import DashboardLineChart from '../components/dashboard/charts/DashboardLineChart.vue';
  import DashboardPieChart from '../components/dashboard/charts/DashboardPieChart.vue';
  import DashboardSectionHeader from "../components/dashboard/layout/DashboardSectionHeader.vue";
  import DashboardTaskList from "../components/dashboard/tasks/DashboardTaskList.vue";

  export default {
    components: { DashboardSectionHeader, DashboardLineChart, DashboardPieChart, DashboardTaskList },
  }


</script>

<style>
  .dashboard {
    height: calc(100% - 60px);
    width: 100%;
    padding: 15px 15px;
    box-sizing: border-box;

    @media (--viewport-desktop) {
      padding: 15px 35px;
    }
  }

  .dashboard__content {
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (--viewport-desktop) {
      flex-direction: row;
      margin: 0 -15px;
    }
  }

  .dashboard__section {
    width: 100%;
    box-sizing: border-box;

    @media (--viewport-desktop) {
      width: 41%;
      padding: 0 15px;
    }
  }

  .dashboard__section--big {
    margin-bottom: 30px;
    @media (--viewport-desktop) {
      margin-bottom: 0;
      width: 59%;
    }
  }

  .dashboard__section--small {
    display: flex;
    flex-direction: column;
    margin: -5px 0;
  }

  .dashboard__item {
    min-height: 270px;
    height: 50%;
    padding: 5px 0;
    box-sizing: border-box;
  }

  .dashboard__box {
    height: 100%;
    background-color: var(--color-white);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
  }

  .dashboard__chart {
    padding: 16px 10px;
    height:  calc(100% - 55px);
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding: 16px 24px;
    }
  }
</style>
