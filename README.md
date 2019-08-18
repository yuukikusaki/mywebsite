# 基础页面 APP.vue
1. 就一个标题栏
2. 首页、学习笔记、资料下载、留言板
+ 利用 Element UI 的导航栏
+ 设置 router 
+ :default-active 默认为 当前路由

## main.js
+ index.js 设置 mode:'history', 把 # 去掉
+ 使用 npm i 导入 vue-resource 

## 首页 HomeContainer
1. 分为左右两个页面
2. 左页面
  + 上边用 element 组件的 走马灯制作幻灯片
    - 预定在 api/carousel 上获取 
    - 把图片 url 传入 photoList
  + 下面用 卡片组件
    - 预定在 api/info 上获取
    - 使用 infoList 接收
    - 把 图片URL、title、info_message 和 网页链接URL 传过来
3. 右页面 先挂一个日历
4. 项目信息栏已有，现在是用 api 连接作为测试，之后改为本地更好
5. 跑马灯图片ok

## 学习笔记 NotesContaioner

## 资料下载 DownLoadContainer

## 留言板 MessageContainer



### 8.14 完成了基础部分