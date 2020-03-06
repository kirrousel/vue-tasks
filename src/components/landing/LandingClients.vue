<template>
  <div class="clients">
    <div class="clients__wrapper wrapper">
      <div class="clients__header">
        <LandingSectionHeader class="section-header--light"/>
      </div>
      <ul class="clients__list">
        <li v-for="(item, index) in 8" class="clients__item">
          <a class="clients__name">Logo client {{ index + 1 }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import LandingSectionHeader from "./LandingSectionHeader";
  export default {
    components: {LandingSectionHeader}
  }
</script>


<style scoped>
  .clients__header {
    margin-bottom: 111px;
  }

  .clients__list {
    display: flex;
    flex-wrap: wrap;
  }

  .clients__item {
    width: 25%;
    padding: 41px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255, 0.4);
    box-sizing: border-box;
    &:nth-child(n+5) {
      border-top: 1px solid rgba(255,255,255, 0.4);
    }
    &:nth-child(4n) {
      border-right: none;
    }
  }
</style>
