<template>
  <header class="header" id="header" :class="{ scrolled: homeHeader }">
    <nav class="navbar container">
          <a v-scroll-to="'#Banner'" @click="toggle('Home')">
            <img src="../assets/img/lerue-logo.png" />
          </a>
          <div class="visible-xs">
            <div @click="flag = !flag" class="menu-wrapper visible-xs">
                <div class="hamburger-menu" :class="{ animate: flag }" />
            </div>
          </div>
          <!-- pc -->
            <a
            v-for="(item,navIndex) in meta" :key="navIndex"
            v-scroll-to="navItems[navIndex]"
            @click="toggle(navItemsAct[navIndex])"
            class="hidden-xs"
            :class="{active:(select===navItemsAct[navIndex]) && homeHeader}">{{item}}</a>

       <switchBtn class="hidden-xs" :homeHeader="homeHeader" />
    </nav>
        <!-- mobile 收合區域-->
        <div class="collapse" v-show="flag">
            <a
            v-for="(item,navIndex) in meta" :key="navIndex"
            v-scroll-to="navItems[navIndex]"
            @click="toggle(navItemsAct[navIndex])"
            class="col-xs-12 t-center"
            :class="{active:select===navItemsAct[navIndex]}">{{item}}</a>
            <switchBtn class="mt" :homeHeader="homeHeader" @toggle="toggle('Home')" />
        </div>
  </header>
</template>

<script>
import switchBtn from './Contro'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      navItems: ['#Feature', '#Security', '#Count', '#News', '#Contact'],
      navItemsAct: ['Feature', 'Security', 'Count', 'News', 'Contact'],
      flag: false,
      homeHeader: false,
      navloto: false,
      select: ''
    }
  },
  components: { switchBtn },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    meta () {
      return this.$t('Header')
    }
  },
  methods: {
    toggle (item) {
      this.select = item
      if (this.flag === true) this.flag = false
    },
    handleScroll () {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 50
      ) {
        this.homeHeader = true
      } else {
        this.homeHeader = false
        this.select = ''
        if (this.flag === true) this.flag = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/css/menuBtn.scss";

$blue-bg: linear-gradient(-220deg, #1d3ede, #01e6f8);
$black-bg: linear-gradient(-220deg, #3c3c3c, #c0c4cb);

#header {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  justify-content: space-between;
  .navbar {
    display: inline-flex;
    justify-content: space-between;
    background: transparent;
    border: none;
    padding: 8px 0;
    // padding-bottom: 20px;
    transition: all 0.25s ease-in-out;
    display: inline-flex;
    align-items: center;
       a {
        color: #222;
        background: none;
        img {max-width: 150px;}
        }
       .active {
           background-color: #222;
           padding: 5px;
        }
  }

&.scrolled {
    background-image: $black-bg;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    padding: 0;
    border-bottom: 3px solid #222;
    .navbar a {
        color: #fff;
        img { margin-left: 28px;}
    }
}
}
@media (max-width: 767px) {
    #header {
        .navbar{
        width: 100%;
        margin: 0;
        a img {
            max-width: 80px;
        }
    }
    .collapse {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        padding: 20px 0;
        width: 100%;
        background-color: #fff;
       a {
           width: 50%;
           padding: 10px 20px;
           margin: 10px auto;
        }
        .active {
           background-color: rgb(131, 131, 131);
           border-radius: 5px;
           font-size: 22px;
           color: #fff;
        }
        .mt {
            margin-top: 20px;
        }
      }
    }
}
</style>
