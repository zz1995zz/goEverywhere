<template>
  <div id="app">
  	<!-- keep-alive性能优化 -->
    <keep-alive>
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
