<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  visible: boolean;
  nbHits: number;
}>();
</script>

<template>
  <div class="dialog-overlay" :class="{ 'dialog-overlay--visible': props.visible }">
    <div class="dialog">
      <h1 class="dialog--title">
        <img src="../assets/victory.svg" />
      </h1>

      <div class="dialog--content">
        <p>Félicitations, tu as gagné en <strong>{{ nbHits }}</strong> coups</p>

        <br/>

        <p>Bon bin voilà, tu sais tout de moi (enfin ...). Au plaisir de se croiser dans les locaux.</p>
      </div>
    </div>
  </div>
</template>
