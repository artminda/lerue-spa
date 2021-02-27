 <template>
  <section id="Contact" class="container">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6 form">
        <h1>Contact us</h1>
       <form
        action="https://formspree.io/f/mqkgonnp"
        method="POST"
        >
        <label>
            <input class="input" type="text" name="name" placeholder="Full Name">
        </label>
         <label>
            <input class="input" type="text" name="email" placeholder="Email Address">
        </label>
        <label>
            <textarea class="input textarea" name="message" placeholder="messages"/>
        </label>
        <HrefBtn text="Send"/>
        </form>
      </div>
      <div class="col-xs-12 col-sm-6">
           <div class="col-xs-12 col-sm-6 t-center">
               <h1>Company</h1>
                <h2 v-scroll-to="'#Feature'">{{Header[0]}}</h2>
                <h2 v-scroll-to="'#Security'">{{Header[1]}}</h2>
                <h2 v-scroll-to="'#Count'">{{Header[2]}}</h2>
                <h2 v-scroll-to="'#News'">{{Header[3]}}</h2>
                <h2 v-scroll-to="'#Contact'">{{Header[4]}}</h2>
           </div>
           <div class="col-xs-12 col-sm-6 t-center">
               <h1>Services</h1>
               <div v-for="(item, i) in meta.cards" :key="i">
                   <h2 v-scroll-to="'#Feature'">{{item.title}}</h2>
               </div>
           </div>
           <div class="col-xs-12 copyright">
           © 2021. All Rights Reserved.
           </div>
      </div>

    </div>
  </section>
</template>

<script>
import HrefBtn from './HrefBtn.vue'
export default {
  name: 'Contact',
  components: { HrefBtn },
  computed: {
    meta () {
      return this.$t('News')
    },
    Header () {
      return this.$t('Header')
    }
  }
}
</script>

<style lang="scss" scoped>
#Contact {
    margin: 100px auto 150px auto;
    h1 {
      padding: 0px 20px 20px;
    }
    h2 { color: #666; margin: 10px 0; line-height: 30px; cursor: pointer;}
    .form {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
        .input {
            width: 100%;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border-radius: 50px;
            max-width: 450px;
            width: 100%;
            height: 60px;
            border: none;
            margin-bottom: 30px;
            padding-left: 30px;
            color: #000;
        }
        .textarea {
            height: 200px;
        }

   }
   .copyright {
        position: absolute;
        bottom: 0;
        text-align: center;
   }
}
@media screen and (max-width: 768px) {
    #Contact {
            margin: 100px auto 100px auto;
        h1 { color: #fff; margin-top: 30px; margin-bottom: 15px; padding: 0;}
        h2 { color: #ccc;}
        .form {
            padding-bottom: 60px;
        }
       .copyright {
        bottom: -30px;
        color: #ccc;
     }
  }
}
</style>
