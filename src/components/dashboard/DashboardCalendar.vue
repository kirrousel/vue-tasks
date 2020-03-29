<template>
  <div class="dashboard-calendar">
    <div class="dashboard-calendar__list">
      <div class="dashboard-calendar__day"
           v-for="(day, index) in days"
           :key="index"
           :class="[{'dashboard-calendar__day--current': day.isCurrent}, {'dashboard-calendar__day--events': day.hasEvents}]"
      >
        <p class="dashboard-calendar__text">{{ day.title }}</p>
        <span class="dashboard-calendar__number">{{ day.number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboardCalendar',
    data() {
      return {
        days: [
          {title: 'Sun', number: '23', hasEvents: true},
          {title: 'Mon', number: '24', isCurrent: true},
          {title: 'Tue', number: '25'},
          {title: 'Wed', number: '26'},
          {title: 'Thu', number: '27'},
          {title: 'Fri', number: '28'},
          {title: 'Sat', number: '29'}
        ]
      }
    }
  }
</script>

<style scoped>
  .dashboard-calendar {

  }

  .dashboard-calendar__list {
    display: flex;
    justify-content: space-evenly;
    margin: 0 -2px;

    @media (--viewport-tablet) {
      margin: 0 -24px;
    }
  }

  .dashboard-calendar__day {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    width: 14.285714286%;
    padding: 5px 2px;
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;

    @media (--viewport-tablet) {
      padding: 5px 24px;
    }
  }

  .dashboard-calendar__day--current {
    .dashboard-calendar__text {
      color: #109CF1;
      opacity: 1;
    }

    .dashboard-calendar__number {
      color: #109CF1;
    }
  }

  .dashboard-calendar__day--events {
    .dashboard-calendar__number {
      background-color: #109CF1;
      color: #FFFFFF;
    }
  }

  .dashboard-calendar__text {
    margin-bottom: 5px;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #334D6E;
    opacity: 0.5;

  }

  .dashboard-calendar__number {
    display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    font-size: 0.75rem;
    line-height: 24px;
    color: #4C5862;

  }

</style>
