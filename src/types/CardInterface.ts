import { FunctionalComponent } from 'vue';
import { CardType } from './CardType';
import { CardVisibility } from './CardVisibility';

export interface CardInterface {
  id: number;
  type: CardType;
  visibility: CardVisibility;
  icon: FunctionalComponent;
  found: boolean;
}
