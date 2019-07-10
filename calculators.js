var fCmPerIn = 2.54;
var fLtPerQt = 0.946352946;
var fCuInPerGal = 231;
var fCuInPerQt = 57.75;
var fCuInPerLt = 61.0237441;
var fGmPerLb = 453.59237;
var fKgPerLb = 0.45359237;

function CtoF(C)
{
	return ((C * (9/5)) + 32);
}

function MyRound(val, places)
{
	temp = Math.pow(10, places);
	return Math.round(val * temp) / temp;
}

function kettlebutton_Click()
{
	var kettlediam = document.getElementById("kettlediam");
	var kettlediamunits = document.getElementById("kettlediamunits");
	var expansion = document.getElementById("expansion");

	var kettlevol = document.getElementById("kettlevol");
	var kettlevolunits = document.getElementById("kettlevolunits");
	var kettledepthoutunits = document.getElementById("kettledepthoutunits");
	var kettledepthout = document.getElementById("kettledepthout");	
	var kettledepthheated = document.getElementById("kettledepthheated");
	var kettledepthcooled = document.getElementById("kettledepthcooled");
	
	var kettledepth = document.getElementById("kettledepth");
	var kettledepthunits = document.getElementById("kettledepthunits");
	var kettlevoloutunits = document.getElementById("kettlevoloutunits");
	var kettlevolout = document.getElementById("kettlevolout");
	var kettlevolheated = document.getElementById("kettlevolheated");
	var kettlevolcooled = document.getElementById("kettlevolcooled");
	
	var kettleerror = document.getElementById("kettleerror");
	kettleerror.innerHTML = "&nbsp;";

	var PI = 3.14;

		try
		{
			var radius = kettlediam.value / 2.0;
			var fExpansion = expansion.value / 100.0;

			// Normalize units to inches
			switch (kettlediamunits.selectedIndex)
			{
		case 0: // Inches
			break;
		case 1: // Cm
			radius /= fCmPerIn;
				break;
			}

			var depth = 0;

			//*********************************************
			// Volume to Depth
			var volume = kettlevol.value;

			// Normalize volume to cubic inches
			switch (kettlevolunits.selectedIndex)
			{
				case 0: // "Gallons":
					volume *= fCuInPerGal;
					break;
				case 1: // "Quarts":
					volume *= fCuInPerQt;
					break;
				case 2: // "Liters":
					volume *= fCuInPerLt;
					break;
			}

			// Calculate depth in inches
			depth = volume / (PI * radius * radius);

			// Output properly
			switch (kettledepthoutunits.selectedIndex)
			{
				case 0: // "Inches":
					break;
				case 1: // "Centimeters":
					depth *= fCmPerIn;
					break;
			}
			kettledepthout.innerHTML = MyRound(depth, 2);

			// Account for expansion
			kettledepthheated.innerHTML = MyRound(depth * (1.0 + fExpansion), 2);
			kettledepthcooled.innerHTML = MyRound(depth * (1.0 - fExpansion), 2);

			//*********************************************
			// Depth to Volume
			depth = kettledepth.value;

			// Normalize depth to inches
			switch (kettledepthunits.selectedIndex)
			{
				case 0: // "Inches":
					break;
				case 1: // "Centimeters":
					depth /= fCmPerIn;
					break;
			}

			// Calculate volume in cubic inches
			volume = PI * radius * radius * depth;

			// Output properly
			switch (kettlevoloutunits.selectedIndex)
			{
				case 0: // "Gallons":
					volume /= fCuInPerGal;
					break;
				case 1: // "Quarts":
					volume /= fCuInPerQt;
					break;
				case 2: // "Liters":
					volume /= fCuInPerLt;
					break;
			}
			kettlevolout.innerHTML = MyRound(volume, 2);

			// Account for expansion
			kettlevolheated.innerHTML = MyRound(volume * (1.0 + fExpansion), 2);
			kettlevolcooled.innerHTML = MyRound(volume * (1.0 - fExpansion), 2);
		}
		catch(err)
		{
			kettleerror.innerHTML = "[" + err + "] Please insure all fields are filled in and are numeric values.";
		}
	
	return true;
}

