<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__item"
        :class="{'nav__item--active': navItem.isActive}"
        v-for="(navItem, index ) in navList"
        :key="index"
      >
        <a class="nav__link" href="#"> {{ navItem.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [
          {title: 'Каталог', isActive: true},
          {title: 'Акции', isActive: false},
          {title: 'Доставка', isActive: false},
          {title: 'Контакты', isActive: false},
        ]
      }
    }
  }
</script>

<style scoped>
  .nav__list {
    display: flex;
    min-width: 422px;
    align-items: center;
    justify-content: space-between;
  }

  .nav__item {
    padding: 0 10px;
    box-sizing: border-box;
  }

  .nav__item--active {
    .nav__link {
      color: #A69876;
    }
  }

  .nav__link {
    font-family: var(--font-catalog-primary);
    color: #555248;
    font-size: 0.875rem;
    line-height: 1.14;
  }
</style>
