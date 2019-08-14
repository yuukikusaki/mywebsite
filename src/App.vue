<template>
  <div id="app-container">
    <!-- 顶部区域 -->
    <div class="top-container"></div>

    <!-- 导航栏 -->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">
              <router-link to="/home">首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/notes">学习笔记</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <router-link to="/download">资料下载</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <router-link to="/message">留言板</router-link>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <!-- 主体部分 -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss" scope>
.top-container {
  width: 100%;
  height: 90px;
  background-color: pink;
}
.el-row {
  height: 40px;
  background-color: #409eff;
}
</style>
