<template>
    <div v-if="$route.query.bool">
      这是真设置页面
    </div>
    <div v-else>
      这是假设置页面
    </div>
</template>

<script>
export default {
  name: 'setting',
  methods: {

  },
  created () {
    // url中会带参数
    console.log(this.$route.query.bool)
    // url中不会带参数
    console.log(this.$route.params.bool)
  }
}
</script>

<style scoped>

</style>
