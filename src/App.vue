<template>
  <div id="app-container">
    <!-- 顶部区域 -->
    <div class="top-container"></div>

    <!-- 导航栏 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal"
          >
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/notes">学习笔记</el-menu-item>
            <el-menu-item index="/download">资料下载</el-menu-item>
            <el-menu-item index="/message">留言板</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <!-- 主体部分 -->
    <router-view></router-view>

    <!-- 右边模块 -->
    <div class="right-container">
      <el-calendar></el-calendar>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scope>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  min-width: 1200px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: top;
  border: none;
}

.clearf:after,
.clearf:before {
  content: "";
  display: block;
  clear: both;
}

.top-container {
  width: 100%;
  height: 90px;
  background-color: pink;
}

.el-menu--horizontal > .el-menu-item.is-active,
.el-menu.el-menu--horizontal,
.el-menu.el-menu--horizontal {
  border-style: none;
  background-color: #409eff;
}

// 点击后 失去 焦点 的状态
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: rgba(76, 142, 168, 0.5);
  border-bottom: 2px solid rgb(229, 255, 0);
  color: #303133;
}
// 点击后的 颜色，此时 焦点还在
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
  background-color: rgba(76, 142, 168, 0.7);
  border-bottom: 2px solid rgb(229, 255, 0);
}

// 设置悬浮时的颜色
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(101, 101, 179, 0.5);
}
.el-menu-demo {
  background-color: #409eff;
  padding-left: 95px;
  .el-menu-item {
    color: #fff;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #409eff;
  }
}

#app-container{
  position: relative;
  .right-container{
    position: absolute;
    top:130px;
    right: 85px;
    width: 350px;
  }
}
</style>
