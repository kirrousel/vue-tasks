<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        v-for="item in navItems"
        class="nav__item"
        :class="{'nav__item--active': item.isActive}"
      >
        <a
          class="nav__link"
          :href="item.link"

        >
          <svg class="nav__ico">
            <use :href="'#dashboard-' + item.ico"></use>
          </svg>
          <span class="nav__text"> {{ item.text }} </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: ['navItems'],
  }
</script>

<style scoped>

  .nav {}

  .nav--small {
    .nav__item {
      width: 100%;
      padding: 10px 11px;
    }
    .nav__link {
      height: 24px;
      width: 100%;
      padding: 0;
    }
    .nav__text {
      display: none;
    }

    .nav__ico {
      width: 24px;
      height: 24px;
      left: 11px;
      transition: .3s ease;
    }
  }

  .nav__item {
    padding: 10px 24px;
    box-sizing: border-box;
    &:hover {
      background-color: #f5f6f87a;
    }
  }

  .nav__item--active {
    .nav__ico {
      fill: var(--dashboard-accent-blue);
    }
    .nav__text {
      color: var(--dashboard-accent-blue);
    }
  }

  .nav__link {
    position: relative;
    display: flex;
    padding-left: 34px;
    line-height: 20px;
    font-size: 0.8125rem;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: var(--dashboard-dark-blue);
    box-sizing: border-box;
  }

  .nav__ico {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    fill: var(--dashboard-grey-icon);
  }

</style>
