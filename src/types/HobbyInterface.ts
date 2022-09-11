import { FunctionalComponent } from 'vue';
import { Hobby } from './Hobby';

export interface HobbyInterface {
  id: number;
  hobby: Hobby;
  name: string;
  description: string;
  photographs: string[];
  icon: FunctionalComponent;
  enabled: boolean;
}
