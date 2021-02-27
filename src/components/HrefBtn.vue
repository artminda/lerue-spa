<template>
     <a :href="herf"><div class="b-btn">{{text}} <span class="i">></span></div></a>
</template>

<script>
export default {
  name: 'HrefBtn',
  props: {
    text: String,
    herf: String
  }
}
</script>

<style lang="scss" scoped>
 $blue-bc: linear-gradient(to right, #06c6f9 , #38eaf9);
 $black-bc: linear-gradient(to right, #1c1c1c , #a0a2ab);

.b-btn {
    cursor: pointer;
    background: $black-bc;
    font-size: 18px;
    color: #fff;
    border-radius: 50px;
    padding: 5px 30px;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    padding-right: 5px;
    text-decoration: none !important;
  & .i {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    height: 32px;
    width: 32px;
    color: #666;
    font-size: 22px;
    text-align: center;
    margin-left: 15px;
  }
}
</style>
