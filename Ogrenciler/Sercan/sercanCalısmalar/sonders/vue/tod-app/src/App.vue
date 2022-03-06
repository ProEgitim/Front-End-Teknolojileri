<template>
  <div class="content">
    <h1>Todo App</h1>
    <form @submit.prevent="addTodo()">
    <div class="field">
      <div class="control">
        <input 
        class="input"
        placeholder="todo gir"
        v-model="todo" 
        type="text">
      </div>
      <button class="button is-warning">ekle</button>
    </div>
    </form>
    <div class="card-content">
      <div>{{todo.content}}</div>
        <div>Yapıldı:{{todo.done}}</div>
    </div>
  </div>


</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const todo = ref('')
    const todos = ref([])
    function addTodo(){
      todos.value.push({
        done:false,
        content:todo.value,
        id: Date.now();
      })
    }
    function done(todo){
      todo.done = !todo.done
    }
     return{
    todo,
    todos,
    addTodo,
    done,
  }
  }
 
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
