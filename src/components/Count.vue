 <template>
  <section id="Count" class="container">
    <div class="row active animated" v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 row-center">
         <div class="bg">
           <svg width="100%" viewBox="0 0 1600 400">
            <defs>
                <linearGradient id="PSgrad_03" x1="80.279%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1"></stop>
                    <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"></stop>
                </linearGradient>
            </defs>
            <path fill-rule="evenodd" fill="url(#PSgrad_03)" d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"></path>

            <clipPath id="ctm" fill="none">
                <path d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"></path>
            </clipPath>

            <!-- xlink:href for modern browsers, src for IE8- -->
            <image clip-path="url(#ctm)" xlink:href="../assets/img/word-map.png" height="800px" width="100%" class="svg__image">
            </image>
           </svg>
         </div>
        <div class="count">
          <div v-for="(n , i) in numbers" :key="i" class="c-box">
           <countTo :startVal='startVal' :endVal='n.num' :duration='1500' class="num"/>
           <h3>{{n.des}}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  name: 'Count',
  data () {
    return {
      startVal: 0,
      numbers: [
        { num: 125, des: 'Active Projects' },
        { num: 200, des: 'Business Growth' },
        { num: 530, des: 'Computed Projects' },
        { num: 941, des: 'Happy Clients' }
      ]
    }
  },
  components: { countTo }
}
</script>

<style lang="scss" scoped>
#Count {
    margin-top: 20vh;
    .bg {
        // position: absolute;
        width: 100%;
    }
    .count {
        position: relative;
        z-index: 2;
        display: inline-flex;
        justify-content: space-between;
        top: -50%;
        width: 100%;
        padding: 0 110px;
        .c-box{
          text-align: center;
           .num {
                color: #fff;
                font-size: 48px;
                font-weight: 500;
                line-height: 1.2;
            }
           h3 {
               color: #fff;
           }
      }
    }
}
</style>
