var itemsMafia = {"Mafiasleutels": false,"Mafiamap":false,"MafiaAgenda":false}
welkom();

function welkom(){
	document.body.style.backgroundImage = "url('bckground.png')";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Start De Game";
	document.getElementById('button3').style.display = "none";
	document.getElementById('title').innerText = "Welkom Bij Mijn GTA knop game!";
	document.getElementById('description').innerText = "Gemaakt door Ahmet özer 99058307";
	document.getElementById('button2').onclick = verhaalstart;
	console.log("Start pagina");
}
function verhaalstart(){
	document.body.style.backgroundImage = "url('wp2239416.jpg')";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Mafia";
	document.getElementById('button3').style.display = "none";
	document.getElementById('title').innerText = "Begin met het mafia verhaal";
	document.getElementById('description').innerText = "het verhaal heeft veel faal eindes en maar 1 win einde,doe je best.";
	document.getElementById('button2').onclick = Mafia;
	console.log("KeuzePagina");
}
function Mafia(){
	document.body.style.backgroundImage = "url('mafiajpg/mafiawtf.jpg')";
		document.getElementById('title').innerText = "Je hebt de keuze gemaakt om als mafia te spelen.";
			document.getElementById('description').innerText = "Je speelt als paggito. Je doel is om de Rivale mafialeider te doden."
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = Mafia2;
		console.log("Uitleg 1");
}
function Mafia2(){
	document.body.style.backgroundImage = "url('mafiajpg/mafia2autos.jpg')";
		document.getElementById('title').innerText = "Jij bent de grootste mafiabaas van Los Santos";
			document.getElementById('description').innerText = "Dus je moet zorgen voor minder concurrentie";
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = Mafia3;
		console.log("uitleg 2");
}
function Mafia3(){
	document.body.style.backgroundImage = "url('mafiajpg/mafiabureau.jpg')";
		document.getElementById('title').innerText = "DEALS";
			document.getElementById('description').innerText = "Dit is de bureau waar je deals gaat beheren,dit kan wapenhandel,autohandel of drugs zijn.";
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = Mafia4;
		console.log("uitleg 3");
}
function Mafia4(){
	document.body.style.backgroundImage = "url('mafiajpg/mafiaautos.jpg')";
		document.getElementById('title').innerText = "IMPORT/EXPORT DEALS";
			document.getElementById('description').innerText = "deze deals komen niet vaak voor,Omdat de rivale leider dit doet voor minder geld."
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = Mafia5;
		console.log("uitleg 4");
}
function Mafia5(){
	document.body.style.backgroundImage = "url('mafiajpg/rival.jpg')";
		document.getElementById('title').innerText = "Rivale Leider";
			document.getElementById('description').innerText = "Dit is hector, De rivale leider. Jij en hector hebben ongeveer de zelfde connecties. "
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = Mafia6;
		console.log("uitleg 5");
}
function Mafia6(){
	document.body.style.backgroundImage = "url('mafiajpg/ebuu.jpg')";
		document.getElementById('title').innerText = "Rivale Leider";
			document.getElementById('description').innerText = "Je kan hem vinden dmv taken te doen voor je connecties en door voorwerpen te vinden, En daar gaan we nu mee beginnen!"
				document.getElementById('button1').style.display = "none";
				document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "verder";
		document.getElementById('button3').style.display = "none";
	document.getElementById('button2').onclick = MafiaLevel1;
		console.log("uitleg 6");
}

function MafiaLevel1(){
	document.body.style.backgroundImage = "url('mafiajpg/resized-image-mafia.jpg')";
	document.getElementById('title').innerText = "Wapen Kopen";
	document.getElementById('description').innerText = "Om de rivale leider te verslaan meot je natuurlijk een sterke wapen hebben. En om een sterke wapen aan te schaffen moet je natuurlijk ook geld hebben.Dus gaan we Wapens verkopen aan rusland. We gaan met de auto dus vergeet niet om je sleutels te pakken."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	if(itemsMafia["Mafiasleutels"] == false){
		bmwsleutel = document.createElement("img");
		bmwsleutel.setAttribute("onclick", "getKey()");
		bmwsleutel.src = "mafiajpg/bmwkey.png";
		bmwsleutel.style.width = "50px";
		bmwsleutel.setAttribute("class", "bmwkey");
		document.getElementById("game-container").appendChild(bmwsleutel);
	} else {
		bmwsleutel.style.display = 'none';
	}
	document.getElementById('button2').innerText = "Verder";
	document.getElementById('button2').onclick = MafiaLevel2;
	document.getElementById('button3').style.display = "none";
		console.log("Level 1");
}

