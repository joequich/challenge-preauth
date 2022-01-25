import { GildedRose, Item } from "./gilded-rose";

const initalArr: Array<Item> = [
    {
        name: 'Aged Brie',
        sellIn: 2,
        quality: 45
    },
    {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 5,
        quality: 30
    },
    {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 10,
        quality: 45
    },
    {
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sellIn: 15,
        quality: 35
    },
    {
        name: 'Sulfuras, Hand of Ragnaros', // legendary
        sellIn: 0,
        quality: 80
    },
    {
        name: 'Sulfuras, Hand of Ragnaros', // legendary
        sellIn: -1,
        quality: 80
    },
    {
        name: 'Another',
        sellIn: 4,
        quality: 8
    },
];

// const gildedRose = new GildedRose(initalArr);

// for (let i = 1; i <= 15; i++) {
//     console.log(`\n*** Day #${i}:`)
//     console.table(initalArr);
//     gildedRose.updateQuality();
// }

const items: Array<Item> = [];

for (let i = 0; i < 5000000; i++) {
    items.push(...initalArr);
}

const obj = new GildedRose(items);
console.time('Time updateQuality');
    obj.updateQuality();
console.timeEnd('Time updateQuality');
