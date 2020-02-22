export let specialAfter = {"add-after":"Add in the glass","float":"Float"}
export let specialPre = {"muddle":"Muddle"}

export let ingredients = {
    "juice-lime": "freshly squeezed lime juice",
    "juice-lemon": "freshly squeezed lemon juice",
    "juice-orange": "freshly squeezed orange juice",
    "juice-pineapple":"pineapple juice",
    "juice-passion": "passion-fruit juice",
	"juice-apple-cloudy": "cloudy apple juice",
	"juice-tangerine":"tangerine juice",
	"juice-grapefruit":"grapefruit juice",

	"soda":"Soda",
	
	"lemon-piece":"eight of a lemon",
	"lime-piece":"eight of a lime",
	"cucumber-slice":"slice of cucumber",
	"mint-leaf":"mint leaf",
    
    "syrup-passion": "passion-fruit syrup", 
    "syrup-simple": "simple syrup",
	"syrup-orgeat": "orgeat (e.g. Monin, Giffard, or home-made)",
	"syrup-ginger":"ginger syrup (homemade)",
    "syrup-honey": "honey syrup",
    "syrup-grenadine": "grenadine syrup",
    "syrup-vanille": "vanilla syrup",
    "syrup-cinnamon": "cinnamon syrup (home-made)", 
	"syrup-demerara": "demerara syrup (home-made)",
	"syrup-ginger-rosemary": "ginger and rosemary syrup (home-made)",
	
	"sugar-cane-brown": "brown cane sugar",
    
	"creme-of-coconut" : "cream of coconut (home-made)",
	"coconut-milk":"coconut milk",
	"ginger-beer": "ginger Beer (e.g. Fever Tree)",
	"ginger-ale":"ginger ale (e.g. Thomas Henry)",
    "rose-lime": "Lime Cordial (e.g. Rose's lime juice or home-made)",
    "heavy-cream": "Heavy/Double cream",
    
    
    "rum-dark": "blended dark rum (e.g. Gosling's, Myers's, or Lemon Hart Demerara Rum)",
    "rum-jamaican": "Jamaican Rum (e.g. Appleton Signature, Myer's, or Coruba Jamaican)",
    "rum-demerara": "Demerara Rum (e.g. Lemon Hart, El Dorado, XM, or Hamilton 86)",
    "rum-agricole": "rhum agricole blanc (e.g. Clement, or Saint James)",
    "goslings-black-seal": "Gosling's Black Seal Rum",
    "english-harbour": "English Harbour 5 Years",
    "plantation-oftd": "Plantation O.F.T.D",
    "plantation-5years": "Plantation Bardbados Grande Reserve Rum 5 Years",
    "plantation-3stars": "Plantation 3 Stars Rum",
    "smith-cross": "Smith & Cross Jamaica Rum Navy Strength",
    "coruba-jamaican": "Coruba Jamaican Rum",
	"appleton-12": "Appleton Estate 12 Years",
	"wray-nephew-overproof":"Wray & Nephew Overproof Rum",
    "clement-vsop": "Clement Rhum Agricole V.S.O.P",
    "deadhead-dark-choc": "Deadhead Dark Chocolate Rum",
        
    "bitter-angostura": "Angostura bitters",
    "bitter-orange": "Orange Bitters (e.g. Angostura Orange)",
    
    "gin-london-dry": "london dry gin (e.g. Tanqueray or Beefeater)",
	"vodka-normal": "standard vodka (e.g. Absolut)",
	"vodka-bison": "bison grass vodka (e.g. Żubrówka ) ",
    "cointreau": "Cointreau Orange Liqueur",
	"pierre-ferrand-dry-curacao": "Pierre Ferrand Dry Orange Curaçao",
	"blue-curacao":"blue Curaçao",
	"chambord":"Chambord Raspberry Liqueur",
    "pierre-ferrand-brandy": "Cognac (e.g. Pierre Ferrand 1840, Hine V.S.O.P, or Remy Martin V.S.O.P)",
	"whiskey-bourbon" : "bourbon (e.g. Maker's Mark or Bulleit Bourbon)",
	"whiskey-rye" : "rye whiskey (e.g. Bulleit Rye or Rittenhouse Rye)",
	"whiskey-scotch": "scotch (e.g. Monkey Shoulder)",
    "tequila":"Tequila",
    
    
	"brandy-apricot": "Apricot Brandy (e.g. Giffard)",
	"creme-de-violette":"Violet Liqueur / Crème de violette",
	"aperol": "Aperol",
	"campari":"Campari",
    "heering-cherry": "Heering Cherry Liqueur",
    "luxardo-maraschino": "Luxardo Maraschino",
    "luxardo-sour-cherry": "Luxardo Sour Cherry Gin",
    "falernum": "John D. Taylor's Velvet Falernum",
    "midori": "Midori Melon Liqueur",
	"passoa": "Passoã passion-fruit liqueuer",
	"st-germain":"St. Germain elderflower liqueur",
	"licor-43":"Licor 43",
	"baileys":"Baileys Irish Cream",
    "mozart-dark": "Mozart Dark Chocolate Liqueur",
    "mozart-dry": "Mozart Dry Chocolate Spirit (formerly Mozart Dry Chocolate Vodka)",
    
    "vermouth-sweet":"sweet vermouth (typically Carpano Antica Formula)",
    "vermouth-dry": "dry vermouth (typically Noilly Prat)",
    "sparkling-dry": "dry sparkling wine (e.g. a Brut Champagne, Crémant, or Cava)", 
    
    "chartreuse-green": "green Chartreuse",
    "chartreuse-yellow": "yellow Chartreuse",
    "absinth": "Absinthe",
    "benedictine": "Bénédictine"
    
    
    
    
}


