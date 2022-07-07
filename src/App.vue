<script setup lang="ts">
import { computed, reactive } from 'vue';
import { cardsDatasource } from './data/cards.datasource';
import { CardInterface } from './types/CardInterface';
import { CardVisibility } from './types/CardVisibility';

const cards = reactive<CardInterface[]>(cardsDatasource);

const randomCards = computed(() => cards.sort(() => 0.5 - Math.random()));

let flippedCards: CardInterface[] = [];
function onCardFlip(card: CardInterface) {
  if (flippedCards.length < 2) {
    card.visibility = card.visibility === CardVisibility.FRONT ? CardVisibility.BACK : CardVisibility.FRONT;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      if (flippedCards[0].hobby === flippedCards[1].hobby) {
        setTimeout(() => {
          flippedCards[0].found = true;
          flippedCards[1].found = true;
          flippedCards = [];

          if (allCardsFounds()) {
            alert('Yeah !! You won !')
          }
        }, 700);
      } else {
        setTimeout(() => {
          flippedCards[0].visibility = CardVisibility.FRONT;
          flippedCards[1].visibility = CardVisibility.FRONT;
          flippedCards = [];
        }, 1000);
      }
    }
  }
}

function allCardsFounds(): boolean {
  return cards.reduce((acc, card) => acc && card.found, true);
}
</script>

<template>
  <div class="cards">
    <Card
      v-for="card of randomCards"
      :key="card.id"
      :card="card"
      @card-flip="onCardFlip"
    ></Card>
  </div>
</template>

<style scoped lang="scss">
@import './assets/css/abstracts/breakpoints';

$columns: 4;
$gap: 20px;

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $gap;
  height: 100%;
  padding: $gap;
  overflow: hidden;

  @include layout-bp('gt-md') {
    grid-template-columns: repeat(4, 1fr);
  }

  @include layout-bp('gt-lg') {
    grid-template-columns: repeat(5, 1fr);
  }

}
</style>
