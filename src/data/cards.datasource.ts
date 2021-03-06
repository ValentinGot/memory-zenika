import { markRaw } from 'vue';
import IconBoardGames from '~icons/mz/board-games';
import IconCleaning from '~icons/mz/cleaning';
import IconCooking from '~icons/mz/cooking';
import IconCycling from '~icons/mz/cycling';
import IconGolf from '~icons/mz/golf';
import IconParty from '~icons/mz/party';
import IconPhotography from '~icons/mz/photography';
import IconReading from '~icons/mz/reading';
import IconTech from '~icons/mz/tech';
import IconTraveler from '~icons/mz/traveler';
import { CardInterface } from '../types/CardInterface';
import { CardVisibility } from '../types/CardVisibility';
import { Hobby } from '../types/Hobby';

export const cardsDatasource: CardInterface[] = [
  { id: 1, hobby: Hobby.GOLF, visibility: CardVisibility.FRONT, icon: markRaw(IconGolf), found: false },
  { id: 2, hobby: Hobby.GOLF, visibility: CardVisibility.FRONT, icon: markRaw(IconGolf), found: false },
  { id: 3, hobby: Hobby.COOKING, visibility: CardVisibility.FRONT, icon: markRaw(IconCooking), found: false },
  { id: 4, hobby: Hobby.COOKING, visibility: CardVisibility.FRONT, icon: markRaw(IconCooking), found: false },
  { id: 5, hobby: Hobby.PHOTOGRAPHY, visibility: CardVisibility.FRONT, icon: markRaw(IconPhotography), found: false },
  { id: 6, hobby: Hobby.PHOTOGRAPHY, visibility: CardVisibility.FRONT, icon: markRaw(IconPhotography), found: false },
  { id: 7, hobby: Hobby.READING, visibility: CardVisibility.FRONT, icon: markRaw(IconReading), found: false },
  { id: 8, hobby: Hobby.READING, visibility: CardVisibility.FRONT, icon: markRaw(IconReading), found: false },
  { id: 9, hobby: Hobby.CYCLING, visibility: CardVisibility.FRONT, icon: markRaw(IconCycling), found: false },
  { id: 10, hobby: Hobby.CYCLING, visibility: CardVisibility.FRONT, icon: markRaw(IconCycling), found: false },
  { id: 11, hobby: Hobby.TRAVELER, visibility: CardVisibility.FRONT, icon: markRaw(IconTraveler), found: false },
  { id: 12, hobby: Hobby.TRAVELER, visibility: CardVisibility.FRONT, icon: markRaw(IconTraveler), found: false },
  { id: 13, hobby: Hobby.TECH, visibility: CardVisibility.FRONT, icon: markRaw(IconTech), found: false },
  { id: 14, hobby: Hobby.TECH, visibility: CardVisibility.FRONT, icon: markRaw(IconTech), found: false },
  { id: 15, hobby: Hobby.BOARD_GAMES, visibility: CardVisibility.FRONT, icon: markRaw(IconBoardGames), found: false },
  { id: 16, hobby: Hobby.BOARD_GAMES, visibility: CardVisibility.FRONT, icon: markRaw(IconBoardGames), found: false },
  { id: 17, hobby: Hobby.CLEANING, visibility: CardVisibility.FRONT, icon: markRaw(IconCleaning), found: false },
  { id: 18, hobby: Hobby.CLEANING, visibility: CardVisibility.FRONT, icon: markRaw(IconCleaning), found: false },
  { id: 19, hobby: Hobby.PARTY, visibility: CardVisibility.FRONT, icon: markRaw(IconParty), found: false },
  { id: 20, hobby: Hobby.PARTY, visibility: CardVisibility.FRONT, icon: markRaw(IconParty), found: false }
];

export const randomizedCardsDatasource = cardsDatasource.sort(() => 0.5 - Math.random());