function getKey(){
	itemsMafia["Mafiasleutels"] = true;
	console.log(itemsMafia["Mafiasleutels"]);
		console.log("sleutels opgepakt");
		bmwsleutel.style.display = 'none';
}
function MafiaLevel2(){
	if (itemsMafia["Mafiasleutels"] == false) {
		document.body.style.backgroundImage = 'url("mafiajpg/autofoto.png")';
		document.getElementById('title').innerText = "Je kunt de auto niet in.";
		document.getElementById('description').innerText = "je bent vergeten om de sleutel op te pakken."
		bmwsleutel.style.display = 'none';
		document.getElementById('button1').style.display = "none";
		document.getElementById('button2').style.display = "inline-block";
		document.getElementById('button2').innerText = "verder";
		document.getElementById('button2').onclick = Sleutelterugpakken;
		document.getElementById('button3').style.display = "none";
		}
		 else {
			document.body.style.backgroundImage = "url('mafiajpg/autofoto.png')";
			document.getElementById('title').innerText = "we gaan nu naar de bunker om wapens te verkopen"
			document.getElementById('description').innerText = "druk op verder om naar de bunker te gaan."
			document.getElementById('button1').style.display = "none";
			document.getElementById('button2').style.display = "inline-block";
			document.getElementById('button2').innerText = "Naar de bunker";
			document.getElementById('button2').onclick = Bunker;
			document.getElementById('button3').style.display = "none";
			console.log("level 2");
			
		}	
	
}
function Sleutelterugpakken(){
	document.body.style.backgroundImage = 'url("mafiajpg/sleutelterugpak.jpg")';
	document.getElementById('title').innerText = "pak de sleutel dit keer.";
	document.getElementById('description').innerText = "pak de sleutel dit keer om verder te gaan met het verhaal"
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "verder";
	document.getElementById('button2').onclick = MafiaLevel2;
	document.getElementById('button3').style.display = "none";
	bmwsleutell = document.createElement("img");
	bmwsleutell.setAttribute("onclick", "getKeyy()");
	bmwsleutell.src = "mafiajpg/bmwkey.png";
	bmwsleutell.style.width = "50px";
	bmwsleutell.setAttribute("class", "bmwkeyy");
	document.getElementById("game-container").appendChild(bmwsleutell);
	if (itemsMafia["Mafiasleutels"] == true) {
		bmwsleutell.style.display = 'none';
	
	}
		console.log("level 3");
}
function getKeyy(){
	itemsMafia["Mafiasleutels"] = true;
	console.log("sleutel opgepakt na 2de keer");
	bmwsleutell.style.display = 'none';
	
}
//klaar met sleutels nu volgen functies voor bunker
function Bunker(){
	document.body.style.backgroundImage = 'url("mafiajpg/GTA-bunker.png")';
	document.getElementById('title').innerText = "WAPENS VERKOPEN.";
	document.getElementById('description').innerText = "Je wapens staan er klaar voor om verkocht te worden."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "wapens verkopen";
	document.getElementById('button2').onclick = wapensverkopen;
	document.getElementById('button3').style.display = "none";
		console.log("level 4");
}
function wapensverkopen(){
	document.body.style.backgroundImage = 'url("mafiajpg/wapenverkopen.png")';
	document.getElementById('title').innerText = "Je gaat nu wapens verkopen.";
	document.getElementById('description').innerText = "je gaat nu wapens verkopen aan de russische mafia om geld te sparen voor een tommy gun."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "START MET VERKOPEN";
	document.getElementById('button2').onclick = verkopendone;
	document.getElementById('button3').style.display = "none";
		console.log("level 5");
}
function verkopendone(){
	document.body.style.backgroundImage = 'url("mafiajpg/verkopendone.gif")';
	document.getElementById('title').innerText = "Je hebt je wapens verkocht aan de russische mafia.";
	document.getElementById('description').innerText = "nu kunnen we naar de wapenwinkel gaan.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "naar wapenwinkel";
	document.getElementById('button2').onclick = wapenwinkel;
	document.getElementById('button3').style.display = "none";
		console.log("level 6");
}
function wapenwinkel(){
	document.body.style.backgroundImage = 'url("mafiajpg/tommygun.jpg")';
	document.getElementById('title').innerText = "TOMMYGUN GEKOCHT";
	document.getElementById('description').innerText = "je hebt met succes de tommygun gekocht, Nu moeten we hector vinden."
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "wapenwinkel beroven";
	document.getElementById('button1').onclick = wapenwinkelberoven;
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "De weg naar hector";
	document.getElementById('button3').onclick = hectorzoeken;
	document.getElementById('button2').style.display = "none";
		console.log("level 7");
}
function wapenwinkelberoven(){
	document.body.style.backgroundImage = 'url("mafiajpg/wapenwinkelberoven1.jpg")';
	document.getElementById('title').innerText = "je gaat proberen om de wapenwinkel te beroven."
	document.getElementById('description').innerText = "Weet je zeker dat je wilt doorgaan?"
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Ja";
	document.getElementById('button1').onclick = wapenwinkelberovenja;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "Nee";
	document.getElementById('button3').onclick = hectorzoeken;
		console.log("level 8");
}

