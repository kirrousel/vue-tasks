<template>
  <div class="range-slider">
    <VueSlider
      v-model="value"
      :tooltip="'always'"
      :tooltipPlacement="'bottom'"
      :dotSize="10"
      :min="0"
      :max="100000"
      :tooltip-formatter="'{value} ₽'"
    />
  </div>
</template>

<script>
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/default.css'
  export default {
    components: {VueSlider},
    data () {
      return {
        value: [12000, 90000],
      }
    },
  }
</script>

<style>

  .range-slider {
    padding-bottom: 20px;
  }

  .vue-slider-rail {
    background-color: #D4D4D4;
    height: 1px;
  }

  .vue-slider-process {
    background-color: #1B1A17;
  }

  .vue-slider-dot-handle {
    border: 1px solid #1B1A17;
    box-shadow: none;
  }

  .vue-slider-dot-tooltip-bottom {
    bottom: 0;
  }

  .vue-slider-dot-tooltip-inner-bottom {
    background-color: #FFFFFF;
    &:after {
      display: none;
    }
  }


  .vue-slider-dot-tooltip-text {
    font-family: var(--font-catalog-primary);
    font-size: 0.75rem;
    line-height: 1.17;
    color: #1B1A17;
  }

</style>
