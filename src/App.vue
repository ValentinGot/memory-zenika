<script setup lang="ts">
import { reactive, ref } from 'vue';
import { randomizedCardsDatasource } from './data/cards.datasource';
import { hobbiesDatasource } from './data/hobbies.datasource';
import { CardInterface } from './types/CardInterface';
import { CardVisibility } from './types/CardVisibility';
import { HobbyInterface } from './types/HobbyInterface';

const cards = reactive<CardInterface[]>(randomizedCardsDatasource);
const hobbies = reactive<HobbyInterface[]>(hobbiesDatasource);
const selectedHobby = ref<HobbyInterface>();
const dialogHobbyVisible = ref<boolean>(false);
const dialogVictoryVisible = ref<boolean>(false);
let nbHits = ref<number>(0);

let _flippedCards: CardInterface[] = [];

function onCardFlip(card: CardInterface) {
  if (_flippedCards.length < 2) {
    card.visibility = CardVisibility.BACK;
    _flippedCards.push(card);

    if (_flippedCards.length === 2) {
      nbHits.value = nbHits.value + 1;

      // Hobbies matched
      if (_flippedCards[0].hobby === _flippedCards[1].hobby) {
        setTimeout(() => {

          // Enable the found hobby in the footer
          const hobby: HobbyInterface | undefined = hobbies.find((hobby) => hobby.hobby === _flippedCards[1].hobby);
          if (hobby) {
            hobby.enabled = true;
          }

          // The found card should stay enabled
          _flippedCards[0].found = true;
          _flippedCards[1].found = true;

          // Open the dialog
          dialogHobbyVisible.value = true;
          selectedHobby.value = hobby;

          _flippedCards = [];
        }, 700);
      } else {
        // Hobbies doesn't match
        setTimeout(() => {
          _flippedCards[0].visibility = CardVisibility.FRONT;
          _flippedCards[1].visibility = CardVisibility.FRONT;
          _flippedCards = [];
        }, 1000);
      }
    }
  }
}

function onHobbyClicked(hobby: HobbyInterface) {
  dialogHobbyVisible.value = true;
  selectedHobby.value = hobby;
}

function onDialogHobbyVisibleChange(visible: boolean) {
  dialogHobbyVisible.value = visible;

  // All card where found
  if (_allCardsFounds()) {
    dialogVictoryVisible.value = true;
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
      @click="onHobbyClicked(hobby)"
    ></Hobby>
  </div>

  <DialogWelcome :defaultVisible="true"></DialogWelcome>
  <DialogHobby
    :visible="dialogHobbyVisible"
    :hobby="selectedHobby"
    @visibleChange="onDialogHobbyVisibleChange($event)"
  ></DialogHobby>
  <DialogVictory
    :visible="dialogVictoryVisible"
    :nbHits="nbHits"
  ></DialogVictory>
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
