<template>
  <div class="hello">
    <h1>Search</h1>
    <input v-model="search" type="text" />
    <ul>
      <li v-for="(todo, index) in filterTodos" :key="index">
        {{ todo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchTodo",
  data() {
    return {
      todos: [
        { name: "Cuộc sống" },
        { name: "Nguyễn Văn Vinh" },
        { name: "Lê văn Hà" },
        { name: "Bùi văn nguyện" },
      ],
      search: "",
    };
  },
  computed: {
    filterTodos() {
      return this.todos.filter((todo) => {
        return todo.name.match(this.search);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
