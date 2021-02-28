 <template>
  <section id="Contact" class="container">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6 form">
        <h1>Contact us</h1>
       <form>
        <label>
            <input v-model="name" class="input" type="text" name="name" placeholder="Full Name">
        </label>
         <label>
            <input v-model="email" class="input" type="text" name="email" placeholder="Email Address">
        </label>
        <label>
            <textarea v-model="message" class="input textarea" name="message" placeholder="messages"/>
        </label>
        <HrefBtn text="Send" @send="send"/>
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
            <div class="col-xs-12 t-center fllow">
               <h1>Fllow Us</h1>
               <div class="social-icon-box">
                <a href="https://www.facebook.com/leyutechs/?view_public_for=340973034013018"><img class="social-icon" src="https://img.icons8.com/android/48/000000/facebook-new.png"/></a>
                <a href="https://lin.ee/YNwofCH"><img class="social-icon line" src="https://img.icons8.com/ios-glyphs/30/000000/line-me.png"/></a>
                <a href="0930533350"><img src="https://img.icons8.com/ios-filled/50/000000/phone.png"/></a>
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
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    meta () {
      return this.$t('News')
    },
    Header () {
      return this.$t('Header')
    }
  },
  methods: {
    send () {
      this.axios.post('https://formspree.io/f/mqkgonnp', {
        name: this.name,
        email: this.email,
        message: this.message
      }).then((response) => {
        if (response.data.ok) alert(this.$t('thx'))
      }).catch((error) => { console.error(error) })
    }
  }
}
</script>

<style lang="scss" scoped>
#Contact {
    margin: 150px auto 150px auto;
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
            width: 100%;
            height: 60px;
            border: none;
            margin-bottom: 30px;
            padding: 0 30px;
            color: #000;
        }
        .textarea {
            height: 200px;
            padding: 30px;
            max-width: 100%;
        }

   }
   .fllow {display: flex; align-items: center; justify-content: center; flex-direction: column; padding: 40px;}
   .copyright {
        position: absolute;
        bottom: 0;
        text-align: center;
   }
   .social-icon-box { display: inline-flex; background-color: #fff; width: 100%; padding: 10px 0; justify-content: space-around; align-items: center;}
   .social-icon { width: 50px; filter:grayscale(80%);}
   .line { width: 60px; position: relative;}
}
@media screen and (max-width: 768px) {
    #Contact {
            margin: 100px auto 100px auto;
        h1 { color: #fff; margin-top: 30px; margin-bottom: 15px; padding: 0;}
        h2 { color: #ccc;}
        .form {
            padding-bottom: 60px;
        }
       .fllow {padding: 0;}
       .copyright {
        bottom: -60px;
        padding: 0;
        color: #ccc;
     }
  }
}
</style>
