import { Item } from "../gilded-rose";
import { Strategy } from "./interface"

export class Context {
    private strategy: Strategy

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    setQuality(item: Item) {
        this.strategy.changeQuality(item);
    }
}