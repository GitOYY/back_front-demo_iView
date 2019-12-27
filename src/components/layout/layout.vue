<template>
  <div class="layout">
    <div class="header">
      <Header></Header>
    </div>
    <div class="container">
      <EasyScrollbar :barOption="myBarOption">
        <div class="nav" :style="'height:'+scrollHeight+'px'">
          <Nav></Nav>
        </div>
      </EasyScrollbar>
      <div class="router">
          <transition name="fade" mode="out-in" >
            <router-view></router-view>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header'
import Nav from './nav'

export default {
  name: 'navigator',
  components: {
    Header,
    Nav
  },
  data () {
    return {
      scrollHeight: 0, // EasyScrollbar的高度
      myBarOption: {
        barColor: '#A9A9A9', // 滚动条颜色
        barWidth: 6, // 滚动条宽度
        railColor: '#363e4f', // 导轨颜色
        barMarginRight: 0, // 垂直滚动条距离整个容器右侧距离单位（px）
        barMaginBottom: 0, // 水平滚动条距离底部距离单位（px)
        barOpacityMin: 0, // 滚动条非激活状态下的透明度
        zIndex: '10000', // 滚动条z-Index
        autohidemode: true, // 自动隐藏模式
        horizrailenabled: false // 是否显示水平滚动条
      }
    }
  },
  mounted () {
    this.scrollHeight = `${document.documentElement.clientHeight - 70}`
  },
  methods () {

  }
}
</script>

<style lang="less" scoped>
  @import "../../style/mixin";
  /deep/ .ivu-menu-dark.ivu-menu-vertical /deep/ .ivu-menu-item:hover, .ivu-menu-dark.ivu-menu-vertical /deep/ .ivu-menu-submenu-title:hover {
    background: none;
  }
  /* 取消Menu一级标题打开状态的背景 */
  /deep/ .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title{
    background: none;
  }
  /* 取消Menu一级标题的背景 */
  /deep/ .ivu-menu-dark{
    background: none;
  }
  .layout{
    .wh(100%, 100%);
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .header{
    .wh(100%, 70px);
    line-height: 70px;
    background: #363e4f;
  }
  .container{
    .wh(100%, 100%);
    min-height: calc(100% - 70px);
    display: flex;
    flex-direction: row;
  }
  .nav{
    .wh(270px, 100%);
    background: #363e4f;
  }
  .router{
    .wh(100%, 100%);
    background: forestgreen;
    min-height: calc(100% - 70px);
    overflow: auto;
  }
</style>