function starterdmebutton_Click()
{
	var starterdmeerror = document.getElementById("starterdmeerror");
	var dmepotential = document.getElementById("dmepotential");
	var startersize = document.getElementById("startersize");
	var startergrav = document.getElementById("startergrav");
	var starterunits = document.getElementById("starterunits");
	var dmeunits = document.getElementById("dmeunits");
	var dmerequired = document.getElementById("dmerequired");

	starterdmeerror.innerHTML = "&nbsp;";

		try
		{
			var dmePotential = dmepotential.value - 1.0;
			var vol = startersize.value;
			var sg = startergrav.value - 1.0;
			
			// Normalize user units to gallons
			switch (starterunits.selectedIndex)
			{
				case 0: // "Quarts":
					vol /= 4.0;
					break;
				case 1: // "Liters":
					vol /= fLtPerQt;
					vol /= 4.0;
					break;
				case 2: // "Gallons":
					break;
				case 3: // "Cups":
					vol /= 16.0;
					break;
				case 4: // "Ounces":
					vol /= 128.0;
					break;
			}

			// Calculate lbs of DME
			var dme = (sg * vol) / dmePotential;

			// Output to user's units
			switch (dmeunits.selectedIndex)
			{
				case 0: // "Ounces":
					dme *= 16.0;
					break;
				case 1: // "Lbs":
					break;
				case 2: // "Grams":
					dme *= fGmPerLb;
					break;
			}

			dmerequired.innerHTML = MyRound(dme, 2);
		}
		catch(err)
		{
			starterdmeerror.innerHTML = "[" + err + "] Please insure all fields are filled in and are numeric values.";
		}
}

function mashsizebutton_Click()
{
	var mashsizeerror = document.getElementById("mashsizeerror");
	var mashtunsize = document.getElementById("mashtunsize");
	var mashtunsizeunits = document.getElementById("mashtunsizeunits");
	var deadspace = document.getElementById("deadspace");
	var deadspaceunits = document.getElementById("deadspaceunits");
	var thickness = document.getElementById("thickness");
	var thicknessunits = document.getElementById("thicknessunits");
	var grainamountout = document.getElementById("grainamountout");
	var grainamountoutunits = document.getElementById("grainamountoutunits");
	
	var batchsize = document.getElementById("batchsize");
	var batchsizeunits = document.getElementById("batchsizeunits");
	var efficiency = document.getElementById("efficiency");
	var specialty = document.getElementById("specialty");
	var specialtyunits = document.getElementById("specialtyunits");
	var ogout = document.getElementById("ogout");

	mashsizeerror.innerHTML = "&nbsp;";

		try
		{
		var vol = mashtunsize.value;

		// Normalize user units to gallons
			switch (mashtunsizeunits.selectedIndex)
			{
				case 0: // "Gallons":
					break;
				case 1: // "Quarts":
					vol /= 4.0;
					break;
				case 2: // "Liters":
					vol /= fLtPerQt;
					vol /= 4.0;
					break;
			}

		var dead = deadspace.value;

		// Normalize user units to gallons
			switch (deadspaceunits.selectedIndex)
			{
				case 0: // "Gallons":
					break;
				case 1: // "Quarts":
					dead /= 4;
					break;
				case 2: // "Liters":
					dead /= fLtPerQt;
					dead /= 4.0;
					break;
		}

		// Volume we have to work with
		vol -= dead;

		fThickness = thickness.value;

		// Normalize user units to gallons per lb
			switch (thicknessunits.selectedIndex)
			{
		case 0: // "Qt/lb":
			fThickness /= 4.0;
					break;
				case 1: // "Liters/Kg":
			fThickness /= fLtPerQt;
			fThickness *= fKgPerLb;
			fThickness /= 4.0;
					break;
		}

		// Grain volume in gallons/lb
		var fGrainVolume = 0.07812683;

		// Calculate lbs of grain
		grainLbs = vol / (fGrainVolume + fThickness);

		// Calculate gravity
		var fEff = efficiency.value / 100.0;
		var fPotential = 0.036;
		var fBatchGals = batchsize.value;

		// Normalize user units to gallons
			switch (batchsizeunits.selectedIndex)
			{
				case 0: // "Gallons":
					break;
				case 1: // "Liters":
					fBatchGals /= fLtPerQt;
					fBatchGals /= 4.0;
					break;
		}

		// Output grain amount, accounting for user units
		var fGrainOut = grainLbs;
		switch (grainamountoutunits.selectedIndex)
			{
				case 0: // "Pounds":
					break;
				case 1: // "Kilograms":
					fGrainOut *= fKgPerLb;
					break;
		}
		grainamountout.innerHTML = MyRound(fGrainOut, 2);

		// Output estimated OG
		var fSpecialLbs = specialty.value;

		// Normalize to lbs
		switch (specialtyunits.selectedIndex)
			{
				case 0: // "Pounds":
					break;
				case 1: // "Kilograms":
					fSpecialLbs *= fKgPerLb;
			break;		
				case 2: // "Percent":
			fSpecialLbs /= 100.0;
			fSpecialLbs = (grainLbs * fSpecialLbs);
					break;
		}
		
		fGrav = fPotential * (grainLbs - fSpecialLbs) / fBatchGals * fEff;
		ogout.innerHTML = MyRound(1.0 + fGrav, 3);
		}
		catch(err)
		{
			mashsizeerror.innerHTML = "[" + err + "] Please insure all fields are filled in and are numeric values.";
		}
}


