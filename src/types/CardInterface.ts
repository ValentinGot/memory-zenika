import { FunctionalComponent } from 'vue';
import { Hobby } from './Hobby';
import { CardVisibility } from './CardVisibility';

export interface CardInterface {
  id: number;
  hobby: Hobby;
  visibility: CardVisibility;
  icon: FunctionalComponent;
  found: boolean;
}
