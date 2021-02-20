 <template>
  <section id="Contact" class="container">
    <div class="row active animated " v-animated="{ className: 'fadeInDown' }">
      <div class="col-xs-12 col-sm-6 form">
        <h1>Contact us</h1>
       <form
        action="https://formspree.io/f/xdopvpeq"
        method="POST"
        >
        <label>
            <input class="input" type="text" name="name" placeholder="Full Name">
        </label>
         <label>
            <input class="input" type="text" name="email" placeholder="Email Address">
        </label>
        <label>
            <textarea class="input" name="message" placeholder="messages"/>
        </label>
        <HrefBtn text="Send"/>
        </form>
      </div>
      <div class="col-xs-12 col-sm-6">
           <div class="col-xs-6 t-center">
               <h1>Company</h1>
                <h2 href="">Home</h2>
                <h2 href="">Home</h2>
                <h2 href="">Home</h2>
                <h2 href="">Home</h2>
                <h2 href="">Home</h2>
           </div>
           <div class="col-xs-6 t-center">
               <h1>Services</h1>
               <h2 href="">Home</h2>
               <h2 href="">Home</h2>
               <h1>Fllow Us</h1>
               <h2 href="">Home</h2>
           </div>
           <div class="col-xs-12 copyright">
           © 2021. All Rights Reserved. Design by Artminda.
           </div>
      </div>

    </div>
  </section>
</template>

<script>
import HrefBtn from './HrefBtn.vue'
export default {
  components: { HrefBtn },
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
#Contact {
    margin: 100px auto 150px auto;
    h1 {
      color: #222;
      padding: 1rem 2rem
    }
    h2 { color: #666;}
    .form {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       padding: 20px;
    form {
        text-align: center;
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
     }
   }
   .copyright {
        position: absolute;
        bottom: 0;
        text-align: center;
   }
}
</style>
