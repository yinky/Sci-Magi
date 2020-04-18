<template>
  <div>
    <div class = "app-item">
      <div class = "app-list">{{Name}}
        <div class = "app-attribute" v-for = "item in Attr" :key = "item">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    "Name" : {
      type : String, 
      default: function() {
        return '';
      }
    }, 
    "Attr" : {
      type : Array, 
      default: function() {
        return [];
      }
    }
  }
}
</script>

<style lang = 'less' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  height: 40px;
  border: 10px;
  border-radius: 4px;
  margin: opx auto;
}
.bg-purple {
  background: #d3dce6;
}
.app-item {
  display: flex;
  margin-top: 0px auto;
  .app-list {
    margin-top: 0px auto;
    color :#d0104c;
    font-size: 32px;
    .app-attribute {
      background: #d3dce6;
      height: 30px;
      width: 120px;
      font-size: 20px;
      float: right;
      text-align: center;
      margin-top: 50px;
      margin-left : 10px;
      color : #5dac81;
    }
  }
}
</style>