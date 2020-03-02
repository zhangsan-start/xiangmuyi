# created by geekxia at 2019-12-30

## 工程架构

当我们创建一个新项目，或者是从仓库里拉取到一个旧项目时。
* README.md
* package.json


#### 脚手架的使用

* [Vue CLI 脚手架](https://cli.vuejs.org/zh/)

```
// 创建项目

npm install @vue/cli -g
vue create vue-project

// 项目启动
npm install
npm run serve  或  npm start

// 项目执行ESLint检测与修复
npm run lint

// 项目打包上线
// 会生成一个 /dist 目录，把这个目录发给运维工程就可以了
// .map这个是静态资源的映射关系的配置文件
npm run build
```


#### ESLint/JSLint

* [ESLint官网](https://eslint.bootcss.com/)
* ESLint 这样的可以让你在编码的过程中发现问题，并且可以自己创建检测规则，保持代码编写风格的一致性。
* Vue项目中，如何修改ESLint验证规则？在package.json文件中配置：
```
"eslintConfig": {
	"rules": {
		"no-console": 0
	}
}
```
* ESLint规则的配置，有三种处理级别，分别是`error-2  warn-1  off-0`
* 在package.json中配置完成后，要重启服务器才能生效。



<hr>
## 项目结构说明

#### 1、项目结构介绍

* `src` 开发目录
	* `src/main.js` 程序的入口文件
	* `src/App.vue` App组件
	* `scr/components` 组件目录
	* `src/assets` 程序的静态资源目录
* `public` 本地服务器的静态资源目录
* `dist`目录，执行`npm run build`所生成的目录

#### 2、单文件组件

* [Vue单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
* 为什么要使用单文件？有哪些优势？
* `<template></template>`放置HTML模板
* `<script></script>`放置js代码
* `<style></style>`放置样式代码
* 一个`.vue`文件就是一个组件


<hr>
## 项目架构

#### 使用 SASS

* [Sass官网](https://www.sass.hk/)
```
//  建议使用 cnpm 进行安装
cnpm install sass-loader -D
cnpm install node-sass -D
```
```
<style lang="scss" scoped>
	@import '@/assets/css/common.scss';
	.page {
	  > button {
	    font-size: $btnSize;
	    color: $color;
	  }
	  > div {
	    button {
	      color: $color2;
	    }
	  }
	  > .box1 {
	    .btn {
	      border: .03rem solid red;
	    }
	  }
	}
</style>
```
* 如果因为网络原因，node-sass安装失败，使用下面命令进行安装
```
npm install node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```
* [node-sass 安装失败报错的原因及解决办法(整理)](https://www.cnblogs.com/gitnull/p/10188030.html)
* [Less官网](http://lesscss.cn/)

#### Vue-Router路由

* 什么是SPA单页面程序？SPA应用有哪些优点和缺点？

###### 开始使用路由

```
// Vue-Router的安装
npm install vue-router -S
```
```js
// /src/router.js
import Vue form 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  // mode: 'history',  // 切换VueRouter的路由模式
  routes: [
    {
      path: '/todo',   // 当路由是 /todo时，渲染TodoList组件；下面的同理
      component: TodoList,
      name: 'todo'
    }
  ]
})
export default router
// 在main.js引入，在Vue实例化时，进行挂载
new Vue({
	router,
	render: h=>h(App)
}).$mount('#app')
```

* 路由实现，使用`router-view`和`router-link`组件
```
<div class="navbar">
	<!-- 声明式路由 -->
	<!-- to 指定要跳转至哪个路由 -->
	<!-- tag 指定用什么HTML标签来替换渲染router-link -->
	<!-- activeClass 指定导航选项卡的高亮样式 -->
	<router-link to='/todo' tag='span' activeClass='on'>TodoList</router-link>
</div>

<!-- 在这里承载一级路由所对应的组件，在这里渲染一线路由所对应的组件 -->
<router-view></router-view>
<!-- <router-view name='geek'></router-view> -->
```

* 嵌套路由，使用路由的`children`字段
* 动态路由，路由传参`/detail/:id`
```js
this.$router.push('/detail/'+item.id)
```
* 动态路由，参数获取`this.$route.params`

###### 路由命名与别名

* 路由命名，即给路由取一个名称，用一个变量值代表路由
* 路由别名，可以理解为路由的小名
```
{
	path: '/film',
	component: Film,
	alias: '/f',		// 路由/film的别名
	name: 'myfilm'		// 路由的名称
}
```
```js
this.$router.push({name: 'myfilm', params: {}})
```

###### 命名视图

```html
<router-view name='a'></router-view>
<router-view name='b'></router-view>
```
```
{
	path: '/film',
	components: {
		a: FilmA,
		b: FilmB
	}
}
```
* 当访问/film路径时，name=a的视图容器承载FilmA组件，name=b的视图承载FilmB组件。


###### History与Hash模式

* 前端有两种路由方案，分别是History模式和Hash模式，Vue-Router默认使用Hash模式。
* 使用Vue-Router的 mode选项，可以改变其路由模式。
* History模式时，打包部署到服务端，需要后端配合对路由进行处理，否则会报404，其本质是由`history.pushState`来实现的。
* Hash模式，Url中拼接了一个`#`符，部署服务端没有404这个问题，其本质是由`location.hash`来实现的。

###### 全局路由守卫

```js
let router = new VueRouter({})
// 路由守卫，全局的路由拦截
let isLogin = false
// 在路由匹配成功之前
router.beforeEach((to, from, next) => {
  if (to.path === '/order') {
    if (!isLogin) {
      // 如果用户没有登录，跳转至 /login
      next('/login')
    } else {
      // 已登录，直接通过
      next()
    }
  } else {
    next()
  }
})
```

###### 局部路由守卫

```js
// 在组件的内部，实现路由拦截，即局部守卫
export default {
  // 局部的路由守卫，路由拦截
  // 箭头函数的写法
  beforeRouteEnter(to, from, next) {
    let isLogin = true
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
}
```


#### 使用Element

```
// npm install element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```


#### 使用Vuex状态管理工具

```
npm install vuex -S
```
* 五个核心概念：state, mutations, actions, getters, modules
* 当分多个modules时，每个module都要手动指定 namespaced:true 命名空间。
* 多modules时，尽量避免命名冲突，以减少代码的复杂度。


#### axios的使用

* 前后端分离项目，在工程化环境一般使用axios调接口
* axios非常轻量级，并且支持Promise
* axios的使用，必须预先封装，要配置请求拦截器和响应拦截器
* 在请求拦截器中，比如添加token等
* 在响应拦截器中，对响应数据进行预先过滤，以失败的情况进行统一处理。
