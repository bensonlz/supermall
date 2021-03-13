<template>
<Tabbar>
  <TabbarItem path="/home" activeColor="blue">
    <template v-slot:item-icon>
      <img src="~assets/img/tabbar/home.svg" alt=""> </template>
    <template v-slot:item-icon-active>
      <img src="~assets/img/tabbar/home_active.svg" alt=""> </template>
    <template v-slot:item-text>
      <div>首页</div>
    </template>
  </TabbarItem>
  <TabbarItem path="/category" activeColor="blue">
    <template v-slot:item-icon>
      <img src="~assets/img/tabbar/category.svg" alt=""></template>
    <template v-slot:item-icon-active>
      <img src="~assets/img/tabbar/category_active.svg" alt=""></template>
    <template v-slot:item-text>
      <div>分类</div>
    </template>
  </TabbarItem>
  <TabbarItem path="/shoppcartcart" activeColor="blue">
    <template v-slot:item-icon>
      <img src="~assets/img/tabbar/shoppcartcart.svg" alt=""></template>
    <template v-slot:item-icon-active>
      <img src="~assets/img/tabbar/shoppcartcart_active.svg" alt=""></template>
    <template v-slot:item-text>
      <div>购物车</div>
    </template>
  </TabbarItem>
  <TabbarItem path="/profile" activeColor="blue">
    <template v-slot:item-icon>
      <img src="~assets/img/tabbar/profile.svg" alt=""></template>
    <template v-slot:item-icon-active>
      <img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
    <template v-slot:item-text>
      <div>我的</div>
    </template>
  </TabbarItem>
</Tabbar>
</template>

<script>
import Tabbar from 'common/tabbar/tabbar'
import TabbarItem from 'common/tabbar/tabbaritem'

export default {
  name: "maintabbar",
  components: {
    Tabbar,
    TabbarItem
  },
}
</script>

<style scoped>
  img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
  }
</style>
