<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  defaultVisible: boolean
}>();

const visible = ref(false);

onMounted(() => {
  visible.value = props.defaultVisible;
});

function onClose() {
  visible.value = false;
}
</script>

<template>
  <div class="dialog-overlay" :class="{ 'dialog-overlay--visible': visible }">
    <div class="dialog">
      <h1 class="dialog--title">
        <img src="../assets/avatar-prison-square.png" />
        Enchanté, moi c'est Valentin
      </h1>

      <div class="dialog--content">
        <p>Ravi de tous vous rencontrer, je m'appelle Valentin, j'ai 31 ans, je suis developpeur front-end depuis 8 ans ...</p>
        <br />
        <p>Pffiou, même moi je m'emmerde en écrivant ça ... Si on passait plutôt à un registre un peu plus fun pour les présentations ?</p>
      </div>

      <div class="dialog--actions">
        <button
          class="button button--red"
          @click="onClose()"
        >
          Passer aux présentations
        </button>
      </div>
    </div>
  </div>
</template>
