 <template>
  <section id="banner" class="container banner">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6">
        <div class="text">
          <h1 class="banner-text">
            We promise to bring the best
            <span class="bolder">solution</span> for your business.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            turpis nisl.
          </p>
          <HrefBtn text="CONTACT US" />
        </div>
      </div>
       <div class="col-xs-12 col-sm-6 banner"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style lang="scss" scoped>
#banner {
  margin-top: 20vh;
  .banner-text {
      font-size: 48px;
      font-weight: 300;
  }
  .banner {
    position: absolute;
    height: 590px;
    width: 930px;
    background-image: linear-gradient(to right, #e8eefc, #e6fafe);
    right: -100px;
    top: -200px;
    z-index: -4;
    border-radius: 50% 0 50% 50%;
    overflow: hidden;
    &::after {
        position: absolute;
        content: '';
        height: 600px;
        width: 900px;
        background-image: linear-gradient(-220deg, #1d3ede, #01e6f8);
        right: 0;
        top: -30px;
        z-index: -4;
        border-radius: 50% 0 50% 50%;
        overflow: hidden;
    }
  }
}

@media (max-width: 768px) {
   #banner {
      .banner {
          display: none;
          width: 100%;
          overflow: hidden;
      }
   }
}
</style>
