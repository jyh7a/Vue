<template>
  
  <div>
    <!-- <app-header></app-header> -->
    <!-- <AppHeader v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"/> -->
    <AppHeader
     v-bind:propsdata="str"
     v-on:renew="renewStr"
     />

  </div>


</template>


<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    // 'app-header' : AppHeader
    AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi'
    }
  }
}
</script>


<style>

</style>