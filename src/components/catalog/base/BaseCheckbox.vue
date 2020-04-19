<template>
  <label class="checkbox">
    <slot></slot>
    <div class="checkbox__data">
      <i class="checkbox__ico">
        <svg class="checkbox__mark">
          <use href="#catalog-check"></use>
        </svg>
      </i>

      <p class="checkbox__title"> {{ title }}</p>
    </div>
  </label>
</template>

<script>
  export default {
    name: 'BaseCheckbox',
    props: ['title'],

  }
</script>

<style scoped>
  .checkbox {
    position: relative;
    display: block;

  }

  input {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0,0,0,0);

    &:checked {
      ~ .checkbox__data {
        .checkbox__ico {
          background-color: #909090;
        }

        .checkbox__mark {
          display: block;
        }
      }
    }

  }

  .checkbox__title {
    display: inline-block;
  }

  .checkbox__data {
    position: relative;
    padding-left: 29px;
  }

  .checkbox__ico {
    position: absolute;
    top: 3px;
    left: 0;
    width: 14px;
    height: 14px;
    border: 1px solid #909090;
    box-sizing: border-box;
  }

  .checkbox__mark {
    display: none;
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    width: 10px;
    height: 7px;
    fill: rgba(255, 255, 255, 0.75);
  }

  .checkbox__title {
    font-family: var(--font-catalog-primary);
    font-size: 0.75rem;
    color: #6F6E6D;
  }



</style>
