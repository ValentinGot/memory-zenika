<script setup lang="ts">
import { CardInterface } from '../types/CardInterface';
import { CardVisibility } from '../types/CardVisibility';

const props = defineProps<{
  card: CardInterface
}>();

const emit = defineEmits({
  cardFlip: (_: CardInterface) => true
});

function onCardFlip() {
  if (props.card.visibility === CardVisibility.FRONT) {
    props.card.visibility = CardVisibility.BACK;

    emit('cardFlip', props.card)
  }
}
</script>

<template>
  <div
    :class="[ 'card', { 'card--visibility-back': props.card.visibility === CardVisibility.BACK, 'card--state-found': props.card.found } ]"
    @click="onCardFlip()"
  >
    <div class="card--side-front">
      <img src="src/assets/logo-zenika.png" alt="Zenika Logo" />
    </div>
    <div class="card--side-back">
      <Component :is="props.card.icon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
$not-found-elevation: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20);
$found-elevation: 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20);
$found-color: #DADADA;

.card {
  position: relative;
  perspective: 1000px;

  .card--side-front,
  .card--side-back {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    transition: transform 1s ease, box-shadow .5s;
    backface-visibility: hidden; // We don't want to see the back part of the element
    border-radius: 4px;
    box-shadow: $not-found-elevation;
  }

  .card--side-front  {
    cursor: pointer;
    background-color: #010008;

    img {
      height: 80%;
    }

  }

  .card--side-back {
    transform: rotateY(180deg);

    svg {
      height: 100%;
      width: auto;
    }

  }

  &--visibility-back {

    .card--side-front {
      transform: rotateY(-180deg);
    }

    .card--side-back {
      transform: rotateY(0);
    }

  }

  &--state-found {
    position: relative;

    .card--side-front,
    .card--side-back {
      box-shadow: $found-elevation;
    }

    svg :deep(.fill),
    svg :deep(.stroke) {
      transition: .5s all;
    }

    svg :deep(.fill) {
      fill: $found-color;
    }

    svg :deep(.stroke) {
      stroke: $found-color;
    }

  }

}
</style>
