 <template>
  <section id="FeatureList" class="container">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div  v-for="(item, i) in meta.card" :key="i" class="card col-xs-12 col-sm-4">
        <div class="col-xs-2 border"><img :src="icons[i]"/></div>
        <div class="col-xs-10">
          <h1>
            {{item.title}}
          </h1>
          <p>
             {{item.des}}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureList',
  data () {
    return {
      icons: [
        require('../assets/img/web-design.png'),
        require('../assets/img/marketing.png'),
        require('../assets/img/seo.png'),
        require('../assets/img/graphics-design.png'),
        require('../assets/img/marketing.png'),
        require('../assets/img/seo.png')
      ]
    }
  },
  computed: {
    meta () {
      return this.$t('FeatureList')
    }
  }
}
</script>

<style lang="scss" scoped>
#FeatureList {
    margin-top: 200px;
    .border {
        border-radius: 50%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 15px;
        height: 60px;
        width: 60px;
    }
    .card {
        display: flex;
        padding: 20px;
    }
}
</style>
