<template>
  <div class="home">
    <div class="header">
      <Header></Header>
    </div>
    <div class="body">
      <div class="nav">
        <Nav></Nav>
      </div>
      <div class="router">
        这是要跳转的路由
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../layout/header'
import Nav from '../layout/nav'

export default {
  name: 'navigator',
  components: {
    Header,
    Nav
  },
  data () {
    return {
    }
  },
  methods () {

  }
}
</script>

<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}
.body{
  height: 100%;
  display: flex;
  flex-direction: row;
}
.nav{
  height: 500px;
  width: 280px;
  overflow-y:auto;
}
.router{
  width: 100%;
  height: 100%;
  background: forestgreen;
  padding: 20px;
}
</style>
