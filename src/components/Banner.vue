 <template>
  <section id="Banner" class="container banner">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6">
        <div class="text">
          <h1 class="banner-text">
            {{meta.title}}
            <!-- <span class="bolder">solution</span> for your business. -->
          </h1>
          <p>
           {{meta.des}}
          </p>
          <div v-scroll-to="'#Contact'"><HrefBtn text="CONTACT US" /></div>
        </div>
      </div>
       <div class="col-xs-12 col-sm-6 banner">
        <Lottie
        class="hidden-xs"
        :options="defaultOptions"
        :width="730"
        :height="590"
        :animCreated="handleAnimation"
        />
       </div>
         <div class="col-xs-12 col-sm-6 visible-xs mt">
          <Lottie
            :options="defaultOptions"
            :width="320"
            :height="200"
            :animCreated="handleAnimation"
        />
       </div>
    </div>
  </section>
</template>

<script>
import Lottie from 'vue-lottie'
import * as animationData from '@/assets/pinjump.json'

export default {
  name: 'Banner',
  data () {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1,
      anim: {}
    }
  },
  components: {
    Lottie
  },
  computed: {
    meta () {
      return this.$t('Banner')
    }
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
      console.log(anim) // 这里可以看到 lottie 对象的全部属性
    }
  }
}
</script>

<style lang="scss" scoped>
$blue-banner-bc-front: linear-gradient(-220deg, #1d3ede, #01e6f8);
$blue-banner-bc-back: linear-gradient(to right, #e8eefc, #e6fafe);
$black-banner-bc-front: linear-gradient(-220deg,#e8e8e8, #292929);
$black-banner-bc-back: linear-gradient(to right, #fbfbfc, #a5a5a5);

#Banner {
  margin-top: 20vh;
  .banner-text {
      font-size: 48px;
      font-weight: 300;
  }
  .banner {
    position: absolute;
    height: 590px;
    width: 730px;
    background-image: $black-banner-bc-back;
    right: -100px;
    top: -200px;
    z-index: -4;
    border-radius: 50% 0 50% 50%;
    overflow: hidden;
    &::after {
        position: absolute;
        content: '';
        height: 600px;
        width: 700px;
        background: $black-banner-bc-front;
        right: 0;
        top: -30px;
        z-index: -4;
        border-radius: 50% 0 50% 50%;
        overflow: hidden;
    }
  }
}

@media (max-width: 768px) {
   #Banner {
       margin-top: 13vh;
    //    background: #222;
       .text {
          p{color: #fff !important;}
          margin: 0 auto;
          max-width: 320px;
       }
       overflow: hidden;
      .banner {
          width: 100%;
          right: 0;
          top: 0px;
      }
     .banner-text {
          color: #fff;
      }
      .mt {
          margin: 45px auto 30px auto;
      }
   }
}
</style>
