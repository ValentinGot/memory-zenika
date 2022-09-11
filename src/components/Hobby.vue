<script setup lang="ts">
import { HobbyInterface } from '../types/HobbyInterface';

const props = defineProps<{
  hobby: HobbyInterface
}>();

</script>

<template>
  <div
    :class="[ 'hobby', { 'hobby--state-enabled': props.hobby.enabled } ]"
  >
    <Component :is="props.hobby.icon" />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/css/abstracts/colors';
@import '../assets/css/abstracts/mixins';

.hobby {
  height: 60px;
  width: 60px;
  padding: 15px;
  border: 1px solid $disabled-color;
  border-radius: 50%;
  transition: .5s all;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
    @include svg-color($disabled-color);
  }

  &--state-enabled {
    border-color: $primary-color;
    background-color: $primary-color;
    @include elevation('3dp');

    svg {
      @include svg-color(#FFFFFF);
    }

  }

}
</style>
