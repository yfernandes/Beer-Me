import * as fs from 'fs';
import * as parser from 'fast-xml-parser';

export class Recipe {

	public Name: string;
	public BatchSize: number;
	public BoilSize: number;
	public BoilTime: number;
	public Efficiency: number;
	public OG: number;
	public FG: number;

	public Style: object;
	public Equipment: object;
	public Mash: object;

	public Hops: object[];
	public Fermentables: object[];
	public Misc: object[];
	public Water: object;

	constructor(RecipeFileLocation: string) {

		const FILE = parser.parse(fs.readFileSync(RecipeFileLocation, 'utf8'));
		const RECIPE = FILE.RECIPES.RECIPE;

		this.Name = RECIPE.NAME;
		this.BatchSize = RECIPE.BATCH_SIZE;
		this.BoilSize = RECIPE.BOIL_SIZE;
		this.BoilTime = RECIPE.BOIL_TIME;
		this.Efficiency = RECIPE.EFFICIENCY;
		this.OG = RECIPE.OG;
		this.FG = RECIPE.FG;
		this.Style = {
			Name: RECIPE.STYLE.NAME.toString(),
			Category: RECIPE.STYLE.CATEGORY.toString(),
			Type: RECIPE.STYLE.TYPE.toString(),
			OGMin: parseFloat(RECIPE.STYLE.OG_MIN),
			OGMax: parseFloat(RECIPE.STYLE.OG_MAX),
			FGMin: parseFloat(RECIPE.STYLE.FG_MIN),
			FGMax: parseFloat(RECIPE.STYLE.FG_MAX),
			AbvRange: RECIPE.STYLE.ABV_RANGE.toString()
		};
		this.Hops = [];
		for (let i = 0; i < RECIPE.HOPS.HOP.length; i++) {
			this.Hops.push({
				Name: RECIPE.HOPS.HOP[i].NAME.toString(),
				Amount: parseFloat(RECIPE.HOPS.HOP[i].AMOUNT),
				Use: RECIPE.HOPS.HOP[i].USE.toString(),
				Time: RECIPE.HOPS.HOP[i].TIME
			});
		}
		this.Fermentables = [];
		for (let i = 0; i < RECIPE.FERMENTABLES.FERMENTABLE.length; i++) {
			this.Fermentables.push({
				Name: RECIPE.FERMENTABLES.FERMENTABLE[i].NAME,
				Type: RECIPE.FERMENTABLES.FERMENTABLE[i].TYPE,
				Amount: RECIPE.FERMENTABLES.FERMENTABLE[i].AMOUNT,
				Yield: RECIPE.FERMENTABLES.FERMENTABLE[i].YIELD,
				AddAfterBoil: RECIPE.FERMENTABLES.FERMENTABLE[i].ADD_AFTER_BOIL,
				Potential: RECIPE.FERMENTABLES.FERMENTABLE[i].POTENTIAL
			});
		}
		this.Misc = [];
		for (let i = 0; i < RECIPE.MISCS.MISC.length; i++) {
			this.Misc.push({
				Name: RECIPE.MISCS.MISC[i].NAME,
				Type: RECIPE.MISCS.MISC[i].TYPE,
				Use: RECIPE.MISCS.MISC[i].USE,
				Amount: RECIPE.MISCS.MISC[i].AMOUNT,
				Time: RECIPE.MISCS.MISC[i].TIME,
				IsWeight: RECIPE.MISCS.MISC[i].AMOUNT_IS_WEIGHT
			});
		}
		this.Water = {
			Amount: RECIPE.WATERS.WATER.AMOUNT,
			Calcium: RECIPE.WATERS.WATER.CALCIUM,
			Bicarbonate: RECIPE.WATERS.WATER.BICARBONATE,
			Sulfate: RECIPE.WATERS.WATER.SULFATE,
			Chloride: RECIPE.WATERS.WATER.CHLORIDE,
			Sodium: RECIPE.WATERS.WATER.SODIUM,
			MAGNESIUM: RECIPE.WATERS.WATER.MAGNESIUM,
			PH: RECIPE.WATERS.WATER.PH
		};

		this.Equipment = {
			BoilSize: RECIPE.EQUIPMENT.BOIL_SIZE,
			BatchSize: RECIPE.EQUIPMENT.BATCH_SIZE,
			TunVolume: RECIPE.EQUIPMENT.TUN_VOLUME,
			TunWeight: RECIPE.EQUIPMENT.TUN_WEIGHT,
			TunSpecificHeat: RECIPE.EQUIPMENT.TUN_SPECIFIC_HEAT,
			TrubAndChillerLoss: RECIPE.EQUIPMENT.TRUB_CHILLER_LOSS,
			EvaporationRate: RECIPE.EQUIPMENT.EVAP_RATE,
			LauterDeadspace: RECIPE.EQUIPMENT.LAUTER_DEADSPACE
		};

		const aux = [];
		for (let i = 0; i < RECIPE.MASH.MASH_STEPS.MASH_STEP.length; i++) {
			aux.push({
				Name: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].NAME,
				Type: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].TYPE,
				InfuseAmount: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].INFUSE_AMOUNT,
				InfuseTemp: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].INFUSE_TEMP,
				StepTime: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].STEP_TIME,
				StepTemp: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].STEP_TEMP,
				EndTemp: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].END_TEMP,
				RampTime: RECIPE.MASH.MASH_STEPS.MASH_STEP[i].RAMP_TIME
			});
		}

		this.Mash = {
			MashType: RECIPE.MASH.NAME,
			GrainTemp: RECIPE.MASH.GRAIN_TEMP,
			TunTemp: RECIPE.MASH.TUN_TEMP,
			SpargeTemp: RECIPE.MASH.SPARGE_TEMP,
			Steps: aux
		};
		// End Constructor
	}
	// End Class
}

/*
const myRecipe = new Recipe('./Recipe/recipe.xml');
console.log(myRecipe);
*/
