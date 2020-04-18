<template>
  <div class="menu-item">
    <u class="menu-title" :href=route>{{title}}</u>
    <div class="menu-pic-des-link">
      <img :src="icon" class="menu-icon" />
      <div class="menu-des-link">
        <div class="menu-describe">{{describe}}</div>
        <div class="role-hint">{{role}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "route", "role", "describe"],
  methods: {
    routerPush() {
      if (this.route) {
        this.$router.push(this.route);
      }
    }
  }
};
</script>

<style lang="less" scoped>
// CSS样式链接
// http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool
.menu-item {
  //大的方块
  margin: 5px; //格子与格子之间的间隔
  background-color: #fff; //格子的背景颜色
  border-radius: 5px; //格子四个角的弧度
  flex-basis: 70px; //格子的最小宽度
  flex-grow: 1; //扩展当前格子，若为0则不扩展
  display: flex; // 弹性布局
  flex-direction: column; //存在多个块的排列 column从左向右, column-reverse从右向左, row, row-reverse
  //align-items: center;//按中轴线显示
  padding: 15px 10px; //height weight
  .role-hint {
    font-size: 12px; //字体大小
    //padding: 5px; //块的大小
    color: #0a7b11; //字体颜色
    white-space: nowrap; // 强制一行
  }

  .menu-title {
    margin-left: 5px;
    font-weight: normal; //字粗100-900 normal=400 bord=700
    color: #0000b9; //字体颜色
    font-size: 18px; //字体尺寸
    white-space: nowrap;
  }
  //0a7b11
  .menu-icon {
    //icon图片
    width: 145px;
    height: 90px;
    //width: 50%; //尺寸
  }
  .menu-pic-des-link {
    margin-top: 10px;
    margin-right:100px;
    display: flex;
    flex-direction: row;
    border: none;
    .menu-describe {
      font-weight: normal; //字粗100-900 normal=400 bord=700
      font-size: 13px; //字体尺寸
    }
    .menu-des-link{
        display:flex;
        flex-direction: column;
        margin:5px;
    }
  }
}
</style>