function wapenwinkelberovenja(){
	document.body.style.backgroundImage = 'url("mafiajpg/wapenwinkeldood.jpg")';
	document.getElementById('title').innerText = "Je bent dood"
	document.getElementById('description').innerText = "Dacht je serieus dat je deze man kon beroven???"
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "opnieuw beginnen.";
	document.getElementById('button2').onclick = welkom;
	document.getElementById('button3').style.display = "none";
		console.log("level 9");
}


function hectorzoeken(){
	document.body.style.backgroundImage = 'url("mafiajpg/hectorzoeken1.jpg")';
	document.getElementById('title').innerText = "Je wilt hector zoeken.";
	document.getElementById('description').innerText = "Maar om dat te berijken moet je iets doen voor tony. Je moet 'goederen' verkopen";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Verkopen.";
	document.getElementById('button2').onclick = goederenverkoop;
	document.getElementById('button3').style.display = "none";
		console.log("level 10");
}
function goederenverkoop(){
	document.body.style.backgroundImage = 'url("mafiajpg/metwagen.jpg")';
	document.getElementById('title').innerText = "Je bent gearriveerd. Tony belt je:";
	document.getElementById('description').innerText = "Hey met tony! De klant wacht je op langs het rivier met een gele auto.Bel me terug als je het product hebt afgeleverd.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Klant zoeken.";
	document.getElementById('button2').onclick = klantzoek;
	document.getElementById('button3').style.display = "none";
		console.log("level 11");
}
function klantzoek(){
	document.body.style.backgroundImage = 'url("mafiajpg/klantzoek.jpg")';
	document.getElementById('title').innerText = "Je hebt de klant gevonden.";
	document.getElementById('description').innerText = "klant: gracias señor el jefe";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Tony bellen";
	document.getElementById('button2').onclick = tonybellen;
	document.getElementById('button3').style.display = "none";
		console.log("level 12");
}
function tonybellen(){
	document.body.style.backgroundImage = 'url("mafiajpg/tonybel.jpg")';
	document.getElementById('title').innerText = "Hey bedankt voor de aflevering!";
	document.getElementById('description').innerText = "Ik vermoed dat hector zich in het striplub bevindt..";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Naar striplub";
	document.getElementById('button2').onclick = omw2fyb;
	document.getElementById('button3').style.display = "none";
		console.log("level 13");
}
function omw2fyb(){
	document.body.style.backgroundImage = 'url("mafiajpg/stripclub.jpg")';
	document.getElementById('title').innerText = "Je bent gearriveerd bij de stripclub.";
	document.getElementById('description').style.display = "none"
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Naar binnen gaan";
	document.getElementById('button2').onclick = indeclub;
	document.getElementById('button3').style.display = "none";
		console.log("level 14");
}
function indeclub(){
	document.body.style.backgroundImage = 'url("mafiajpg/indeclubb.jpg")';
	document.getElementById('description').style.display = "block"
	document.getElementById('title').innerText = "Je bent in de club.";
	document.getElementById('description').innerText = "maar je ziet hector niet, Je vraagt aan de vrouw bij de bar waar hector is maar ze zwijgt, wil je achterin kijken?";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Ja";
	document.getElementById('button1').onclick = achterinkijken1;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "Nee";
	document.getElementById('button3').onclick = niksdoenfail;
		console.log("level 15");
}
function niksdoenfail(){
	document.body.style.backgroundImage = 'url("mafiajpg/niksdoenisdom.jpg")';
	document.getElementById('title').innerText = "als je Niks doet kan je ook niks terug verwachten.";
	document.getElementById('description').innerText = "Je bent gevonden en gedood door hector."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "opnieuw beginnen";
	document.getElementById('button2').onclick = welkom;
	document.getElementById('button3').style.display = "none";
		console.log("level 16");
}
function achterinkijken1(){
	document.body.style.backgroundImage = 'url("mafiajpg/achter1.jpg")';
	document.getElementById('title').innerText = "Ga je verder?"
	document.getElementById('description').style.display = "none"
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Ja";
	document.getElementById('button1').onclick = achterinkijken2;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "Nee";
	document.getElementById('button3').onclick = niksdoenfail;
		console.log("level 17");
}
function achterinkijken2(){
	document.body.style.backgroundImage = 'url("mafiajpg/hectorbureau.jpg")';
	document.getElementById('title').innerText = "Dit is hector zijn bureau.";
	document.getElementById('description').style.display = "none";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "dichterbij komen.";
	document.getElementById('button2').onclick = achterinkijken3;
	document.getElementById('button3').style.display = "none";
		console.log("level 18");
}
function achterinkijken3(){
	document.body.style.backgroundImage = 'url("mafiajpg/hectorbureau2.jpg")';
	document.getElementById('description').style.display = "none";
	document.getElementById('title').innerText = "Pak De map op.";
	if(itemsMafia["Mafiamap"] == false){
		Mafiamap = document.createElement("img");
		Mafiamap.setAttribute("onclick", "getMap()");
		Mafiamap.src = "mafiajpg/mafiamap.png";
		Mafiamap.style.width = "50px";
		Mafiamap.setAttribute("class", "mafiamap");
		document.getElementById("game-container").appendChild(Mafiamap);
	} else {
		Mafiamap.style.display = 'none';
		document.getElementById('title').innerText = "je ziet dat een locatie gemarkeerd is.";
		document.getElementById('description').style.display = "block";
		document.getElementById('description').innerText = "En je weet dat de locatie het huis van madrazo is, wat ga je doen?";
		document.getElementById('button1').style.display = "inline-block";
		document.getElementById('button1').innerText = "niks";
		document.getElementById('button1').onclick = niksdoenfail;
		document.getElementById('button2').style.display = "none";
		document.getElementById('button3').style.display = "inline-block";
		document.getElementById('button3').innerText = "Naar madrazo";
		document.getElementById('button3').onclick = omwmadrazo;
}
		console.log("level 19");
}

