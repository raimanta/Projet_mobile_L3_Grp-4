<template>
    <div id="todovue">
        <div id="sidebar">
            <Sidebar/>
        </div>
        <div id="todolist">
            <Todolist :idList="id"/>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/sidebar'
import Todolist from '../components/Todolist.vue'
export default {
  components: { 
      Todolist,
      Sidebar
  },
    data() {
        return {
            id: parseInt(this.$route.params.id) //On met le parseInt sinon on passe un String en prop.
        }
    }
}
</script>

<style>
#todovue{
    display: flex;
    width: 100%;
}
#sidebar {
    width: 20%;
    padding: 0;
    margin: 0;
}
#todolist{
    text-align: left;
    padding-left: 40px;
    padding-bottom: 40px;
    padding-right: 40px;
    margin: 20px;
    width: 500px;
    background-color: white;
    box-shadow: 2px 2px 3px gray;
}
</style>