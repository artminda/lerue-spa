 <template>
  <section id="About" class="container">
    <h1 class="t-center">What our customers say about us.</h1>
    <div class="row active animated" v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12">
        <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(item, i) in meta.card" :key="i" class="card">
            <div class="oval"><img :src="Icons[i]" alt=""></div>
            <h1>{{item.title}}</h1>
            <p>{{item.des}}</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'About',
  data () {
    return {
      Icons: [
        require('../assets/img/web-design.png'),
        require('../assets/img/marketing.png'),
        require('../assets/img/seo.png'),
        require('../assets/img/graphics-design.png')
      ],
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    meta () {
      return this.$t('Feature')
    }
  }
}
</script>

<style lang="scss" scoped>
#About {
    .swiper{
         margin: 0 -15px;
         padding: 30px;
        .swiper-slide-active{
            opacity: 1 !important;
            height: 300px;
        }
        .swiper-pagination {
            bottom: 0;
        }
        .card {
        opacity: .5;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin: 20px 0px;
        padding: 20px 10px;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
       .oval {
            align-items: center;
            justify-content: center;
            display: flex;
            background: linear-gradient(to right, #f1f6fd, #f0fbfe);
            padding: 10px;
            width: 150px;
            border-radius: 50%;
            margin: auto;
            transform: rotate(20deg);
            margin-top: 20px;
                img {
                    width: 100%;
                    max-width: 0.8in;
                    margin: 0 auto;
                    transform: rotate(-20deg);
                }
            }
        h1{
            font-size: 24px;
            color: #1d3ede;
            padding: .5rem 1.25rem;
        }
        p {
            padding: .3rem 1.25rem;
        }
    }
    }
}
</style>
