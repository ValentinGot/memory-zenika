import { FunctionalComponent } from 'vue';
import { Hobby } from './Hobby';

export interface HobbyInterface {
  id: number;
  hobby: Hobby;
  icon: FunctionalComponent;
  enabled: boolean;
}
