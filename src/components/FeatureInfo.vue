 <template>
  <section id="FeatureInfo" class="container">
    <div class="row active animated" v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6 card">
      <svg class="back-bg" width="100%" viewBox="0 0 900 700" style="position:absolute; z-index: -1">
            <defs>
                <linearGradient id="PSgrad_01" x1="64.279%" x2="0%" y1="76.604%" y2="0%">
                    <stop offset="0%" stop-color="rgb(1,230,248)" stop-opacity="1"></stop>
                    <stop offset="100%" stop-color="rgb(29,62,222)" stop-opacity="1"></stop>
                </linearGradient>
            </defs>
            <path fill-rule="evenodd" opacity="0.102" fill="url(#PSgrad_01)" d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z"></path>
        </svg>
        <svg width="100%" viewBox="0 0 700 500">
            <clipPath id="clip-path">
                <path d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z"></path>
            </clipPath>
            <!-- xlink:href for modern browsers, src for IE8- -->
            <image clip-path="url(#clip-path)" xlink:href="../assets/img/learn-img.jpg" width="100%" height="465" class="svg__image"></image>
        </svg>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="text">
          <h1>
            We are a Creative Digital Agency & Marketing Experts
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            turpis nisl.
          </p>
          <HrefBtn text="LEARN MORE" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
#FeatureInfo {
   margin-top: 10vh;
   .card {
    border: none;
    background: transparent;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: .25rem;
   }
  .back-bg {
    margin-left: -30px !important;
    margin-top: -20px;
  }
  svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
