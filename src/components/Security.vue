<template>
  <section id="Security" class="container banner">
    <div class="row row-center active animated" v-animated="{ className: 'fadeInDown' }">
      <h1 class="col-xs-12 t-center title">{{meta.title}}</h1>
      <div v-for="(item, i) in meta.card" :key="i" class="col-xs-6 col-sm-4 row row-center t-center security-card">
          <div class="imgs"><img :src="imgs[i]" alt=""></div>
          <div class="col-xs-12">
            <h1>{{item.title}}</h1>
            <p>{{item.des}}</p>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Security',
  data () {
    return {
      imgs: [
        require('../assets/img/security-item-01.svg'),
        require('../assets/img/security-item-02.svg'),
        require('../assets/img/security-item-03.svg'),
        require('../assets/img/security-item-04.svg'),
        require('../assets/img/security-item-05.svg'),
        require('../assets/img/security-item-06.svg')
      ]
    }
  },
  computed: {
    meta () {
      return this.$t('Security')
    }
  }
}
</script>

<style lang="scss" scoped>
#Security{
    margin-top: 200px;
    .title {
        margin: 40px;
    }
    .imgs{
        // width: 70%;
        padding: 20px 40px;
    }
}
@media (max-width:796px) {
    #Security{
        margin-top: 40px;
    .security-card {
        padding: 0;
        height: 190px;
        .imgs{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
            height: 125px;
            padding: 2px 40px;
        }
     }
  }
}
</style>
