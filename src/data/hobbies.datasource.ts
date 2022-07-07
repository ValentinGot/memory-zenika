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
import { Hobby } from '../types/Hobby';
import { HobbyInterface } from '../types/HobbyInterface';

export const hobbiesDatasource: HobbyInterface[] = [
  { id: 1, hobby: Hobby.GOLF, icon: markRaw(IconGolf), enabled: false },
  { id: 2, hobby: Hobby.COOKING, icon: markRaw(IconCooking), enabled: false },
  { id: 3, hobby: Hobby.PHOTOGRAPHY, icon: markRaw(IconPhotography), enabled: false },
  { id: 4, hobby: Hobby.READING, icon: markRaw(IconReading), enabled: false },
  { id: 5, hobby: Hobby.CYCLING, icon: markRaw(IconCycling), enabled: false },
  { id: 6, hobby: Hobby.TRAVELER, icon: markRaw(IconTraveler), enabled: false },
  { id: 7, hobby: Hobby.TECH, icon: markRaw(IconTech), enabled: false },
  { id: 8, hobby: Hobby.BOARD_GAMES, icon: markRaw(IconBoardGames), enabled: false },
  { id: 9, hobby: Hobby.CLEANING, icon: markRaw(IconCleaning), enabled: false },
  { id: 10, hobby: Hobby.PARTY, icon: markRaw(IconParty), enabled: false }
];
