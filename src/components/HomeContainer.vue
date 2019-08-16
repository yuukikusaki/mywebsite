<template>
  <div class="home-container">
    <!-- 左边模块 -->
    <div class="left-container">
      <!-- 幻灯片部分 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in photoList" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <!-- 信息栏部分 -->
      <div class="info-list">
        <el-card class="box-card">
          <div v-for="o in infoList" :key="o" class="text item">
            <h3>列表标题:{{o}}</h3>
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>

    <!-- 右边模块 -->
    <div class="right-container">
      <el-calendar v-model="value"></el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoList: 4,
      infoList: 4,
      value: new Date()
    };
  }
};
</script>

<style lang="scss" scope>
.home-container {
  margin: 0 95px;
  width: auto;
  height: 800px;
}

// 左边
.left-container {
  float: left;
  width: 70%;

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .info-list {
    margin-top: 0px;
    height: 500px;

    .el-card {
      padding: 0;
      background-color: #f5f5f5;
    }
    .item {
      margin: 5px 0;
      padding: 5px 0 20px 20px;
      background-color: #fff;
      -webkit-box-shadow: 2px 2px 2px #ccc;
      box-shadow: 2px 2px 2px #ccc;
      border-radius: 5px;
    }

    .image {
      width: 30%;
      height: 200px;
    }
  }
}

// 右边
.right-container {
  float: right;
  width: 30%;
  .el-calendar{
      
  }
}
</style>