function getMap(){
	itemsMafia["Mafiamap"] = true;
	console.log(itemsMafia["Mafiamap"]);
	Mafiamap.style.display = 'none';

}
function omwmadrazo(){
	document.body.style.backgroundImage = 'url("mafiajpg/ossomadrazo.jpg")';
	document.getElementById('title').innerText = "je bent gearriveerd.";
	document.getElementById('description').style.display = "block";
	document.getElementById('description').innerText = "je gaat nu zoeken naar aanwijzingen die je gaan lijden naar je doel.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Verder";
	document.getElementById('button2').onclick = madrazohuis;
	document.getElementById('button3').style.display = "none";
		console.log("level 20");
}
function madrazohuis(){
	document.body.style.backgroundImage = 'url("mafiajpg/headshot.jpg")';
	document.getElementById('title').innerText = "Wat ga je doen!?.";
	document.getElementById('description').innerText = "Ga je hem schieten of niet?";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Ja";
	document.getElementById('button1').onclick = mandood;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "Nee";
	document.getElementById('button3').onclick = niksdoenfailheadshot;
		console.log("level 21");
}
function niksdoenfailheadshot(){
	document.body.style.backgroundImage = 'url("mafiajpg/niksdoenisdom.jpg")';
	document.getElementById('title').innerText = "je wilde niet schieten.";
	document.getElementById('description').innerText = "Dus je bent zelf beschoten door hem. Er kan maar 1 winnaar zijn."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "opnieuw beginnen";
	document.getElementById('button2').onclick = welkom;
	document.getElementById('button3').style.display = "none";
		console.log("level 22");
}
function mandood(){
	document.body.style.backgroundImage = 'url("mafiajpg/mandood.jpg")';
	document.getElementById('title').innerText = "Je hebt de beveiliger gedood.";
	document.getElementById('description').innerText = "Nu is het tijd om aanwijzingen te zoeken, waar wil je kijken?";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button1').innerText = "in de bosjes";
	document.getElementById('button2').innerText = "Bij de limousine";
	document.getElementById('button3').innerText = "in de tuin";
	document.getElementById('button1').onclick = kijkbosjes;
	document.getElementById('button2').onclick = kijklimo;
	document.getElementById('button3').onclick = kijktuin;
		console.log("level 23");
}
function kijkbosjes(){
	document.body.style.backgroundImage = 'url("mafiajpg/bosjes.jpg")';
	document.getElementById('title').innerText = "niet hier"
	document.getElementById('description').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button1').innerText = "bij de limousine";
	document.getElementById('button3').innerText = "in de tuin";
	document.getElementById('button1').onclick = kijklimo;
	document.getElementById('button3').onclick = kijktuin;
	console.log("level 24");
}
function kijklimo(){
	document.body.style.backgroundImage = 'url("mafiajpg/limousine.jpg")';
	document.getElementById('title').innerText = "niet hier"
	document.getElementById('description').style.display = "none";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button1').innerText = "in de bosjes";
	document.getElementById('button3').innerText = "voorkant";
	document.getElementById('button1').onclick = kijkbosjes;
	document.getElementById('button3').onclick = mandood;
		console.log("level 25");
}
function kijktuin(){
	document.body.style.backgroundImage = 'url("mafiajpg/tuin.jpg")';
	document.getElementById('title').innerText = "Je hebt zijn agenda gevonden!";
	document.getElementById('description').style.display = "block";
	document.getElementById('description').innerText = "pak de agenda op.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Naar volgende stap";
	document.getElementById('button2').onclick = omwbank;
	document.getElementById('button3').style.display = "none";
	if(itemsMafia["MafiaAgenda"] == false){
		MafiaAgenda = document.createElement("img");
		MafiaAgenda.setAttribute("onclick", "getAgenda()");
		MafiaAgenda.src = "mafiajpg/MafiaAgenda.png";
		MafiaAgenda.style.width = "50px";
		MafiaAgenda.setAttribute("class", "MafiaAgenda");
		document.getElementById("game-container").appendChild(MafiaAgenda);
	} else {
		MafiaAgenda.style.display = 'none';
	}
	console.log("level 26");
}


