export interface Strategy {
    changeQuality: (sellIn: number, quality: number) =>  number;
}