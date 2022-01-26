import { Item } from "../gilded-rose";

export interface Strategy {
    changeQuality: (item:Item) => void;
}