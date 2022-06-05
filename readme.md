## QQ 音乐移动端

### 实现功能

#### 1.搜索

点击热门搜索里的歌曲可以进行搜索
搜索历史里面的也可。

#### 2.localStorage 保存搜索历史

存储历史记录，点击垃圾桶进行删除。
但因为不知道为什么点击事件内部会进行多次判断，导致可能会添加多个 localStorage
采用了一种比较奇葩的方式实现。

#### 3.适配一般的手机和平板

#### 4."拖拽"功能(用了 flex 布局不能用定位，拖拽功能已经无了)

勉强算是可以自定义歌单顺序了(还有 bug)，

#### 5.好像没啥功能了 😅

10 小时写完布局留一天写拖拽我是真的会 🤮
个人觉得布局还挺好看的 👀

### 使用到的技术

webpack5 的一些基本配置
less
axios
部署到了 GitHub pages 上
媒体查询
