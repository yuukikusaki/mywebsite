<template>
  <div id="msg-container">
    <!-- 评论内容 -->
    <div class="cmt-list">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in cmtList" :key="item.index">
          <span class="badge">评论人： {{ item.user }}</span>
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
        <textarea name="cmt" cols="50" rows="4"></textarea>
      </div>
      <div class="cmt-content">
        <label>评论人：</label>
        <br />
        <input type="text" />
      </div>
      <el-button type="primary">发表评论</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmtList: [
        { id: Date.now(), user: "李白", content: "天生我才必有用" },
        { id: Date.now(), user: "杜甫", content: "落花时节又逢君" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },

        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },

        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" },
        { id: Date.now(), user: "杜牧", content: "霜叶红于二月花" }
      ]
    };
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
  .el-button{
      margin-top: 10px;
  }
}
</style>