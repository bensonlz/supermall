<template>
<div class="tab-bar-item" @click="itemclick">
  <div v-if="!isActive">
    <slot name="item-icon"></slot>
  </div>
  <div v-else>
    <slot name="item-icon-active"></slot>
  </div>
  <div :style="activeStyle">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      defaulte: 'red'
    }
  },
  computed: {
    isActive() {
      // 当path路径-1的时候，找到路径
      if (this.$route.path == this.path) {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    activeStyle() {
      return this.isActive ? {
        color: this.activeColor
      } : {}
    }
  },
  methods: {
    itemclick() {
      // 需要返回用push，不需要返回用reaplace
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
</style>
