<template>
  <header class="header b-right" id="lerue-nav">
    <nav class="navbar navbar-default" :class="{ scrolled: homeHeader }">
      <div class="container">
        <div class="navbar-header">
          <a to="/" class="navbar-brand">
            <img src="../assets/img/lerue-logo.png" class="logo" />
          </a>
          <div class="visible-xs">
          <div @click="flag = !flag" class="menu-wrapper visible-xs">
            <div class="hamburger-menu" :class="{ animate: flag }" />
          </div>
          </div>
          <!-- pc -->
          <div class="collapse">
            <ul class="nav items">
              <a to="/" v-scroll-to="'#tp_banner'"><li @click="toggle">HOME</li></a>
              <a to="/product"><li>SERVICES</li></a>
              <a to="/lottery"><li>ABOUT</li></a>
              <a to="/lottery"><li>NEWS</li></a>
              <a to="/lottery"><li>CONTACT</li></a>
            </ul>
          </div>
        </div>

       <switchBtn class="hidden-xs" :homeHeader="homeHeader" />

        <!-- mobile -->
        <div class="collapse navbar-collapse" v-show="flag">
          <ul class="nav" :class="{ 'navbar-nav': homeHeader }">
            <a to="/" v-scroll-to="'#tp_banner'"
              ><li @click="toggle">HOME</li></a
            >
            <a to="/product"><li>SERVICES</li></a>
            <a to="/lottery"><li>ABOUT</li></a>
            <a to="/lottery"><li>NEWS</li></a>
            <a to="/lottery"><li>CONTACT</li></a>
            <switchBtn :homeHeader="homeHeader" />
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import switchBtn from './contro'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      flag: false,
      homeHeader: false,
      navloto: false
    }
  },
  components: { switchBtn },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  watch: {
    $route: 'getPath'
  },
  methods: {
    toggle () {
      this.flag = this.flag === false
    },
    getPath () {
      this.flag = false
    },
    handleScroll () {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 50
      ) {
        this.homeHeader = true
      } else {
        this.homeHeader = false
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  .nav a {
    color: #fff;
    background: none;
    display: flex;
    li {
      position: relative;
      &:hover {
        transition: all 0.25s ease-in-out;
        &:after {
          content: "";
          background: #333;
          width: 53px;
          background: none;
          height: 2px;
          position: absolute;
          bottom: 22px;
          z-index: 99999;
          left: 23px;
          border-radius: 5em;
          transition: all 0.25s ease-in-out;
        }
      }
    }
  }
  .items {
    &:hover {
      transition: all 0.25s ease-in-out;
      &:after {
        content: "";
        width: 53px;
        background: none;
        height: 2px;
        position: absolute;
        bottom: 22px;
        z-index: 99999;
        left: 23px;
        border-radius: 5em;
        transition: all 0.25s ease-in-out;
      }
    }
    .a-exact-active {
      background: url(../assets/img/freeze/select01.png) no-repeat center 68%;
    }
    .a-exact-active.no-act {
      background: none;
    }
  }
}

.navbar-default.scrolled .navbar-header {
  button {
    display: none;
  }
  a {
    display: inline-block;
    padding: 15px 20px;
    img {
      width: auto;
      max-height: 40px;
    }
  }
}
.navbar-header {
  display: inline-flex;
  align-items: center;
}
.container {
  display: flex;
  padding: 0;
  justify-content: space-between;
}
.navbar.navbar-default {
  background: transparent;
  border: none;
  padding: 8px 0;
  // padding-bottom: 20px;
  transition: all 0.25s ease-in-out;

  .nav a {
    color: #787878;
  }

  .logo {
    max-width: 180px;
  }
}
.header .navbar-default.scrolled {
  background-image: linear-gradient(-220deg, #1d3ede, #01e6f8);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  padding: 0;
  border-bottom: 3px solid #b47f41;
  .nav a {
    // color: #333;
    li {
      &:hover {
        &:after {
          background: #333;
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .nav {
    height: 100%;
    text-align: center;
    display: flex;
    li {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 20px;
      line-height: 73px;
    }
  }
  .collapse {
    display: block;
    .navbar-pc .a-exact-active {
      color: turquoise;
    }
  }
  .navbar-collapse {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .navbar.navbar-default,
  .navbar-default.scrolled {
    .logo {
      width: auto;
      max-height: 40px;
    }
    .container {
      display: flex;
      flex-direction: column;
    }
    .collapse {
      display: none;
    }
    .navbar-collapse {
      display: block;
      background-image: linear-gradient(-220deg, #1d3ede, #01e6f8);
      border-top: 1px solid #e7e7e7;
      margin-right: -15px;
      margin-left: -15px;
      .nav {
        display: flex;
        flex-direction: column;
        .a-exact-active {
          background: #ce9c50;
        }
        .a-exact-active.no-act {
          background: none;
        }
        li {
          font-size: 14px;
          line-height: 54px;
          &:hover {
            &:after {
              content: "";
              width: 32px;
              background: none;
              // height: px;
              position: absolute;
              bottom: -5px;
              z-index: 99999;
              left: 10px;
              border-radius: 5em;
              color: #333;
              transition: all 0.25s ease-in-out;
            }
          }
        }
      }
    }
    .navbar-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        padding: 15px 20px;
      }
    }
  }
  .nav a li {
    width: 100%;
  }
}
@media screen and (max-width: 640px) {
  #lerue-nav::after {
    height: 550px;
    width: 800px;
  }
  .navbar-header {
    height: 60px;
  }
  .header .navbar-default.scrolled .nav a li:hover,
  .header .navbar-default .navbar-collapse .nav li:hover {
    &:after {
      background: none;
    }
  }
  .navbar.navbar-default {
    .collapse {
      border: none;
      ul {
        // background: rgba(255, 255, 255, 0.8);
        margin-top: 10px;
      }
      .nav li {
        color: #222;
        margin: auto;
      }
    }
  }
  .header .navbar-default.scrolled {
    // background: #fff;
  }
  .navbar-default.scrolled .collapse .nav.navbar-nav {
    background: #fff;
  }
  .navbar-collapse {
    text-align: center;
  }
  .header .navbar-default.scrolled .navloto {
    background-color: #fff;
  }
}
</style>
