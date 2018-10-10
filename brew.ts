import { Brewhouse } from './Controllers/brewhouse';
import { Recipe } from './parser';

export class Brew {
	public Brewhouse: Brewhouse;
	public Recipe: Recipe;

	constructor(BH, RCP) {
		this.Brewhouse = BH;
		this.Recipe = RCP;
	}

	// Milling

	// Heating Strike Water

	// Dump Grains

	// Mash In

	// Mash Out

	// Lauter

	// Heat to Boil

	// Add Hops

	// Boil for x time

	// Add 2nd Hops

	// Whirlpool

	// Chill

	// Transfer to fermenter
}
