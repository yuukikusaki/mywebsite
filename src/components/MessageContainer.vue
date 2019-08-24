<template>
  <div id="msg-container">
    <!-- 评论内容 -->
    <div class="cmt-list">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item,index) in cmtList" :key="index">
          <span class="badge">{{ item.floor }}楼： {{ item.name }}</span>
          {{ item.content }}
        </li>
      </ul>
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
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
export default {
  data() {
    return {
      user: "",
      content: "",
      cmtList: []
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http.get("getComment").then(result => {
        if (result.body.status === 0) {
          this.cmtList = result.body.message;
        }
      });
    },
    postComment() {
      if ((this.user || this.content) == "") {
        return;
      }
      const length = this.cmtList.length + 1;
      const cmt = {
        floor: length,
        name: this.user,
        content: this.content
      };
      this.$http.post("postComment", cmt).then(result => {
        if (result.body.status === 0) {
          this.getComment();
        }
      });
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

.list-group-item {
  padding: 10px 15px;
  margin-bottom: -1px;
  position: relative;
  border: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .badge {
    float: right;
    font-size: 12px;
    font-weight: 700;
    background-color: #777;
    color: #fff;
    border-radius: 10px;
    padding: 3px 7px;
    line-height: 1;
  }
}
.cmt-container {
  position: absolute;
  top: 450px;
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