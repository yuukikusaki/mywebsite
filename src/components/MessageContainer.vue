<template>
  <div id="msg-container">
    <!-- 评论内容 -->
    <div class="cmt-list">
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(item,index) in cmtList.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)"
          :key="index"
        >
          <span class="badge">{{ item.floor }}楼： {{ item.name }}</span>
          <span class="cmt-time">{{ item.date | dateFormat }}</span>
          <p class="cmt-content">{{ item.content}}</p>         
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="cmtList.length"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
      ></el-pagination>
    </div>
    <!-- 评论人信息 -->
    <div class="cmt-container">
      <div class="cmt-content">
        <label>评论内容：</label>
        <br />
        <textarea name="cmt" cols="50" rows="4" v-model="content"></textarea>
      </div>
      <div class="cmt-content">
        <label>评论人：</label>
        <br />
        <input type="text" v-model="user" />
      </div>
      <el-button type="primary" @click="postComment">发表评论</el-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      user: "",
      content: "",
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      cmtList: [],
      currentPage: 1,
      pageSize: 10
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    // 获取评论
    getComment() {
      this.$http.get("getComment").then(result => {
        if (result.body.status === 0) {
          this.cmtList = result.body.message;
        }
      });
    },
    // 发送评论
    postComment() {
      if ((this.user || this.content) == "") {
        return;
      }
      const length = this.cmtList.length + 1;
      const cmt = {
        floor: length,
        name: this.user,
        content: this.content,
        date: this.date
      };
      this.$http.post("postComment", cmt).then(result => {
        if (result.body.status === 0) {
          this.getComment();
          this.user = null;
          this.content = null;
        }
      });
    },
    // 换页
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  }
};
</script>

<style lang="scss" scope>
#msg-container {
  margin: 0 440px 0 95px;
  font-size: 14px;
  position: relative;
}

// 评论列表
.list-group-item {
  padding: 10px 15px;
  margin-bottom: -1px;
  position: relative;
  border: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .cmt-content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .badge {
    float: right;
    font-size: 12px;
    font-weight: 600;
    background-color: #777;
    color: #fff;
    border-radius: 10px;
    padding: 3px 7px;
    line-height: 1;
  }

  .cmt-time {
    float: right;
    clear: both;
  }
}
.list-group-item:after {
  content: ".";
  height: 0;
  visibility: hidden;
  display: block;
  clear: both;
}

.el-pagination {
  text-align: center;
}

.cmt-container {
  margin-left: 20px;
  .cmt-content {
    margin-bottom: 10px;
  }
  label {
    display: inline-block;
    font-weight: 700;
    margin-bottom: 5px;
  }
  textarea {
    width: 90%;
    height: 100px;
    resize: none;
    font-size: 15px;
    padding: 6px 12px;
    border-radius: 4px;
  }
  input {
    font-size: 15px;
    padding: 3px 6px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .el-button {
    margin-top: 10px;
  }
}
</style>