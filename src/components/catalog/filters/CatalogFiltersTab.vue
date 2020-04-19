<template>
  <div class="filters-tab" :class="{'filters-tab--open': isOpen}">
    <div class="filters-tab__header">
      <button class="filters-tab__button"
              type="button"
              @click="toggleFilter"
      >
        {{ title }}
      </button>
    </div>
    <div class="filters-tab__content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isOpen: false,
      }
    },
    props: ['title'],
    methods: {
      toggleFilter() {
        this.isOpen = !this.isOpen;
      },
    },
  }
</script>

<style scoped>
  .filters-tab {
    width: 100%;
  }

  .filters-tab--open {
    .filters-tab__content {
      display: block;
    }

    .filters-tab__button {
      &:before {
        content: none;
      }
    }

  }

  .filters-tab__header {
  }



  .filters-tab__button {
    position: relative;
    display: block;
    width: 100%;
    font-weight: 500;
    text-align: left;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 11px;
      height: 1px;
      background-color: #1B1A17;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translateY(-50%);
      width: 1px;
      height: 11px;
      background-color: #1B1A17;
    }

  }
  .filters-tab__content {
    padding-top: 24px;
    display: none;
  }
</style>
