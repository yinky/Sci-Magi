<template>
  <background>

    <!--最上方组件:title+搜索框-->
    <div class="SearchResultHeader">
      <div class="SearchResult-title" @click="gotoHome">{{title}}Sci-Magi</div>
      <div class="SearchResult-Search-content">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <!--左框+右框-->
          <el-cascader v-model="value" slot="prepend" :options="options" @change="handleChange"></el-cascader>
          <el-button slot="append" icon="el-icon-search" @click="gotoSearch"></el-button>
        </el-input>
      </div>
    </div>

    <!--搜索内容-->
    <div class="SearchResult-content">
      <div class="panel">
            <menu-item :icon="basicInfoIcon" title="百度一下,你就知道" describe="百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。“百度”二字，来自于八百年前南..." route="https://www.baidu.com/" role="https://www.baidu.com/"></menu-item>
            <menu-item :icon="basicInfoIcon" title="百度一下,你就知道" describe="百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。“百度”二字，来自于八百年前南..." route="https://www.baidu.com/" role="https://www.baidu.com/"></menu-item>
            <menu-item :icon="basicInfoIcon" title="百度一下,你就知道" describe="百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。“百度”二字，来自于八百年前南..." route="https://www.baidu.com/" role="https://www.baidu.com/"></menu-item>
            <menu-item :icon="basicInfoIcon" title="百度一下,你就知道" describe="百度（纳斯达克：BIDU）是全球最大的中文搜索引擎，中国最大的以信息和知识为核心的互联网综合服务公司，全球领先的人工智能平台型公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。“百度”二字，来自于八百年前南..." route="https://www.baidu.com/" role="https://www.baidu.com/"></menu-item>


      </div>
    </div>
  </background>
</template>

<script>
import { Button, Input, Cascader } from "element-ui";
import Background from '../components/Background.vue'
import MenuItem from '../components/MenuItem.vue'
import basicInfoIcon from '../assets/BaiDuIcon.jpg'

export default {
  components: {
    "el-input": Input,
    "el-button": Button,
    "el-cascader": Cascader,
    background: Background,
    "menu-item": MenuItem
  },
  data() {
    return {
      input: "",
      keyWords: "",
      basicInfoIcon
    };
  },
  created() {
    this.getKeyWords();
  },
  props: {
    title: { type: String, required: true },
    desc: { type: String, default: "" },
    isHome: { type: Boolean, default: false }
  },
  methods: {
    gotoHome() {
      this.$router.push({
        name: "home"
      });
    },
    gotoSearch() {
      this.$router.push({
        name: "searchresult",
        query: {
          keyWords: this.input
        }
      });
    },
    getKeyWords() {
      this.keyWords = this.$route.query.keyWords;
      //console.log('keywords', this.keyWords)
    }
  }
};
</script>

<style lang="less" scoped>
.SearchResult-title {
  color: #fff;
  font-size: 25px;
  font-weight: 700;
}
.SearchResult-Search-content {
  margin-left: 10px;
  width: 60%;
}

.SearchResultHeader {
  display: flex;
  position: absolute;
  left: 10px;
  top: 5px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  align-items: center;
  animation: HeaderSlideIn 0s;
  width: 100%;
  max-width: 1000px;
  .title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-left: 7px;
  }
  .space {
    flex-grow: 1;
  }
  .logout-button {
    width: 25px;
    margin-right: 20px;
  }
  @media screen and (min-width: 600px) {
    .logout-button {
      margin-right: 40px;
    }
    .home-buttom {
      margin-left: 40px;
    }
  }
  @keyframes HeaderSlideIn {
    from {
      opacity: 0;
      //margin-top: -5px;
    }
    to {
      opacity: 1;
      //margin-top: 5px;
    }
  }
}
@media screen and (min-width: 600px) {
  .SearchResultHeader {
    top: 15px;
  }
}

.SearchResult-content {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: absolute;
  top: 50px;
  width: 60%;
  animation: BackgroundContentSlideIn 0.8s;
  @keyframes BackgroundContentSlideIn {
    from {
      opacity: 0;
      top: 40px;
    }
    to {
      opacity: 1;
      top: 50px;
    }
  }
  .panel {
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0 20px;
    margin-bottom: 30px;
    padding: 15px 17px;
  }
  @media screen and (min-width: 600px) {
    .panel {
      margin: 0 40px;
      margin-top: 20px;
    }
  }
}
</style>