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

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private isSellInNegative(pos: number) {
        return this.items[pos].sellIn < 0;
    }

    private isPossibleToMutateQuality(pos: number) {
        return this.items[pos].quality > 0 && this.items[pos].quality < 50;
    }

    private incrementQuality(pos: number, incrementSpeed = 1) {
        if(!this.isPossibleToMutateQuality(pos)) return;
        if(this.isSellInNegative(pos)) incrementSpeed = incrementSpeed * 2;
        this.items[pos].quality = this.items[pos].quality + incrementSpeed;
    }

    private decrementQuality(pos: number, decrementSpeed = 1) {
        if(!this.isPossibleToMutateQuality(pos)) return;
        if(this.isSellInNegative(pos)) decrementSpeed = decrementSpeed * 2;
        this.items[pos].quality = this.items[pos].quality - decrementSpeed;
    }

    private decrementSellIn(pos: number) {
        this.items[pos].sellIn = this.items[pos].sellIn - 1;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {   // recorrer items
            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.decrementSellIn(i);
            }
            
            if (this.items[i].name === 'Aged Brie') {
                this.incrementQuality(i);
            }
            else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.isSellInNegative(i)) {
                    this.items[i].quality = 0;
                } 
                else if (this.items[i].sellIn < 6) {
                    this.incrementQuality(i, 3);
                }
                else if (this.items[i].sellIn < 11) {
                    this.incrementQuality(i, 2);
                } else {
                    this.incrementQuality(i);
                }
            }
            else if (this.items[i].name === 'Conjured') {
                this.decrementQuality(i, 2);
            }
            else if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                this.decrementQuality(i);
            }
        }
        return this.items;
    }
}