import { Context } from "./strategyPattern/Context";
import { AgedBrieStrategy, BackstageStrategy, ConjuredStrategy, NormalStrategy } from "./strategyPattern/Strategy";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    private items: Array<Item>;
    private context = new Context(new NormalStrategy());

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        const agedBrieStrategy = new AgedBrieStrategy();
        const backstageStrategy = new BackstageStrategy();
        const conjuredStrategy = new ConjuredStrategy();

        for (let i = 0; i < this.items.length; i++) {   // recorrer items
            if (this.items[i].name === 'Aged Brie') {
                this.context.setStrategy(agedBrieStrategy);
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.context.setStrategy(backstageStrategy);
            }

            if (this.items[i].name === 'Conjured') {
                this.context.setStrategy(conjuredStrategy);
            }

            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.context.setQuality(this.items[i]);
            }
        }
        return this.items;
    }
}