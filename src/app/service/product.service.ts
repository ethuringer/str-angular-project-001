import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list: Product[] = [{
    id: 1,
    catId: 1,
    name: "Indian peacock",
    description: "Left heart cardiac cath",
    image: "http://dummyimage.com/206x164.jpg/5fa2dd/ffffff",
    price: 8670,
    stock: 52,
    featured: false,
    active: true
  }, {
    id: 2,
    catId: 2,
    name: "Legaan, water",
    description: "Digestive tract xray NEC",
    image: "http://dummyimage.com/102x231.png/ff4444/ffffff",
    price: 8085,
    stock: 48,
    featured: false,
    active: true
  }, {
    id: 3,
    catId: 2,
    name: "Long-tailed jaeger",
    description: "Carporadial fusion",
    image: "http://dummyimage.com/105x171.png/5fa2dd/ffffff",
    price: 5214,
    stock: 74,
    featured: false,
    active: true
  }, {
    id: 4,
    catId: 2,
    name: "Crane, black-crowned",
    description: "Endo insrt bronc def/sub",
    image: "http://dummyimage.com/240x238.bmp/ff4444/ffffff",
    price: 7414,
    stock: 94,
    featured: true,
    active: false
  }, {
    id: 5,
    catId: 1,
    name: "Greater blue-eared starling",
    description: "Closure cholecystostomy",
    image: "http://dummyimage.com/149x196.bmp/ff4444/ffffff",
    price: 3050,
    stock: 7,
    featured: true,
    active: false
  }, {
    id: 6,
    catId: 2,
    name: "Eurasian badger",
    description: "Nebulizer therapy",
    image: "http://dummyimage.com/246x220.jpg/5fa2dd/ffffff",
    price: 8977,
    stock: 57,
    featured: true,
    active: false
  }, {
    id: 7,
    catId: 1,
    name: "Eagle, african fish",
    description: "Bone graft-metatar/tar",
    image: "http://dummyimage.com/181x178.bmp/dddddd/000000",
    price: 2159,
    stock: 110,
    featured: true,
    active: false
  }, {
    id: 8,
    catId: 1,
    name: "Arctic fox",
    description: "Urethral meatotomy",
    image: "http://dummyimage.com/139x231.bmp/5fa2dd/ffffff",
    price: 3660,
    stock: 145,
    featured: false,
    active: false
  }, {
    id: 9,
    catId: 2,
    name: "Grizzly bear",
    description: "Onychoplasty",
    image: "http://dummyimage.com/214x235.bmp/ff4444/ffffff",
    price: 2500,
    stock: 92,
    featured: true,
    active: true
  }, {
    id: 10,
    catId: 2,
    name: "Sheep, stone",
    description: "Oth remove rem ova/tube",
    image: "http://dummyimage.com/208x162.png/cc0000/ffffff",
    price: 1800,
    stock: 54,
    featured: true,
    active: true
  }, {
    id: 11,
    catId: 1,
    name: "Mongoose, yellow",
    description: "Hand sft tissu injec NEC",
    image: "http://dummyimage.com/183x214.bmp/dddddd/000000",
    price: 5385,
    stock: 93,
    featured: false,
    active: true
  }, {
    id: 12,
    catId: 1,
    name: "Sandhill crane",
    description: "Hysterectomy NEC/NOS",
    image: "http://dummyimage.com/240x228.bmp/cc0000/ffffff",
    price: 9450,
    stock: 27,
    featured: true,
    active: true
  }, {
    id: 13,
    catId: 1,
    name: "Southern hairy-nosed wombat",
    description: "Retinal tear laser coag",
    image: "http://dummyimage.com/158x247.png/dddddd/000000",
    price: 2283,
    stock: 82,
    featured: true,
    active: true
  }, {
    id: 14,
    catId: 2,
    name: "Emerald green tree boa",
    description: "Remov urin drainage NEC",
    image: "http://dummyimage.com/134x172.jpg/cc0000/ffffff",
    price: 5501,
    stock: 25,
    featured: false,
    active: false
  }, {
    id: 15,
    catId: 2,
    name: "Brown antechinus",
    description: "Vaginal operation NEC",
    image: "http://dummyimage.com/149x222.jpg/cc0000/ffffff",
    price: 6781,
    stock: 133,
    featured: true,
    active: false
  }, {
    id: 16,
    catId: 2,
    name: "Pheasant, ring-necked",
    description: "Gastric operation NEC",
    image: "http://dummyimage.com/171x239.bmp/dddddd/000000",
    price: 9374,
    stock: 77,
    featured: false,
    active: true
  }, {
    id: 17,
    catId: 1,
    name: "Flamingo, greater",
    description: "Resection of nose",
    image: "http://dummyimage.com/153x173.jpg/5fa2dd/ffffff",
    price: 5862,
    stock: 79,
    featured: false,
    active: false
  }, {
    id: 18,
    catId: 1,
    name: "Springhare",
    description: "Cell blk/pap-peritoneum",
    image: "http://dummyimage.com/180x175.bmp/dddddd/000000",
    price: 4770,
    stock: 45,
    featured: true,
    active: false
  }, {
    id: 19,
    catId: 1,
    name: "Galapagos dove",
    description: "Repair colovagin fistula",
    image: "http://dummyimage.com/223x222.jpg/dddddd/000000",
    price: 9413,
    stock: 49,
    featured: true,
    active: true
  }, {
    id: 20,
    catId: 2,
    name: "Brown hyena",
    description: "Remov mediastinal drain",
    image: "http://dummyimage.com/102x236.png/cc0000/ffffff",
    price: 7351,
    stock: 85,
    featured: false,
    active: true
  }, {
    id: 21,
    catId: 2,
    name: "Capybara",
    description: "Lacrim sac/passage excis",
    image: "http://dummyimage.com/138x164.jpg/5fa2dd/ffffff",
    price: 8157,
    stock: 46,
    featured: false,
    active: false
  }, {
    id: 22,
    catId: 1,
    name: "Urial",
    description: "Partial mandibulectomy",
    image: "http://dummyimage.com/147x145.png/5fa2dd/ffffff",
    price: 9918,
    stock: 74,
    featured: false,
    active: false
  }, {
    id: 23,
    catId: 1,
    name: "Painted stork",
    description: "Incis obstr bile duc NEC",
    image: "http://dummyimage.com/142x241.jpg/ff4444/ffffff",
    price: 3984,
    stock: 108,
    featured: true,
    active: false
  }, {
    id: 24,
    catId: 1,
    name: "Red-billed buffalo weaver",
    description: "Other repair of joint",
    image: "http://dummyimage.com/161x241.bmp/dddddd/000000",
    price: 2277,
    stock: 4,
    featured: false,
    active: true
  }, {
    id: 25,
    catId: 2,
    name: "Otter, brazilian",
    description: "Other tracheal repair",
    image: "http://dummyimage.com/195x126.jpg/5fa2dd/ffffff",
    price: 1914,
    stock: 30,
    featured: false,
    active: true
  }, {
    id: 26,
    catId: 1,
    name: "Ornate rock dragon",
    description: "Sm bowel exteriorization",
    image: "http://dummyimage.com/235x169.bmp/dddddd/000000",
    price: 4371,
    stock: 141,
    featured: false,
    active: true
  }, {
    id: 27,
    catId: 1,
    name: "Starling, cape",
    description: "Salpingostomy",
    image: "http://dummyimage.com/134x224.bmp/ff4444/ffffff",
    price: 4422,
    stock: 112,
    featured: true,
    active: true
  }, {
    id: 28,
    catId: 1,
    name: "Bleu, red-cheeked cordon",
    description: "Whole blood transfus NEC",
    image: "http://dummyimage.com/221x137.png/ff4444/ffffff",
    price: 7639,
    stock: 66,
    featured: false,
    active: false
  }, {
    id: 29,
    catId: 2,
    name: "Ibis, sacred",
    description: "Cyclodialysis",
    image: "http://dummyimage.com/146x177.jpg/ff4444/ffffff",
    price: 8446,
    stock: 133,
    featured: true,
    active: true
  }, {
    id: 30,
    catId: 1,
    name: "Alpaca",
    description: "Insert palatal implant",
    image: "http://dummyimage.com/132x181.bmp/dddddd/000000",
    price: 6635,
    stock: 50,
    featured: false,
    active: true
  }, {
    id: 31,
    catId: 2,
    name: "Puffin, horned",
    description: "Removal trunk FB NEC",
    image: "http://dummyimage.com/177x117.bmp/dddddd/000000",
    price: 7560,
    stock: 108,
    featured: false,
    active: true
  }, {
    id: 32,
    catId: 2,
    name: "Pronghorn",
    description: "Removal oth vag pessary",
    image: "http://dummyimage.com/166x141.png/cc0000/ffffff",
    price: 4454,
    stock: 47,
    featured: false,
    active: false
  }, {
    id: 33,
    catId: 2,
    name: "Common dolphin",
    description: "Manual & mechan traction",
    image: "http://dummyimage.com/203x230.png/cc0000/ffffff",
    price: 1229,
    stock: 134,
    featured: true,
    active: true
  }, {
    id: 34,
    catId: 1,
    name: "Nyala",
    description: "Op red-int fix metat/tar",
    image: "http://dummyimage.com/102x242.bmp/5fa2dd/ffffff",
    price: 4949,
    stock: 23,
    featured: true,
    active: true
  }, {
    id: 35,
    catId: 2,
    name: "Sally lightfoot crab",
    description: "Lid marg lac rx-part th",
    image: "http://dummyimage.com/166x130.jpg/ff4444/ffffff",
    price: 2694,
    stock: 109,
    featured: true,
    active: true
  }, {
    id: 36,
    catId: 2,
    name: "Lava gull",
    description: "Insert infusion pump",
    image: "http://dummyimage.com/108x146.png/5fa2dd/ffffff",
    price: 9024,
    stock: 75,
    featured: false,
    active: true
  }, {
    id: 37,
    catId: 1,
    name: "Springbok",
    description: "Ins tot disc prost cerv",
    image: "http://dummyimage.com/162x133.bmp/cc0000/ffffff",
    price: 9702,
    stock: 113,
    featured: false,
    active: true
  }, {
    id: 38,
    catId: 1,
    name: "Richardson's ground squirrel",
    description: "Root canal NOS",
    image: "http://dummyimage.com/130x198.png/cc0000/ffffff",
    price: 4688,
    stock: 18,
    featured: false,
    active: false
  }, {
    id: 39,
    catId: 1,
    name: "Long-tailed skua",
    description: "Abd varicos v liga-strip",
    image: "http://dummyimage.com/128x228.png/ff4444/ffffff",
    price: 7138,
    stock: 67,
    featured: true,
    active: true
  }, {
    id: 40,
    catId: 1,
    name: "Black curlew",
    description: "Other craniotomy",
    image: "http://dummyimage.com/250x121.png/5fa2dd/ffffff",
    price: 6430,
    stock: 94,
    featured: false,
    active: true
  }, {
    id: 41,
    catId: 2,
    name: "Olive baboon",
    description: "Skel xray-thigh/knee/leg",
    image: "http://dummyimage.com/107x135.png/cc0000/ffffff",
    price: 9601,
    stock: 28,
    featured: true,
    active: false
  }, {
    id: 42,
    catId: 1,
    name: "Asiatic wild ass",
    description: "Part gast w jej transpos",
    image: "http://dummyimage.com/147x161.png/dddddd/000000",
    price: 3627,
    stock: 59,
    featured: true,
    active: false
  }, {
    id: 43,
    catId: 2,
    name: "Burmese brown mountain tortoise",
    description: "Cataract frag/aspir NEC",
    image: "http://dummyimage.com/147x231.jpg/dddddd/000000",
    price: 3494,
    stock: 14,
    featured: true,
    active: true
  }, {
    id: 44,
    catId: 2,
    name: "Lourie, grey",
    description: "Pharyngotomy",
    image: "http://dummyimage.com/158x235.bmp/cc0000/ffffff",
    price: 1171,
    stock: 118,
    featured: true,
    active: true
  }, {
    id: 45,
    catId: 2,
    name: "Loris, slender",
    description: "Crown application",
    image: "http://dummyimage.com/203x222.jpg/dddddd/000000",
    price: 8762,
    stock: 13,
    featured: false,
    active: true
  }, {
    id: 46,
    catId: 1,
    name: "Japanese macaque",
    description: "Drug rehab/detox",
    image: "http://dummyimage.com/232x133.png/dddddd/000000",
    price: 5545,
    stock: 21,
    featured: false,
    active: true
  }, {
    id: 47,
    catId: 1,
    name: "Sugar glider",
    description: "Abd region dx proc NEC",
    image: "http://dummyimage.com/140x197.jpg/dddddd/000000",
    price: 1599,
    stock: 150,
    featured: true,
    active: true
  }, {
    id: 48,
    catId: 1,
    name: "Eurasian beaver",
    description: "Occlude leg vein NEC",
    image: "http://dummyimage.com/162x240.jpg/dddddd/000000",
    price: 3226,
    stock: 148,
    featured: true,
    active: false
  }, {
    id: 49,
    catId: 2,
    name: "Desert tortoise",
    description: "Bact smear-op wound",
    image: "http://dummyimage.com/145x148.png/5fa2dd/ffffff",
    price: 9456,
    stock: 135,
    featured: false,
    active: false
  }, {
    id: 50,
    catId: 1,
    name: "White-lipped peccary",
    description: "Lap creat esoph sphinct",
    image: "http://dummyimage.com/246x220.png/dddddd/000000",
    price: 2916,
    stock: 150,
    featured: false,
    active: false
  }]

  constructor() { }
}
