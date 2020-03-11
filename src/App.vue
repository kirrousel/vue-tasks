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
#app {
 height: 100%;
}
#nav {
  padding: 10px 15px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #F5f5f5;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
