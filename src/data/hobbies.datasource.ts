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
  { id: 1, hobby: Hobby.GOLF, icon: markRaw(IconGolf), name: 'Golf', description: `Il y a 2 ans, mon père m'a fait découvrir le golf, et depuis j'y suis accroc. J'ai aussi entrainé Olivier LE LAY dans ma chute et j'espère trouver d'autres pratiquants chez Zenika ! 🏌️`, photographs: [ 'golf-1.jpg' ], enabled: false },
  { id: 2, hobby: Hobby.COOKING, icon: markRaw(IconCooking), name: 'Cuisiner', description: `Fan de Top Chef de toujours (ou de toute autre émission/documentaire culinaire), j'adore cuisiner. Et c'est encore mieux si c'est un dessert, pour remplir le bien connu deuxième estomac 🍰 🎂`, photographs: [ 'cooking-1.jpg', 'cooking-2.jpg' ], enabled: false },
  { id: 3, hobby: Hobby.PHOTOGRAPHY, icon: markRaw(IconPhotography), name: 'Photo', description: `J'adore voyager donc c'est tout naturellement que je me suis tourné vers la photographie de paysage. Je ne suis pas un expert dans le domaine, mais au moins ça me permet de garder de beaux souvenirs de mes voyages 📷 🤳`, photographs: [ 'photography-1.jpg', 'photography-2.jpg' ], enabled: false },
  { id: 4, hobby: Hobby.READING, icon: markRaw(IconReading), name: 'Lire', description: `Grand adèpte de la lecture fantasy (et pas grand chose d'autre). Mon dernier livre en date, Trainée de Cendres, peut être que ça vous dira quelque choses 📖 😉`, photographs: [ 'reading-1.jpg' ], enabled: false },
  { id: 5, hobby: Hobby.CYCLING, icon: markRaw(IconCycling), name: 'Vélo', description: `Bon, je fais du vélo de temps en temps, et dès fois je viens au travail avec 🤷`, photographs: [ 'cycling-1.jpg' ], enabled: false },
  { id: 6, hobby: Hobby.TRAVELER, icon: markRaw(IconTraveler), name: 'Voyager', description: `J'adore voyager, et en road-trip c'est encore mieux. Mes voyages à travers le monde m'ont conduit en Amérique du Sud (Chili, Bolivie, Pérou, Colombie), en Finlande, aux Îles Féroé et en Irlande. J'espère que beaucoup d'autres sont encore à venir 🌎`, photographs: [ 'traveler-1.jpg', 'traveler-2.jpg' ], enabled: false },
  { id: 7, hobby: Hobby.TECH, icon: markRaw(IconTech), name: 'Tech', description: `Ouais bin Zenika ... la tech ... logique ? 😂 (Il fallait que j'arrive à remplir 20 cases)`, photographs: [ 'tech-1.jpg' ], enabled: false },
  { id: 8, hobby: Hobby.BOARD_GAMES, icon: markRaw(IconBoardGames), name: 'Jeux de société', description: `Ces derniers temps c'est surtout Splendor, Chakra, Azul et Skyjo 🔁 🎲`, photographs: [ 'board-games-1.jpg' ], enabled: false },
  { id: 9, hobby: Hobby.CLEANING, icon: markRaw(IconCleaning), name: 'Organisé', description: `Certains diront que je suis maniaque, toqué, exigeant, ... Ils auront très surement raisons, ce qui est sûr c'est que j'organise ma vie au poil de cul. Le dernier outil en date pour mieux tout planifier, et dont je suis maintenant totalement accroc: Notion`, photographs: [ 'cleaning-1.jpg' ], enabled: false },
  { id: 10, hobby: Hobby.PARTY, icon: markRaw(IconParty), name: 'Sorties', description: `🍷 🍻 `, photographs: [ 'party-1.jpg' ], enabled: false }
];
