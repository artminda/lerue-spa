 <template>
  <section id="banner" class="container">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6">
        <div class="text">
          <h1>
            We promise to bring the best
            <span class="bolder">solution</span> for your business.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus
            turpis nisl.
          </p>
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
    margin-top: 200px;
}
</style>
