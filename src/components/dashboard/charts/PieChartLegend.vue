<template>
  <ul class="pie-chart__legend">
    <li class="pie-chart__item ">
      <i class="pie-chart__ico"></i>
      <p class="pie-chart__text">Active</p>
    </li>

    <li class="pie-chart__item pie-chart__item--completed">
      <i class="pie-chart__ico"></i>
      <p class="pie-chart__text">Completed</p>
    </li>

    <li class="pie-chart__item pie-chart__item--ended">
      <i class="pie-chart__ico"></i>
      <p class="pie-chart__text">Ended</p>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'PieChartLegend'
  }
</script>
<style scoped>

  .pie-chart__legend {
    --chart-color-active: #FFB946;
    --chart-color-completed: #2ED47A;
    --chart-color-ended: #F7685B;
  }

  .pie-chart__item {
  }

  .pie-chart__item--completed {
    .pie-chart__ico {
      background-color: var(--chart-color-completed);
    }
  }

  .pie-chart__item--ended {
    .pie-chart__ico {
      background-color: var(--chart-color-ended);
    }
  }

  .pie-chart__ico {
    position: relative;
    margin-right: 8px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--chart-color-active);

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #FFFFFF;
    }
  }

  .pie-chart__text {
    display: inline-block;
    font-size: 0.875rem;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: #192A3E;
  }
</style>
