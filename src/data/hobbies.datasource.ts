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
  { id: 1, hobby: Hobby.GOLF, icon: markRaw(IconGolf), name: 'Golf', description: `Il y a 2 ans, mon père m'a fait découvrir le golf, et depuis j'y suis accroc. J'ai aussi entrainé Olivier LE LAY dans ma chute.`, photographs: [ 'golf-1.jpg' ], enabled: false },
  { id: 2, hobby: Hobby.COOKING, icon: markRaw(IconCooking), name: 'Cuisiner', description: `Je fais de la cuisine`, photographs: [ 'cooking-1.jpg', 'cooking-2.jpg' ], enabled: false },
  { id: 3, hobby: Hobby.PHOTOGRAPHY, icon: markRaw(IconPhotography), name: 'Photo', description: ``, photographs: [ 'photography-1.jpg', 'photography-2.jpg' ], enabled: false },
  { id: 4, hobby: Hobby.READING, icon: markRaw(IconReading), name: 'Lire', description: ``, photographs: [ 'reading-1.jpg' ], enabled: false },
  { id: 5, hobby: Hobby.CYCLING, icon: markRaw(IconCycling), name: 'Vélo', description: ``, photographs: [ 'cycling-1.jpg' ], enabled: false },
  { id: 6, hobby: Hobby.TRAVELER, icon: markRaw(IconTraveler), name: 'Voyager', description: ``, photographs: [ 'traveler-1.jpg', 'traveler-2.jpg' ], enabled: false },
  { id: 7, hobby: Hobby.TECH, icon: markRaw(IconTech), name: 'Tech', description: ``, photographs: [ 'tech-1.jpg' ], enabled: false },
  { id: 8, hobby: Hobby.BOARD_GAMES, icon: markRaw(IconBoardGames), name: 'Jeux de société', description: ``, photographs: [ 'board-games-1.jpg' ], enabled: false },
  { id: 9, hobby: Hobby.CLEANING, icon: markRaw(IconCleaning), name: 'Maniaque', description: ``, photographs: [ 'cleaning-1.jpg' ], enabled: false },
  { id: 10, hobby: Hobby.PARTY, icon: markRaw(IconParty), name: 'Sorties', description: ``, photographs: [ 'party-1.jpg' ], enabled: false }
];
