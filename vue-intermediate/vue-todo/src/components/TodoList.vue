<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">

        <i class="fas fa-check checkBtn" 
          v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toogleComplete(todoItem, index)">
        </i>
        <span v-bind:class="{textCompleted: todoItem.completed}"> {{ todoItem.item }} </span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
          <i class="fas fa-trash-alt"></i>
        </span>

      </li>
    </ul>
  </div>
</template>


<script>
export default {

  data: function() {
    return {
      todoItems: []
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
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    toogleComplete: function(todoItem, index) {
      console.log(index)
      todoItem.completed = !todoItem.completed
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
  }

}
</script>


<style scoped>

ul{
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-right: 5px;
}

.removeBtn{
  margin-left: auto;
  color: #de4343;
  cursor: pointer;
}

.checkBtn{
  line-height: 50px;
  color: #62acde;
  margin-right: 10px;
  cursor: pointer;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}



</style>