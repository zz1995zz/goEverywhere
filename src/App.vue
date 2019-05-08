<template>
  <div id="app">
  	<!-- keep-alive性能优化 -->
    <keep-alive exclude="Detail">
    	<router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
};
</script>
<style>
</style>
