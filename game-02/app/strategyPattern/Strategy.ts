import { Item } from "../gilded-rose";
import { Strategy } from "./interface"

export class NormalStrategy implements Strategy{
    changeQuality(item: Item){
        item.sellIn--;

        if(item.quality === 0) return;

        if(item.sellIn < 0) {
            item.quality -= 2;
        } else {
            item.quality -= 1;
        }
    }
}
export class BackstageStrategy implements Strategy{
    changeQuality(item: Item){
        item.sellIn--;

        if(item.quality >= 50) return;

        if (item.sellIn < 0) {
            return item.quality = 0;
        }

        if (item.sellIn < 6) {
            item.quality += 3;
        } else if (item.sellIn < 11) {
            item.quality += 2;
        } else {
            item.quality += 1;
        }

    }
}
export class AgedBrieStrategy implements Strategy{
    changeQuality(item: Item){
        item.sellIn--;

        if(item.quality >= 50) return;

        if(item.sellIn < 0) {
            item.quality += 2;
        } else {
            item.quality += 1;
        }
    }
}

export class ConjuredStrategy implements Strategy{
    changeQuality(item: Item){
        item.sellIn--;

        if(item.quality === 0) return;
        
        if(item.sellIn < 0) {
            item.quality -= 4;
        } else {
            item.quality -= 2;
        }
    }
}