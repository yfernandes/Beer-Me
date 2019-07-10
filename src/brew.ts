import { Brewhouse } from './Controllers/brewhouse';
import { Recipe } from './Recipe/parserold';

export class Brew {
	public Brewhouse: Brewhouse;
	public Recipe: Recipe;

	constructor(BH, RCP) {
		this.Brewhouse = BH;
		this.Recipe = RCP;
	}

	// Milling
		// Function receives recipe in which specifies where the malt is stored and its weight,
		// and starts mill through given address

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
