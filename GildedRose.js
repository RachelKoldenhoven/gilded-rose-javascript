class GildedRose {

    constructor(name, quality, daysRemaining) {
        this.name = name;
        this.quality = quality;
        this.daysRemaining = daysRemaining;
    }

    tick() {
        if (this.name !== 'Aged Brie' && this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.quality > 0) {
                if (this.name !== 'Sulfuras, Hand of Ragnaros') {
                    this.quality -= 1;
                }
            }
        } else {
            if (this.quality < 50) {
                this.quality += 1;
                if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.daysRemaining < 11) {
                        if (this.quality < 50) {
                            this.quality += 1;
                        }
                    }
                    if (this.daysRemaining < 6) {
                        if (this.quality < 50) {
                            this.quality += 1;
                        }
                    }
                }
            }
        }
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
            this.daysRemaining -= 1;
        }
        if (this.daysRemaining < 0) {
            if (this.name !== 'Aged Brie') {
                if (this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
                    if (this.quality > 0) {
                        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
                            this.quality -= 1;
                        }
                    }
                } else {
                    this.quality = this.quality - this.quality;
                }
            } else {
                if (this.quality < 50) {
                    this.quality += 1;
                }
            }
        }
    }
}

module.exports = GildedRose;