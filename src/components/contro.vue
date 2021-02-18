<template>
  <div class="contro">
    <div class="switch-button" :class="{'scroll-down':homeHeader}">
      <div class="active"
      :class="{ left: switch_way === 'EN', right: switch_way === 'CN' }"></div>

      <button @click="switchLang('EN')" class="switch-button-case left">
        <div
          class="text"
          :class="{ white: switch_way === 'EN', black: switch_way === 'CN' }"
        >
          EN
        </div>
      </button>

      <button @click="switchLang('CN')" class="switch-button-case right">
        <div
          class="text"
          :class="{ black: switch_way === 'EN', white: switch_way === 'CN' }"
        >
          CN
        </div>
      </button>
    </div>

  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: 'contro',
  data () {
    return {
      switch_way: Cookies.get('language')
    }
  },
  props: {
    homeHeader: Boolean
  },
  methods: {
    switchLang (lang) {
      this.switch_way = lang
      this.$i18n.locale = lang
      Cookies.set('language', lang)
    }
  }
}
</script>

<style lang="scss" scope>
.contro {
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .switch-button {
    width: 183px;
    height: 40px;
    text-align: center;
    position: relative;
    will-change: transform;
    border-radius: 5px;
    transition: 0.3s ease all;
    border: 2px solid #fff;
    background: transparent;
    &-case {
      cursor: pointer;
      display: inline-block;
      background: transparent;
      width: 49%;
      height: 100%;
      position: relative;
      border: none;
      transition: 0.3s ease all;
      text-transform: uppercase;
      letter-spacing: 5px;
      padding-bottom: 1px;
      .text {
        font-size: 18px;
        padding: 5px 25px;
        position: relative;
        z-index: 99;
        &.black {
          color: #a1a1a1;
        }
        &.white {
          color: #fff;
        }
      }
    }
    .active {
      background-color: #01e6f8;
      border-radius: 5px;
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      z-index: 3;
      transition: 0.3s ease-out all;
      &.left {
        left: 0%;
        color: red;
      }
      &.right {
        left: 50%;
        color: red;
      }
    }
  }
   .scroll-down {
       border: 2px solid #666;
    }
}
@media (max-width: 767px) {
  .contro {
    width: 94%;
    margin: 0 auto;
    .space-between {
      justify-content: space-between;
      width: 100%;
      .v-select {
        height: 38px;
        flex: 0 0 48%;
        margin: 20px 0;
        .vs__dropdown-option {
          line-height: 38px;
        }
        .vs__dropdown-toggle {
          .vs__selected-options {
            height: 38px;
            .vs__selected {
              height: 38px;
            }
          }
        }
      }
    }
    .switch-button {
      width: 100%;
      height: 38px;

      &-case {
        .text {
          font-size: 14px;
          &.black {
          }
          &.white {
          }
        }
      }
      .active {
        &.left {
        }
        &.right {
        }
      }
    }
  }
}
</style>
