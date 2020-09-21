<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolors sit amet consectetur adipisicing elit. Reiciendis sed provident quas odio id dolores tempore velit nobis et consectetur.</p>
    <ul v-if="data.length">
      <li v-for="(item, index) in data" :key="index" >{{item.name}} <strong>{{item.age}}</strong> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      data: []
    }
  },
  async created() {
    var res = await window.Axios.get('http://localhost:8000');
    if(res.status == 200){
      this.data = res.data
    }
  },
}
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

  margin: 4px 10px;
}
a {
  color: #42b983;
}
</style>
