<template>
  <section class="container">
      <form @submit.prevent="addGoal">
          <div>
              <label for="goaltext">Goal</label>
              <input type="text" id="goaltext" v-model="enteredText">
          </div>
          <p v-if="invalidInput">Please enter a valid goal text (non-empty).</p>
          <button>Add Goal</button>
      </form>
  </section>
</template>

<script>
import {ref, watch} from "vue";

export default {
    emits: ["add-goal"],
    setup(_,context){
        
        const enteredText = ref("");
        const invalidInput = ref(false);

        watch(invalidInput,function(val){
            if(val){
                console.log("Analytics: Invalid Input");
            }
        })

        function addGoal(){
            invalidInput.value = false;
            if(enteredText.value === ""){
                invalidInput.value = true;
                return;
            }
            context.emit("add-goal",enteredText.value);
            enteredText.value = "";
        }

        return {
            enteredText,
            invalidInput,
            addGoal
        };
    }
}
</script>

<style>

</style>