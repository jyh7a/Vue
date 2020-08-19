<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <p slot="body">무엇이든 입력하세요.</p>
    </Modal>
  </div>
</template>


<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== ''){
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput() 
      }else{
        this.showModal = !this.showModal
      }
    },
    clearInput() {
      this.newTodoItem = ''
    }
  },
  components: {
    Modal
  }
}
</script>


<style scoped>

input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  width: calc(100% - 59px);
  height: 100%;
  text-align: center;
  padding: 0;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn{
  color: white;
  vertical-align: middle;
}

.closeModalBtn{
  color: #42b983;
  cursor: pointer;
}

</style>