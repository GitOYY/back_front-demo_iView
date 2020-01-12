<template>
    <div>
      <div class="header_style">
        <h1>B-S management &nbsp;后台管理系统</h1>
        <div class="userInfo">
          <Avatar icon="ios-person" size="large" class="avatar"/> {{userInfo.username}}
        </div>
      </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'header',
  computed: {
    // ...mapState('user', ['userInfo'])
    ...mapGetters('user', ['userInfo'])
  }
}
</script>

<style lang="less" scoped>
.header_style{
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1{
    margin-left: 5em;
    color: white;
  }
  .userInfo {
    color: white;
    font-size: 15px;
    margin-right: 20px;
    .avatar {
      margin-right: 10px;
    }
  }
}

</style>
