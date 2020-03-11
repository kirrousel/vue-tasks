<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'BaseLanding'}">Landing</router-link> |
      <router-link :to="{name: 'BaseDashboard'}" >Dashboard</router-link> |
      <router-link :to="{name: 'BaseCatalog'}" >Catalog</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  padding: 30px 15px;
  text-align: center;
  margin-bottom: 15px;
  box-shadow: 0 0 15px 0 rgba(0,0,0,.2);
  box-sizing: border-box;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