function getAgenda(){
	itemsMafia["MafiaAgenda"] = true;
	console.log(itemsMafia["MafiaAgenda"]);
	console.log("agenda opgepakt");
	MafiaAgenda.style.display = 'none';
}

function omwbank(){
	if (itemsMafia["MafiaAgenda"] = false) {
		document.body.style.backgroundImage = 'url("mafiajpg/confused.gif")';
		document.getElementById('title').innerText = "wat doe je?";
		document.getElementById('description').innerText = "wat ben je van plan zonder zijn agenda?.";
		document.getElementById('button1').style.display = "none";
		document.getElementById('button2').style.display = "inline-block";
		document.getElementById('button2').innerText = "naar tuin";
		document.getElementById('button2').onclick = kijktuin;
		document.getElementById('button3').style.display = "none";
			console.log("agenda niet opgepakt");
	} else {
		document.body.style.backgroundImage = 'url("mafiajpg/bankbuiten.jpg")';
		document.getElementById('title').innerText = "dit is het gebouw waar hector zich bevindt!";
		document.getElementById('description').innerText = "ga je naar binnen?.";
		document.getElementById('button1').style.display = "inline-block";
		document.getElementById('button1').innerText = "Ja";
		document.getElementById('button1').onclick = bankbinnenf;
		document.getElementById('button2').style.display = "none";
		document.getElementById('button3').style.display = "inline-block";
		document.getElementById('button3').innerText = "Nee";
		document.getElementById('button3').onclick = niksdoenfailbank;
	}
		console.log("level 27");
}
function niksdoenfailbank(){
	document.body.style.backgroundImage = 'url("mafiajpg/niksdoenisdom.jpg")';
	document.getElementById('title').innerText = "als je Niks doet kan je ook niks terug verwachten.";
	document.getElementById('description').innerText = "Je Moet de bank in!!."
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "opnieuw beginnen";
	document.getElementById('button2').onclick = omwbank;
	document.getElementById('button3').style.display = "none";
		console.log("wilde niet in bank ");
	}
