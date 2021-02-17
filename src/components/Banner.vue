 <template>
  <section id="banner" class="container">
    <div class="row active animated" v-animated="{ className: 'fadeInDown' }">
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
  margin-top: 15vh;
  .banner-text {
      font-size: 48px;
      font-weight: 300;
  }
  &::after {
  position: absolute;
  content: "";
  height: 600px;
  width: 900px;
  background-image: -webkit-linear-gradient(-220deg, #1d3ede, #01e6f8);
  background-image: -moz-linear-gradient(-220deg, #1d3ede, #01e6f8);
  background-image: -ms-linear-gradient(-220deg, #1d3ede, #01e6f8);
  background-image: -o-linear-gradient(-220deg, #1d3ede, #01e6f8);
  background-image: linear-gradient(-220deg, #1d3ede, #01e6f8);
  left: 49.5%;
  top: -200px;
  z-index: -1;
  border-radius: 50% 0 50% 50%;
  }
  &::before {
    position: absolute;
    content: "";
    height: 590px;
    width: 930px;
    background-image: -webkit-linear-gradient(to right, #e8eefc, #e6fafe);
    background-image: -moz-linear-gradient(to right, #e8eefc, #e6fafe);
    background-image: -ms-linear-gradient(to right, #e8eefc, #e6fafe);
    background-image: -o-linear-gradient(to right, #e8eefc, #e6fafe);
    background-image: linear-gradient(to right, #e8eefc, #e6fafe);
    left: 47.5%;
    top: -150px;
    z-index: -1;
    border-radius: 50% 0 50% 50%;
  }
}

@media (max-width: 768px) {
   #banner {
       &::after {
         width: 100%;
         height: 400px;
         left: auto;
         right: 0;
       }
       &::before {
          width: 100%;
          height: 390px;
          left: auto;
          right: 0;
       }
   }
}
</style>
