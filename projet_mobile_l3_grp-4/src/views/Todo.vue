<template>
    <Todolist :idList="id"/>
    <Sidebar/>
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

</style>