function waarwiljeheenzonderagenda(){
	document.body.style.backgroundImage = 'url("mafiajpg/waarwilje.jpg")';
	document.getElementById('title').innerText = "HUH?????";
	document.getElementById('description').innerText = "Wat ben je van plan om te doen zonder zijn agenda?";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "terug naar tuin";
	document.getElementById('button2').onclick = kijktuin;
	document.getElementById('button3').style.display = "none";
		console.log("level 28");
}
function bankbinnenf(){
	document.body.style.backgroundImage = 'url("mafiajpg/bankbinnen.jpg")';
	document.getElementById('title').innerText = "je hoort justin bieber muziek boven.";
	document.getElementById('description').innerText = "Dus je gaat naar boven.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Naar Boven";
	document.getElementById('button2').onclick = welkeoffice;
	document.getElementById('button3').style.display = "none";
	console.log("level 29");
}
function welkeoffice(){
	document.body.style.backgroundImage = 'url("mafiajpg/welkeoffice.jpg")';
	document.getElementById('title').innerText = "Toen je de trap op ging stopte het muziek";
	document.getElementById('description').innerText = "Welke kantoor ruimte ga je in?";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "ruimte 1";
	document.getElementById('button1').onclick = juisteruimte;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "ruimte 2";
	document.getElementById('button3').onclick = verkeerderuimte;	
	console.log("level 29");
}
function verkeerderuimte(){
	document.body.style.backgroundImage = 'url("mafiajpg/verkeerdeoffice.jpg")';
	document.getElementById('title').innerText = "Je bent in de verkeerde ruimte.";
	document.getElementById('description').innerText = "totdat jij hem heb gevonden heef hij je gehoord en is hij ontsnapt.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "opnieuw beginnen";
	document.getElementById('button2').onclick = bankbinnenf;
	document.getElementById('button3').style.display = "none";
	console.log("level 30");
}

function juisteruimte(){
	document.body.style.backgroundImage = 'url("mafiajpg/hectoraim.jpg")';
	document.getElementById('title').innerText = "Je hebt hem gevonden!";
	document.getElementById('description').innerText = "ga je hem doden?";
	document.getElementById('button1').style.display = "inline-block";
	document.getElementById('button1').innerText = "Ja";
	document.getElementById('button1').onclick = hectordoden;
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "inline-block";
	document.getElementById('button3').innerText = "Nee";
	document.getElementById('button3').onclick = jebentgedood;
	console.log("level 31");
}

function hectordoden(){
	document.body.style.backgroundImage = 'url("mafiajpg/hectordood.gif")';
	document.getElementById('title').innerText = "Je hebt gewonnen.";
	document.getElementById('description').innerText = "Gefeliciteerd";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Naar einde";
	document.getElementById('button2').onclick = Win;
	document.getElementById('button3').style.display = "none";
	console.log("level 32");
}
function jebentgedood(){
	document.body.style.backgroundImage = 'url("mafiajpg/paggitodood.gif")';
	document.getElementById('title').innerText = "Je hebt gefaald.";
	document.getElementById('description').innerText = "Mislukkeling";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "inline-block";
	document.getElementById('button2').innerText = "Opnieuw keuze maken";
	document.getElementById('button2').onclick = juisteruimte;
	document.getElementById('button3').style.display = "none";
	console.log("level 33");
}
function Win(){
	document.body.style.backgroundImage = 'url("mafiajpg/source.gif")';
	document.getElementById('title').innerText = "Dit was het mafia verhaal";
	document.getElementById('description').innerText = "Je hebt hem gedood en er is geen concurrentie meer,Gefeliciteerd.";
	document.getElementById('button1').style.display = "none";
	document.getElementById('button2').style.display = "none";
	document.getElementById('button3').style.display = "none";
	console.log("level 34");
	console.log("dit is het einde ik wilde nog 2 verhalen erbij doen maar dat kon niet want ik heb te weinig tijd ivm met deadline en laptop kapot.");
}