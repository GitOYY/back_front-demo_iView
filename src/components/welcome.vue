<template>
    <div class="welcome">
      <div id="div" style="display: flex; flex-direction: row; justify-content: space-between;width: auto; background: #3498db">
        <h1 style="color: red; margin-left: 10px">左边</h1>
        <h1 style="color: blue; margin-right: 10px">右边</h1>
      </div>
      <div id="button">
        <div class="button" @click="onTap()">
          页面跳转
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'welcome',
  methods: {
    onTap () {
      //  url中会带参数
      // this.$router.push({
      //   path: 'setting',
      //   query: {bool: true}
      // })

      //  url中不会带参数
      this.$router.push({
        name: '/setting',
        params: {bool: true}
      })
    }
  }
}
</script>

<style lang="less" scoped>
.welcome{
}
#button {
  width: auto;
  /*background: #e67e22;*/
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.button{
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: black;
  background: white;
  align-content: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
</style>
