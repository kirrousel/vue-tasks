<template>
  <div class="pie-chart">
    <div class="pie-chart__box pie-chart__box--chart">
      <div class="pie-chart__value">
        <div class="pie-chart__segment" style="--offset: 360; --value: 10; --bg: var(--chart-color-ended)"></div>
        <div class="pie-chart__segment" style="--offset: 330; --value: 30; --bg: var(--chart-color-active)"></div>
        <div class="pie-chart__segment" style="--offset: 270; --value: 60; --bg: var(--chart-color-completed); --over50: 1"></div>
        <span class="pie-chart__current">60%</span>
      </div>
    </div>
    <div class="pie-chart__box">
      <PieChartLegend/>
    </div>

  </div>
</template>

<script>
  import PieChartLegend from "./PieChartLegend";

  export default {
    components: {PieChartLegend}
  }
</script>

<style scoped>
  .pie-chart {
    --chart-color-active: #FFB946;
    --chart-color-completed: #2ED47A;
    --chart-color-ended: #F7685B;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 -10px;
    height: 100%;

    @media (--viewport-tablet) {
      margin: 0 -22px;
    }

    @media (--viewport-desktop) {
      justify-content: flex-start;
    }
  }
  .pie-chart__box {
    padding: 0 10px;
    box-sizing: border-box;

    @media (--viewport-tablet) {
      padding: 0 22px;
    }
  }

  .pie-chart__box--chart {
  }

  .pie-chart__value {
    position: relative;
    height:  170px;
    width: 170px;
    border-radius: 100%;
    overflow: hidden;

    @media (--viewport-tablet) {
      height:  218px;
      width: 218px;
    }
  }

  .pie-chart__segment {
    --a: calc(var(--over50, 0) * -100%);
    --b: calc((1+ var(--over50, 0)) * 100%);
    --degrees: calc((var(--offset, 0) / 100) * 360);
    position: absolute;
    height: 100%;
    width: 100%;
    transform: translate(0, -50%) rotate(90deg) rotate(calc(var(--degrees) * 1deg));
    transform-origin: 50% 100%;
    clip-path: polygon(var(--a) var(--a), var(--b) var(--a), var(--b) var(--b), var(--a) var(--b));

    &:before, &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--bg);
    }

    &:before {
      --degrees: calc((var(--value, 45) / 100) * 360);
      transform: translate(0, 100%) rotate(calc(var(--degrees) * 1deg));
      transform-origin: 50% 0;
    }

    &:after {
      opacity: var(--over50, 0);
    }
  }

  .pie-chart__circle {
    border-radius: 50%;
    clip: rect(0px, 109px, 218px, 0px);
    height: 100%;
    position: absolute;
    width: 100%;
    font-family: monospace;
    font-size: 1.5rem;
  }

  .pie-chart__portion--active {
    transform: rotate(50deg);

    .pie-chart__circle {
      background-color: var(--chart-color-active);
      transform: rotate(185deg);
    }
  }

  .pie-chart__portion--completed {
    transform: rotate(225deg);

    .pie-chart__circle {
      background-color: var(--chart-color-completed);
      transform: rotate(55deg);
    }
  }

  .pie-chart__portion--ended {
    transform: rotate(185deg);

    .pie-chart__circle {
      background-color: var(--chart-color-ended);
      transform: rotate(225deg);
    }
  }


  .pie-chart__current {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    font-size: 3.5rem;
    color: var(--chart-color-completed);
    background-color: #FFFFFF;
    border-radius: 50%;
  }

</style>