function electricbutton_Click()
{
	var wattage = document.getElementById("wattage");
	var elementoutputout = document.getElementById("elementoutputout");
	var draw120out = document.getElementById("draw120out");
	var draw240out = document.getElementById("draw240out");

	var volumetoheat = document.getElementById("volumetoheat");
	var volumetoheatunits = document.getElementById("volumetoheatunits");
	var heatretention = document.getElementById("heatretention");
	var startingtemp = document.getElementById("startingtemp");
	var startingtempunits = document.getElementById("startingtempunits");
	var finishingtemp = document.getElementById("finishingtemp");
	
	var finishingtempunits = document.getElementById("finishingtempunits");
	var timefortempout = document.getElementById("timefortempout");
	
	var electricerror = document.getElementById("electricerror");

	electricerror.innerHTML = "&nbsp;";

	try
	{
		var watts = wattage.value;
		var btuHr = watts * 3.412141633;

		elementoutputout.innerHTML = MyRound(btuHr, 3);
		draw120out.innerHTML = MyRound(watts/120.0, 2);
		draw240out.innerHTML = MyRound(watts/240.0, 2);

		// Normalize user units to gallons
		var vol = volumetoheat.value;
		switch (volumetoheatunits.selectedIndex)
		{
		case 0: // "Gallons":
			break;
		case 1: // "Quarts":
			vol /= 4;
			break;
		case 2: // "Liters":
			vol /= fLtPerQt;
			vol /= 4.0;
			break;
		}

		// Calculate pounds of liquid
		var lbsLiquid = vol * 8.3453;

		var retention = heatretention.value / 100.0;

		// Normalize user units to F
		var sTemp = startingtemp.value;
		switch (startingtempunits.selectedIndex)
		{
		case 0: // "F":
			break;
		case 1: // "C":
			sTemp = CtoF(sTemp);
			break;
		}

		var fTemp = finishingtemp.value;
		switch (finishingtempunits.selectedIndex)
		{
		case 0: // "F":
			break;
		case 1: // "C":
			fTemp = CtoF(fTemp);
			break;
		}

		var totalBTU = (fTemp - sTemp) * lbsLiquid * (2.0 - retention);

		timefortempout.innerHTML = MyRound((totalBTU / btuHr) * 60, 2);
	}
	catch(err)
	{
		electricerror.innerHTML = "[" + err + "] Please insure all fields are filled in and are numeric values.";
	}
}


<!--
var shw;	// Specific heat of water
var LperGallon = 3.78541178;
var kgperlbs = 0.45359237;
var wdensity;  // Water density in kg/L
var wvol;
var cv;
var hlc;

function calibrate()
{
	shw = document.getElementById("shw").value * 1.0;	// Specific heat of water
	wdensity = document.getElementById("wdensity").value * 1.0;  // Density of water
	wvol = document.getElementById("wvol").value;
	var wmass = wvol * LperGallon * wdensity;
	var cw = wmass * shw;	// Heat capacity, calibration water
	cv = cw * (document.getElementById("T0").value - document.getElementById("T5").value) / (document.getElementById("T5").value - document.getElementById("Tv").value);
	taucal = 3600.0 / Math.log( (document.getElementById("T5").value - document.getElementById("TA").value) / (document.getElementById("T65").value - document.getElementById("TA").value) );
	hlc = (cw + cv) / taucal;

	document.getElementById("cv").value = cv;
	document.getElementById("hlc").value = hlc;
}

function strikeCalc()
{
	shw = document.getElementById("shw").value * 1.0;	// Specific heat of water
	wdensity = document.getElementById("wdensity").value * 1.0;
	cv = document.getElementById("cv").value * 1.0;
	hlc = document.getElementById("hlc").value * 1.0;
	var mgrist = document.getElementById("mgrist").value * document.getElementById("mgristunit").value;
	var cg = mgrist * document.getElementById("shgrist").value * shw;
	var swvol = mgrist * document.getElementById("mthk").value * document.getElementById("mthkunit").value;
	var mwmass = swvol * wdensity;
	var cw = mwmass * shw;
	var Tg = document.getElementById("Tg").value * 1.0;
	var Tvm = document.getElementById("Tvm").value * 1.0;
	var TAm = document.getElementById("TAm").value * 1.0;
	var Tmash = document.getElementById("Tmash").value * 1.0;
	var mtime = document.getElementById("mtime").value * 1.0;
	var taumash = (cg + cw + cv)/hlc;

	document.getElementById("swT").value = ((Tmash * (cg + cw + cv) - cg*Tg - cv*Tvm) / cw).toFixed(1);
	document.getElementById("swvol").value = (swvol * document.getElementById("swvolunit").value).toFixed(3);
	document.getElementById("ploss").value = (hlc * (Tmash - TAm) / 1.8).toFixed(1);
	document.getElementById("mendT").value = (TAm + (Tmash - TAm) * Math.exp(-mtime*60/taumash)).toFixed(1);
	// document.getElementById("debug").innerHTML = document.getElementById("mthkunit").value;
}
//-->
