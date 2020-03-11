<template>
  <div class="clients">
    <div class="clients__wrapper wrapper">
      <div class="clients__header">
        <LandingSectionHeader class="section-header--light"/>
      </div>
      <ul class="clients__list">
        <li v-for="(item, index) in clients" class="clients__item">
          <a href="#" class="clients__link">{{ item.name || 'Logo client ' + (index + 1) }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import LandingSectionHeader from "./LandingSectionHeader";
  export default {
    components: {LandingSectionHeader},
    data(){
      return {
        clients: [
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: ''},
          {name: 'More clients'}
        ]

      }
    }
  }
</script>


<style scoped>
  .clients__header {
    margin-bottom: 50px;

    @media (--viewport-tablet) {
      margin-bottom: 111px;
    }
  }

  .clients__list {
    display: flex;
    flex-wrap: wrap;
  }

  .clients__item {
    width: 50%;
    min-height: 128px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255, 0.4);
    box-sizing: border-box;
    @media (--viewport-tablet) {
      width: 25%;
    }

    &:nth-child(even) {
      border-right: none;

      @media (--viewport-tablet) {
        border-right: 1px solid rgba(255,255,255, 0.4);
      }
    }

    &:nth-child(n+3) {
      border-top: 1px solid rgba(255,255,255, 0.4);
      @media (--viewport-tablet) {
        border-top: 0;
      }
    }

    &:last-child {
      background-color: #4E86BB;
      .clients__name {
        text-transform: none;
      }
    }

    &:nth-child(n+5) {
      @media (--viewport-tablet) {
        border-top: 1px solid rgba(255,255,255, 0.4);
      }
    }
    &:nth-child(4n) {
      @media (--viewport-tablet) {
        border-right: none;
      }
    }
  }

  .clients__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    color: var(--color-white);
    font-weight: 500;
    transition: .3s ease;

    &:hover {
      opacity: .7;
    }
  }
</style>
