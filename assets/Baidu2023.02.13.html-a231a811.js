import{_ as i,V as l,W as e,$ as a}from"./framework-c6791857.js";const u={},s=a('<h1 id="百度面试-2023-02-13" tabindex="-1"><a class="header-anchor" href="#百度面试-2023-02-13" aria-hidden="true">#</a> 百度面试 2023.02.13</h1><h2 id="_2023-02-13-百度一面" tabindex="-1"><a class="header-anchor" href="#_2023-02-13-百度一面" aria-hidden="true">#</a> 2023.02.13 百度一面</h2><ul><li>自我介绍/项目经历</li><li>项目的背景和主要工作, 梳理项目的实现思路</li><li>Redis <ul><li>Redis 用了哪些数据类型?</li><li>Redis 持久化策略选型?</li><li>RDB/AOF 的优点和区别?</li><li>Redis 缓存击穿/雪崩的防止?</li><li>怎样保证数据一致性?</li><li>除了先删后改还有什么保证一致性的方法?</li></ul></li><li>Kafka 怎样保证整个链路上消息不丢失?(不能只回答 Kafka 的保证) <ul><li>Kafka 本身</li><li>消费者手动 ack</li><li>生产方 retry + error log 恢复</li></ul></li><li>Java JVM 类加载机制和时机?(忘了回答时机了) <ul><li>回答了三种 ClassLoader 机制 + 小项目使用 URLClassLoader</li></ul></li><li>数据库 <ul><li>MySQL 索引和事务的理解?(事务没答好)</li><li>说一下 MVCC 的理解和实现?(没看过基本上)</li></ul></li><li>算法 <ul><li>LRU 实现, 数据结构和方法</li><li>数组, 有正负元素, 求最大子集合(最大的元素和)(动态规划)</li></ul></li></ul><blockquote><p>面评: 整体还行, 算法和数据结构 + 数据库可以多看看</p></blockquote><h2 id="_2023-02-14-百度二面" tabindex="-1"><a class="header-anchor" href="#_2023-02-14-百度二面" aria-hidden="true">#</a> 2023.02.14 百度二面</h2><ul><li>自我介绍/项目经历</li><li>MySQL <ul><li>MySQL 索引类型?</li><li>B+ 树索引的底层详细设计?</li><li>为什么使用 B+ 树而不是 B 树?</li><li>Count(1) 和 Count(*) 的区别?(没区别)</li><li>用过多节点数据库部署吗?</li></ul></li><li>Redis <ul><li>项目中 Redis 怎么用的?</li><li>验证码用 Redis 什么结构存的?</li><li>如果用户数量过多验证码太多怎么办?(hash 大 key 的解决?)</li><li>验证码还能用别的方式存吗?</li><li>验证码怎么配置过期时间?</li><li>Hash 能对每个 HK 进行超时处理吗?</li><li>原生命令怎么对每个 HK 设置超时?</li><li>Redis 应用多还是原理了解多?</li><li>Redis String 的底层原理?</li><li>Redis String 类型如果存数字是怎么存的? 和 String 有区别吗?</li><li>Redis 持久化策略?</li><li>Redis 集群有一个节点挂掉了, 怎样将挂掉节点的数据同步到新增节点上?</li><li>备份过程中新增的数据怎样给到新增节点?</li></ul></li><li>SpringBoot <ul><li>SpringBoot 实现单例的方法?</li><li>Enum 类型可以实现单例吗? 是什么原理?</li><li>SpringBoot 自动注册的机制?</li><li>itext 是怎么使用的, 商业化线上使用有经过授权吗?(差点出大问题)</li></ul></li><li>MQ <ul><li>用过哪些消息队列?</li><li>用 Kafka 的目的是什么?</li><li>项目中怎样保证 Kafka 消息时序性?</li><li>怎样保证 MQ 严格的时序性?</li><li>高并发怎样保证严格时序性, 不能用单个 Partition?</li><li>怎样用 Redis 实现消息队列?</li><li>不用发布订阅模式怎样实现消息队列?(呆逼答了 zset)</li><li>有没有比 zset 更好的实现方式?(答 list)</li><li>为什么 list 消耗比 zset 小?</li></ul></li><li>Redis <ul><li>Redis 有事务吗?</li><li>Redis 怎么实现事务的?</li><li>命令行里用过 Redis 的事务命令吗?</li><li>Redis 怎样实现全局锁? (LUA 原子性更改)</li><li>多线程读的时候, 上述的操作还是原子性的吗?</li><li>进程和线程的区别?(上面对 Redis 进程和线程的了解不够好)</li><li>Redis 同一 1ms 多个请求的读是多线程还是单线程?</li><li>有了解过 setnx 命令吗?(全局锁用这个, 可以看看)</li></ul></li><li>算法 <ul><li>100w 用户, 按年龄排序, age = [1, 100], 时间复杂度 O(n). (复杂度 O(n), 一眼桶排序)</li></ul></li></ul><h2 id="_2023-02-16-百度三面" tabindex="-1"><a class="header-anchor" href="#_2023-02-16-百度三面" aria-hidden="true">#</a> 2023.02.16 百度三面</h2><ul><li>自我介绍</li><li>工作室 <ul><li>工作室分享会分享了什么东西?</li><li>分享完之后大家的反馈?</li></ul></li><li>三创赛 <ul><li>创意是什么?</li><li>创意是谁想出来的?</li><li>分工?</li></ul></li><li>编程学了多久?</li><li>编程学习经历?</li><li>语言 <ul><li>Java 和 Go 更擅长哪个? 更喜欢哪个?</li><li>为什么 Go 比 Java 简洁?</li><li>为什么觉得 Go 更好不去找 Go 的工作而找 Java 的?</li></ul></li><li>项目 <ul><li>命令行插件的初衷是什么? 解决了什么问题?</li><li>为什么选择用 Java 写而不是用 Linux 命令行之类的?</li><li>命令行写完之后干了些啥? 是只写完就结束了吗?</li><li>开源仓库有多少 Star?</li><li>平时关注开源项目吗?</li><li>项目都是在学校做的吗?</li><li>本科还是研究生? 介绍一下工作室?</li><li>参与了哪些项目?</li></ul></li><li>场景题: <ul><li>商品平台, 购买, 库存扣减的设计?</li><li>消息队列异步下单处理真的可以提升用户体验吗?</li><li>上面的方案下单失败怎么办?</li><li>强一致性场景能这么做吗?</li><li>怎么改进? 下单过程真的适合做异步吗?</li><li>订单和支付的逻辑保证?</li><li>到底是先生成订单还是先支付? (先订单再支付)</li><li>下单和支付是一个请求还是两个请求?</li><li>微服务无法用事务, 怎么解决? (订单状态字段的状态机)</li></ul></li><li>做项目过程中的难题? <ul><li>Shiro 集成 JWT</li><li>Redis + LUA 实现原子性库存的查询和扣减, Win redis-cli 命令 bug</li></ul></li><li>反问: <ul><li>面试评价? (评价都分小问题聊到了, 自己觉得咋样?) (答:真实业务考虑不足, 回复: 理解到位)</li><li>面试流程, 一共几面? (三面)</li></ul></li></ul>',8),d=[s];function t(r,o){return l(),e("div",null,d)}const h=i(u,[["render",t],["__file","Baidu2023.02.13.html.vue"]]);export{h as default};