import { Strategy } from "./interface"

export class Context {
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    updateQuality(sellIn: number, quality: number) {
        if(!(quality > 0 && quality < 50)) return quality;
        return this.strategy.changeQuality(sellIn, quality);
    }
}