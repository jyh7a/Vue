<template>
 
  <div id="app">  
    <TodoHeader/>
    <TodoInput v-on:addTodoItem="addOneItme"/>
    <TodoList v-bind:propsdata="todoItems"
      v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    />
    <TodoFooter v-on:clearAll="clearAllItems"/>
  </div>

</template>


<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {

  data: function () {
    return {
      todoItems: []
    }
  },
  methods:{
    addOneItme: function (todoItem) {
      const obj = {completed: false, item: todoItem}
      localStorage.setItem(todoItem, JSON.stringify(obj))
      this.todoItems = [...this.todoItems, obj]
    },
    removeOneItem: function (todoItem, index) {
      localStorage.removeItem(todoItem.item)
      this.todoItems.splice(index, 1)
    },
    toggleOneItem: function(todoItem, index){
      this.todoItems[index].completed = !this.todoItems[index].completed
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems: function(){
      localStorage.clear()
      this.todoItems = []
    }
  },
  created: function() {
    if(localStorage.length > 0){
      for (let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          let newItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
          this.todoItems = [...this.todoItems, newItem]
        } 
      }
    }    
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }

}

</script>


<style>

html *{
  /* outline: 1px solid seagreen; */
}

body{
  text-align: center;
  background-color: #f6f6f6;
  box-sizing: border-box;
}

input{
  border-style: groove;
  width: 200px;
}

button{
  border-style: groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
