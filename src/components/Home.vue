<template>
  <div class="wrapper">
    <Banner />
    <FeatureInfo />
    <Feature :data="metas.Feature" />
    <Count />
    <About :data="metas.Feature"/>
    <FeatureList :data="metas.Feature"/>
    <!-- <News /> -->
    <Contact />
  </div>
</template>

<script>
import * as metas from '../libs/metas'
import Banner from './Banner'
import FeatureInfo from './FeatureInfo'
import Feature from './Feature'
import Count from './Count'
import About from './About'
import FeatureList from './FeatureList'
// import News from './News'
import Contact from './Contact'

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      metas
    }
  },
  components: {
    Banner,
    FeatureInfo,
    Feature,
    Count,
    About,
    FeatureList,
    // News,
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tp-banner-container {
  max-height: none;
  overflow: visible;
  height: 841px;
  padding-top: 141px;
  .tp-down {
    position: absolute;
    left: 50%;
    margin: -40px;
    z-index: -1;
    img {
      width: 60%;
      height: 60%;
    }
  }
  .tp-banner {
    display: flex;
    // align-items: center;
    // justify-content: center;
    height: 100%;
    max-height: none;
    background: transparent;
    background-size: cover;
    overflow: hidden;
    .tp-caption {
      font-size: 48px;
      font-weight: 500;
      line-height: 1.2;
      color: #fff;
      .logoBox {
        position: relative;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 300px;
        justify-content: flex-start;
        align-items: center;
        .text {
          position: relative;
          color: #000;
          max-width: 500px;
          text-align: left;
          word-wrap: break-word;
          h3 {
            word-wrap: break-word;
            width: 100%;
            font-weight: 200;
            color: #222;
          }
          & .border {
            font-family: "Lato-Medium";
            font-weight: 800;
          }
          p {
            color: #666;
            width: 360px;
            font-size: 18px;
            font-weight: 500;
            line-height: 20.27px;
            margin: 20px 0px;
          }
        }
      }
    }
    &::after {
      content: "";
      position: absolute;
      width: 1440px;
      height: 700px;
      background: url(../assets/img/freeze/line.png) no-repeat;
      background-position-y: 100%;
    }
  }
}
@media screen and (max-width: 768px) {
  .tp-banner-container {
    height: 100vh;
    padding-top: 100px;
    .tp-banner {
      .tp-caption {
        .logoBox {
          height: 80vh;
          overflow: hidden;
          .logo {
            width: 650px;
            top: 0;
          }
          .text {
            bottom: 15%;
            p {
              width: 100vw;
              padding: 0 15px;
            }
          }
        }
      }
      &::after {
        height: calc(100vh - 100px);
      }
    }
  }
}
</style>
