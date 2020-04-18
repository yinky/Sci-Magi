<template>
  <background title = "">
    <item :Name = "getKeyWords()" :Attr = "getAttributes()"></item>
  </background>
</template>

<script>
import Background from '../components/Background.vue'
import Item from '../components/Item.vue'
export default {
  name : "SearchResult" ,
  components : {
    background : Background,
    item : Item
  }, 
  data() {
    return {
      keyWords : '',
      allAttributes : ['ykydalao', 'ykynb', 'lyylj']
    }
  },
  created () {
    this.getKeyWords(),
    this.getAttributes()
  },
  methods :{
    gotoHome(){
      this.$router.push({
        name: 'home'
      }
      );
    },
    gotoTest() {
      this.$router.push({
        name: 'test'
      }); 
    },
    getKeyWords() {
      this.keyWords = this.$route.query.keyWords
      //console.log('keywords', this.keyWords)
      return this.keyWords;
    },
    getAttributes() {
      var i, cnt;
      var sTmp = this.$route.query.keyWords;
      var aTmp = [];
      cnt = 0;
      for(i = 0; i < this.allAttributes.length; i++) {
        if(this.allAttributes[i].indexOf(sTmp) != -1) {
          var pos = this.allAttributes[i].indexOf(sTmp);
          //console.log(pos + sTmp.length);
          aTmp[cnt++] = this.allAttributes[i].substring(0, pos) + this.allAttributes[i].substring(pos + sTmp.length);
        }
      }
      //console.log(aTmp);
      return aTmp;
    }
  }
}
</script>

<style lang="less" scoped>
.app-text {
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 120px;
  animation: appTextFadeIn 1s;
  .true-button {
    margin: 0px auto;
  }
  .app-picture {
    width: 130%;
    height: 130%;
  }
}
</style>