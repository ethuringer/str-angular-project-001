import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[] = [{
    id: 1,
    catId: 1,
    name: "Indiana Jones kalandjai 1-4.",
    description: "Ebben az impozáns gyűjteményben megtalálod a díjnyertes alkotópáros, Steven Spielberg és George Lucas látványos akciójelenetekkel és humorral teli, összesen 6 Oscar-szobrot nyert Indiana Jones-sorozatának mind a 4 részét, valamint a filmekhez kapcsolódó számos izgalmas extrát. ",
    image: "./assets/img/IndianaJones.jpg",
    price: 8670,
    stock: 52,
    featured: false,
    active: true
  }, {
    id: 2,
    catId: 2,
    name: "Tenet",
    description: "A legsikeresebb Batman-trilógia és az Eredet rendezője, Christopher Nolan ismét különlegesen egyedi, izgalmas és meghökkentő fordulatokban gazdag thrillert rendezett, amelyen egy angol kémnek kellene megmentenie a Földet a rá leselkedő és pusztulással fenyegető katasztrófától. Ám a szuperügynöknek nemcsak az idegen hatalmak embereivel, hanem a legnagyobb ellenséggel, az Idővel is meg kell küzdenie.",
    image: "./assets/img/tenet.jpg",
    price: 8085,
    stock: 48,
    featured: false,
    active: true
  }, {
    id: 3,
    catId: 2,
    name: "Bad Boys 1-3.",
    description: "A rosszfiúk, Mike Lowrey (Will Smith) és Marcus Burnett (Martin Lawrence) visszatértek, hogy újra a feje tetejére állítsák Miamit és elkapjanak néhány rosszfiút. Miután egy rejtélyes merénylő, aki az igazságszolgáltatás jó pár emberével végzett már, Mike életére tör, az örökifjú zsaru meggyőzi a már nagypapa Marcust, hogy tegye félre korai nyugdíjazásáról szőtt terveit és még egyszer utoljára lendüljenek együtt akcióba. „Smith és Lawrence is ütős alakítást nyújt” (Double Toasted) ebben a „nagyszabású, bombasztikus akciófilmben” (IGN Movies).",
    image: "./assets/img/badboys.jpg",
    price: 5214,
    stock: 74,
    featured: false,
    active: true
  }, {
    id: 4,
    catId: 2,
    name: "Sonic, a sündisznó",
    description: "Sonic, a sündisznó véletlenül hihetetlen erő birtokosa lesz, amit ő maga sem ért teljesen. Saját védelme érdekében a Földön rejtőzik el, és egyetlen szabályt kell betartania: nem szabad, hogy a világ tudomást szerezzen a létezéséről. Ám ez nem könnyű feladat egy 15 évesnek, főleg ha az a 15 éves Sonic képességeivel és habitusával van megáldva. Így aztán nem kell hozzá sok, hogy felfedezze őt Tom, a szarkasztikus, ám áldott jószívű kisvárosi zsaru. Ők ketten összeállnak, és hihetetlenül akciódús kalandokba keverednek, miközben átszelik a fél világot úgy, hogy közben üldözi őket a mániákus Dr. Robotnyik és robotszerkentyűi…",
    image: "./assets/img/sonic.jpg",
    price: 7414,
    stock: 94,
    featured: true,
    active: false
  }, {
    id: 5,
    catId: 1,
    name: "Star Trek",
    description: "Az ifjú legénység első útjára készül a valaha készült legfejlettebb csillaghajó, a U.S.S. Enterprise fedélzetén. Ezen az úton, mely csupa akció, humor, kozmikus veszély, az újonc kadétoknak meg kell állítaniuk egy gonosz lényt, akinek bosszúmissziója az emberiség létét fenyegeti. A galaxis sorsa két rivális kezében van. Egyikük, James Kirk, a bajkeverő, kalandkereső iowai farmerlegény. A másik, Spock, egy logikán alapuló társadalomban nevelkedett, amely elvet mindenféle érzelmet. Amint a heves ösztön összecsap a hideg ésszel, valószínűtlen, de erős szövetségük az egyetlen, amely átvezetheti legénységüket az elképzelhetetlen veszélyeken, hogy eljussanak oda, ahová ember még nem merészkedett!",
    image: "./assets/img/startrek.jpg",
    price: 3050,
    stock: 7,
    featured: true,
    active: false
  }, {
    id: 6,
    catId: 2,
    name: "Harry Potter: A teljes gyűjtemény",
    description: "A Harry Potter gyűjtemény mind a 8 filmet tartalmazza!",
    image: "./assets/img/harrypotter.jpg",
    price: 8977,
    stock: 57,
    featured: true,
    active: false
  }, {
    id: 7,
    catId: 1,
    name: "Eddie, a sas",
    description: "Taron Egerton és az Oscar®-díjra jelölt Hugh Jackman brillírozik ebben a kellemesen szórakoztató, megtörtént eseményeken alapuló filmben. Egerton alakítja Eddie Edwardsot, a Sast: ő a nem túl meggyőző, mégis vakmerő brit síugró, akinek akkor is töretlen marad az önbizalma, amikor egy egész nemzet fogad ellene. Karizmatikus, lázadó edzője (Jackman) támogatásával a szeretnivaló, abszolút esélytelen srác belopja magát a világ sportszerető nézőinek szívébe: az 1988-as téli olimpián nyújtott teljesítménye miatt igazi legendává válik.",
    image: "./assets/img/eddie.jpg",
    price: 2159,
    stock: 110,
    featured: true,
    active: false
  }, {
    id: 8,
    catId: 1,
    name: "Augusztus Oklahomában",
    description: "A költő Beverly Westonnak (Sam Shepard) alkoholproblémái vannak, felesége, Violet (Meryl Streep) pedig szájrákkal küzd, ráadásul egyre inkább kezd rákapni a drogokra. A férj úgy dönt, hogy felfogad egy 24 órás gondozót Violet mellé. Néhány héttel később fel is bérlik e célra Johannát (Misty Upham). Majd Beverly eltűnik, amely arra ösztönzi a családot, hogy összegyűljenek megkeresni, ám néhány nappal később kiderül, hogy a családfő öngyilkosságot követett el. Az egész család részt vesz a temetésen, köztük Violet és Beverly lányai, Barbara (Julia Roberts) és Karen (Juliette Lewis), valamint a házban lakó Ivy (Julianne Nicholson) is. A következő néhány napban azonban elharapóznak az indulatok. Ennek egyik oka, hogy Violet és Barbara sosem jöttek ki jól egymással. A másik, hogy Karen marihuánán élő vőlegénye megpróbálja molesztálni jövendőbeli unokahúgát (Abigail Breslin), Ivy pedig összekavar unokatestvérével, és azt tervezik, hogy elszöknek a diszfunkcionális család elől.",
    image: "./assets/img/oklahoma.jpg",
    price: 3660,
    stock: 145,
    featured: false,
    active: false
  }, {
    id: 9,
    catId: 2,
    name: "Egy kivételes barát",
    description: "Ebben a megtörtént eseményeken alapuló, a kedvesség erejéről szóló időtlen történetben „Tom Hanks és Matthew Rhys is tökéletes alakítást nyújt” (Deadline Hollywood Daily). A hatalmas népszerűségnek örvendő gyerekműsor vezetőjéről, Mister Rogersről (az alakításáért Oscar®-díjra jelölt* Tom Hanks) egy agyonhajszolt újságíró (az Emmy®-díjas** Matthew Rhys) készít portrét főnöke megbízásából. A két merőben eltérő habitusú férfi között kivételes barátság szövődik, beszélgetéseik nyomán az újságíró szép lassan megszabadul az egész életét átható cinizmustól, elengedi sérelmeit és nyitottabbá válik a megbocsátásra.",
    image: "./assets/img/kivetelesbarat.jpg",
    price: 2500,
    stock: 92,
    featured: true,
    active: true
  }, {
    id: 10,
    catId: 2,
    name: "Az átok háza",
    description: "A Japánból elszabadult átok Amerikában terjed tovább: aki a közelébe kerül a titokzatos, természetfeletti erőnek, azon gyilkos düh lesz úrrá, aminek végül maga is áldozatává válik. Az Átok-trilógia a 2000-es évek egyik legnagyobb horrorsikere volt. A sorozat a műfaj nagy szakértője, Sam Raimi bábáskodása mellett kelt új életre.",
    image: "./assets/img/atokhaza.jpg",
    price: 1800,
    stock: 54,
    featured: true,
    active: true
  }, {
    id: 11,
    catId: 1,
    name: "Amundsen ",
    description: "A 20. század első évtizedében versenyfutás indult a Föld legészakibb és legdélibb pontjainak felfedezéséért. Az ismeretlent szeretné meghódítani Roald Amundsen (Pål Sverre Hagen – Kon-Tiki, Lótolvajok) is, akit hihetetlen erővel hajt a kalandvágy. Az Oscar®- és Arany Glóbusz®-díjra jelölt* Espen Sandberg (A Karib-tenger kalózai: Salazar bosszúja) nagyszabású filmje nemcsak a kivételes kutató élettörténetét és korát mutatja be, de hihetetlen expedíciói mellett megismerhetjük a múlt század egyik legnagyobb felfedezőjének ellentmondásos személyiségét is.",
    image: "./assets/img/amundsen.jpg",
    price: 5385,
    stock: 93,
    featured: false,
    active: true
  }, {
    id: 12,
    catId: 1,
    name: "Judy",
    description: "30 évvel azután, hogy az Óz, a csodák csodája főszerepe sztárt csinált belőle, az anyagi gondokkal és drogproblémákkal küzdő Judy Garland (Renée Zellweger magával ragadó alakításáért többek között az Oscar®-díjat* és az Arany Glóbusz®-szobrot** is elnyerte) londoni varietéturnéra indul annak reményében, hogy elegendő pénzt kereshet két kisebb gyermekének eltartására. A koncertsorozat alatt a színészénekesnő visszaemlékszik karrierjének fő állomásaira és tragikusan végződő házasságaira, miközben szenvedélyes viszonyba bonyolódik egy fiatal zenésszel (Finn Wittrock). A legendás amerikai sztár életének utolsó hónapjait feldolgozó Judy „megindító film, amiben Zellweger karrierje legjobb alakítását nyújtja”",
    image: "./assets/img/judy.jpg",
    price: 9450,
    stock: 27,
    featured: true,
    active: true
  }, {
    id: 13,
    catId: 1,
    name: "Roald Dahl: Boszorkányok",
    description: "Roald Dahl (Charlie és a csokigyár, Matilda) óriási népszerűségnek örvendő művét a legendás Robert Zemeckis (Vissza a jövőbe, Forrest Gump) álmodta újra. A Boszorkányok vicces és szívmelengető történet egy kisfiúról és nagymamájáról, akik összeakadnak egy csapat elbűvölőnek tűnő, ám valójában velejéig gonosz boszorkánnyal, akik azért gyűltek össze szerte a világból, hogy véghez vigyék aljas tervüket.",
    image: "./assets/img/boszorkanyok.jpg",
    price: 2283,
    stock: 82,
    featured: true,
    active: true
  }, {
    id: 14,
    catId: 2,
    name: "Toy Story 4.",
    description: "A Pixar Animation Studios büszkén mutatja be Woody, Buzz és a többiek legújabb életre szóló kalandját. Mikor a banda elutazik Bonnie-val és az általa összeeszkábált Villivel, az evőeszközből lett játék mókás ügyetlenkedései következtében Woody egy vad mentőakció kellős közepén találja magát, és közben különc új figurákkal és egy rég elveszettnek hitt jó baráttal is találkozik. A Toy Story 4. lenyűgöző látványvilágú, szívvel-lélekkel teli mestermű, ami csordultig van humorral, így „teljesen le fog venni a lábadról”",
    image: "./assets/img/toystory4.jpg",
    price: 5501,
    stock: 25,
    featured: false,
    active: false
  }, {
    id: 15,
    catId: 2,
    name: "Mission Impossible 1-6.",
    description: "A nagysikerű akciósorozat összes filmje egy dobozban.",
    image: "./assets/img/mi.jpg",
    price: 6781,
    stock: 133,
    featured: true,
    active: false
  }, {
    id: 16,
    catId: 2,
    name: "Iron Man - A Vasember 1.",
    description: "Tony Stark (Robert Downey, Jr.), a zseniális feltaláló és különc playboy milliárdos éppen legújabb szuperfegyverét mutatja be, amikor a csoportot támadás éri, és Tony mellkasába vasszilánk fúródik, mely lassan halad a szíve felé. Ráadásul foglyul ejtik, és azt követelik tőle, hogy építsen meg egy minden eddiginél pusztítóbb fegyvert. Tony meg is építi, azonban egy olyan páncélöltözet formájában, amely segítségére lehet a szökésben, és távol tartja a vasszilánkot a szívétől. Így születik meg a legendás Vasember.",
    image: "./assets/img/ironman.jpg",
    price: 9374,
    stock: 77,
    featured: false,
    active: true
  }, {
    id: 17,
    catId: 1,
    name: "A könyvtolvaj",
    description: "Liesel különös fantáziájú, bátor lány – és szüksége is van kivételes képességeire. A II. világháború idején német nevelőszülőkhöz kerül (Geoffrey Rush, Emily Watson). Tőlük tanul meg olvasni, az ő segítségükkel nyílik ki számára egy egészen új világ. Éppen akkor, amikor a valódi világ egyre félelmetesebbé és veszélyesebbé válik számára. A család egy zsidó kamasz fiút is rejteget: a kislány és Max együtt fedezik fel, milyen ereje van a szavaknak, és milyen fontos segítséget nyújthatnak a kitalált történetek. Segíthetnek olyankor is, amikor már semmi más nem segít.",
    image: "./assets/img/konyvtolvaj.jpg",
    price: 5862,
    stock: 79,
    featured: false,
    active: false
  }, {
    id: 18,
    catId: 1,
    name: "Agymanók",
    description: "A tinédzserkor gyakran döcögős és akadályokkal teli. Nincs ez másként a fiatal lány, Riley esetében sem, akinek csendes, kertvárosi élete a feje tetejére áll, amikor édesapja a nyüzsgő San Franciscóban kap munkát. Mint mindannyiunkat, Riley-t is az érzelmei vezérlik - ők Derű, Bánat, Harag, Majré, Undor. Az érzelmek a Riley agyában található Központban laknak, mindennapi munkájuk során pedig azon dolgoznak, hogy a lányt átvezessék a mindennapok kihívásain. Ahogy Riley az érzelmeivel küzdve próbálja megszokni San Franciscót, a Központban kitör a káosz. Bár Derű, Riley elsőszámú és legfontosasbb érzelme megpróbálja a dolgok pozitív oldalát láttatni, összetűzésbe kerül a többi érzelemmel, akik másként vélekednek arról, hogyan kell viselkedni egy új városban, egy új otthonban és egy új iskolában.",
    image: "./assets/img/agymanok.jpg",
    price: 4770,
    stock: 45,
    featured: true,
    active: false
  }, {
    id: 19,
    catId: 1,
    name: "Akihez beszél a föld",
    description: "Bő egy évig tartott a Dardanellák ostroma Gallipolinál 1915-ben. Bár az Antant elterelő hadműveletnek szánta a törökök megtámadását, az odavezényelt ausztrál és új-zélandi hadtestek teljesen felmorzsolódtak a központi hatalmak ellenállásán. Amikor Connor (Russell Crowe) értesül róla, hogy mindhárom fia eltűnt a csatában, elindul Ausztráliából Törökországba, hogy felkutassa őket.",
    image: "./assets/img/akihezbeszelafold.jpg",
    price: 9413,
    stock: 49,
    featured: true,
    active: true
  }, {
    id: 20,
    catId: 2,
    name: "Aladdin",
    description: "Éld át te is a Disney animációs klasszikusából készült élőszereplős változat varázslatos élményét, amely új köntösbe bújtatja a mindenki által ismert és szeretett történetet. Ez a Guy Ritchie rendezésében készült lenyűgöző látványvilágú film „szórakoztató utazásra invitál minden régi és új rajongót, pattanjunk fel hát a repülőszőnyegre!”",
    image: "./assets/img/aladdin.jpg",
    price: 7351,
    stock: 85,
    featured: false,
    active: true
  }, {
    id: 21,
    catId: 2,
    name: "Öldöklő szerelem",
    description: "Tessa Connover (Katherine Heigl) a mai napig nem tudta feldolgozni, hogy véget ért a házassága Daviddel (Geoff Stults), azt pedig főleg nem, hogy az exférje azóta eljegyezte új barátnőjét, Julia Bankset (Rosario Dawson). Julia úgy érzi, David személyében végre megtalálta élete szerelmét, és leszámolhat saját zűrös múltjával. Tessa féltékenysége azonban olyannyira betegessé válik, hogy egy idő után már csak egyetlen cél lebeg a szemei előtt, hogy Julia életét pokollá tegye – és ezért semmitől sem riad vissza!",
    image: "./assets/img/oldokloszerelem.jpg",
    price: 8157,
    stock: 46,
    featured: false,
    active: false
  }, {
    id: 22,
    catId: 1,
    name: "Prometheus",
    description: "Egy tudósokból álló expedíció az ember földi életének eredetére utaló nyomokat talál. Ezeket követve indulnak kutatóútjukra, mely az univerzum legtávolabbi, legveszélyesebb vidékére vezet. Olyan tájra jutnak, és olyan ellenségekkel kell szembenézniük, amilyenről ember eddig nem is álmodott. Még a rémálmaikban sem. Egy szörnyű csata vár rájuk: ha alul maradnak, akkor az egész emberiség velük pusztul.",
    image: "./assets/img/prometheus.jpg",
    price: 9918,
    stock: 74,
    featured: false,
    active: false
  }, {
    id: 23,
    catId: 1,
    name: "A Tégla",
    description: "Billy Costigan (Leonardo DiCaprio), az újonc rendőr alvilági környezetben nőtt fel. Ő az ideális tégla, akinek be kell épülnie a Frank Costello (Jack Nickolson) vezette maffiába. Az a dolga, hogy Costello bizalmába férkőzve segítsen rendőr feletteseinek (Mark Wahlberg és Martin Sheen) lebuktatni a maffiózót. Mindeközben Colin Sullivanben (Matt Damon), a különleges nyomozóegység tisztjében mindenki megbízik. Senki sem gyanítja, hogy ő Costello beépített embere.",
    image: "./assets/img/tegla.jpg",
    price: 3984,
    stock: 108,
    featured: true,
    active: false
  }, {
    id: 24,
    catId: 1,
    name: "The Expendables - A feláldozhatók 3.",
    description: "A Feláldozhatók csapata visszatér Barney Ross-szal (Sylvester Stallone) az élen, hogy az eddigi legáldázabb ellenségükkel nézzenek szembe. Barney, a profi főnök már megszámlálhatatlan küldetésen van túl, rengeteg szövetségest szerzett, de mindeközben ellenségei számát is szépen gyarapította.",
    image: "./assets/img/expendables3.jpg",
    price: 2277,
    stock: 4,
    featured: false,
    active: true
  }, {
    id: 25,
    catId: 2,
    name: "Bloodshot",
    description: "A legendás képregény alapján készült filmben Vin Diesel egy olyan ütközetben elhunyt katonát játszik, akit egy titokzatos cég visszahoz az életbe. Ray Garrison a vérébe fecskendezett nanorobotoknak köszönhetően újra bevethetővé válik, méghozzá a legkeményebb akciókban, ugyanis a kísérletnek köszönhetően szuperképességekre tesz szert: emberfeletti ereje mellett azonnal képes regenerálódni. Ahhoz, hogy saját céljaikra tudják felhasználni a férfit, a cég manipulálja Ray emlékeit, aki így nem tudja, mi a valóság és mit ültettek mesterségesen a fejébe… de feltett szándéka kideríteni. A „szuperhős zsánerbe friss vért fecskendező” (Gulf News) Bloodshotban „az izgalomról az ütős akciójelenetek, a humorfaktorról pedig a Wilfredet játszó LaMorne Morris gondoskodik” (IGN Movies).",
    image: "./assets/img/bloodshot.jpg",
    price: 1914,
    stock: 30,
    featured: false,
    active: true
  }, {
    id: 26,
    catId: 1,
    name: "Talpig fegyverben",
    description: "Miles egy átlagos srác, aki teljesen átlagos életet él, utálja a munkáját és még fülig szerelemes az ex-barátnőjébe, Novába. Csak a televízióból értesül arról, mi folyik a városban, ahol is egy online banda, a SKIZM teljesen ismeretlen embereket kényszerít vérre menő gladiátorharcra. Egy napon aztán Miles a dolgok sűrűjében találja magát, amikor is a SKIZM felkeresi őt, mindkét tenyerébe pisztolyt szögel, és azzal a feladattal bízzák meg, hogy ölje meg a játék történetének legjobbját, Nixet.",
    image: "./assets/img/talpigfegyverben.jpg",
    price: 4371,
    stock: 141,
    featured: false,
    active: true
  }, {
    id: 27,
    catId: 1,
    name: "Dolittle",
    description: `Robert Downey Jr. remekel az egyik legkedveltebb irodalmi karakter, az állatokkal beszélni tudó doktor történetének legújabb, fenomenális filmváltozatában. A különc Dr. John Dolittle, Viktória királynő Angliájának híres orvosa és állatorvosa hét éve veszítette el a feleségét. Azóta remeteként él a Dolittle birtok magas falai mögött, társasága csupán egzotikus állatainak seregletéből áll. Ám amikor az ifjú királynő súlyos beteg lesz, Dolittle kénytelen-kelletlen útra kel egy titokzatos sziget felé, hogy megtalálja a gyógymódot. Útja során új erőre kap bátorsága és fürge észjárása; régi ellenfelekkel találkozik, és csodálatos lényeket fedez fel. Kalandjaiban segítőtársai is akadnak, hiszen önjelölt ifjú segédje mellett elkíséri őt egy lármás kis állatsereglet is, többek között egy gondterhelt gorilla, egy lelkes, de kelekótya kacsa, egy truccoló strucc, egy jókedvű jegesmedve, valamint egy bakafántos papagáj, aki Dolittle legközelebbi tanácsadója és bizalmasa.`,
    image: "./assets/img/drdoolittle.jpg",
    price: 4422,
    stock: 112,
    featured: true,
    active: true
  }, {
    id: 28,
    catId: 1,
    name: "Ragadozó madarak",
    description: "Harley Quinn (Margot Robbie) sosem volt jó kislány. Sem normális. De amióta Gotham legizgalmasabb nője szakított Jokerrel, megváltozott benne valami. Feladja addigi magányát, és három nem kevésbé életveszélyes barátnőjével, Fekete Kanárival, Vadásznővel és Renee Montoyával indul újabb kalandokra. És amikor egy gonosz maffiavezér elrabol egy fiatal lányt, úgy dönt, társnőivel együtt kipróbálja, milyen érzés, ha egyszer a jó oldalon harcol. Hát, furcsa. Lehet, hogy nem is bírja így sokáig.",
    image: "./assets/img/ragadozomadarak.jpg",
    price: 7639,
    stock: 66,
    featured: false,
    active: false
  }, {
    id: 29,
    catId: 2,
    name: "A keresztapa-trilógia (3 DVD)",
    description: "A világ egyik legjelentősebb filmalkotásának tartott Keresztapa trilógiát a rendező, Francis Ford Coppola személyes felügyelete mellett közel egy éves munkával képkockáról képkockára újították fel, így a most megjelenő új kiadás nézői a lehető legjobb minőségben élvezhetik ezt a fantasztikus alapművet!",
    image: "./assets/img/keresztapa.jpg",
    price: 8446,
    stock: 133,
    featured: true,
    active: true
  }, {
    id: 30,
    catId: 1,
    name: "Jumanji 1-2.",
    description: `A csomag tartalma: Jumanji - Vár a dzsungel Jumnaji - A következő szint`,
    image: "./assets/img/jumanji.jpg",
    price: 6635,
    stock: 50,
    featured: false,
    active: true
  }, {
    id: 31,
    catId: 2,
    name: "Gemini Man",
    description: "Will Smith kettős szerepben nyújt lehengerlő alakítást az Oscar®-díjas* Ang Lee (Tigris és sárkány, Pi élete) izgalmas, fordulatos és rendkívül látványos akcióthrillerjében. Amikor a visszavonult bérgyilkost, Henry Brogant (Smith) célpontba veszi egy fiatal, magasan képzett ügynök, egy fél világon átívelő macskaegér harc veszi kezdetét. Henry megpróbál túljárni üldözője eszén, de az mintha meg tudná jósolni minden lépését. Előbb-utóbb kénytelenek lesznek szembenézni egymással...",
    image: "./assets/img/geminiman.jpg",
    price: 7560,
    stock: 108,
    featured: false,
    active: true
  }, {
    id: 32,
    catId: 2,
    name: "Pókember: Idegenben",
    description: "A Bosszúállók: Végjáték eseményeit követően Peter Parker (Tom Holland) úgy érzi, neki is kijár a pihenés, és hogy egy kicsit az átlagos tinédzserek mindennapjait élje, ne a barátságos, hős Pókemberét.",
    image: "./assets/img/pokember.jpg",
    price: 4454,
    stock: 47,
    featured: false,
    active: false
  }, {
    id: 33,
    catId: 2,
    name: "X-Men: Sötét Főnix",
    description: "Egy űrbéli mentőakció során Jean Greyre (Turner) titokzatos kozmikus erő csap le, amitől bolygónkra visszatérve szuperképességei szinte korlátlanokká válnak. A lány képtelen ezt a mértékű erőt kontrollálni, és egyre inkább kicsúszik lába alól a talaj. Jean olyanoknak árt, akik fontosak számára, ez pedig lassan az X-Men összetartó erejét is kikezdi. A széthulló családnak újra egyesülnie kell, ha nem akarják, hogy saját társuk okozza az emberiség pusztulását.",
    image: "./assets/img/xmen.jpg",
    price: 1229,
    stock: 134,
    featured: true,
    active: true
  }, {
    id: 34,
    catId: 1,
    name: "Men in Black – Sötét zsaruk a Föld körül",
    description: "Ahogy azt a rajongók milliói pontosan tudják, a Sötét zsaruk, vagyis a MIB egy titkos kormányügynökség, ami a bolygónkra érkező földönkívüliekkel való kapcsolattartásért felel. Ebben a nagyszabású, az egész Földön átívelő kalandban az ügynökök egy új generációja, H (Chris Hemsworth) és M (Tessa Thompson) minden eddiginél nagyobb fenyegetéssel néz szembe: úgy tűnik, tégla van a szervezetben.",
    image: "./assets/img/mib.jpg",
    price: 4949,
    stock: 23,
    featured: true,
    active: true
  }, {
    id: 35,
    catId: 2,
    name: "Bosszúállók - Végjáték",
    description: "Thanos súlyos tette, amivel elpusztította az univerzum élőlényeinek felét és megtörte a Bosszúállókat, a megmaradt hősöket egy végső összecsapásra készteti a Marvel Studios huszonegy filmet megkoronázó, nagyszabású fináléjában, a Bosszúállók: Végjátékban.",
    image: "./assets/img/bosszuallok.jpg",
    price: 2694,
    stock: 109,
    featured: true,
    active: true
  }, {
    id: 36,
    catId: 2,
    name: "Shazam!",
    description: "Shazam! Billy Batson (Asher Angel) egy 14 éves, talpraesett kölyök, aki bármikor képes átváltozni Shazam!-má (Zachary Levi), a felnőtt szuperhőssé – és ehhez csak ki kell mondania a nevét. Újdonsült erejét ki is próbálhatja a gyakorlatban, mikor szembeszáll vele a gonosz Dr. Thaddeus Sivana (Mark Strong), aki el akarja venni tőle a képességeit.",
    image: "./assets/img/shazam.jpg",
    price: 9024,
    stock: 75,
    featured: false,
    active: true
  }, {
    id: 37,
    catId: 1,
    name: "Marvel Kapitány",
    description: "A Marvel Studios az 1990-es években játszódó filmje, a Marvel Kapitány egy teljesen új kaland a Marvel mozis univerzumának eddig nem ismert periódusából, amely Carol Danverst követi nyomon. Mikor egy két idegen faj közötti galaktikus háború eléri a Földet, Danvers néhány szövetségessel együtt az események forgatagában találja magát, s hamarosan a világegyetem egyik legerősebb hősévé válik.",
    image: "./assets/img/marvel.jpg",
    price: 9702,
    stock: 113,
    featured: false,
    active: true
  }, {
    id: 38,
    catId: 1,
    name: "Ragadozó városok",
    description: "A legendás Peter Jackson prezentálásában érkezik ez a lenyűgöző új kaland, melyhez foghatót még soha nem láttunk. Több száz évvel a civilizáció hanyatlása után egy új, könyörtelen világ emelkedett ki a romokból. Ebben a különleges világban egy Hester Shaw nevű titokzatos fiatal nő és szedett-vedett csapata próbálja megállítani Londont – ezt a gigantikus kerekeken guruló ragadozó várost –, mielőtt az mindent elnyel, ami az útjába kerül.",
    image: "./assets/img/ragadozovarosok.jpg",
    price: 4688,
    stock: 18,
    featured: false,
    active: false
  }, {
    id: 39,
    catId: 1,
    name: "ŰrDongó",
    description: "1987-ben Űrdongó menekülni kényszerül a Cybertronról, és egy kaliforniai tengerparti kisváros roncstelepén rejtőzik el. Charlie (Hailee Steinfeld) éppen 18 éves lesz, és keresi a helyét a világban. Ő talál rá az ütött-kopott, lerobbant Űrdongóra. Amikor Charlie életre kelti, hamar ráébred, hogy ez az autó nem csak egy közönséges Volkswagen Bogár... ",
    image: "./assets/img/urdongo.jpg",
    price: 7138,
    stock: 67,
    featured: true,
    active: true
  }, {
    id: 40,
    catId: 1,
    name: "Aquaman",
    description: "Az AQUAMAN bemutatja a félig ember, félig atlantiszi ARTHUR CURRY eredettörténetét, hogy aztán elvigye őt élete kalandjára. A veszélyekkel és csodákkal teli utazás során Curry bebizonyíthatja, hogy érdemes-e a címre, ami születésétől fogva az ő joga. Hogy lehet-e ő Atlantisz királya.",
    image: "./assets/img/aquaman.jpg",
    price: 6430,
    stock: 94,
    featured: false,
    active: true
  }, {
    id: 41,
    catId: 2,
    name: "Johnny English újra lecsap",
    description: "2018-ban az ikonikus komikus, Rowan Atkinson visszatér a véletlenül szupermenő titkos ügynök, Johnny English szerepében.",
    image: "./assets/img/johnnyenglish.jpg",
    price: 9601,
    stock: 28,
    featured: true,
    active: false
  }, {
    id: 42,
    catId: 1,
    name: "Taxi 5.",
    description: "A párizsi szuperzsarut, Sylvain Marot-t, akarata ellenére a marseille-i rendőrségre helyezik át azzal a megbízással, hogy megállítson egy olasz bandát, akik felturbózott Ferrarikkal borzolják Gibert ex-felügyelő idegeit és tartják rettegésben a várost. Segítségül kapja Marseille legrosszabb sofőrjét, Daniel unokaöccsét, aki történetesen a legendás fehér TAXI örököse is.",
    image: "./assets/img/taxi5.jpg",
    price: 3627,
    stock: 59,
    featured: true,
    active: false
  }, {
    id: 43,
    catId: 2,
    name: "Escobar",
    description: "1983-ban Virginia Vallejo, a szépségéről is híres médiaszereplő, akinek kegyeiért milliomosok versengenek, megismerkedik Pablo Escobarral. Négy évig tartó románcuk története a legendás drogbáró sötét világába enged bepillantást, amelyet kábítószer, korrupció, kegyetlen hatalmi harcok és páratlan gazdagság ural.",
    image: "./assets/img/escobar.jpg",
    price: 3494,
    stock: 14,
    featured: true,
    active: true
  }, {
    id: 44,
    catId: 2,
    name: "Kutyaparádé ",
    description: "Mit tehet egy kemény zsaru, ha a társa hozzá képest nyafogó puhány? Elviseli, vagy néha belemar. Legalábbis Max és Frank esetében ez a helyzet, előbbi ugyanis egy nyomozómunkára termett, jó szimatú rottweiler, utóbbi pedig gyáva és folyton izguló kétlábú társa (Will Arnett).",
    image: "./assets/img/kutyaparade.jpg",
    price: 1171,
    stock: 118,
    featured: true,
    active: true
  }, {
    id: 45,
    catId: 2,
    name: "Deadpool 2.",
    description: "A Szipi-szupi $@%!#& verzióban 15 percnyi eddig nem látott zúzás és taplóság, nagy adag szeretettel a filmbe belecuccolva.",
    image: "./assets/img/deadpool2.jpg",
    price: 8762,
    stock: 13,
    featured: false,
    active: true
  }, {
    id: 46,
    catId: 1,
    name: "Betörés ",
    description: "Shaun (Gabrielle Union) két gyerekét túszul ejtik egy olyan házban, aminek biztonsági rendszerét úgy tervezték, hogy oda képtelenség legyen betörni… egy anyának azonban senki és semmi – legyen az technika vagy ember – nem állhatja útját, ha a szerettei épségéről van szó.",
    image: "./assets/img/betores.jpg",
    price: 5545,
    stock: 21,
    featured: false,
    active: true
  }, {
    id: 47,
    catId: 1,
    name: "Tűzgyűrű: Lázadás",
    description: "John Boyega (Star Wars: Az ébredő Erő) alakítja a lázadó Jake Pentecostot, az egykor szépreményű Jaeger-pilótát, akinek legendás édesapja életét adta azért, hogy az emberiség legyőzhesse a Kaidzsuknak nevezett óriásszörnyeket. Jake azonban abbahagyta a kiképzést és az alvilágban kereste a boldogulását. Ám amikor újabb, még veszélyesebb támadás fenyegeti pusztulással a világot, kap egy utolsó esélyt, hogy méltó legyen apja örökségéhez.",
    image: "./assets/img/tuzgyuru.jpg",
    price: 1599,
    stock: 150,
    featured: true,
    active: true
  }, {
    id: 48,
    catId: 1,
    name: "Rampage: Tombolás",
    description: "Az emlős-szakértő Davis (Dwayne Johnson) különleges és szoros kapcsolatot alakított ki George-dzsal, a hihetetlenül intelligens ezüsthátú gorillával, amit egészen kölyökkora gondoz. Mikor egy kapzsi nagyvállalat genetikai kísérletei balesethez vezetnek, George és néhány más állat gigantikus méretű, agresszív szörnyetegekké mutálódnak, és mindent elpusztítanak, ami az útjukba kerül.",
    image: "./assets/img/rampage.jpg",
    price: 3226,
    stock: 148,
    featured: true,
    active: false
  }, {
    id: 49,
    catId: 2,
    name: "Ready Player One",
    description: "A valóságban nincs semmi jó. Szerencsére nem is kell törődnünk vele. 2044-ben már mindenkit beszippant a világot átfogó virtuális játék, az OASIS, amelyben mindenki a maga választotta avatárjával vehet részt: és nem szembesül semmi rosszal, ami a játékon kívül várná.",
    image: "./assets/img/readyplayerone.jpg",
    price: 9456,
    stock: 135,
    featured: false,
    active: false
  }, {
    id: 50,
    catId: 1,
    name: "Tomb Raider",
    description: "A kötöttségektől menekülő Lara Croft (Alicia Vikander) a mai napig nem hajlandó elfogadni, hogy kalandor édesapja évekkel ezelőtt eltűnt. Mindenét arra teszi fel, hogy megoldja az apja halálát övező rejtélyeket, ebben pedig nem támaszkodhat másra, csupán éles eszére, eltökéltségére és kitartására. És még így is túl kell lépnie a saját határait ahhoz, hogy veszélyekkel teli útján azzá válhasson, amire mindig is rendeltetett. ",
    image: "./assets/img/tombraider.jpg",
    price: 2916,
    stock: 150,
    featured: false,
    active: false
  }]

  constructor() { }

  getFeatured(randomized?: boolean): Product[] {
    const featured = this.list.filter(item => item.featured);
    return randomized ? this.randomize(featured) : featured;
  }

  randomize(sourceArray: any[]): any[] {
    return sourceArray.sort(() => Math.random() - 0.5);
  }
}