export let cocktails = {

"mai-tai":
	{
		"name":"Mai Tai",
		"ingredients":
		{
			"syrup-orgeat" : "20ml",
			"syrup-simple": "10ml",
			"juice-lime": "30ml",
			"wray-nephew-overproof": "10ml",
			"rum-jamaican": "20ml",
			"rum-agricole": "20ml",
			"pierre-ferrand-dry-curacao": "20ml"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-glass":"crushed",
		"ice-method":"cubes",
		"garnish": "1 Mint sprig and 1 spent half lime shell",
		"summary":"Jamaican rum, Martinique rhum, dry Curaçao, orgeat, lime",
		"note":"",
		"menu-desc":"The King of Tiki Drinks. Made using the rediscovered 1931 original Trader Vic recipe, this cocktail celebrates rum"
	},
"mai-tai-deluxe":
	{
		"name":"Mai Tai Deluxe",
		"ingredients":
		{
			"syrup-orgeat" : "20ml",
			"syrup-simple": "10ml",
			"juice-lime": "30ml",
			"pierre-ferrand-dry-curacao": "20ml",
			"appleton-12": "30ml",
			"clement-vsop": "30ml"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-glass":"crushed",
		"ice-method":"cubes",
		"garnish": "1 Mint sprig and 1 spent half lime shell",
		"summary":"aged Jamaican rum, aged Martinique rhum, dry Curaçao, orgeat, lime",
		"note":"",
		"menu-desc":"The premium version of our Mai Tai. Using aged rums from Jamaica and Martinique elevates this already amazing drink to another level"
	},
"hurricane":
	{
		"name":"Hurricane",
		"ingredients":
		{
			"syrup-passion": "20ml",
			"heering-cherry": "10ml",
			"juice-lemon" : "30ml",
			"rum-dark": "60ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"dark rum, passion fruit, cherry liquor, lemon",
		"note":""
	},
"dark-n-stormy":
	{
		"name":"Dark 'n' Stormy",
		"ingredients":
		{
			"juice-lime" : "30ml",
			"plantation-oftd": "40ml",
			"ginger-beer": "100ml"
		},
		"glass":"highball",
		"method":"build",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"dark rum, ginger beer",
		"note":""
	},
"demerara-dry-float":
	{
		"name":"Demerara Dry Float",
		"ingredients":
		{
			"syrup-simple" : "10ml",
			"syrup-passion" :"45ml",
			"juice-lime" : "75ml",
			"luxardo-maraschino": "10ml",
			"rum-demerara": "30ml",
			"plantation-oftd": "10ml"
		},
		"special-ingredients":{
			"plantation-oftd":"float"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"demerara rum, passion fruit, maraschino, lime",
		"note":"Include no straw, the drink needs to be sipped"
	},
"skull-n-bones":
	{
		"name":"Skull 'n' Bones",
		"ingredients":
		{
			"syrup-passion" : "45ml",
			"syrup-grenadine": "15ml",
			"juice-lime": "30ml",
			"plantation-oftd":"30ml",
			"smith-cross":"30ml",
			"bitter-angostura": "3dash"
		},
		"glass":"rocks",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"overproof rum, passion fruit, grenadine, lime",
		"note":""
	},
"skipper-kent-chocolate":
	{
		"name":"Skipper Kent's Chocolate Punch",
		"ingredients":
		{
			"syrup-cinnamon" : "20ml",
			"juice-lime": "30ml",
			"plantation-oftd": "10ml",
			"mozart-dark": "20ml",
			"clement-vsop": "20ml",
			"deadhead-dark-choc": "20ml"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"crushed",
		"summary":"dark rum, aged Martinique rhum, dark chocolate licquor, cinnamon syrup",
		"note":""
	},
"king-kamehameha":
	{
		"name":"King Kamehameha",
		"ingredients":
		{
			"syrup-honey": "20ml",
			"juice-passion" : "30ml",
			"juice-pineapple": "60ml",
			"juice-orange": "30ml",
			"juice-lime": "30ml",
			"aperol": "30ml",
			"plantation-oftd": "20ml",
			"smith-cross": "20ml",
			"plantation-5years": "20ml"
		},
		"glass":"hurricane",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"3 Rums, Aperol, orange, honey, passion fruit, pineapple, lime ",
		"note":"For 1 or 2 people"
	},

"rum-sour":
	{
		"name":"Rum Sour",
		"ingredients":
		{
			
			"juice-lime":"30ml",
			"rum-dark": "40ml",
			"falernum": "10ml",
			"heering-cherry": "10ml"
		},
		"glass":"rocks",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, falernum, cherry liquor, lime",
		"note":"Add 10ml of simple syrup to take it from a sour to a more balanced drink"
	},
"cobra-fang":
	{
		"name":"Cobra Fang",
		"ingredients":
		{
			"syrup-passion":"15ml",
			"juice-lime":"15ml",
			"juice-orange":"15ml",
			"plantation-oftd":"45ml",
			"falernum":"10ml",
			"bitter-angostura":"1dash",
			"absinth":"1dash"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"overproof demerara rum, orange, passion fruit, falernum"
	},
"center-galaxy":{
	"name":"Center of the Galaxy",
	"ingredients":{
		"syrup-cinnamon":"15ml",
		"syrup-honey":"15ml",
		"juice-lime":"15ml",
		"rum-demerara":"50ml",
		"chambord":"10ml"
	},
	"glass":"coupe",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"none",
	"summary":"demerara rum, raspberry liquor, cinnamon, honey, lime"
},
"scorpion-bowl":
	{
		"name":"Scorpion Bowl",
		"ingredients":
		{
			"syrup-demerara": "45ml",
			"syrup-orgeat": "60ml",
			"juice-lime": "60ml",
			"juice-orange": "120ml",
			"gin-london-dry": "120ml",
			"pierre-ferrand-brandy": "60ml",
			"plantation-5years":"120ml"
		},
		"glass":"bowl",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"Gin, brandy, rum, orgeat, orange, lime",
		"note": "For 4+ People. Use 2 shakers"
	},
"tiki-bowl":
	{
		"name":"Tiki Bowl",
		"ingredients":
		{
			"syrup-honey":"30ml",
			"juice-orange":"45ml",
			"juice-lime":"20ml",
			"goslings-black-seal": "45ml",
			"plantation-oftd": "30ml",
			"english-harbour": "30ml",
			"bitter-angostura": "2dash",
			"absinth":"2dash"
		},
		"glass":"bowl",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"3 Rums, honey, orange, lime",
		"note":"For 2 People"
	},
"martini":
	{
		"name":"Martini",
		"ingredients":{
			"gin-london-dry": "80ml",
			"vermouth-dry": "40ml"
		},
		"glass":"martini",
		"method":"stirr",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Gin, dry vermouth",
		"note":"Standard ratio, feel free to vary from 1:1 for a very sweet martini to 7:1 for a very dry martini"
	},
	"martini-royal":{
		"name":"Martini Royale",
		"ingredients":{
			"vermouth-dry":"100ml",
			"sparkling-dry":"100ml",
			"juice-lime":"15ml",
			"mint-leaf":"3pts"
		},
		"method":"build",
		"glass":"wine",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"Martini, sparkling wine, lime, mint",
		"note":"Rub mint leaves on rim, then drop them in"
	},
	"aperol-spritz":{
		"name":"Aperol Spritz",
		"ingredients":{
			"aperol":"100ml",
			"sparkling-dry":"100ml"
		},
		"glass":"wine",
		"method":"build",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"Aperol, sparkling wine"
	},
"gimlet":
	{
		"name":"Gimlet",
		"ingredients":{
			"gin-london-dry":"80ml",
			"rose-lime": "40ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Gin, lime cordial",
		"note":"Standard ratio, feel free to vary from 1:1 for a very sweet gimlet to 7:1 for a very dry gimlet"
	},
"gimlet-elderflower":{
		"name": "Cucumber Elderflower Gimlet",
		"ingredients":{
			"juice-lime":"30ml",
			"gin-london-dry":"45ml",
			"st-germain":"30ml",
			"cucumber-slice":"4pts"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Gin, elderflower, cucumber, lime",
		"note":""
	},
	
"martini-chocolate-cherry":
	{
		"name":"Chocolate Cherry Martini",
		"ingredients":{
			"mozart-dry":"60ml",
			"heering-cherry":"60ml"
		},
		"glass":"martini",
		"method":"stirr",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Chocolate vodka, cherry liquor ",
		"note":"The mozart dry is REALLY dry, so the uncommon 1:1 ratio feels necessary"
	},
"martinez-sour-cherry":
	{
		"name":"Sour Cherry Martinez",
		"ingredients":{
			"luxardo-sour-cherry": "45ml",
			"vermouth-sweet": "30ml",
			"bitter-angostura":"3dash",
			"luxardo-maraschino": "1bsp"
		},
		"glass":"coupe",
		"method":"stirr",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Sour cherry gin, sweet vermouth, maraschino "
	},
"saturn":
	{
		"name":"Saturn",
		"ingredients":{
			"syrup-passion":"20ml",
			"syrup-orgeat":"10ml",
			"juice-lemon":"30ml",
			"gin-london-dry":"60ml",
			"falernum":"10ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"gin, falernum, orange, passion fruit, orgeat",
		"note":""
	},
"aviation":
	{
		"name":"Aviation",
		"ingredients":{
			"juice-lemon":"20ml",
			"gin-london-dry":"45ml",
			"creme-de-violette": "10ml",
			"luxardo-maraschino":"15ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"gin, creme de violette, maraschino, lemon",
		"note":""
	},
"suffering-bastard":
	{
		"name":"Suffering Bastard",
		"ingredients":{
			"rose-lime":"15ml",
			"gin-london-dry":"30ml",
			"pierre-ferrand-brandy":"30ml",
			"bitter-angostura":"2dash",
			"ginger-beer":"100ml"
		},
		"special-ingredients":{
			"ginger-beer":"add-after"
		},
		"glass":"pilsner",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"cubes",
		"summary":"Gin, brandy, ginger beer, lime cordial",
		"note":""
	},
"moscow-mule":
	{
		"name":"Moscow Mule",
		"ingredients":{
			"juice-lime":"30ml",
			"vodka-normal":"60ml",
			"ginger-beer":"100ml"
		},
		"glass":"copper-mug",
		"method":"build",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"Vodka, lime, ginger beer",
		"note":""
	},
"apple-pie":
	{
		"name":"Apple Pie",
		"ingredients":{
			"vodka-bison": "30ml",
			"licor-43": "30ml",
			"juice-apple-cloudy": "120ml"
		},
		"glass":"highball",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"Vodka, Licor 43, apple ",
		"note":"Use apple juice to adjust strength, ratios between 1:1:2 and 1:1:6 are common"
	},
"solero":
	{
		"name":"Solero",
		"ingredients":{
			"syrup-vanille":"20ml",
			"juice-lemon":"20ml",
			"juice-passion":"60ml",
			"vodka-normal":"40ml"
		},
		"glass":"highball",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"vodka, passion fruit, vanilla",
		"note":""
	},
"pornstar-martini":
	{
		"name":"Pornstar Martini",
		"ingredients":{
			"syrup-vanille":"10ml",
			"juice-lime":"15ml",
			"vodka-normal":"40ml",
			"passoa":"40ml"
		},
		"glass":"martini",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"vodka, passion fruit, vanilla",
		"note":"(Optional) The ritual: serve with a shot of sparkling wine"
	},
"touchdown":
	{
		"name":"Touchdown",
		"ingredients":{
			"syrup-grenadine":"15ml",
			"juice-lemon":"20ml",
			"juice-passion":"80ml",
			"vodka-normal":"40ml",
			"brandy-apricot":"20ml"
		},
		"glass":"highball",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"vodka, apricot brandy, grenadine, lemon ",
		"note":""
	},
"blood-n-sand":
	{
		"name":"Blood and Sand",
		"ingredients":{
			"juice-lemon":"30ml",
			"whiskey-scotch":"30ml",
			"vermouth-sweet":"20ml",
			"heering-cherry":"20ml"
		},
		"glass":"martini",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Scotch, sweet vermouth, cherry liquor, lemon",
		"note":"Strain with a coarse strainer, small ice splinters on top are desired. \n You can swap in a smokey whiskey, like a Talisker Storm for a more complex variant"
	},
"whiskey-sour":
	{
		"name":"Whiskey Sour",
		"ingredients":{
			"syrup-simple":"20ml",
			"juice-lemon":"40ml",
			"whiskey-bourbon":"60ml"
		},
		"glass":"rocks",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"bourbon, lemon, simple sryup",
		"note":"For a foamy head, add 1 egg white and follow up the wet shake with a dry shake"
	},
"honey-bee":
	{
		"name":"Honey Bee",
		"ingredients":{
			"syrup-honey":"20ml",
			"juice-lemon":"40ml",
			"whiskey-bourbon":"40ml",
			"brandy-apricot":"30ml"
		},
		"glass":"martini",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"bourbon, apricot brandy, honey, lemon",
		"note":""
	},
"force-is-strong":
	{
		"name":"The Force is strong",
		"ingredients":{
			"syrup-orgeat":"15ml",
			"juice-lime":"15ml",
			"aperol":"30ml",
			"blue-curacao":"30ml",
			"coconut-milk":"60ml"
		},
		"glass":"martini",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Aperol, coconut-milk, blue Curaçao, orgeat, lime",
		"note":""
	},
"colada-pina":
	{
		"name":"Pina Colada",
		"ingredients":{
			"juice-pineapple":"90ml",
			"rum-jamaican":"60ml",
			"creme-of-coconut": "60ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, pineapple, coconut cream",
		"note":""
	},
"colada-chocolate":
	{
		"name":"Chocolate Colada",
		"ingredients":{
			"juice-pineapple":"90ml",
			"creme-of-coconut":"60ml",
			"mozart-dark":"30ml",
			"rum-dark":"30ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, chocolate liquor, pineapple, coconut cream",
		"note":""
	},
"colada-cherry":
	{
		"name":"Cherry Colada",
		"ingredients":{
			"juice-pineapple":"90ml",
			"creme-of-coconut":"60ml",
			"heering-cherry":"30ml",
			"coruba-jamaican":"30ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, cherry liquor, pineapple, coconut cream",
		"note":""
	},
	"colada-passion":
	{
		"name":"Passion Colada",
		"ingredients":{
			"juice-pineapple":"90ml",
			"creme-of-coconut":"60ml",
			"passoa":"60ml",
			"rum-jamaican":"20ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, passion fruit liquor, pineapple, coconut cream",
		"note":""
	},
"colada-virgin":
	{
		"name":"Virgin Colada",
		"ingredients":{
			"juice-pineapple":"130ml",			
			"creme-of-coconut": "90ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"pineapple, coconut cream",
		"note":""
	},
	"colada-baileys":{
		"name":"Baileys Colada",
		"ingredients":{
			"creme-of-coconut":"60ml",
			"baileys":"20ml",
			"rum-jamaican":"50ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, Baileys, coconut cream",
		"note":""
	},
	"colada-shirin":{
		"name":"Shirin Colada",
		"ingredients":{
			"creme-of-coconut":"60ml",
			"rum-jamaican":"30ml",
			"baileys":"20ml",
			"mozart-dark":"20ml"
		},
		"glass":"hurricane",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"rum, Baileys, chocolate liquor, coconut cream",
		"note":"Use chocolate Baileys if you got it"
	},
"trade-winds":
	{
		"name":"Trade Winds",
		"ingredients":{
			"juice-lemon":"30ml",
			"brandy-apricot":"20ml",
			"creme-of-coconut":"40ml",
			"rum-dark":"30ml",
			"plantation-3stars":"30ml"
		},
		"glass":"highball",
		"method":"drink-mixer",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"2 rums, coconut cream, apricot brandy, lemon",
		"note":"Swap in 60ml of London Dry Gin for the Rums to make an East India Tradewinds"
	},
	"passoa-ginger":{
		"name":"Passoa & Ginger",
		"ingredients":{
			"passoa":"100ml",
			"ginger-beer":"100ml"
		},
		"glass":"highball",
		"method":"build",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"Passoa, ginger beer",
		"note":""
	},
"orange-whip":
	{
		"name":"Orange Whip",
		"ingredients":{
			"juice-orange":"120ml",
			"coruba-jamaican":"30ml",
			"vodka-normal":"30ml",
			"cointreau":"20ml",
			"heavy-cream":"60ml",
			"bitter-orange":"2dash"
		},
		"glass":"hurricane",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"vodka, rum, cointreau, heavy cream",
		"note":"Shake hard to foam up the cream! Rum can be changed for a white rum in a pinch"
	},
"chocolate-whip":
	{
		"name":"Chocolate Whip",
		"ingredients":{
			"juice-orange":"120ml",
			"plantation-oftd":"30ml",
			"mozart-dark":"30ml",
			"cointreau":"20ml",
			"heavy-cream":"60ml"
		},
		"glass":"hurricane",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"demerara rum, dark chocolate liquor, cointreau, heavy cream, orange juice",
		"note":"Shake hard to foam up the cream! Rum can be changed for a white rum in a pinch"
	},
"tropical champagne":
	{
		"name":"Tropical Champagne",
		"ingredients":{
			"juice-orange":"60ml",
			"rum-jamaican":"30ml",
			"syrup-passion":"15ml",
			"sparkling-dry":"100ml"
		},
		"special-ingredients":{
			"sparkling-dry": "add-after"
		},
		"glass":"flute",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Sparkling Wine, Jamaican rum, passion fruit, orange",
		"note":""
	},
"champagne-glory":
	{
		"name":"Champagne Glory",
		"ingredients":{
			"syrup-passion":"8pts",
			"heering-cherry":"4pts",
			"brandy-apricot":"6pts",
			"sparkling-dry":"100ml"
		},
		"special-ingredients":{
			"sparkling-dry": "add-after"
		},
		"glass":"flute",
		"method":"shake",
		"ice-method":"none",
		"ice-glass":"none",
		"summary":"Sparkling Wine, apricot brandy, cherry liquor, passion fruit",
		"note":"Prepare non-sparkling ingredients in batch to match ratios better. Divide into flutes and fill with sparkling wine as needed"
	},
"last-word":
	{
		"name":"Last Word",
		"ingredients":{
			"juice-lemon":"30ml",
			"gin-london-dry":"30ml",
			"luxardo-maraschino":"30ml",
			"chartreuse-green":"30ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"gin, chartreuse, maraschino",
		"note":""
	},
"final-ward": {
	"name":"Final Ward",
	"ingredients":{
		"juice-lemon":"30ml",
		"whiskey-rye":"30ml",
		"luxardo-maraschino":"30ml",
		"chartreuse-green":"30ml"
	},
	"glass":"coupe",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"none",
	"summary":"rye whiskey, chartreuse, marschino",
	"note":""
},
"last-sword":
	{
		"name":"Last Sword",
		"ingredients":{
			"juice-lime":"30ml",
			"plantation-5years":"30ml",
			"falernum":"30ml",
			"chartreuse-green":"30ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"barbados rum, chartreue, falernum",
		"note":""
	},
	"paper-plane":
	{
		"name":"Paper Plane",
		"ingredients":{
			"juice-lemon":"30ml",
			"aperol":"30ml",
			"whiskey-bourbon":"30ml",
			"benedictine": "30ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"bourbon, Benedictine, Aperol",
		"note":""
	},
	"monte-cassino":
	{
		"name":"Monte Cassino",
		"ingredients":{
			"juice-lemon":"30ml",
			"whiskey-rye":"30ml",
			"benedictine":"30ml",
			"chartreuse-yellow":"30ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"rye whiskey, chartreuse, benedictine",
		"note":""
	},
	"eureka-punch":
	{
		"name":"Eureka Punch",
		"ingredients":{
			"juice-lemon":"45ml",
			"syrup-honey":"30ml",
			"chartreuse-yellow":"15ml",
			"english-harbour":"45ml",
			"bitter-angostura":"1dash",
			"ginger-ale":"60ml"
		},
		"special-ingredients":{
			"ginger-ale": "add-after"
		},
		"glass":"brandy",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"antigua rum, chartreuse, honey, ginger beer",
		"note":"Add ginger-ale after shaking"
	},
	"puka-punch":
	{
		"name":"Puka Punch",
		"ingredients":{
			"syrup-honey":"30ml",
			"syrup-passion":"22ml",
			"juice-lime":"30ml",
			"juice-pineapple":"22ml",
			"juice-orange":"22ml",
			"falernum":"15ml",
			"plantation-3stars":"60ml",
			"goslings-black-seal":"22ml",
			"plantation-oftd":"22ml",
			"bitter-angostura":"1dash"
		},
		"special-ingredients":{
			"plantation-oftd": "float"
		},
		"glass":"brandy",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"3 rums, falernum, honey, passion fruit, orange, pineapple",
		"note":"Mix all but OFTD, float OFTD afterwards"
	},
	"japanese-slider":
	{
		"name":"Japanese Slider",
		"ingredients":{
			"juice-lemon":"40ml",
			"cointreau":"40ml",
			"midori":"40ml"
		},
		"glass":"martini",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Midori, cointreau, lemon",
		"note":""
	},
	"chartreuse-swizzle":
	{
		"name":"Chartreuse Swizzle",
		"ingredients":{
			"juice-lime":"20ml",
			"juice-pineapple":"30ml",
			"falernum":"15ml",
			"chartreuse-green":"45ml"
		},
		"glass":"rocks",
		"method":"swizzle",
		"ice-method":"crushed",
		"ice-glass":"method",
		"summary":"Chartreuse, falernum, pineapple",
		"note":""
	},
	"socialist":
	{
		"name":"Socialist",
		"ingredients":{
			"vermouth-sweet":"20ml",
			"rum-demerara":"20ml",
			"plantation-5years":"20ml",
			"smith-cross":"15ml",
			"bitter-orange":"2dash"
		},
		"glass":"rocks",
		"method":"build",
		"ice-method":"cubes",
		"ice-glass":"method",
		"summary":"3 rums, sweet vermouth, orange bitters ",
		"note":""
	},
	"negroni":
	{
		"name":"Negroni",
		"ingredients":{
			"gin-london-dry":"40ml",
			"vermouth-sweet":"40ml",
			"campari":"40ml"
		},
		"glass":"rocks",
		"method":"stirr",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"gin, sweet vermouth, Campari",
		"note":"Express an orange zest over the drink, then add it as garnish"

	},
"daiquiri-melon":
    {
		"name":"Melon Daiquiri",
		"ingredients":{
			"syrup-simple":"10ml",
			"juice-lime":"20ml",
			"midori":"10ml",
			"plantation-3stars":"40ml"
		},
		"glass":"coupe",
		"method":"shake",
		"ice-method":"cubes",
		"ice-glass":"none",
		"summary":"Midori, rum, lime",
		"note":""
	}
,"pirate-eve":
{
	"name":"Japanese Pirateship",
	"ingredients":{
		"plantation-3stars":"30ml",
		"midori":"30ml",
		"juice-apple-cloudy":"30ml",
		"syrup-simple":"15ml",
		"juice-lemon":"15ml"
	},
	"glass":"rocks",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"method",
	"summary":"Midori, rum, apple juice",
	"note":""
},
"margarita":
{
	"name":"Margarita",
	"ingredients":{
		"juice-lime":"20ml",
		"tequila":"50ml",
        "cointreau":"30ml"
	},
	"glass":"martini",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"none",
	"summary":"Tequila, Cointreau, lime juice",
	"note":"Rim the glass with salt"
},
"kamikaze":
{
	"name":"Kamikaze",
	"ingredients":{
		"juice-lime":"15ml",
		"vodka-normal":"15ml",
        "cointreau":"15ml"
	},
	"glass":"shot",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"none",
	"summary":"Vodka, Cointreau, lime juice",
	"note":"Scale to number of shots and do all at once. Feel free to swap in tequila for vodka for mini margaritas"
},
"mcqueen":{
	"name":"McQueen",
	"ingredients":{
		"lemon-piece":"4pts",
		"cucumber-slice":"4pts",
		"syrup-honey":"20ml",
		"gin-london-dry":"35ml",
		"ginger-beer":"40ml"
	},
	"special-ingredients":{
		"lemon-piece":"muddle",
		"cucumber-slice":"muddle",
		"syrup-honey":"muddle",
		"ginger-beer":"add-after"
	},
	"glass":"rocks",
	"method":"build",
	"ice-method":"crushed",
	"ice-glass":"method",
	"summary":"Gin, honey, cucumber, ginger beer, lemon"
	
},
"ipanema":{
	"name":"Ipanema",
	"ingredients":{
		"juice-lime":"30ml",
		"sugar-cane-brown":"3tsp",
		"ginger-beer":"100ml"
	},
	"glass":"rocks",
	"method":"build",
	"ice-method":"crushed",
	"ice-glass":"method",
	"summary":"Lime Juice, Cane Sugar, Ginger beer"
},
"m-one":{
	"name":"M-One",
	"ingredients":{
		"juice-tangerine":"60ml",
		"cointreau":"20ml",
		"whiskey-scotch":"45ml",
		"bitter-angostura":"2dash"
	},
	"glass":"rocks",
	"method":"shake",
	"ice-method":"cubes",
	"ice-glass":"cubes",
	"summary":"scotch, orange liqueur, tangerine juice",
	"note":"Prefer peaty/smoky scotches"
},
"mandala":{
	"name":"Mandala",
	"ingredients":{
		"syrup-orgeat":"25ml",
		"juice-lime":"10ml",
		"juice-pineapple":"60ml",
		"juice-passion":"40ml"
	},
	"glass":"highball",
	"ice-method":"crushed",
	"ice-glass":"method",
	"method":"shake",
	"summary":"almond, pineapple, passion fruit, lime"
},
"emmas-potion":{
	"name":"Emma's health potion",
	"ingredients":{
		"syrup-ginger-rosemary":"45ml",
		"juice-lime":"30ml",
		"juice-grapefruit":"60ml",
		"ginger-beer":"fill"
	},
	"special-ingredients":{
		"ginger-beer": "add-after"
	},
	"glass":"rocks",
	"ice-method":"crushed",
	"ice-glass":"method",
	"method":"drink-mixer",
	"summary":"ginger, grapefruit, rosemary, lime"
},
"almonade":{
	"name": "Almonade",
	"ingredients":{
		"syrup-orgeat":"20ml",
		"juice-lime":"20ml",
		"rose-lime":"20ml",
		"soda":"fill"
	},
	"special-ingredients":{
		"soda": "add-after"
	},
	"glass":"highball",
	"ice-method":"crushed",
	"ice-glass":"method",
	"method":"build",
	"summary":"almond, lime, soda"
}
	
}


