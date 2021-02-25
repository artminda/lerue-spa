 <template>
  <section id="News" class="container">
    <div class="active animated  " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12">
          <h1 class="t-center">{{meta.title}}</h1>
          <div :key="swiperOption.slidesPerView">
            <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, i) in meta.cards" :key="i" class="card">
                <div class="oval"><img :src="Icons[i]" alt=""></div>
                <h1>{{item.title}}</h1>
                <p>{{item.des}}</p>
                <div class="desList">
                    <div v-for="(listItem, index) in item.desList" :key="`${index}+${listItem}`">
                        <p>{{index+1}}. {{listItem}}</p>
                    </div>
                </div>
                 <HrefBtn class="absolute-bottom" text="DOWNLOAD" :herf="item.url" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'News',
  data () {
    return {
      Icons: [
        require('../assets/img/news1.jpg'),
        require('../assets/img/news2.jpg'),
        require('../assets/img/news3.jpg'),
        require('../assets/img/news1.jpg')
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
      },
      windowWidth: 0
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    meta () {
      return this.$t('News')
    }
    // autoCol () {
    //   return this.windowWidth > 768 ? 3 : 1
    // }
  },
  methods: {
    handleResize () {
      this.swiperOption.slidesPerView = window.innerWidth > 768 ? 3 : 1
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
#News {
    position: relative;
    .swiper{
         margin: 0 -15px;
         padding: 30px;
         max-height: 900px;
        .swiper-slide-active{
            opacity: 1 !important;
            // height: 300px;
        }
        .swiper-pagination {
            bottom: 0;
        }
        .swiper-button-prev {
          color: #222;
          position: absolute;
          left: 0;
        }
        .swiper-button-next {
          color: #222;
          position: absolute;
          right: 0;
        }
        .card {
        min-height: 600px;
        height: initial;
        opacity: .5;
        display: flex;
        flex-direction: column;
        background: #fff;
        margin: 20px 0px;
        padding: 20px 10px;
        .desList {
            margin-bottom: 40px;
        }
        .absolute-bottom{
            position: absolute;
            bottom: 0;
        }
       .oval {
                img {
                    width: 100%;
                    border-radius: 40px;
                }
            }
        h1{
            font-size: 24px;
            color: #222;
            padding: .5rem 1.25rem;
        }
        p {
            padding: .3rem 1.25rem;
        }
    }
    }
}
</style>
