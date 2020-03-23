<template>
  <div class="user">
    <div class="user__box">
      <img class="user__img" src="https://picsum.photos/100/100">
    </div>
    <div class="user__box user__box--info">
      <p class="user__name">Sierra Ferguson</p>
      <p class="user__email">s.ferguson@gmail.com</p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .user {
    display: flex;
    align-items: center;
    margin: 0 -8px;
  }

  .user--small {
    .user__box--info {
      display: none;
    }
  }

  .user__box {
    padding: 0 8px;
  }

  .user__img {
    border-radius: 50%;
    width: 46px;
    height: 46px;
  }

  .user__name {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--dashboard-black);
    line-height: 21px;
  }
  .user__email {
    font-size: 0.6875rem;
    color: var(--dashboard-grey);
    font-weight: 500;
    line-height: 16px;
  }
</style>
