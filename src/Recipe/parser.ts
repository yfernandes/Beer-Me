import * as fs from 'fs';
import * as parser from 'fast-xml-parser';

namespace Recipes {
	export class XMLRecipeBuilder {

	private name: string;
	private batchSize: number;
	private boilSize: number;
	private boilTime: number;
	private efficiency: number;
	private OG: number;
	private FG: number;

	private style: object;
	private equipment: object;
	private mash: object;

	private hops: object[];
	private misc: object[];
	private water: object;
	private fermentables: object[];

	private parameters: JSON;

		constructor(RecipeFileLocation) {
			const FILE = parser.parse(fs.readFileSync(RecipeFileLocation, 'utf8'));
			const RECIPE = FILE.RECIPES.RECIPE;
			this.parameters = RECIPE;
		}

		public setName(RECIPE): XMLRecipeBuilder {
			this.name = RECIPE.NAME;

			return this;
		}
		get Name() {
			return this.name;
		}

		public setBatchSize(RECIPE): XMLRecipeBuilder {
			this.batchSize = RECIPE.BATCH_SIZE;

			return this;
		}
		get BatchSize() {
			return this.batchSize;
		}

		public setBoilSize(RECIPE): XMLRecipeBuilder {
			this.boilSize = RECIPE.BOIL_SIZE;

			return this;
		}
		get BoilSize() {
			return this.boilSize;
		}

		public setBoilTime(RECIPE): XMLRecipeBuilder {
			this.boilTime = RECIPE.BOIL_TIME;

			return this;
		}
		get BoilTime() {
			return this.boilTime;
		}

		public setEfficiency(RECIPE): XMLRecipeBuilder {
			this.efficiency = RECIPE.EFFICIENCY;

			return this;
		}
		get Efficiency() {
			return this.efficiency;
		}

		public setOG(RECIPE): XMLRecipeBuilder {
			this.OG = RECIPE.OG;

			return this;
		}
		get og() {
			return this.OG;
		}

		public setFG(RECIPE): XMLRecipeBuilder {
			this.FG = RECIPE.FG;

			return this;
		}
		get fg() {
			return this.FG;
		}

		public setStyle(RECIPE): XMLRecipeBuilder {
			this.style = {
				Name: RECIPE.STYLE.NAME.toString(),
				Category: RECIPE.STYLE.CATEGORY.toString(),
				Type: RECIPE.STYLE.TYPE.toString(),
				OGMin: parseFloat(RECIPE.STYLE.OG_MIN),
				OGMax: parseFloat(RECIPE.STYLE.OG_MAX),
				FGMin: parseFloat(RECIPE.STYLE.FG_MIN),
				FGMax: parseFloat(RECIPE.STYLE.FG_MAX),
				AbvRange: RECIPE.STYLE.ABV_RANGE.toString()
			};

			return this;
		}

		get Style() {
			return this.style;
		}

		public build(): Recipe {
			this.setName(this.parameters);
			this.setBatchSize(this.parameters);
			this.setBoilSize(this.parameters);
			this.setBoilTime(this.parameters);
			this.setEfficiency(this.parameters);
			this.setOG(this.parameters);
			this.setFG(this.parameters);
			this.setStyle(this.parameters);

			return new Recipe(this);
		}
	}

	export class Recipe {
		private name: string;
		private batchSize: number;
		private boilSize: number;
		private boilTime: number;
		private efficiency: number;
		private og: number;
		private fg: number;

		private style: object;
		private equipment: object;
		private mash: object;

		private hops: object[];
		private misc: object[];
		private water: object;
		private fermentables: object[];

		constructor(builder: XMLRecipeBuilder) {
			this.name = builder.Name;
			this.batchSize = builder.BatchSize;
			this.boilSize = builder.BoilSize;
			this.boilTime = builder.BoilTime;
			this.style = builder.Style;
		}

		get Name() {
			return this.name;
		}

		get BatchSize() {
			return this.batchSize;
		}

		get BoilSize() {
			return this.boilSize;
		}

		get BoilTime() {
			return this.boilTime;
		}

		get Efficiency() {
			return this.efficiency;
		}

		get OG() {
			return this.og;
		}

		get FG() {
			return this.fg;
		}

		get Style() {
			return this.style;
		}
	}

}

const test: Recipes.Recipe = new Recipes.XMLRecipeBuilder('recipeFiles/recipe.xml').build();

console.log(test.Style);
