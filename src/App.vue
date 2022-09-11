<script setup lang="ts">
import { reactive } from 'vue';
import { randomizedCardsDatasource } from './data/cards.datasource';
import { hobbiesDatasource } from './data/hobbies.datasource';
import { CardInterface } from './types/CardInterface';
import { CardVisibility } from './types/CardVisibility';
import { HobbyInterface } from './types/HobbyInterface';

const cards = reactive<CardInterface[]>(randomizedCardsDatasource);
const hobbies = reactive<HobbyInterface[]>(hobbiesDatasource);

let _flippedCards: CardInterface[] = [];

function onCardFlip(card: CardInterface) {
  if (_flippedCards.length < 2) {
    card.visibility = CardVisibility.BACK;
    _flippedCards.push(card);

    if (_flippedCards.length === 2) {
      if (_flippedCards[0].hobby === _flippedCards[1].hobby) {
        setTimeout(() => {
          const hobby = hobbies.find((hobby) => hobby.hobby === _flippedCards[1].hobby);
          if (hobby) {
            hobby.enabled = true;
          }

          _flippedCards[0].found = true;
          _flippedCards[1].found = true;
          _flippedCards = [];

          if (_allCardsFounds()) {
            alert('Yeah !! You won !');
          }
        }, 700);
      } else {
        setTimeout(() => {
          _flippedCards[0].visibility = CardVisibility.FRONT;
          _flippedCards[1].visibility = CardVisibility.FRONT;
          _flippedCards = [];
        }, 1000);
      }
    }
  }
}

function _allCardsFounds(): boolean {
  return cards.reduce((acc, card) => acc && card.found, true);
}
</script>

<template>
  <div class="cards">
    <Card
      v-for="card of cards"
      :key="card.id"
      :card="card"
      @card-flip="onCardFlip"
    ></Card>
  </div>

  <div class="hobbies">
    <Hobby
      v-for="hobby of hobbies"
      :id="hobby"
      :hobby="hobby"
    ></Hobby>
  </div>

  <DialogWelcome :defaultVisible="true"></DialogWelcome>
</template>

<style scoped lang="scss">
@import './assets/css/abstracts/breakpoints';

$columns: 4;
$gap: 20px;

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $gap;
  height: calc(100vh - 80px);
  padding: $gap;
  overflow: hidden;

  @include layout-bp('gt-md') {
    grid-template-columns: repeat(4, 1fr);
  }

  @include layout-bp('gt-lg') {
    grid-template-columns: repeat(5, 1fr);
  }

}

.hobbies {
  overflow-y: scroll;
  display: flex;
  max-width: 100vw;
  padding: 0 20px 20px;
  -ms-overflow-style: none;  // Hide scrollbar (IE, Edge)

  &::-webkit-scrollbar {
    display: none; // Hide scrollbar (Chrome, Safari, Opera)
  }

  @include layout-bp('gt-xs') {
    justify-content: center;
  }

  .hobby {
    flex-shrink: 0;
    flex-basis: 60px;

    & + .hobby {
      margin-left: 15px;
    }

  }

}
</style>
