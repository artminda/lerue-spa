 <template>
  <section id="Feature">
    <div class="container row row-center active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-4">
        <div class="text">
          <h1>{{meta.title}}</h1>
          <p>{{meta.des}}</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-8">
          <div class="bg">
              <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
                    <defs>
                        <linearGradient id="PSgrad_02" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                            <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1"></stop>
                            <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"></stop>
                        </linearGradient>
                    </defs>
                    <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_02)" d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"></path>
                </svg>
          </div>
          <div v-for="( item , i ) in meta.card" :key="i" class="card col-xs-12 col-sm-5" :class="{top:i===0 || i===2}">
              <div class="oval"><img :src="Icons[i]" alt=""></div>
              <h1>{{item.title}}</h1>
              <p>{{item.des}}</p>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Feature',
  data () {
    return {
      Icons: [
        require('../assets/img/web-design.png'),
        require('../assets/img/marketing.png'),
        require('../assets/img/seo.png'),
        require('../assets/img/graphics-design.png')
      ]
    }
  },
  computed: {
    meta () {
      return this.$t('Feature')
    }
  }
}
</script>

<style lang="scss" scoped>
#Feature {
    display: flex;
    justify-content: center;
    margin-top: 200px;
    .card {
        display: flex;
        flex-direction: column;
        background: #fff;
        margin: 12px;
        padding: 20px 10px;
        border-radius: 20px;
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
    .top { top: 7vh;}
    .bg {
        position: absolute;
        overflow: hidden;
        width: 100%;
        z-index: -1;
    }
    @media (max-width: 768px) {
        .card {margin: 10px 0;}
        .top { top: 0;}
    }
}
</style>
