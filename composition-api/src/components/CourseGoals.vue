<template>
  <div>
      <goals-list></goals-list>
      <add-goal></add-goal>
  </div>
</template>

<script>

import GoalsList from "./GoalsList.vue";
import AddGoal from "./AddGoal.vue";

export default {
    components:{
        GoalsList,
        AddGoal
    },
    setup(){
        
    }
}
</script>

<style>

</style>