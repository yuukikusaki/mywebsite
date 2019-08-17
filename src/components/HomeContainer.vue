<template>
  <div class="home-container">
    <!-- 左边模块 -->
    <div class="left-container">
      <!-- 幻灯片部分 -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in photoList" :key="item.index">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>

      <!-- 信息栏部分 -->
      <div class="info-list">
        <el-card class="box-card">
          <div v-for="(item,index) in workList" :key="index" class="text item">
            <h3><a :href="item.work_url"><i class="el-icon-caret-right"></i> {{ item.title }}</a></h3>
            <img
              :src="item.work_image"
              class="image"
            />
            <p>{{ item.summary }}</p>
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
      workList: [],
      value: new Date()
    };
  },
  created() {
    this.getWorkInfo();
  },
  methods:{
    getWorkInfo(){
      this.$http.get('http://127.0.0.1:8081/listUsers').then(result =>{
        if(result.body.status === 0){
          this.workList = result.body.message;
        }
      })
    }
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

    a{
      color: #000;
    }
    a:hover{
      color: #0273C6;
    }
    .image {
      margin-top: 15px;
      width: 30%;
      height: 170px;
    }
    p{
      display: inline-block;
      margin: 15px 0 0 10px;
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