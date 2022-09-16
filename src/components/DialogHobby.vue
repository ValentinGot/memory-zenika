<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import { HobbyInterface } from '../types/HobbyInterface';

const props = defineProps<{
  visible: boolean,
  hobby: HobbyInterface
}>();

const emit = defineEmits({
  visibleChange: (_: boolean) => true
});

function getPhotoWithPath(image: string): string {
  return `${import.meta.env.BASE_URL}photographs/${image}`;
}

function onClose() {
  emit('visibleChange', false);
}
</script>

<template>
  <div class="dialog-overlay" :class="{ 'dialog-overlay--visible': props.visible }">
    <div class="dialog">
      <h2 class="dialog--title">
        <Component :is="props.hobby?.icon" />

        {{ props.hobby?.name }}
      </h2>

      <div class="dialog--content">
        <p>{{ props.hobby?.description }}</p>

        <div
          :class="[ 'photographs-container', props.hobby?.hobby ]"
        >
          <img
            v-for="photo of props.hobby?.photographs"
            :src="getPhotoWithPath(photo)"
            :id="photo" />
        </div>
      </div>

      <div class="dialog--actions">
        <button
          class="button button--red"
          @click="onClose()"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog {
  width: 80vw;

  &--title {

    svg {
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
    }

  }

  &--content {

    p {
      text-align: center;
    }

    .photographs-container {
      display: flex;
      justify-content: center;
      margin-top: 15px;

      img {
        max-width: 50%;
        max-height: 60vh;

        & + img {
          margin-left: 10px;
        }

      }

      &.photography,
      &.traveler {

        img:first-child {
          width: 40%;
        }

      }

    }

  }

}

</style>
