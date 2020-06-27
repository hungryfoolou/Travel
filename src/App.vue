<template>
  <div id="app">
    <!-- keep-alive：路由内容被加载一次之后，就把路由内容放到内存中，下次进入该路由时
    不需重新渲染该组件、重新执行钩子函数、发生ajax请求，只需要从内存中把以前的内容拿出来显示在页面即可 -->
    <keep-alive exclude="Detail"> <!-- exclude里面写不必缓存的组件的名字 -->
       <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
