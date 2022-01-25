import { Strategy } from "./interface"

export class NormalStrategy implements Strategy{
    changeQuality(sellIn: number, quality: number){
        if(sellIn < 0) {
            return quality - 2;
        } else {
            return quality - 1;
        }
    }
}
export class BackstageStrategy implements Strategy{
    changeQuality(sellIn: number, quality: number){
        let incrementSpeed = 1;

        if (sellIn < 0) {
            return 0;
        }

        if (sellIn < 6) {
            incrementSpeed = 3;
        }else if (sellIn < 11) {
            incrementSpeed = 2;
        }

        if(sellIn < 0) incrementSpeed = incrementSpeed * 2;
       
        return quality + incrementSpeed;
    }
}
export class AgedBrieStrategy implements Strategy{
    changeQuality(sellIn: number, quality: number){
        if(sellIn < 0) {
            return quality + 2;
        } else {
            return quality + 1;
        }
    }
}

export class ConjuredStrategy implements Strategy{
    changeQuality(sellIn: number, quality: number){
        if(sellIn < 0) {
            return quality - 4;
        } else {
            return quality - 2;
        }
    }
}