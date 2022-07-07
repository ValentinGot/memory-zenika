import { markRaw } from 'vue';
import IconCooking from '~icons/mz/cooking';
import IconCycling from '~icons/mz/cycling';
import IconGolf from '~icons/mz/golf';
import IconPhotography from '~icons/mz/photography';
import IconReading from '~icons/mz/reading';
import IconTraveler from '~icons/mz/traveler';
import IconTech from '~icons/mz/tech';
import IconParty from '~icons/mz/party';
import IconBoardGames from '~icons/mz/board-games';
import IconCleaning from '~icons/mz/cleaning';
import { CardInterface } from '../types/CardInterface';
import { CardType } from '../types/CardType';
import { CardVisibility } from '../types/CardVisibility';

export const cardsDatasource: CardInterface[] = [
  { id: 1, type: CardType.TECH, visibility: CardVisibility.FRONT, icon: markRaw(IconTech), found: false },
  { id: 2, type: CardType.TECH, visibility: CardVisibility.FRONT, icon: markRaw(IconTech), found: false },
  { id: 3, type: CardType.COOKING, visibility: CardVisibility.FRONT, icon: markRaw(IconCooking), found: false },
  { id: 4, type: CardType.COOKING, visibility: CardVisibility.FRONT, icon: markRaw(IconCooking), found: false },
  { id: 5, type: CardType.CYCLING, visibility: CardVisibility.FRONT, icon: markRaw(IconCycling), found: false },
  { id: 6, type: CardType.CYCLING, visibility: CardVisibility.FRONT, icon: markRaw(IconCycling), found: false },
  { id: 7, type: CardType.GOLF, visibility: CardVisibility.FRONT, icon: markRaw(IconGolf), found: false },
  { id: 8, type: CardType.GOLF, visibility: CardVisibility.FRONT, icon: markRaw(IconGolf), found: false },
  { id: 9, type: CardType.READING, visibility: CardVisibility.FRONT, icon: markRaw(IconReading), found: false },
  { id: 10, type: CardType.READING, visibility: CardVisibility.FRONT, icon: markRaw(IconReading), found: false },
  { id: 11, type: CardType.PHOTOGRAPHY, visibility: CardVisibility.FRONT, icon: markRaw(IconPhotography), found: false },
  { id: 12, type: CardType.PHOTOGRAPHY, visibility: CardVisibility.FRONT, icon: markRaw(IconPhotography), found: false },
  { id: 13, type: CardType.TRAVELER, visibility: CardVisibility.FRONT, icon: markRaw(IconTraveler), found: false },
  { id: 14, type: CardType.TRAVELER, visibility: CardVisibility.FRONT, icon: markRaw(IconTraveler), found: false },
  { id: 15, type: CardType.BOARD_GAMES, visibility: CardVisibility.FRONT, icon: markRaw(IconBoardGames), found: false },
  { id: 16, type: CardType.BOARD_GAMES, visibility: CardVisibility.FRONT, icon: markRaw(IconBoardGames), found: false },
  { id: 17, type: CardType.PARTY, visibility: CardVisibility.FRONT, icon: markRaw(IconParty), found: false },
  { id: 18, type: CardType.PARTY, visibility: CardVisibility.FRONT, icon: markRaw(IconParty), found: false },
  { id: 19, type: CardType.CLEANING, visibility: CardVisibility.FRONT, icon: markRaw(IconCleaning), found: false },
  { id: 20, type: CardType.CLEANING, visibility: CardVisibility.FRONT, icon: markRaw(IconCleaning), found: false }
];
