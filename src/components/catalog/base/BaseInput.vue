<template>
  <label class="input" :class="{'input--filled': isFilled}">
    <input
      ref="input"
      class="input__value"
      :type=type
      @input="checkValue"
      @blur="checkValue"
    >
    <span class="input__data">
      <span class="input__label">{{ label }}</span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'BaseInput',
    data() {
      return {
        isFilled: false,
      }
    },
    methods: {
      checkValue() {
        this.isFilled = this.$refs.input.value.length > 0;
      }
    },

    props: {
      type: {
        type: String,
        default: 'text',
      },
      label: {
        type: String,
      },
    },
  }
</script>

<style scoped>

  .input {
    position: relative;
    min-width: 278px;
    height: 30px;
  }

  .input--filled {
    .input__label {
      font-size: 0.875rem;
      top: -12px;
    }
  }

  .input__label {
    position: absolute;
    font-size: 1rem;
    top: 7px;
    left: 0;
    color: #444240;
    transition: top, font-size .3s ease;
  }

  .input__value {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    background: transparent;
    border-bottom: 1px solid #1B1A17;
    box-sizing: border-box;

    &:focus {
      ~ .input__data {
        .input__label {
          font-size: 0.875rem;
          top: -12px;
        }
      }
    }
  }

</style>
