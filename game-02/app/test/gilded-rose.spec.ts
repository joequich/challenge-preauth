import 'mocha';
import { expect } from 'chai'
import { GildedRose, Item } from '../gilded-rose'

describe('gilded-rose', () => {

    describe('Aged Brie', () => {

        it('Su calidad debería aumentar en 1 unidad', () => {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', 2, 45)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Aged Brie', 1, 46));
        });

        it('Luego del sellIn su calidad debería aumentar 2 unidades por dia', () => {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', -1, 45)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Aged Brie', -2, 47));
        });

        it('La calidad de un articulo nunca debería ser mayor a 50', () => {
            const gildedRose = new GildedRose([
                new Item('Aged Brie', 2, 50)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Aged Brie', 1, 50));
        });
    });

    describe('Backstage passes', () => {

        it('Su calidad debería aumentar en 1 unidad', () => {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 30)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Backstage passes to a TAFKAL80ETC concert', 14, 31));
        });

        it('Si faltan 10 dias o menos para el concierto, la calidad debería incrementar en 2 unidades', () => {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Backstage passes to a TAFKAL80ETC concert', 9, 32));
        });

        it('Si faltan 5 dias o menos para el concierto, la calidad debería incrementar en 3 unidades', () => {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Backstage passes to a TAFKAL80ETC concert', 4, 33));
        });

        it('Luego del sellIn su calidad debería caer a 0', () => {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0));
        });

        it('La calidad de un articulo nunca debería ser mayor a 50', () => {
            const gildedRose = new GildedRose([
                new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Backstage passes to a TAFKAL80ETC concert', 14, 50));
        });
    });

    describe('Sulfuras', () => {

        it('No debería modificarse el sellIn ni su calidad', () => {
            const gildedRose = new GildedRose([
                new Item('Sulfuras, Hand of Ragnaros', 7, 80)
            ]);

            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Sulfuras, Hand of Ragnaros', 7, 80));
        });

        it('Su calidad debería ser 80', () => {
            const gildedRose = new GildedRose([
                new Item('Sulfuras, Hand of Ragnaros', 7, 80)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Sulfuras, Hand of Ragnaros', 7, 80));
        });
    });

    describe('Conjured', () => {

        it('La calidad debería degradarse en 2 unidad', () => {
            const gildedRose = new GildedRose([
                new Item('Conjured', 4, 8)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Conjured', 3, 6));
        });

        it('Luego del sellIn su calidad debería degradarse en 4 unidades', () => {
            const gildedRose = new GildedRose([
                new Item('Conjured', 0, 8)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Conjured', -1, 4));
        });
    });

    describe('Another', () => {

        it('La calidad debería degradarse en 1 unidad', () => {
            const gildedRose = new GildedRose([
                new Item('Another', 4, 8)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Another', 3, 7));
        });
        it('Luego del sellIn su calidad debería degradarse en 2 unidades', () => {
            const gildedRose = new GildedRose([
                new Item('Another', 0, 8)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Another', -1, 6));
        });
        it('La calidad no deberia ser negativa, minimo 0', () => {
            const gildedRose = new GildedRose([
                new Item('Another', -1, 0)
            ]);
    
            const updateItems = gildedRose.updateQuality()
            expect(updateItems[0]).to.eql(new Item('Another', -2, 0));
        });
    });
})