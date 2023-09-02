exports.BattlePokedex = {
    bulbasaur: {
    num: 1,
        name: "Bulbasaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 49,
            def: 49,
            spa: 65,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 0.7,
        weightkg: 6.9,
        color: "Green",
        evos: ["Ivysaur"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    ivysaur: {
        num: 2,
        name: "Ivysaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 62,
            def: 63,
            spa: 80,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 1,
        weightkg: 13,
        color: "Green",
        prevo: "Bulbasaur",
        evoLevel: 16,
        evos: ["Venusaur"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    venusaur: {
        num: 3,
        name: "Venusaur",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 82,
            def: 83,
            spa: 100,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Overgrow",
            H: "Chlorophyll"
        },
        heightm: 2,
        weightkg: 100,
        color: "Green",
        prevo: "Ivysaur",
        evoLevel: 32,
        eggGroups: ["Monster", "Grass"],
        otherFormes: ["Venusaur-Mega"],
        formeOrder: ["Venusaur", "Venusaur-Mega"],
        canGigantamax: "G-Max Vine Lash",
        tier: "1",
    },
    venusaurmega: {
        num: 3,
        name: "Venusaur-Mega",
        baseSpecies: "Venusaur",
        forme: "Mega",
        types: ["Grass", "Poison"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 100,
            def: 123,
            spa: 122,
            spd: 120,
            spe: 80
        },
        abilities: {
            "0": "Thick Fat"
        },
        heightm: 2.4,
        weightkg: 155.5,
        color: "Green",
        eggGroups: ["Monster", "Grass"],
        requiredItem: "Venusaurite",
        tier: "1",
    },
    charmander: {
        num: 4,
        name: "Charmander",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "Red",
        evos: ["Charmeleon"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    charmeleon: {
        num: 5,
        name: "Charmeleon",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 1.1,
        weightkg: 19,
        color: "Red",
        prevo: "Charmander",
        evoLevel: 16,
        evos: ["Charizard"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    charizard: {
        num: 6,
        name: "Charizard",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Blaze",
            H: "Solar Power"
        },
        heightm: 1.7,
        weightkg: 90.5,
        color: "Red",
        prevo: "Charmeleon",
        evoLevel: 36,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["Charizard-Mega-X", "Charizard-Mega-Y"],
        formeOrder: ["Charizard", "Charizard-Mega-X", "Charizard-Mega-Y"],
        canGigantamax: "G-Max Wildfire",
        tier: "1"
    },
    charizardmegax: {
        num: 6,
        name: "Charizard-Mega-X",
        baseSpecies: "Charizard",
        forme: "Mega-X",
        types: ["Fire", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 130,
            def: 111,
            spa: 130,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 1.7,
        weightkg: 110.5,
        color: "Black",
        eggGroups: ["Monster", "Dragon"],
        requiredItem: "Charizardite X",
        tier: "1",
    },
    charizardmegay: {
        num: 6,
        name: "Charizard-Mega-Y",
        baseSpecies: "Charizard",
        forme: "Mega-Y",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 104,
            def: 78,
            spa: 159,
            spd: 115,
            spe: 100
        },
        abilities: {
            "0": "Drought"
        },
        heightm: 1.7,
        weightkg: 100.5,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        requiredItem: "Charizardite Y",
        tier: "2",
    },
    squirtle: {
        num: 7,
        name: "Squirtle",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 44,
            atk: 48,
            def: 65,
            spa: 50,
            spd: 64,
            spe: 43
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Blue",
        evos: ["Wartortle"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    wartortle: {
        num: 8,
        name: "Wartortle",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 59,
            atk: 63,
            def: 80,
            spa: 65,
            spd: 80,
            spe: 58
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 1,
        weightkg: 22.5,
        color: "Blue",
        prevo: "Squirtle",
        evoLevel: 16,
        evos: ["Blastoise"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    blastoise: {
        num: 9,
        name: "Blastoise",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 79,
            atk: 83,
            def: 100,
            spa: 85,
            spd: 105,
            spe: 78
        },
        abilities: {
            "0": "Torrent",
            H: "Rain Dish"
        },
        heightm: 1.6,
        weightkg: 85.5,
        color: "Blue",
        prevo: "Wartortle",
        evoLevel: 36,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["Blastoise-Mega"],
        formeOrder: ["Blastoise", "Blastoise-Mega"],
        canGigantamax: "G-Max Cannonade",
        tier: "1",
    },
    blastoisemega: {
        num: 9,
        name: "Blastoise-Mega",
        baseSpecies: "Blastoise",
        forme: "Mega",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 79,
            atk: 103,
            def: 120,
            spa: 135,
            spd: 115,
            spe: 78
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 1.6,
        weightkg: 101.1,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        requiredItem: "Blastoisinite",
        tier: "1",
    },
    caterpie: {
        num: 10,
        name: "Caterpie",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 35,
            spa: 20,
            spd: 20,
            spe: 45
        },
        abilities: {
            "0": "Shield Dust",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 2.9,
        color: "Green",
        evos: ["Metapod"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    metapod: {
        num: 11,
        name: "Metapod",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 20,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 30
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.7,
        weightkg: 9.9,
        color: "Green",
        prevo: "Caterpie",
        evoLevel: 7,
        evos: ["Butterfree"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    butterfree: {
        num: 12,
        name: "Butterfree",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 50,
            spa: 90,
            spd: 80,
            spe: 70
        },
        abilities: {
            "0": "Compound Eyes",
            H: "Tinted Lens"
        },
        heightm: 1.1,
        weightkg: 32,
        color: "White",
        prevo: "Metapod",
        evoLevel: 10,
        eggGroups: ["Bug"],
        canGigantamax: "G-Max Befuddle",
        tier: "2",
    },
    weedle: {
        num: 13,
        name: "Weedle",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 20,
            spd: 20,
            spe: 50
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Run Away",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 3.2,
        color: "Brown",
        evos: ["Kakuna"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    kakuna: {
        num: 14,
        name: "Kakuna",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 45,
            atk: 25,
            def: 50,
            spa: 25,
            spd: 25,
            spe: 35
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.6,
        weightkg: 10,
        color: "Yellow",
        prevo: "Weedle",
        evoLevel: 7,
        evos: ["Beedrill"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    beedrill: {
        num: 15,
        name: "Beedrill",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 40,
            spa: 45,
            spd: 80,
            spe: 75
        },
        abilities: {
            "0": "Swarm",
            "1": "Sniper",
            H: "Sniper"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Yellow",
        prevo: "Kakuna",
        evoLevel: 10,
        eggGroups: ["Bug"],
        otherFormes: ["Beedrill-Mega"],
        formeOrder: ["Beedrill", "Beedrill-Mega"],
        tier: "1",
    },
    beedrillmega: {
        num: 15,
        name: "Beedrill-Mega",
        baseSpecies: "Beedrill",
        forme: "Mega",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 40,
            spa: 15,
            spd: 80,
            spe: 145
        },
        abilities: {
            "0": "Adaptability"
        },
        heightm: 1.4,
        weightkg: 40.5,
        color: "Yellow",
        eggGroups: ["Bug"],
        requiredItem: "Beedrillite",
        tier: "1",
    },
    pidgey: {
        num: 16,
        name: "Pidgey",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 35,
            spe: 56
        },
        abilities: {
            "0": "Keen Eye"
        },
        heightm: 0.3,
        weightkg: 1.8,
        color: "Brown",
        evos: ["Pidgeotto"],
        eggGroups: ["Flying"],
        tier: "1",
    },
    pidgeotto: {
        num: 17,
        name: "Pidgeotto",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 63,
            atk: 60,
            def: 55,
            spa: 50,
            spd: 50,
            spe: 71
        },
        abilities: {
            "0": "Keen Eye"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Brown",
        prevo: "Pidgey",
        evoLevel: 16,
        evos: ["Pidgeot"],
        eggGroups: ["Flying"],
        tier: "1",
    },
    pidgeot: {
        num: 18,
        name: "Pidgeot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 101
        },
        abilities: {
            "0": "Keen Eye"
        },
        heightm: 1.5,
        weightkg: 39.5,
        color: "Brown",
        prevo: "Pidgeotto",
        evoLevel: 32,
        eggGroups: ["Flying"],
        otherFormes: ["Pidgeot-Mega"],
        formeOrder: ["Pidgeot", "Pidgeot-Mega"],
        tier: "1",
    },
    pidgeotmega: {
        num: 18,
        name: "Pidgeot-Mega",
        baseSpecies: "Pidgeot",
        forme: "Mega",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 83,
            atk: 80,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 121
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 2.2,
        weightkg: 50.5,
        color: "Brown",
        eggGroups: ["Flying"],
        requiredItem: "Pidgeotite",
        tier: "1",
    },
    rattata: {
        num: 19,
        name: "Rattata",
        types: ["Normal"],
        baseStats: {
            hp: 30,
            atk: 56,
            def: 35,
            spa: 25,
            spd: 35,
            spe: 72
        },
        abilities: {
            "0": "Run Away",
            "1": "Guts",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Purple",
        evos: ["Raticate"],
        eggGroups: ["Field"],
        otherFormes: ["Rattata-Alola"],
        formeOrder: ["Rattata", "Rattata-Alola"],
        tier: "2",
    },
    rattataalola: {
        num: 19,
        name: "Rattata-Alola",
        baseSpecies: "Rattata",
        forme: "Alola",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 30,
            atk: 56,
            def: 35,
            spa: 25,
            spd: 35,
            spe: 72
        },
        abilities: {
            "0": "Gluttony",
            "1": "Hustle",
            H: "Thick Fat"
        },
        heightm: 0.3,
        weightkg: 3.8,
        color: "Black",
        evos: ["Raticate-Alola"],
        eggGroups: ["Field"],
        tier: "2",
    },
    raticate: {
        num: 20,
        name: "Raticate",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 81,
            def: 60,
            spa: 50,
            spd: 70,
            spe: 97
        },
        abilities: {
            "0": "Run Away",
            "1": "Guts",
            H: "Hustle"
        },
        heightm: 0.7,
        weightkg: 18.5,
        color: "Brown",
        prevo: "Rattata",
        evoLevel: 20,
        eggGroups: ["Field"],
        otherFormes: ["Raticate-Alola"],
        formeOrder: ["Raticate", "Raticate-Alola"],
        tier: "2",
    },
    raticatealola: {
        num: 20,
        name: "Raticate-Alola",
        baseSpecies: "Raticate",
        forme: "Alola",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 75,
            atk: 71,
            def: 70,
            spa: 40,
            spd: 80,
            spe: 77
        },
        abilities: {
            "0": "Gluttony",
            "1": "Hustle",
            H: "Thick Fat"
        },
        heightm: 0.7,
        weightkg: 25.5,
        color: "Black",
        prevo: "Rattata-Alola",
        evoLevel: 20,
        evoCondition: "at night",
        eggGroups: ["Field"],
        tier: "2",
    },
    spearow: {
        num: 21,
        name: "Spearow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 30,
            spa: 31,
            spd: 31,
            spe: 70
        },
        abilities: {
            "0": "Keen Eye",
            H: "Sniper"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Brown",
        evos: ["Fearow"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    fearow: {
        num: 22,
        name: "Fearow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 65,
            spa: 61,
            spd: 61,
            spe: 100
        },
        abilities: {
            "0": "Keen Eye",
            H: "Sniper"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Brown",
        prevo: "Spearow",
        evoLevel: 20,
        eggGroups: ["Flying"],
        tier: "2",
    },
    ekans: {
        num: 23,
        name: "Ekans",
        types: ["Poison"],
        baseStats: {
            hp: 35,
            atk: 60,
            def: 44,
            spa: 40,
            spd: 54,
            spe: 55
        },
        abilities: {
            "0": "Intimidate",
            H: "Shed Skin"
        },
        heightm: 2,
        weightkg: 6.9,
        color: "Purple",
        evos: ["Arbok"],
        eggGroups: ["Field", "Dragon"],
        tier: "1",
    },
    arbok: {
        num: 24,
        name: "Arbok",
        types: ["Poison"],
        baseStats: {
            hp: 60,
            atk: 95,
            def: 69,
            spa: 65,
            spd: 79,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            H: "Shed Skin"
        },
        heightm: 3.5,
        weightkg: 65,
        color: "Purple",
        prevo: "Ekans",
        evoLevel: 22,
        eggGroups: ["Field", "Dragon"],
        tier: "1",
    },
    pikachu: {
        num: 25,
        name: "Pikachu",
        types: ["Electric"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        prevo: "Pichu",
        evoLevel: 10,
        evos: ["Raichu", "Raichu-Alola"],
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World"],
        formeOrder: ["Pikachu", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay"],
        canGigantamax: "G-Max Volt Crash",
        tier: "1"
    },
    pikachucosplay: {
        num: 25,
        name: "Pikachu-Cosplay",
        baseSpecies: "Pikachu",
        forme: "Cosplay",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 6,
        tier: "2",
    },
    pikachurockstar: {
        num: 25,
        name: "Pikachu-Rock-Star",
        baseSpecies: "Pikachu",
        forme: "Rock-Star",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Pikachu-Cosplay",
        gen: 6,
        tier: "2",
    },
    pikachubelle: {
        num: 25,
        name: "Pikachu-Belle",
        baseSpecies: "Pikachu",
        forme: "Belle",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Pikachu-Cosplay",
        gen: 6,
        tier: "2",
    },
    pikachupopstar: {
        num: 25,
        name: "Pikachu-Pop-Star",
        baseSpecies: "Pikachu",
        forme: "Pop-Star",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Pikachu-Cosplay",
        gen: 6,
        tier: "2",
    },
    pikachuphd: {
        num: 25,
        name: "Pikachu-PhD",
        baseSpecies: "Pikachu",
        forme: "PhD",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Pikachu-Cosplay",
        gen: 6,
        tier: "2",
    },
    pikachulibre: {
        num: 25,
        name: "Pikachu-Libre",
        baseSpecies: "Pikachu",
        forme: "Libre",
        types: ["Electric"],
        gender: "F",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Pikachu-Cosplay",
        gen: 6,
        tier: "2",
    },
    pikachuoriginal: {
        num: 25,
        name: "Pikachu-Original",
        baseSpecies: "Pikachu",
        forme: "Original",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachuhoenn: {
        num: 25,
        name: "Pikachu-Hoenn",
        baseSpecies: "Pikachu",
        forme: "Hoenn",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachusinnoh: {
        num: 25,
        name: "Pikachu-Sinnoh",
        baseSpecies: "Pikachu",
        forme: "Sinnoh",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachuunova: {
        num: 25,
        name: "Pikachu-Unova",
        baseSpecies: "Pikachu",
        forme: "Unova",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachukalos: {
        num: 25,
        name: "Pikachu-Kalos",
        baseSpecies: "Pikachu",
        forme: "Kalos",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachualola: {
        num: 25,
        name: "Pikachu-Alola",
        baseSpecies: "Pikachu",
        forme: "Alola",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachupartner: {
        num: 25,
        name: "Pikachu-Partner",
        baseSpecies: "Pikachu",
        forme: "Partner",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 7,
        tier: "2"
    },
    pikachustarter: {
        num: 25,
        name: "Pikachu-Starter",
        baseSpecies: "Pikachu",
        forme: "Starter",
        types: ["Electric"],
        baseStats: {
            hp: 45,
            atk: 80,
            def: 50,
            spa: 75,
            spd: 60,
            spe: 120
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "2",
        isNonstandard: "LGPE"
    },
    pikachuworld: {
        num: 25,
        name: "Pikachu-World",
        baseSpecies: "Pikachu",
        forme: "World",
        types: ["Electric"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 8,
        tier: "2"
    },
    raichu: {
        num: 26,
        name: "Raichu",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 55,
            spa: 90,
            spd: 80,
            spe: 110
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.8,
        weightkg: 30,
        color: "Yellow",
        prevo: "Pikachu",
        evoType: "useItem",
        evoItem: "Thunder Stone",
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["Raichu-Alola"],
        formeOrder: ["Raichu", "Raichu-Alola"],
        tier: "1"
    },
    raichualola: {
        num: 26,
        name: "Raichu-Alola",
        baseSpecies: "Raichu",
        forme: "Alola",
        types: ["Electric", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 50,
            spa: 95,
            spd: 85,
            spe: 110
        },
        abilities: {
            "0": "Surge Surfer"
        },
        heightm: 0.7,
        weightkg: 21,
        color: "Brown",
        prevo: "Pikachu",
        evoType: "useItem",
        evoItem: "Sun Stone",
        evoRegion: "Alola",
        eggGroups: ["Field", "Fairy"],
        tier: ""
    },
    sandshrew: {
        num: 27,
        name: "Sandshrew",
        types: ["Ground"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 85,
            spa: 20,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Sand Veil",
            H: "Sand Rush"
        },
        heightm: 0.6,
        weightkg: 12,
        color: "Yellow",
        evos: ["Sandslash"],
        eggGroups: ["Field"],
        otherFormes: ["Sandshrew-Alola"],
        formeOrder: ["Sandshrew", "Sandshrew-Alola"],
        tier: "2",
    },
    sandshrewalola: {
        num: 27,
        name: "Sandshrew-Alola",
        baseSpecies: "Sandshrew",
        forme: "Alola",
        types: ["Ice", "Steel"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 90,
            spa: 10,
            spd: 35,
            spe: 40
        },
        abilities: {
            "0": "Slush Rush",
            H: "Snow Cloak"
        },
        heightm: 0.7,
        weightkg: 40,
        color: "White",
        evos: ["Sandslash-Alola"],
        eggGroups: ["Field"],
        tier: "1",
    },
    sandslash: {
        num: 28,
        name: "Sandslash",
        types: ["Ground"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 110,
            spa: 45,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Sand Veil",
            H: "Sand Rush"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Yellow",
        prevo: "Sandshrew",
        evoLevel: 22,
        eggGroups: ["Field"],
        otherFormes: ["Sandslash-Alola"],
        formeOrder: ["Sandslash", "Sandslash-Alola"],
        tier: "2",
    },
    sandslashalola: {
        num: 28,
        name: "Sandslash-Alola",
        baseSpecies: "Sandslash",
        forme: "Alola",
        types: ["Ice", "Steel"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 120,
            spa: 25,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Slush Rush",
            H: "Snow Cloak"
        },
        heightm: 1.2,
        weightkg: 55,
        color: "Blue",
        prevo: "Sandshrew-Alola",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Field"],
        tier: "1",
    },
    nidoranf: {
        num: 29,
        name: "Nidoran-F",
        types: ["Poison"],
        gender: "F",
        baseStats: {
            hp: 55,
            atk: 47,
            def: 52,
            spa: 40,
            spd: 40,
            spe: 41
        },
        abilities: {
            "0": "Poison Point",
            H: "Hustle"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Blue",
        evos: ["Nidorina"],
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    nidorina: {
        num: 30,
        name: "Nidorina",
        types: ["Poison"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 62,
            def: 67,
            spa: 55,
            spd: 55,
            spe: 56
        },
        abilities: {
            "0": "Poison Point",
            H: "Hustle"
        },
        heightm: 0.8,
        weightkg: 20,
        color: "Blue",
        prevo: "Nidoran-F",
        evoLevel: 16,
        evos: ["Nidoqueen"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    nidoqueen: {
        num: 31,
        name: "Nidoqueen",
        types: ["Poison", "Ground"],
        gender: "F",
        baseStats: {
            hp: 90,
            atk: 92,
            def: 87,
            spa: 75,
            spd: 85,
            spe: 76
        },
        abilities: {
            "0": "Poison Point",
            H: "Sheer Force"
        },
        heightm: 1.3,
        weightkg: 60,
        color: "Blue",
        prevo: "Nidorina",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    nidoranm: {
        num: 32,
        name: "Nidoran-M",
        types: ["Poison"],
        gender: "M",
        baseStats: {
            hp: 46,
            atk: 57,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 50
        },
        abilities: {
            "0": "Poison Point",
            H: "Hustle"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Purple",
        evos: ["Nidorino"],
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    nidorino: {
        num: 33,
        name: "Nidorino",
        types: ["Poison"],
        gender: "M",
        baseStats: {
            hp: 61,
            atk: 72,
            def: 57,
            spa: 55,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Poison Point",
            H: "Hustle"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Purple",
        prevo: "Nidoran-M",
        evoLevel: 16,
        evos: ["Nidoking"],
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    nidoking: {
        num: 34,
        name: "Nidoking",
        types: ["Poison", "Ground"],
        gender: "M",
        baseStats: {
            hp: 81,
            atk: 102,
            def: 77,
            spa: 85,
            spd: 75,
            spe: 85
        },
        abilities: {
            "0": "Poison Point",
            H: "Sheer Force"
        },
        heightm: 1.4,
        weightkg: 62,
        color: "Purple",
        prevo: "Nidorino",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    clefairy: {
        num: 35,
        name: "Clefairy",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 45,
            def: 48,
            spa: 60,
            spd: 65,
            spe: 35
        },
        abilities: {
            "0": "Friend Guard",
            "1": "Magic Guard",
            H: "Friend Guard"
        },
        heightm: 0.6,
        weightkg: 7.5,
        color: "Pink",
        prevo: "Cleffa",
        evoLevel: "10",
        evos: ["Clefable"],
        eggGroups: ["Fairy"],
        tier: "1",
    },
    clefable: {
        num: 36,
        name: "Clefable",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 95,
            atk: 70,
            def: 73,
            spa: 95,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Unaware",
            "1": "Magic Guard",
            H: "Unaware"
        },
        heightm: 1.3,
        weightkg: 40,
        color: "Pink",
        prevo: "Clefairy",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Fairy"],
        tier: "1",
    },
    vulpix: {
        num: 37,
        name: "Vulpix",
        types: ["Fire"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 38,
            atk: 41,
            def: 40,
            spa: 50,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Flash Fire",
            H: "Drought"
        },
        heightm: 0.6,
        weightkg: 9.9,
        color: "Brown",
        evos: ["Ninetales"],
        eggGroups: ["Field"],
        otherFormes: ["Vulpix-Alola"],
        formeOrder: ["Vulpix", "Vulpix-Alola"],
        tier: "2",
    },
    vulpixalola: {
        num: 37,
        name: "Vulpix-Alola",
        baseSpecies: "Vulpix",
        forme: "Alola",
        types: ["Ice"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 38,
            atk: 41,
            def: 40,
            spa: 50,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Snow Warning"
        },
        heightm: 0.6,
        weightkg: 9.9,
        color: "White",
        evos: ["Ninetales-Alola"],
        eggGroups: ["Field"],
        tier: "2",
    },
    ninetales: {
        num: 38,
        name: "Ninetales",
        types: ["Fire"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 73,
            atk: 76,
            def: 75,
            spa: 81,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Flash Fire",
            H: "Drought"
        },
        heightm: 1.1,
        weightkg: 19.9,
        color: "Yellow",
        prevo: "Vulpix",
        evoType: "useItem",
        evoItem: "Fire Stone",
        eggGroups: ["Field"],
        otherFormes: ["Ninetales-Alola"],
        formeOrder: ["Ninetales", "Ninetales-Alola"],
        tier: "2",
    },
    ninetalesalola: {
        num: 38,
        name: "Ninetales-Alola",
        baseSpecies: "Ninetales",
        forme: "Alola",
        types: ["Ice", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 73,
            atk: 67,
            def: 75,
            spa: 81,
            spd: 100,
            spe: 109
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Snow Warning"
        },
        heightm: 1.1,
        weightkg: 19.9,
        color: "Blue",
        prevo: "Vulpix-Alola",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    jigglypuff: {
        num: 39,
        name: "Jigglypuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 115,
            atk: 45,
            def: 20,
            spa: 45,
            spd: 25,
            spe: 20
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Friend Guard"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Pink",
        prevo: "Igglybuff",
        evoType: "levelFriendship",
        evos: ["Wigglytuff"],
        eggGroups: ["Fairy"],
        tier: "2"
    },
    wigglytuff: {
        num: 40,
        name: "Wigglytuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 140,
            atk: 70,
            def: 45,
            spa: 85,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Frisk"
        },
        heightm: 1,
        weightkg: 12,
        color: "Pink",
        prevo: "Jigglypuff",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Fairy"],
        tier: "2"
    },
    zubat: {
        num: 41,
        name: "Zubat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 30,
            spd: 40,
            spe: 55
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 7.5,
        color: "Purple",
        evos: ["Golbat"],
        eggGroups: ["Flying"],
        tier: "1",
    },
    golbat: {
        num: 42,
        name: "Golbat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 70,
            spa: 65,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 1.6,
        weightkg: 55,
        color: "Purple",
        prevo: "Zubat",
        evoLevel: 22,
        evos: ["Crobat"],
        eggGroups: ["Flying"],
        tier: "1",
    },
    oddish: {
        num: 43,
        name: "Oddish",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 55,
            spa: 75,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Run Away"
        },
        heightm: 0.5,
        weightkg: 5.4,
        color: "Blue",
        evos: ["Gloom"],
        eggGroups: ["Grass"],
        tier: "2",
    },
    gloom: {
        num: 44,
        name: "Gloom",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Stench"
        },
        heightm: 0.8,
        weightkg: 8.6,
        color: "Blue",
        prevo: "Oddish",
        evoLevel: 21,
        evos: ["Vileplume", "Bellossom"],
        eggGroups: ["Grass"],
        tier: "2",
    },
    vileplume: {
        num: 45,
        name: "Vileplume",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 85,
            spa: 110,
            spd: 90,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Effect Spore"
        },
        heightm: 1.2,
        weightkg: 18.6,
        color: "Red",
        prevo: "Gloom",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Grass"],
        tier: "2",
    },
    paras: {
        num: 46,
        name: "Paras",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 35,
            atk: 70,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 25
        },
        abilities: {
            "0": "Effect Spore",
            H: "Dry Skin"
        },
        heightm: 0.3,
        weightkg: 5.4,
        color: "Red",
        evos: ["Parasect"],
        eggGroups: ["Bug", "Grass"],
        tier: "1",
    },
    parasect: {
        num: 47,
        name: "Parasect",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 60,
            atk: 95,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Effect Spore",
            H: "Dry Skin"
        },
        heightm: 1,
        weightkg: 29.5,
        color: "Red",
        prevo: "Paras",
        evoLevel: 22,
        eggGroups: ["Bug", "Grass"],
        tier: "1",
    },
    venonat: {
        num: 48,
        name: "Venonat",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 50,
            spa: 40,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Tinted Lens",
            H: "Run Away"
        },
        heightm: 1,
        weightkg: 30,
        color: "Purple",
        evos: ["Venomoth"],
        eggGroups: ["Bug"],
        tier: "2"
    },
    venomoth: {
        num: 49,
        name: "Venomoth",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 70,
            atk: 65,
            def: 60,
            spa: 90,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Tinted Lens",
            H: "Wonder Skin"
        },
        heightm: 1.5,
        weightkg: 12.5,
        color: "Purple",
        prevo: "Venonat",
        evoLevel: 31,
        eggGroups: ["Bug"],
        tier: "2"
    },
    diglett: {
        num: 50,
        name: "Diglett",
        types: ["Ground"],
        baseStats: {
            hp: 10,
            atk: 55,
            def: 25,
            spa: 35,
            spd: 45,
            spe: 95
        },
        abilities: {
            "0": "Arena Trap",
            H: "Sand Force"
        },
        heightm: 0.2,
        weightkg: 0.8,
        color: "Brown",
        evos: ["Dugtrio"],
        eggGroups: ["Field"],
        otherFormes: ["Diglett-Alola"],
        formeOrder: ["Diglett", "Diglett-Alola"],
        tier: "2"
    },
    diglettalola: {
        num: 50,
        name: "Diglett-Alola",
        baseSpecies: "Diglett",
        forme: "Alola",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 10,
            atk: 55,
            def: 30,
            spa: 35,
            spd: 45,
            spe: 90
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Tangling Hair",
            H: "Sand Force"
        },
        heightm: 0.2,
        weightkg: 1,
        color: "Brown",
        evos: ["Dugtrio-Alola"],
        eggGroups: ["Field"],
        tier: "2"
    },
    dugtrio: {
        num: 51,
        name: "Dugtrio",
        types: ["Ground"],
        baseStats: {
            hp: 35,
            atk: 100,
            def: 50,
            spa: 50,
            spd: 70,
            spe: 120
        },
        abilities: {
            "0": "Arena Trap",
            H: "Sand Force"
        },
        heightm: 0.7,
        weightkg: 33.3,
        color: "Brown",
        prevo: "Diglett",
        evoLevel: 26,
        eggGroups: ["Field"],
        otherFormes: ["Dugtrio-Alola"],
        formeOrder: ["Dugtrio", "Dugtrio-Alola"],
        tier: "2"
    },
    dugtrioalola: {
        num: 51,
        name: "Dugtrio-Alola",
        baseSpecies: "Dugtrio",
        forme: "Alola",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 35,
            atk: 100,
            def: 60,
            spa: 50,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Sand Veil",
            "1": "Tangling Hair",
            H: "Sand Force"
        },
        heightm: 0.7,
        weightkg: 66.6,
        color: "Brown",
        prevo: "Diglett-Alola",
        evoLevel: 26,
        eggGroups: ["Field"],
        tier: "2"
    },
    meowth: {
        num: 52,
        name: "Meowth",
        types: ["Normal"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 40,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Pickup",
            "1": "Technician",
            H: "Unnerve"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        evos: ["Persian"],
        eggGroups: ["Field"],
        otherFormes: ["Meowth-Alola", "Meowth-Galar"],
        formeOrder: ["Meowth", "Meowth-Alola", "Meowth-Galar"],
        canGigantamax: "G-Max Gold Rush",
        tier: "2"
    },
    meowthalola: {
        num: 52,
        name: "Meowth-Alola",
        baseSpecies: "Meowth",
        forme: "Alola",
        types: ["Dark"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 35,
            spa: 50,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Pickup",
            "1": "Technician",
            H: "Rattled"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Blue",
        evos: ["Persian-Alola"],
        eggGroups: ["Field"],
        tier: "2"
    },
    meowthgalar: {
        num: 52,
        name: "Meowth-Galar",
        baseSpecies: "Meowth",
        forme: "Galar",
        types: ["Steel"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 55,
            spa: 40,
            spd: 40,
            spe: 40
        },
        abilities: {
            "0": "Run Away",
            "1": "Tough Claws",
            H: "Unnerve"
        },
        heightm: 0.4,
        weightkg: 7.5,
        color: "Brown",
        evos: ["Perrserker"],
        eggGroups: ["Field"],
        tier: "1"
    },
    persian: {
        num: 53,
        name: "Persian",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 70,
            def: 60,
            spa: 65,
            spd: 65,
            spe: 115
        },
        abilities: {
            "0": "Limber",
            "1": "Technician",
            H: "Unnerve"
        },
        heightm: 1,
        weightkg: 32,
        color: "Yellow",
        prevo: "Meowth",
        evoLevel: 28,
        eggGroups: ["Field"],
        otherFormes: ["Persian-Alola"],
        formeOrder: ["Persian", "Persian-Alola"],
        tier: "2"
    },
    persianalola: {
        num: 53,
        name: "Persian-Alola",
        baseSpecies: "Persian",
        forme: "Alola",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 60,
            def: 60,
            spa: 75,
            spd: 65,
            spe: 115
        },
        abilities: {
            "0": "Fur Coat",
            "1": "Technician",
            H: "Rattled"
        },
        heightm: 1.1,
        weightkg: 33,
        color: "Blue",
        prevo: "Meowth-Alola",
        evoType: "levelFriendship",
        eggGroups: ["Field"],
        tier: "2"
    },
    psyduck: {
        num: 54,
        name: "Psyduck",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 52,
            def: 48,
            spa: 65,
            spd: 50,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            H: "Cloud Nine"
        },
        heightm: 0.8,
        weightkg: 19.6,
        color: "Yellow",
        evos: ["Golduck"],
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    golduck: {
        num: 55,
        name: "Golduck",
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 82,
            def: 78,
            spa: 95,
            spd: 80,
            spe: 85
        },
        abilities: {
            "0": "Swift Swim",
            H: "Cloud Nine"
        },
        heightm: 1.7,
        weightkg: 76.6,
        color: "Blue",
        prevo: "Psyduck",
        evoLevel: 26,
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    mankey: {
        num: 56,
        name: "Mankey",
        types: ["Fighting"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 35,
            spa: 35,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Anger Point",
            H: "Defiant"
        },
        heightm: 0.5,
        weightkg: 28,
        color: "Brown",
        evos: ["Primeape"],
        eggGroups: ["Field"],
        tier: "2"
    },
    primeape: {
        num: 57,
        name: "Primeape",
        types: ["Fighting"],
        baseStats: {
            hp: 65,
            atk: 105,
            def: 60,
            spa: 60,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Anger Point",
            H: "Defiant"
        },
        heightm: 1,
        weightkg: 32,
        color: "Brown",
        prevo: "Mankey",
        evoLevel: 28,
        evos: ["Annihilape"],
        eggGroups: ["Field"],
        tier: "2"
    },
    growlithe: {
        num: 58,
        name: "Growlithe",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 70,
            def: 45,
            spa: 70,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Intimidate",
            H: "Flash Fire"
        },
        heightm: 0.7,
        weightkg: 19,
        color: "Brown",
        evos: ["Arcanine"],
        eggGroups: ["Field"],
        otherFormes: ["Growlithe-Hisui"],
        formeOrder: ["Growlithe", "Growlithe-Hisui"],
        tier: "1"
    },
    growlithehisui: {
        num: 58,
        name: "Growlithe-Hisui",
        baseSpecies: "Growlithe",
        forme: "Hisui",
        types: ["Fire", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 60,
            atk: 75,
            def: 45,
            spa: 65,
            spd: 50,
            spe: 55
        },
        abilities: {
            "0": "Intimidate",
            "1": "Rock Head",
            H: "Flash Fire"
        },
        heightm: 0.8,
        weightkg: 22.7,
        color: "Brown",
        evos: ["Arcanine-Hisui"],
        eggGroups: ["Field"],
        tier: "1"
    },
    arcanine: {
        num: 59,
        name: "Arcanine",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 90,
            atk: 110,
            def: 80,
            spa: 100,
            spd: 80,
            spe: 95
        },
        abilities: {
            "0": "Intimidate",
            H: "Flash Fire"
        },
        heightm: 1.9,
        weightkg: 155,
        color: "Brown",
        prevo: "Growlithe",
        evoType: "useItem",
        evoItem: "Fire Stone",
        eggGroups: ["Field"],
        otherFormes: ["Arcanine-Hisui"],
        formeOrder: ["Arcanine", "Arcanine-Hisui"],
        tier: "1"
    },
    arcaninehisui: {
        num: 59,
        name: "Arcanine-Hisui",
        baseSpecies: "Arcanine",
        forme: "Hisui",
        types: ["Fire", "Rock"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 95,
            atk: 115,
            def: 80,
            spa: 95,
            spd: 80,
            spe: 90
        },
        abilities: {
            "0": "Intimidate",
            "1": "Rock Head",
            H: "Flash Fire"
        },
        heightm: 2,
        weightkg: 168,
        color: "Brown",
        prevo: "Growlithe-Hisui",
        evoType: "useItem",
        evoItem: "Fire Stone",
        eggGroups: ["Field"],
        tier: "1"
    },
    poliwag: {
        num: 60,
        name: "Poliwag",
        types: ["Water"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 90
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 0.6,
        weightkg: 12.4,
        color: "Blue",
        evos: ["Poliwhirl"],
        eggGroups: ["Water 1"],
        tier: "2",
    },
    poliwhirl: {
        num: 61,
        name: "Poliwhirl",
        types: ["Water"],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 65,
            spa: 50,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 1,
        weightkg: 20,
        color: "Blue",
        prevo: "Poliwag",
        evoLevel: 25,
        evos: ["Poliwrath", "Politoed"],
        eggGroups: ["Water 1"],
        tier: "2",
    },
    poliwrath: {
        num: 62,
        name: "Poliwrath",
        types: ["Water", "Fighting"],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 95,
            spa: 70,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Swift Swim"
        },
        heightm: 1.3,
        weightkg: 54,
        color: "Blue",
        prevo: "Poliwhirl",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Water 1"],
        tier: "2",
    },
    abra: {
        num: 63,
        name: "Abra",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 25,
            atk: 20,
            def: 15,
            spa: 105,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Brown",
        evos: ["Kadabra"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    kadabra: {
        num: 64,
        name: "Kadabra",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 40,
            atk: 35,
            def: 30,
            spa: 120,
            spd: 70,
            spe: 105
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 1.3,
        weightkg: 56.5,
        color: "Brown",
        prevo: "Abra",
        evoLevel: 16,
        evos: ["Alakazam"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    alakazam: {
        num: 65,
        name: "Alakazam",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 45,
            spa: 135,
            spd: 95,
            spe: 120
        },
        abilities: {
            "0": "Synchronize",
            "1": "Inner Focus",
            H: "Magic Guard"
        },
        heightm: 1.5,
        weightkg: 48,
        color: "Brown",
        prevo: "Kadabra",
        evoLevel: 36,
        eggGroups: ["Human-Like"],
        otherFormes: ["Alakazam-Mega"],
        formeOrder: ["Alakazam", "Alakazam-Mega"],
        tier: "1",
    },
    alakazammega: {
        num: 65,
        name: "Alakazam-Mega",
        baseSpecies: "Alakazam",
        forme: "Mega",
        types: ["Psychic"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 65,
            spa: 175,
            spd: 105,
            spe: 150
        },
        abilities: {
            "0": "Trace"
        },
        heightm: 1.2,
        weightkg: 48,
        color: "Brown",
        eggGroups: ["Human-Like"],
        requiredItem: "Alakazite",
        tier: "1",
    },
    machop: {
        num: 66,
        name: "Machop",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 70,
            atk: 80,
            def: 50,
            spa: 35,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 0.8,
        weightkg: 19.5,
        color: "Gray",
        evos: ["Machoke"],
        eggGroups: ["Human-Like"],
        tier: "2",
    },
    machoke: {
        num: 67,
        name: "Machoke",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 1.5,
        weightkg: 70.5,
        color: "Gray",
        prevo: "Machop",
        evoLevel: 28,
        evos: ["Machamp"],
        eggGroups: ["Human-Like"],
        tier: "2",
    },
    machamp: {
        num: 68,
        name: "Machamp",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 90,
            atk: 130,
            def: 80,
            spa: 65,
            spd: 85,
            spe: 55
        },
        abilities: {
            "0": "Guts",
            "1": "No Guard",
            H: "Steadfast"
        },
        heightm: 1.6,
        weightkg: 130,
        color: "Gray",
        prevo: "Machoke",
        evoType: "trade",
        eggGroups: ["Human-Like"],
        canGigantamax: "G-Max Chi Strike",
        tier: "2",
    },
    bellsprout: {
        num: 69,
        name: "Bellsprout",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 35,
            spa: 70,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 0.7,
        weightkg: 4,
        color: "Green",
        evos: ["Weepinbell"],
        eggGroups: ["Grass"],
        tier: "1",
    },
    weepinbell: {
        num: 70,
        name: "Weepinbell",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 50,
            spa: 85,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 1,
        weightkg: 6.4,
        color: "Green",
        prevo: "Bellsprout",
        evoLevel: 21,
        evos: ["Victreebel"],
        eggGroups: ["Grass"],
        tier: "1",
    },
    victreebel: {
        num: 71,
        name: "Victreebel",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 100,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Gluttony"
        },
        heightm: 1.7,
        weightkg: 15.5,
        color: "Green",
        prevo: "Weepinbell",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Grass"],
        tier: "1",
    },
    tentacool: {
        num: 72,
        name: "Tentacool",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 35,
            spa: 50,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Clear Body",
            "1": "Liquid Ooze",
            H: "Rain Dish"
        },
        heightm: 0.9,
        weightkg: 45.5,
        color: "Blue",
        evos: ["Tentacruel"],
        eggGroups: ["Water 3"],
        tier: "1",
    },
    tentacruel: {
        num: 73,
        name: "Tentacruel",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 65,
            spa: 80,
            spd: 120,
            spe: 100
        },
        abilities: {
            "0": "Clear Body",
            "1": "Liquid Ooze",
            H: "Rain Dish"
        },
        heightm: 1.6,
        weightkg: 55,
        color: "Blue",
        prevo: "Tentacool",
        evoLevel: 30,
        eggGroups: ["Water 3"],
        tier: "1",
    },
    geodude: {
        num: 74,
        name: "Geodude",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 100,
            spa: 30,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 0.4,
        weightkg: 20,
        color: "Brown",
        evos: ["Graveler"],
        eggGroups: ["Mineral"],
        otherFormes: ["Geodude-Alola"],
        formeOrder: ["Geodude", "Geodude-Alola"],
        tier: "2",
    },
    geodudealola: {
        num: 74,
        name: "Geodude-Alola",
        baseSpecies: "Geodude",
        forme: "Alola",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 40,
            atk: 80,
            def: 100,
            spa: 30,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Rock Head",
            H: "Galvanize"
        },
        heightm: 0.4,
        weightkg: 20.3,
        color: "Gray",
        evos: ["Graveler-Alola"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    graveler: {
        num: 75,
        name: "Graveler",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 115,
            spa: 45,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 1,
        weightkg: 105,
        color: "Brown",
        prevo: "Geodude",
        evoLevel: 25,
        evos: ["Golem"],
        eggGroups: ["Mineral"],
        otherFormes: ["Graveler-Alola"],
        formeOrder: ["Graveler", "Graveler-Alola"],
        tier: "2",
    },
    graveleralola: {
        num: 75,
        name: "Graveler-Alola",
        baseSpecies: "Graveler",
        forme: "Alola",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 115,
            spa: 45,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Rock Head",
            H: "Galvanize"
        },
        heightm: 1,
        weightkg: 110,
        color: "Gray",
        prevo: "Geodude-Alola",
        evoLevel: 25,
        evos: ["Golem-Alola"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    golem: {
        num: 76,
        name: "Golem",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 130,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sturdy",
            H: "Sand Veil"
        },
        heightm: 1.4,
        weightkg: 300,
        color: "Brown",
        prevo: "Graveler",
        evoType: "trade",
        eggGroups: ["Mineral"],
        otherFormes: ["Golem-Alola"],
        formeOrder: ["Golem", "Golem-Alola"],
        tier: "2",
    },
    golemalola: {
        num: 76,
        name: "Golem-Alola",
        baseSpecies: "Golem",
        forme: "Alola",
        types: ["Rock", "Electric"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 130,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Rock Head",
            H: "Galvanize"
        },
        heightm: 1.7,
        weightkg: 316,
        color: "Gray",
        prevo: "Graveler-Alola",
        evoType: "trade",
        eggGroups: ["Mineral"],
        tier: "1",
    },
    ponyta: {
        num: 77,
        name: "Ponyta",
        types: ["Fire"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 55,
            spa: 65,
            spd: 65,
            spe: 90
        },
        abilities: {
            "0": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 1,
        weightkg: 30,
        color: "Yellow",
        evos: ["Rapidash"],
        eggGroups: ["Field"],
        otherFormes: ["Ponyta-Galar"],
        formeOrder: ["Ponyta", "Ponyta-Galar"],
        tier: "1",
    },
    ponytagalar: {
        num: 77,
        name: "Ponyta-Galar",
        baseSpecies: "Ponyta",
        forme: "Galar",
        types: ["Psychic"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 55,
            spa: 65,
            spd: 65,
            spe: 90
        },
        abilities: {
            "0": "Run Away",
            "1": "Pastel Veil",
            H: "Anticipation"
        },
        heightm: 0.8,
        weightkg: 24,
        color: "White",
        evos: ["Rapidash-Galar"],
        eggGroups: ["Field"],
        tier: "2",
    },
    rapidash: {
        num: 78,
        name: "Rapidash",
        types: ["Fire"],
        baseStats: {
            hp: 65,
            atk: 100,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 1.7,
        weightkg: 95,
        color: "Yellow",
        prevo: "Ponyta",
        evoLevel: 26,
        eggGroups: ["Field"],
        otherFormes: ["Rapidash-Galar"],
        formeOrder: ["Rapidash", "Rapidash-Galar"],
        tier: "1",
    },
    rapidashgalar: {
        num: 78,
        name: "Rapidash-Galar",
        baseSpecies: "Rapidash",
        forme: "Galar",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 65,
            atk: 100,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Run Away",
            "1": "Pastel Veil",
            H: "Anticipation"
        },
        heightm: 1.7,
        weightkg: 80,
        color: "White",
        prevo: "Ponyta-Galar",
        evoLevel: 40,
        eggGroups: ["Field"],
        tier: "2",
    },
    slowpoke: {
        num: 79,
        name: "Slowpoke",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 90,
            atk: 65,
            def: 65,
            spa: 40,
            spd: 40,
            spe: 15
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.2,
        weightkg: 36,
        color: "Pink",
        evos: ["Slowbro", "Slowking"],
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["Slowpoke-Galar"],
        formeOrder: ["Slowpoke", "Slowpoke-Galar"],
        tier: "1"
    },
    slowpokegalar: {
        num: 79,
        name: "Slowpoke-Galar",
        baseSpecies: "Slowpoke",
        forme: "Galar",
        types: ["Psychic"],
        baseStats: {
            hp: 90,
            atk: 65,
            def: 65,
            spa: 40,
            spd: 40,
            spe: 15
        },
        abilities: {
            "0": "Gluttony",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.2,
        weightkg: 36,
        color: "Pink",
        evos: ["Slowbro-Galar", "Slowking-Galar"],
        eggGroups: ["Monster", "Water 1"],
        tier: "2"
    },
    slowbro: {
        num: 80,
        name: "Slowbro",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 110,
            spa: 100,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.6,
        weightkg: 78.5,
        color: "Pink",
        prevo: "Slowpoke",
        evoLevel: 37,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["Slowbro-Mega", "Slowbro-Galar"],
        formeOrder: ["Slowbro", "Slowbro-Mega", "Slowbro-Galar"],
        tier: "1"
    },
    slowbromega: {
        num: 80,
        name: "Slowbro-Mega",
        baseSpecies: "Slowbro",
        forme: "Mega",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 180,
            spa: 130,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Shell Armor"
        },
        heightm: 2,
        weightkg: 120,
        color: "Pink",
        eggGroups: ["Monster", "Water 1"],
        requiredItem: "Slowbronite",
        tier: "1",
    },
    slowbrogalar: {
        num: 80,
        name: "Slowbro-Galar",
        baseSpecies: "Slowbro",
        forme: "Galar",
        types: ["Poison", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 100,
            def: 95,
            spa: 100,
            spd: 70,
            spe: 30
        },
        abilities: {
            "0": "Quick Draw",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.6,
        weightkg: 70.5,
        color: "Pink",
        prevo: "Slowpoke-Galar",
        evoType: "useItem",
        evoItem: "Galarica Cuff",
        eggGroups: ["Monster", "Water 1"],
        tier: "2"
    },
    magnemite: {
        num: 81,
        name: "Magnemite",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 25,
            atk: 35,
            def: 70,
            spa: 95,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Analytic",
            H: "Sturdy"
        },
        heightm: 0.3,
        weightkg: 6,
        color: "Gray",
        evos: ["Magneton"],
        eggGroups: ["Mineral"],
        tier: "1"
    },
    magneton: {
        num: 82,
        name: "Magneton",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 60,
            def: 95,
            spa: 120,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Analytic",
            H: "Sturdy"
        },
        heightm: 1,
        weightkg: 60,
        color: "Gray",
        prevo: "Magnemite",
        evoLevel: 30,
        evos: ["Magnezone"],
        eggGroups: ["Mineral"],
        tier: "1"
    },
    farfetchd: {
        num: 83,
        name: "Farfetchâ€™d",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 52,
            atk: 90,
            def: 55,
            spa: 58,
            spd: 62,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Inner Focus",
            H: "Defiant"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Brown",
        eggGroups: ["Flying", "Field"],
        otherFormes: ["Farfetchâ€™d-Galar"],
        formeOrder: ["Farfetchâ€™d", "Farfetchâ€™d-Galar"],
        tier: "2",
    },
    farfetchdgalar: {
        num: 83,
        name: "Farfetchâ€™d-Galar",
        baseSpecies: "Farfetchâ€™d",
        forme: "Galar",
        types: ["Fighting"],
        baseStats: {
            hp: 52,
            atk: 95,
            def: 55,
            spa: 58,
            spd: 62,
            spe: 55
        },
        abilities: {
            "0": "Inner Focus",
            H: "Scrappy"
        },
        heightm: 0.8,
        weightkg: 42,
        color: "Brown",
        evos: ["Sirfetchâ€™d"],
        eggGroups: ["Flying", "Field"],
        tier: "1",
    },
    doduo: {
        num: 84,
        name: "Doduo",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 35,
            atk: 85,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 75
        },
        abilities: {
            "0": "Run Away",
            "1": "Early Bird",
            H: "Tangled Feet"
        },
        heightm: 1.4,
        weightkg: 39.2,
        color: "Brown",
        evos: ["Dodrio"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    dodrio: {
        num: 85,
        name: "Dodrio",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 110,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 110
        },
        abilities: {
            "0": "Run Away",
            "1": "Early Bird",
            H: "Tangled Feet"
        },
        heightm: 1.8,
        weightkg: 85.2,
        color: "Brown",
        prevo: "Doduo",
        evoLevel: 31,
        eggGroups: ["Flying"],
        tier: "2",
    },
    seel: {
        num: 86,
        name: "Seel",
        types: ["Water"],
        baseStats: {
            hp: 65,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 70,
            spe: 45
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Hydration",
            H: "Ice Body"
        },
        heightm: 1.1,
        weightkg: 90,
        color: "White",
        evos: ["Dewgong"],
        eggGroups: ["Water 1", "Field"],
        tier: "2",
    },
    dewgong: {
        num: 87,
        name: "Dewgong",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 90,
            atk: 70,
            def: 80,
            spa: 70,
            spd: 95,
            spe: 70
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Hydration",
            H: "Ice Body"
        },
        heightm: 1.7,
        weightkg: 120,
        color: "White",
        prevo: "Seel",
        evoLevel: 34,
        eggGroups: ["Water 1", "Field"],
        tier: "2",
    },
    grimer: {
        num: 88,
        name: "Grimer",
        types: ["Poison"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Sticky Hold",
            H: "Poison Touch"
        },
        heightm: 0.9,
        weightkg: 30,
        color: "Purple",
        evos: ["Muk"],
        eggGroups: ["Amorphous"],
        otherFormes: ["Grimer-Alola"],
        formeOrder: ["Grimer", "Grimer-Alola"],
        tier: "2"
    },
    grimeralola: {
        num: 88,
        name: "Grimer-Alola",
        baseSpecies: "Grimer",
        forme: "Alola",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Gluttony",
            H: "Power of Alchemy"
        },
        heightm: 0.7,
        weightkg: 42,
        color: "Green",
        evos: ["Muk-Alola"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    muk: {
        num: 89,
        name: "Muk",
        types: ["Poison"],
        baseStats: {
            hp: 105,
            atk: 105,
            def: 75,
            spa: 65,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Sticky Hold",
            H: "Poison Touch"
        },
        heightm: 1.2,
        weightkg: 30,
        color: "Purple",
        prevo: "Grimer",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        otherFormes: ["Muk-Alola"],
        formeOrder: ["Muk", "Muk-Alola"],
        tier: "2"
    },
    mukalola: {
        num: 89,
        name: "Muk-Alola",
        baseSpecies: "Muk",
        forme: "Alola",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 105,
            atk: 105,
            def: 75,
            spa: 65,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Poison Touch",
            "1": "Gluttony",
            H: "Power of Alchemy"
        },
        heightm: 1,
        weightkg: 52,
        color: "Green",
        prevo: "Grimer-Alola",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    shellder: {
        num: 90,
        name: "Shellder",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 65,
            def: 100,
            spa: 45,
            spd: 25,
            spe: 40
        },
        abilities: {
            "0": "Shell Armor",
            H: "Overcoat"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Purple",
        evos: ["Cloyster"],
        eggGroups: ["Water 3"],
        tier: "1"
    },
    cloyster: {
        num: 91,
        name: "Cloyster",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 50,
            atk: 95,
            def: 180,
            spa: 85,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Shell Armor",
            "1": "Skill Link",
            H: "Overcoat"
        },
        heightm: 1.5,
        weightkg: 132.5,
        color: "Purple",
        prevo: "Shellder",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Water 3"],
        tier: "1"
    },
    gastly: {
        num: 92,
        name: "Gastly",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 30,
            atk: 35,
            def: 30,
            spa: 100,
            spd: 35,
            spe: 80
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.3,
        weightkg: 0.1,
        color: "Purple",
        evos: ["Haunter"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    haunter: {
        num: 93,
        name: "Haunter",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 45,
            spa: 115,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.6,
        weightkg: 0.1,
        color: "Purple",
        prevo: "Gastly",
        evoLevel: 25,
        evos: ["Gengar"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    gengar: {
        num: 94,
        name: "Gengar",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 75,
            spe: 110
        },
        abilities: {
            "0": "Cursed Body",
            H: "Levitate"
        },
        heightm: 1.5,
        weightkg: 40.5,
        color: "Purple",
        prevo: "Haunter",
        evoLevel: 40,
        eggGroups: ["Amorphous"],
        otherFormes: ["Gengar-Mega"],
        formeOrder: ["Gengar", "Gengar-Mega"],
        canGigantamax: "G-Max Terror",
        tier: "1"
    },
    gengarmega: {
        num: 94,
        name: "Gengar-Mega",
        baseSpecies: "Gengar",
        forme: "Mega",
        types: ["Ghost", "Poison"],
        baseStats: {
            hp: 60,
            atk: 65,
            def: 80,
            spa: 170,
            spd: 95,
            spe: 130
        },
        abilities: {
            "0": "Shadow Tag"
        },
        heightm: 1.4,
        weightkg: 40.5,
        color: "Purple",
        eggGroups: ["Amorphous"],
        requiredItem: "Gengarite",
        tier: "1",
    },
    onix: {
        num: 95,
        name: "Onix",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 35,
            atk: 45,
            def: 160,
            spa: 30,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Rock Head",
            "1": "Weak Armor",
            H: "Sturdy"
        },
        heightm: 8.8,
        weightkg: 210,
        color: "Gray",
        evos: ["Steelix"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    drowzee: {
        num: 96,
        name: "Drowzee",
        types: ["Psychic"],
        baseStats: {
            hp: 60,
            atk: 48,
            def: 45,
            spa: 43,
            spd: 90,
            spe: 42
        },
        abilities: {
            "0": "Insomnia",
            H: "Bad Dreams"
        },
        heightm: 1,
        weightkg: 32.4,
        color: "Yellow",
        evos: ["Hypno"],
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    hypno: {
        num: 97,
        name: "Hypno",
        types: ["Psychic"],
        baseStats: {
            hp: 85,
            atk: 73,
            def: 70,
            spa: 73,
            spd: 115,
            spe: 67
        },
        abilities: {
            "0": "Insomnia",
            H: "Bad Dreams"
        },
        heightm: 1.6,
        weightkg: 75.6,
        color: "Yellow",
        prevo: "Drowzee",
        evoLevel: 24,
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    krabby: {
        num: 98,
        name: "Krabby",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 105,
            def: 90,
            spa: 25,
            spd: 25,
            spe: 50
        },
        abilities: {
            "0": "Sheer Force",
            "1": "Shell Armor",
            H: "Hyper Cutter"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Red",
        evos: ["Kingler"],
        eggGroups: ["Water 3"],
        tier: "1",
    },
    kingler: {
        num: 99,
        name: "Kingler",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 130,
            def: 115,
            spa: 50,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Sheer Force",
            "1": "Shell Armor",
            H: "Hyper Cutter"
        },
        heightm: 1.3,
        weightkg: 60,
        color: "Red",
        prevo: "Krabby",
        evoLevel: 26,
        eggGroups: ["Water 3"],
        canGigantamax: "G-Max Foam Burst",
        tier: "1",
    },
    voltorb: {
        num: 100,
        name: "Voltorb",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 55,
            spe: 100
        },
        abilities: {
            "0": "Soundproof",
            "1": "Static",
            H: "Galvanize"
        },
        heightm: 0.5,
        weightkg: 10.4,
        color: "Red",
        evos: ["Electrode"],
        eggGroups: ["Mineral"],
        otherFormes: ["Voltorb-Hisui"],
        formeOrder: ["Voltorb", "Voltorb-Hisui"],
        tier: "2"
    },
    voltorbhisui: {
        num: 100,
        name: "Voltorb-Hisui",
        baseSpecies: "Voltorb",
        forme: "Hisui",
        types: ["Electric", "Grass"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 55,
            spe: 100
        },
        abilities: {
            "0": "Aftermath",
            "1": "Static",
            H: "Soundproof"
        },
        heightm: 0.5,
        weightkg: 13,
        color: "Red",
        evos: ["Electrode-Hisui"],
        eggGroups: ["Mineral"],
        tier: "1"
    },
    electrode: {
        num: 101,
        name: "Electrode",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 150
        },
        abilities: {
            "0": "Soundproof",
            "1": "Static",
            H: "Galvanize"
        },
        heightm: 1.2,
        weightkg: 66.6,
        color: "Red",
        prevo: "Voltorb",
        evoLevel: 30,
        eggGroups: ["Mineral"],
        otherFormes: ["Electrode-Hisui"],
        formeOrder: ["Electrode", "Electrode-Hisui"],
        tier: "2"
    },
    electrodehisui: {
        num: 101,
        name: "Electrode-Hisui",
        baseSpecies: "Electrode",
        forme: "Hisui",
        types: ["Electric", "Grass"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 80,
            spd: 80,
            spe: 150
        },
        abilities: {
            "0": "Aftermath",
            "1": "Static",
            H: "Soundproof"
        },
        heightm: 1.2,
        weightkg: 71,
        color: "Red",
        prevo: "Voltorb-Hisui",
        evoLevel: "30",
        eggGroups: ["Mineral"],
        tier: "1"
    },
    exeggcute: {
        num: 102,
        name: "Exeggcute",
        types: ["Grass", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 80,
            spa: 60,
            spd: 45,
            spe: 40
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Harvest"
        },
        heightm: 0.4,
        weightkg: 2.5,
        color: "Pink",
        evos: ["Exeggutor", "Exeggutor-Alola"],
        eggGroups: ["Grass"],
        tier: "1",
    },
    exeggutor: {
        num: 103,
        name: "Exeggutor",
        types: ["Grass", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 95,
            def: 85,
            spa: 125,
            spd: 75,
            spe: 55
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Harvest"
        },
        heightm: 2,
        weightkg: 120,
        color: "Yellow",
        prevo: "Exeggcute",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Grass"],
        otherFormes: ["Exeggutor-Alola"],
        formeOrder: ["Exeggutor", "Exeggutor-Alola"],
        tier: "1",
    },
    exeggutoralola: {
        num: 103,
        name: "Exeggutor-Alola",
        baseSpecies: "Exeggutor",
        forme: "Alola",
        types: ["Grass", "Dragon"],
        baseStats: {
            hp: 95,
            atk: 105,
            def: 85,
            spa: 125,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Harvest"
        },
        heightm: 10.9,
        weightkg: 415.6,
        color: "Yellow",
        prevo: "Exeggcute",
        evoType: "useItem",
        evoItem: "Shiny Stone",
        evoRegion: "Alola",
        eggGroups: ["Grass"],
        tier: "1",
    },
    cubone: {
        num: 104,
        name: "Cubone",
        types: ["Ground"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 95,
            spa: 40,
            spd: 50,
            spe: 35
        },
        abilities: {
            "0": "Rock Head",
            "1": "Lightning Rod",
            H: "Battle Armor"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Brown",
        evos: ["Marowak", "Marowak-Alola"],
        eggGroups: ["Monster"],
        tier: "2",
    },
    marowak: {
        num: 105,
        name: "Marowak",
        types: ["Ground"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 110,
            spa: 50,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Rock Head",
            "1": "Lightning Rod",
            H: "Battle Armor"
        },
        heightm: 1,
        weightkg: 45,
        color: "Brown",
        prevo: "Cubone",
        evoLevel: 28,
        eggGroups: ["Monster"],
        otherFormes: ["Marowak-Alola"],
        formeOrder: ["Marowak", "Marowak-Alola"],
        tier: "2",
    },
    marowakalola: {
        num: 105,
        name: "Marowak-Alola",
        baseSpecies: "Marowak",
        forme: "Alola",
        types: ["Fire", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 110,
            spa: 50,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Cursed Body",
            "1": "Lightning Rod",
            H: "Rock Head"
        },
        heightm: 1,
        weightkg: 34,
        color: "Purple",
        prevo: "Cubone",
        evoLevel: 28,
        evoCondition: "at night",
        evoRegion: "Alola",
        eggGroups: ["Monster"],
        tier: "2",
    },
    hitmonlee: {
        num: 106,
        name: "Hitmonlee",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 120,
            def: 53,
            spa: 35,
            spd: 110,
            spe: 87
        },
        abilities: {
            "0": "Limber",
            "1": "Reckless",
            H: "Unburden"
        },
        heightm: 1.5,
        weightkg: 49.8,
        color: "Brown",
        prevo: "Tyrogue",
        evoLevel: 20,
        evoCondition: "with an Atk stat > its Def stat",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    hitmonchan: {
        num: 107,
        name: "Hitmonchan",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 105,
            def: 79,
            spa: 35,
            spd: 110,
            spe: 76
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Iron Fist",
            H: "No Guard"
        },
        heightm: 1.4,
        weightkg: 50.2,
        color: "Brown",
        prevo: "Tyrogue",
        evoLevel: 20,
        evoCondition: "with an Atk stat < its Def stat",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    lickitung: {
        num: 108,
        name: "Lickitung",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 55,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 30
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Oblivious",
            H: "Cloud Nine"
        },
        heightm: 1.2,
        weightkg: 65.5,
        color: "Pink",
        evos: ["Lickilicky"],
        eggGroups: ["Monster"],
        tier: "2",
    },
    koffing: {
        num: 109,
        name: "Koffing",
        types: ["Poison"],
        baseStats: {
            hp: 40,
            atk: 65,
            def: 95,
            spa: 60,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Levitate",
            H: "Stench"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Purple",
        evos: ["Weezing", "Weezing-Galar"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    weezing: {
        num: 110,
        name: "Weezing",
        types: ["Poison"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 120,
            spa: 85,
            spd: 70,
            spe: 60
        },
        abilities: {
            "0": "Levitate",
            H: "Neutralizing Gas"
        },
        heightm: 1.2,
        weightkg: 9.5,
        color: "Purple",
        prevo: "Koffing",
        evoLevel: 35,
        eggGroups: ["Amorphous"],
        otherFormes: ["Weezing-Galar"],
        formeOrder: ["Weezing", "Weezing-Galar"],
        tier: "1",
    },
    weezinggalar: {
        num: 110,
        name: "Weezing-Galar",
        baseSpecies: "Weezing",
        forme: "Galar",
        types: ["Poison", "Fairy"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 120,
            spa: 85,
            spd: 70,
            spe: 60
        },
        abilities: {
            "0": "Levitate",
            "1": "Neutralizing Gas",
            H: "Misty Surge"
        },
        heightm: 3,
        weightkg: 16,
        color: "Gray",
        prevo: "Koffing",
        evoLevel: 35,
        evoRegion: "Galar",
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    rhyhorn: {
        num: 111,
        name: "Rhyhorn",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 80,
            atk: 85,
            def: 95,
            spa: 30,
            spd: 30,
            spe: 25
        },
        abilities: {
            "0": "Reckless",
            "1": "Rock Head",
            H: "Lightning Rod"
        },
        heightm: 1,
        weightkg: 115,
        color: "Gray",
        evos: ["Rhydon"],
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    rhydon: {
        num: 112,
        name: "Rhydon",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 105,
            atk: 130,
            def: 120,
            spa: 45,
            spd: 45,
            spe: 40
        },
        abilities: {
            "0": "Reckless",
            "1": "Rock Head",
            H: "Lightning Rod"
        },
        heightm: 1.9,
        weightkg: 120,
        color: "Gray",
        prevo: "Rhyhorn",
        evoLevel: 34,
        evos: ["Rhyperior"],
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    chansey: {
        num: 113,
        name: "Chansey",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 250,
            atk: 5,
            def: 5,
            spa: 35,
            spd: 105,
            spe: 50
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Healer"
        },
        heightm: 1.1,
        weightkg: 34.6,
        color: "Pink",
        prevo: "Happiny",
        evoType: "levelHold",
        evoItem: "Oval Stone",
        evoCondition: "during the day",
        evos: ["Blissey"],
        eggGroups: ["Fairy"],
        canHatch: true,
        tier: "2"
    },
    tangela: {
        num: 114,
        name: "Tangela",
        types: ["Grass"],
        baseStats: {
            hp: 65,
            atk: 55,
            def: 115,
            spa: 100,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Regenerator"
        },
        heightm: 1,
        weightkg: 35,
        color: "Blue",
        evos: ["Tangrowth"],
        eggGroups: ["Grass"],
        tier: "2",
    },
    kangaskhan: {
        num: 115,
        name: "Kangaskhan",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 105,
            atk: 95,
            def: 80,
            spa: 40,
            spd: 80,
            spe: 90
        },
        abilities: {
            "0": "Early Bird",
            "1": "Inner Focus",
            H: "Scrappy"
        },
        heightm: 2.2,
        weightkg: 80,
        color: "Brown",
        eggGroups: ["Monster"],
        otherFormes: ["Kangaskhan-Mega"],
        formeOrder: ["Kangaskhan", "Kangaskhan-Mega"],
        tier: "1",
    },
    kangaskhanmega: {
        num: 115,
        name: "Kangaskhan-Mega",
        baseSpecies: "Kangaskhan",
        forme: "Mega",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 105,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Parental Bond"
        },
        heightm: 2.2,
        weightkg: 100,
        color: "Brown",
        eggGroups: ["Monster"],
        requiredItem: "Kangaskhanite",
        tier: "2",
    },
    horsea: {
        num: 116,
        name: "Horsea",
        types: ["Water"],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 70,
            spa: 70,
            spd: 25,
            spe: 60
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
        evos: ["Seadra"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1",
    },
    seadra: {
        num: 117,
        name: "Seadra",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 95,
            spa: 95,
            spd: 45,
            spe: 85
        },
        abilities: {
            "0": "Poison Point",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 1.2,
        weightkg: 25,
        color: "Blue",
        prevo: "Horsea",
        evoLevel: 20,
        evos: ["Kingdra"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1",
    },
    goldeen: {
        num: 118,
        name: "Goldeen",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 67,
            def: 60,
            spa: 35,
            spd: 50,
            spe: 63
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Lightning Rod"
        },
        heightm: 0.6,
        weightkg: 15,
        color: "Red",
        evos: ["Seaking"],
        eggGroups: ["Water 2"],
        tier: "2",
    },
    seaking: {
        num: 119,
        name: "Seaking",
        types: ["Water"],
        baseStats: {
            hp: 80,
            atk: 92,
            def: 65,
            spa: 65,
            spd: 80,
            spe: 68
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Lightning Rod"
        },
        heightm: 1.3,
        weightkg: 39,
        color: "Red",
        prevo: "Goldeen",
        evoLevel: 33,
        eggGroups: ["Water 2"],
        tier: "2",
    },
    staryu: {
        num: 120,
        name: "Staryu",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 30,
            atk: 45,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Natural Cure",
            H: "Analytic"
        },
        heightm: 0.8,
        weightkg: 34.5,
        color: "Brown",
        evos: ["Starmie"],
        eggGroups: ["Water 3"],
        tier: "1",
    },
    starmie: {
        num: 121,
        name: "Starmie",
        types: ["Water", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 75,
            def: 85,
            spa: 100,
            spd: 85,
            spe: 115
        },
        abilities: {
            "0": "Natural Cure",
            H: "Analytic"
        },
        heightm: 1.1,
        weightkg: 80,
        color: "Purple",
        prevo: "Staryu",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Water 3"],
        tier: "1",
    },
    mrmime: {
        num: 122,
        name: "Mr. Mime",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 65,
            spa: 100,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Soundproof",
            "1": "Filter",
            H: "Technician"
        },
        heightm: 1.3,
        weightkg: 54.5,
        color: "Pink",
        prevo: "Mime Jr.",
        evoType: "levelMove",
        evoMove: "Mimic",
        eggGroups: ["Human-Like"],
        canHatch: true,
        otherFormes: ["Mr. Mime-Galar"],
        formeOrder: ["Mr. Mime", "Mr. Mime-Galar"],
        tier: "2",
    },
    mrmimegalar: {
        num: 122,
        name: "Mr. Mime-Galar",
        baseSpecies: "Mr. Mime",
        forme: "Galar",
        types: ["Ice", "Psychic"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 65,
            spa: 90,
            spd: 90,
            spe: 100
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Screen Cleaner",
            H: "Ice Body"
        },
        heightm: 1.4,
        weightkg: 56.8,
        color: "White",
        prevo: "Mime Jr.",
        evoType: "levelMove",
        evoMove: "Mimic",
        evoRegion: "Galar",
        evos: ["Mr. Rime"],
        eggGroups: ["Human-Like"],
        canHatch: true,
        tier: "2",
    },
    scyther: {
        num: 123,
        name: "Scyther",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 105
        },
        abilities: {
            "0": "Swarm",
            H: "Technician"
        },
        heightm: 1.5,
        weightkg: 56,
        color: "Green",
        evos: ["Scizor", "Kleavor"],
        eggGroups: ["Bug"],
        tier: "1"
    },
    jynx: {
        num: 124,
        name: "Jynx",
        types: ["Ice", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 65,
            atk: 50,
            def: 35,
            spa: 115,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "Oblivious",
            "1": "Forewarn",
            H: "Dry Skin"
        },
        heightm: 1.4,
        weightkg: 40.6,
        color: "Red",
        prevo: "Smoochum",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    electabuzz: {
        num: 125,
        name: "Electabuzz",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 65,
            atk: 83,
            def: 57,
            spa: 95,
            spd: 85,
            spe: 105
        },
        abilities: {
            "0": "Vital Spirit",
            H: "Static"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Yellow",
        prevo: "Elekid",
        evoLevel: 30,
        evos: ["Electivire"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    magmar: {
        num: 126,
        name: "Magmar",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 65,
            atk: 95,
            def: 57,
            spa: 100,
            spd: 85,
            spe: 93
        },
        abilities: {
            "0": "Flame Body",
            "1": "Vital Spirit",
            H: "Flash Fire"
        },
        heightm: 1.3,
        weightkg: 44.5,
        color: "Red",
        prevo: "Magby",
        evoLevel: 30,
        evos: ["Magmortar"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    pinsir: {
        num: 127,
        name: "Pinsir",
        types: ["Bug"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 55,
            spd: 70,
            spe: 85
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Mold Breaker",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 55,
        color: "Brown",
        eggGroups: ["Bug"],
        otherFormes: ["Pinsir-Mega"],
        formeOrder: ["Pinsir", "Pinsir-Mega"],
        tier: "1",
    },
    pinsirmega: {
        num: 127,
        name: "Pinsir-Mega",
        baseSpecies: "Pinsir",
        forme: "Mega",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 65,
            atk: 155,
            def: 120,
            spa: 65,
            spd: 90,
            spe: 105
        },
        abilities: {
            "0": "Aerilate"
        },
        heightm: 1.7,
        weightkg: 59,
        color: "Brown",
        eggGroups: ["Bug"],
        requiredItem: "Pinsirite",
        tier: "1",
    },
    tauros: {
        num: 128,
        name: "Tauros",
        types: ["Normal"],
        gender: "M",
        baseStats: {
            hp: 75,
            atk: 100,
            def: 95,
            spa: 40,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Intimidate",
            H: "Sheer Force"
        },
        heightm: 1.4,
        weightkg: 88.4,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "1"
    },
    magikarp: {
        num: 129,
        name: "Magikarp",
        types: ["Water"],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 55,
            spa: 15,
            spd: 20,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim",
            H: "Rattled"
        },
        heightm: 0.9,
        weightkg: 10,
        color: "Red",
        evos: ["Gyarados"],
        eggGroups: ["Water 2", "Dragon"],
        tier: "1"
    },
    gyarados: {
        num: 130,
        name: "Gyarados",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 95,
            atk: 125,
            def: 79,
            spa: 60,
            spd: 100,
            spe: 81
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 6.5,
        weightkg: 235,
        color: "Blue",
        prevo: "Magikarp",
        evoLevel: 20,
        eggGroups: ["Water 2", "Dragon"],
        otherFormes: ["Gyarados-Mega"],
        formeOrder: ["Gyarados", "Gyarados-Mega"],
        tier: "1"
    },
    gyaradosmega: {
        num: 130,
        name: "Gyarados-Mega",
        baseSpecies: "Gyarados",
        forme: "Mega",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 95,
            atk: 155,
            def: 109,
            spa: 70,
            spd: 130,
            spe: 81
        },
        abilities: {
            "0": "Mold Breaker"
        },
        heightm: 6.5,
        weightkg: 305,
        color: "Blue",
        eggGroups: ["Water 2", "Dragon"],
        requiredItem: "Gyaradosite",
        tier: "1",
    },
    lapras: {
        num: 131,
        name: "Lapras",
        types: ["Water", "Ice"],
        baseStats: {
            hp: 130,
            atk: 85,
            def: 80,
            spa: 85,
            spd: 95,
            spe: 60
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Shell Armor",
            H: "Hydration"
        },
        heightm: 2.5,
        weightkg: 220,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        canGigantamax: "G-Max Resonance",
        tier: "2",
    },
    ditto: {
        num: 132,
        name: "Ditto",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 48,
            atk: 48,
            def: 48,
            spa: 48,
            spd: 48,
            spe: 48
        },
        abilities: {
            "0": "Limber",
            H: "Imposter"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Purple",
        eggGroups: ["Ditto"],
        tier: "2"
    },
    eevee: {
        num: 133,
        name: "Eevee",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 55,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 55
        },
        abilities: {
            "0": "Run Away",
            "1": "Adaptability",
            H: "Anticipation"
        },
        heightm: 0.3,
        weightkg: 6.5,
        color: "Brown",
        evos: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
        eggGroups: ["Field"],
        otherFormes: ["Eevee-Starter"],
        formeOrder: ["Eevee", "Eevee-Starter"],
        canGigantamax: "G-Max Cuddle",
        tier: "2"
    },
    eeveestarter: {
        num: 133,
        name: "Eevee-Starter",
        baseSpecies: "Eevee",
        forme: "Starter",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 75,
            def: 70,
            spa: 65,
            spd: 85,
            spe: 75
        },
        abilities: {
            "0": "Run Away",
            "1": "Adaptability",
            H: "Anticipation"
        },
        heightm: 0.3,
        weightkg: 6.5,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        tier: "2",
        isNonstandard: "LGPE"
    },
    vaporeon: {
        num: 134,
        name: "Vaporeon",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 130,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Water Absorb",
            H: "Hydration"
        },
        heightm: 1,
        weightkg: 29,
        color: "Blue",
        prevo: "Eevee",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Field"],
        tier: "2"
    },
    jolteon: {
        num: 135,
        name: "Jolteon",
        types: ["Electric"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 110,
            spd: 95,
            spe: 130
        },
        abilities: {
            "0": "Volt Absorb",
            H: "Quick Feet"
        },
        heightm: 0.8,
        weightkg: 24.5,
        color: "Yellow",
        prevo: "Eevee",
        evoType: "useItem",
        evoItem: "Thunder Stone",
        eggGroups: ["Field"],
        tier: "2"
    },
    flareon: {
        num: 136,
        name: "Flareon",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 95,
            spd: 110,
            spe: 65
        },
        abilities: {
            "0": "Flash Fire",
            H: "Guts"
        },
        heightm: 0.9,
        weightkg: 25,
        color: "Red",
        prevo: "Eevee",
        evoType: "useItem",
        evoItem: "Fire Stone",
        eggGroups: ["Field"],
        tier: "2"
    },
    porygon: {
        num: 137,
        name: "Porygon",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Trace",
            "1": "Analytic",
            H: "Download"
        },
        heightm: 0.8,
        weightkg: 36.5,
        color: "Pink",
        evos: ["Porygon2"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    omanyte: {
        num: 138,
        name: "Omanyte",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 35,
            atk: 40,
            def: 100,
            spa: 90,
            spd: 55,
            spe: 35
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 0.4,
        weightkg: 7.5,
        color: "Blue",
        evos: ["Omastar"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    omastar: {
        num: 139,
        name: "Omastar",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 60,
            def: 125,
            spa: 115,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 1,
        weightkg: 35,
        color: "Blue",
        prevo: "Omanyte",
        evoLevel: 40,
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    kabuto: {
        num: 140,
        name: "Kabuto",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 80,
            def: 90,
            spa: 55,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Battle Armor",
            H: "Weak Armor"
        },
        heightm: 0.5,
        weightkg: 11.5,
        color: "Brown",
        evos: ["Kabutops"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    kabutops: {
        num: 141,
        name: "Kabutops",
        types: ["Rock", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 115,
            def: 105,
            spa: 65,
            spd: 70,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Battle Armor",
            H: "Weak Armor"
        },
        heightm: 1.3,
        weightkg: 40.5,
        color: "Brown",
        prevo: "Kabuto",
        evoLevel: 40,
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    aerodactyl: {
        num: 142,
        name: "Aerodactyl",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 105,
            def: 65,
            spa: 60,
            spd: 75,
            spe: 130
        },
        abilities: {
            "0": "Rock Head",
            "1": "Unnerve",
            H: "Pressure"
        },
        heightm: 1.8,
        weightkg: 59,
        color: "Purple",
        eggGroups: ["Flying"],
        otherFormes: ["Aerodactyl-Mega"],
        formeOrder: ["Aerodactyl", "Aerodactyl-Mega"],
        tier: "1",
    },
    aerodactylmega: {
        num: 142,
        name: "Aerodactyl-Mega",
        baseSpecies: "Aerodactyl",
        forme: "Mega",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 135,
            def: 85,
            spa: 70,
            spd: 95,
            spe: 150
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 2.1,
        weightkg: 79,
        color: "Purple",
        eggGroups: ["Flying"],
        requiredItem: "Aerodactylite",
        tier: "1",
    },
    snorlax: {
        num: 143,
        name: "Snorlax",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 160,
            atk: 110,
            def: 65,
            spa: 65,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Immunity",
            "1": "Thick Fat",
            H: "Gluttony"
        },
        heightm: 2.1,
        weightkg: 460,
        color: "Black",
        prevo: "Munchlax",
        evoType: "levelFriendship",
        eggGroups: ["Monster"],
        canHatch: true,
        canGigantamax: "G-Max Replenish",
        tier: "2",
    },
    articuno: {
        num: 144,
        name: "Articuno",
        types: ["Ice", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 100,
            spa: 95,
            spd: 125,
            spe: 85
        },
        abilities: {
            "0": "Pressure",
            H: "Snow Cloak"
        },
        heightm: 1.7,
        weightkg: 55.4,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Articuno-Galar"],
        formeOrder: ["Articuno", "Articuno-Galar"],
        tier: "2"
    },
    articunogalar: {
        num: 144,
        name: "Articuno-Galar",
        baseSpecies: "Articuno",
        forme: "Galar",
        types: ["Psychic", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 85,
            spa: 125,
            spd: 100,
            spe: 95
        },
        abilities: {
            "0": "Competitive"
        },
        heightm: 1.7,
        weightkg: 50.9,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    zapdos: {
        num: 145,
        name: "Zapdos",
        types: ["Electric", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 90,
            def: 85,
            spa: 125,
            spd: 90,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Static"
        },
        heightm: 1.6,
        weightkg: 52.6,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Zapdos-Galar"],
        formeOrder: ["Zapdos", "Zapdos-Galar"],
        tier: "2"
    },
    zapdosgalar: {
        num: 145,
        name: "Zapdos-Galar",
        baseSpecies: "Zapdos",
        forme: "Galar",
        types: ["Fighting", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 125,
            def: 90,
            spa: 85,
            spd: 90,
            spe: 100
        },
        abilities: {
            "0": "Defiant"
        },
        heightm: 1.6,
        weightkg: 58.2,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    moltres: {
        num: 146,
        name: "Moltres",
        types: ["Fire", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 125,
            spd: 85,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Flame Body"
        },
        heightm: 2,
        weightkg: 60,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Moltres-Galar"],
        formeOrder: ["Moltres", "Moltres-Galar"],
        tier: "2"
    },
    moltresgalar: {
        num: 146,
        name: "Moltres-Galar",
        baseSpecies: "Moltres",
        forme: "Galar",
        types: ["Dark", "Flying"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 90,
            spa: 100,
            spd: 125,
            spe: 90
        },
        abilities: {
            "0": "Berserk"
        },
        heightm: 2,
        weightkg: 66,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    dratini: {
        num: 147,
        name: "Dratini",
        types: ["Dragon"],
        baseStats: {
            hp: 41,
            atk: 64,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Shed Skin",
            H: "Marvel Scale"
        },
        heightm: 1.8,
        weightkg: 3.3,
        color: "Blue",
        evos: ["Dragonair"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1"
    },
    dragonair: {
        num: 148,
        name: "Dragonair",
        types: ["Dragon"],
        baseStats: {
            hp: 61,
            atk: 84,
            def: 65,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Shed Skin",
            H: "Marvel Scale"
        },
        heightm: 4,
        weightkg: 16.5,
        color: "Blue",
        prevo: "Dratini",
        evoLevel: 30,
        evos: ["Dragonite"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1"
    },
    dragonite: {
        num: 149,
        name: "Dragonite",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 91,
            atk: 134,
            def: 95,
            spa: 100,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Inner Focus",
            H: "Multiscale"
        },
        heightm: 2.2,
        weightkg: 210,
        color: "Brown",
        prevo: "Dragonair",
        evoLevel: 55,
        eggGroups: ["Water 1", "Dragon"],
        tier: "1"
    },
    mewtwo: {
        num: 150,
        name: "Mewtwo",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 110,
            def: 90,
            spa: 154,
            spd: 90,
            spe: 130
        },
        abilities: {
            "0": "Pressure",
            H: "Unnerve"
        },
        heightm: 2,
        weightkg: 122,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Mewtwo-Mega-X", "Mewtwo-Mega-Y"],
        formeOrder: ["Mewtwo", "Mewtwo-Mega-X", "Mewtwo-Mega-Y"],
        tier: "2"
    },
    mewtwomegax: {
        num: 150,
        name: "Mewtwo-Mega-X",
        baseSpecies: "Mewtwo",
        forme: "Mega-X",
        types: ["Psychic", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 190,
            def: 100,
            spa: 154,
            spd: 100,
            spe: 130
        },
        abilities: {
            "0": "Steadfast"
        },
        heightm: 2.3,
        weightkg: 127,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Mewtwonite X",
        tier: "2",
    },
    mewtwomegay: {
        num: 150,
        name: "Mewtwo-Mega-Y",
        baseSpecies: "Mewtwo",
        forme: "Mega-Y",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 150,
            def: 70,
            spa: 194,
            spd: 120,
            spe: 140
        },
        abilities: {
            "0": "Insomnia"
        },
        heightm: 1.5,
        weightkg: 33,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Mewtwonite Y",
        tier: "2",
    },
    mew: {
        num: 151,
        name: "Mew",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Synchronize"
        },
        heightm: 0.4,
        weightkg: 4,
        color: "Pink",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "1"
    },
    chikorita: {
        num: 152,
        name: "Chikorita",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 49,
            def: 65,
            spa: 49,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Overgrow",
            H: "Thick Fat"
        },
        heightm: 0.9,
        weightkg: 6.4,
        color: "Green",
        evos: ["Bayleef"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    bayleef: {
        num: 153,
        name: "Bayleef",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 62,
            def: 80,
            spa: 63,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Overgrow",
            H: "Thick Fat"
        },
        heightm: 1.2,
        weightkg: 15.8,
        color: "Green",
        prevo: "Chikorita",
        evoLevel: 16,
        evos: ["Meganium"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    meganium: {
        num: 154,
        name: "Meganium",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 82,
            def: 100,
            spa: 83,
            spd: 100,
            spe: 80
        },
        abilities: {
            "0": "Overgrow",
            H: "Thick Fat"
        },
        heightm: 1.8,
        weightkg: 100.5,
        color: "Green",
        prevo: "Bayleef",
        evoLevel: 32,
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    cyndaquil: {
        num: 155,
        name: "Cyndaquil",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 39,
            atk: 52,
            def: 43,
            spa: 60,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 0.5,
        weightkg: 7.9,
        color: "Yellow",
        evos: ["Quilava"],
        eggGroups: ["Field"],
        tier: "1"
    },
    quilava: {
        num: 156,
        name: "Quilava",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 64,
            def: 58,
            spa: 80,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 0.9,
        weightkg: 19,
        color: "Yellow",
        prevo: "Cyndaquil",
        evoLevel: 14,
        evos: ["Typhlosion", "Typhlosion-Hisui"],
        eggGroups: ["Field"],
        tier: "1"
    },
    typhlosion: {
        num: 157,
        name: "Typhlosion",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 84,
            def: 78,
            spa: 109,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 1.7,
        weightkg: 79.5,
        color: "Yellow",
        prevo: "Quilava",
        evoLevel: 36,
        eggGroups: ["Field"],
        otherFormes: ["Typhlosion-Hisui"],
        formeOrder: ["Typhlosion", "Typhlosion-Hisui"],
        tier: "1"
    },
    typhlosionhisui: {
        num: 157,
        name: "Typhlosion-Hisui",
        baseSpecies: "Typhlosion",
        forme: "Hisui",
        types: ["Fire", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 73,
            atk: 84,
            def: 78,
            spa: 119,
            spd: 85,
            spe: 95
        },
        abilities: {
            "0": "Blaze",
            H: "Flash Fire"
        },
        heightm: 1.6,
        weightkg: 69.8,
        color: "Yellow",
        prevo: "Quilava",
        evoType: "levelExtra",
        evoCondition: "at Mt. Pyre",
        eggGroups: ["Field"],
        tier: "1"
    },
    totodile: {
        num: 158,
        name: "Totodile",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 65,
            def: 64,
            spa: 44,
            spd: 48,
            spe: 43
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 9.5,
        color: "Blue",
        evos: ["Croconaw"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    croconaw: {
        num: 159,
        name: "Croconaw",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 80,
            def: 80,
            spa: 59,
            spd: 63,
            spe: 58
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 1.1,
        weightkg: 25,
        color: "Blue",
        prevo: "Totodile",
        evoLevel: 16,
        evos: ["Feraligatr"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    feraligatr: {
        num: 160,
        name: "Feraligatr",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 105,
            def: 100,
            spa: 79,
            spd: 83,
            spe: 78
        },
        abilities: {
            "0": "Torrent",
            H: "Sheer Force"
        },
        heightm: 2.3,
        weightkg: 88.8,
        color: "Blue",
        prevo: "Croconaw",
        evoLevel: 30,
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    sentret: {
        num: 161,
        name: "Sentret",
        types: ["Normal"],
        baseStats: {
            hp: 35,
            atk: 46,
            def: 34,
            spa: 35,
            spd: 45,
            spe: 20
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Frisk"
        },
        heightm: 0.8,
        weightkg: 6,
        color: "Brown",
        evos: ["Furret"],
        eggGroups: ["Field"],
        tier: "2",
    },
    furret: {
        num: 162,
        name: "Furret",
        types: ["Normal"],
        baseStats: {
            hp: 85,
            atk: 76,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Frisk"
        },
        heightm: 1.8,
        weightkg: 32.5,
        color: "Brown",
        prevo: "Sentret",
        evoLevel: 15,
        eggGroups: ["Field"],
        tier: "2",
    },
    hoothoot: {
        num: 163,
        name: "Hoothoot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 30,
            def: 30,
            spa: 36,
            spd: 56,
            spe: 50
        },
        abilities: {
            "0": "Insomnia",
            "1": "Keen Eye",
            H: "Tinted Lens"
        },
        heightm: 0.7,
        weightkg: 21.2,
        color: "Brown",
        evos: ["Noctowl"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    noctowl: {
        num: 164,
        name: "Noctowl",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 50,
            spa: 86,
            spd: 96,
            spe: 70
        },
        abilities: {
            "0": "Insomnia",
            "1": "Keen Eye",
            H: "Tinted Lens"
        },
        heightm: 1.6,
        weightkg: 40.8,
        color: "Brown",
        prevo: "Hoothoot",
        evoLevel: 20,
        eggGroups: ["Flying"],
        tier: "2",
    },
    ledyba: {
        num: 165,
        name: "Ledyba",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 40,
            atk: 20,
            def: 30,
            spa: 40,
            spd: 80,
            spe: 55
        },
        abilities: {
            "0": "Rattled",
            "1": "Early Bird",
            H: "Early Bird"
        },
        heightm: 1,
        weightkg: 10.8,
        color: "Red",
        evos: ["Ledian"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    ledian: {
        num: 166,
        name: "Ledian",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 55,
            atk: 35,
            def: 50,
            spa: 55,
            spd: 110,
            spe: 85
        },
        abilities: {
            "0": "Rattled",
            "1": "Early Bird",
            H: "Iron Fist"
        },
        heightm: 1.4,
        weightkg: 35.6,
        color: "Red",
        prevo: "Ledyba",
        evoLevel: 18,
        eggGroups: ["Bug"],
        tier: "1",
    },
    spinarak: {
        num: 167,
        name: "Spinarak",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 60,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Swarm",
            "1": "Insomnia",
            H: "Sniper"
        },
        heightm: 0.5,
        weightkg: 8.5,
        color: "Green",
        evos: ["Ariados"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    ariados: {
        num: 168,
        name: "Ariados",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 40
        },
        abilities: {
            "0": "Swarm",
            "1": "Insomnia",
            H: "Sniper"
        },
        heightm: 1.1,
        weightkg: 33.5,
        color: "Red",
        prevo: "Spinarak",
        evoLevel: 22,
        eggGroups: ["Bug"],
        tier: "2",
    },
    crobat: {
        num: 169,
        name: "Crobat",
        types: ["Poison", "Flying"],
        baseStats: {
            hp: 85,
            atk: 90,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 130
        },
        abilities: {
            "0": "Inner Focus",
            H: "Infiltrator"
        },
        heightm: 1.8,
        weightkg: 75,
        color: "Purple",
        prevo: "Golbat",
        evoLevel: "38",
        eggGroups: ["Flying"],
        tier: "1",
    },
    chinchou: {
        num: 170,
        name: "Chinchou",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 75,
            atk: 38,
            def: 38,
            spa: 56,
            spd: 56,
            spe: 67
        },
        abilities: {
            "0": "Volt Absorb",
            H: "Water Absorb"
        },
        heightm: 0.5,
        weightkg: 12,
        color: "Blue",
        evos: ["Lanturn"],
        eggGroups: ["Water 2"],
        tier: "1",
    },
    lanturn: {
        num: 171,
        name: "Lanturn",
        types: ["Water", "Electric"],
        baseStats: {
            hp: 125,
            atk: 58,
            def: 58,
            spa: 76,
            spd: 76,
            spe: 67
        },
        abilities: {
            "0": "Volt Absorb",
            H: "Water Absorb"
        },
        heightm: 1.2,
        weightkg: 22.5,
        color: "Blue",
        prevo: "Chinchou",
        evoLevel: 27,
        eggGroups: ["Water 2"],
        tier: "1",
    },
    pichu: {
        num: 172,
        name: "Pichu",
        types: ["Electric"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 15,
            spa: 35,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Yellow",
        evos: ["Pikachu"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        otherFormes: ["Pichu-Spiky-eared"],
        formeOrder: ["Pichu", "Pichu-Spiky-eared"],
        tier: "1"
    },
    pichuspikyeared: {
        num: 172,
        name: "Pichu-Spiky-eared",
        baseSpecies: "Pichu",
        forme: "Spiky-eared",
        types: ["Electric"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 15,
            spa: 35,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        gen: 4,
        tier: "2",
    },
    cleffa: {
        num: 173,
        name: "Cleffa",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 25,
            def: 28,
            spa: 45,
            spd: 55,
            spe: 15
        },
        abilities: {
            "0": "Friend Guard",
            "1": "Magic Guard",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 3,
        color: "Pink",
        evos: ["Clefairy"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    igglybuff: {
        num: 174,
        name: "Igglybuff",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 90,
            atk: 30,
            def: 15,
            spa: 40,
            spd: 20,
            spe: 15
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Competitive",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Pink",
        evos: ["Jigglypuff"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2"
    },
    togepi: {
        num: 175,
        name: "Togepi",
        types: ["Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 35,
            atk: 20,
            def: 65,
            spa: 40,
            spd: 65,
            spe: 20
        },
        abilities: {
            "0": "Super Luck",
            "1": "Serene Grace",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "White",
        evos: ["Togetic"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    togetic: {
        num: 176,
        name: "Togetic",
        types: ["Fairy", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 40,
            def: 85,
            spa: 80,
            spd: 105,
            spe: 40
        },
        abilities: {
            "0": "Super Luck",
            "1": "Serene Grace",
            H: "Hustle"
        },
        heightm: 0.6,
        weightkg: 3.2,
        color: "White",
        prevo: "Togepi",
        evoLevel: "10",
        evos: ["Togekiss"],
        eggGroups: ["Flying", "Fairy"],
        tier: "1",
    },
    natu: {
        num: 177,
        name: "Natu",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 45,
            spa: 70,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Synchronize",
            "1": "Early Bird",
            H: "Magic Bounce"
        },
        heightm: 0.2,
        weightkg: 2,
        color: "Green",
        evos: ["Xatu"],
        eggGroups: ["Flying"],
        tier: "1",
    },
    xatu: {
        num: 178,
        name: "Xatu",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 70,
            spa: 95,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Synchronize",
            "1": "Early Bird",
            H: "Magic Bounce"
        },
        heightm: 1.5,
        weightkg: 15,
        color: "Green",
        prevo: "Natu",
        evoLevel: 22,
        eggGroups: ["Flying"],
        tier: "1",
    },
    mareep: {
        num: 179,
        name: "Mareep",
        types: ["Electric"],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Static"
        },
        heightm: 0.6,
        weightkg: 7.8,
        color: "White",
        evos: ["Flaaffy"],
        eggGroups: ["Monster", "Field"],
        tier: "1"
    },
    flaaffy: {
        num: 180,
        name: "Flaaffy",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 80,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Static"
        },
        heightm: 0.8,
        weightkg: 13.3,
        color: "Pink",
        prevo: "Mareep",
        evoLevel: 15,
        evos: ["Ampharos"],
        eggGroups: ["Monster", "Field"],
        tier: "1"
    },
    ampharos: {
        num: 181,
        name: "Ampharos",
        types: ["Electric"],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 85,
            spa: 115,
            spd: 90,
            spe: 55
        },
        abilities: {
            "0": "Static"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        prevo: "Flaaffy",
        evoLevel: 30,
        eggGroups: ["Monster", "Field"],
        otherFormes: ["Ampharos-Mega"],
        formeOrder: ["Ampharos", "Ampharos-Mega"],
        tier: "1"
    },
    ampharosmega: {
        num: 181,
        name: "Ampharos-Mega",
        baseSpecies: "Ampharos",
        forme: "Mega",
        types: ["Electric", "Dragon"],
        baseStats: {
            hp: 90,
            atk: 95,
            def: 105,
            spa: 165,
            spd: 110,
            spe: 45
        },
        abilities: {
            "0": "Mold Breaker"
        },
        heightm: 1.4,
        weightkg: 61.5,
        color: "Yellow",
        eggGroups: ["Monster", "Field"],
        requiredItem: "Ampharosite",
        tier: "1",
    },
    bellossom: {
        num: 182,
        name: "Bellossom",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 95,
            spa: 90,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Healer"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Green",
        prevo: "Gloom",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Grass"],
        tier: "2",
    },
    marill: {
        num: 183,
        name: "Marill",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 70,
            atk: 20,
            def: 50,
            spa: 20,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Thick Fat",
            H: "Huge Power"
        },
        heightm: 0.4,
        weightkg: 8.5,
        color: "Blue",
        prevo: "Azurill",
        evoLevel: "10",
        evos: ["Azumarill"],
        eggGroups: ["Water 1", "Fairy"],
        canHatch: true,
        tier: "1"
    },
    azumarill: {
        num: 184,
        name: "Azumarill",
        types: ["Water", "Fairy"],
        baseStats: {
            hp: 100,
            atk: 50,
            def: 80,
            spa: 60,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Thick Fat",
            H: "Huge Power"
        },
        heightm: 0.8,
        weightkg: 28.5,
        color: "Blue",
        prevo: "Marill",
        evoLevel: 18,
        eggGroups: ["Water 1", "Fairy"],
        tier: "1"
    },
    sudowoodo: {
        num: 185,
        name: "Sudowoodo",
        types: ["Rock"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 115,
            spa: 30,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Rock Head"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Brown",
        prevo: "Bonsly",
        evoType: "levelMove",
        evoMove: "Mimic",
        eggGroups: ["Mineral"],
        canHatch: true,
        tier: "2"
    },
    politoed: {
        num: 186,
        name: "Politoed",
        types: ["Water"],
        baseStats: {
            hp: 90,
            atk: 75,
            def: 75,
            spa: 90,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Damp",
            H: "Drizzle"
        },
        heightm: 1.1,
        weightkg: 33.9,
        color: "Green",
        prevo: "Poliwhirl",
        evoType: "trade",
        evoItem: "King's Rock",
        eggGroups: ["Water 1"],
        tier: "2",
    },
    hoppip: {
        num: 187,
        name: "Hoppip",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 35,
            atk: 35,
            def: 40,
            spa: 35,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.4,
        weightkg: 0.5,
        color: "Pink",
        evos: ["Skiploom"],
        eggGroups: ["Fairy", "Grass"],
        tier: "2"
    },
    skiploom: {
        num: 188,
        name: "Skiploom",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 50,
            spa: 45,
            spd: 65,
            spe: 80
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Green",
        prevo: "Hoppip",
        evoLevel: 18,
        evos: ["Jumpluff"],
        eggGroups: ["Fairy", "Grass"],
        tier: "2"
    },
    jumpluff: {
        num: 189,
        name: "Jumpluff",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 75,
            atk: 55,
            def: 70,
            spa: 55,
            spd: 95,
            spe: 110
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 3,
        color: "Blue",
        prevo: "Skiploom",
        evoLevel: 27,
        eggGroups: ["Fairy", "Grass"],
        tier: "2"
    },
    aipom: {
        num: 190,
        name: "Aipom",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Run Away",
            H: "Skill Link"
        },
        heightm: 0.8,
        weightkg: 11.5,
        color: "Purple",
        evos: ["Ambipom"],
        eggGroups: ["Field"],
        tier: "1",
    },
    sunkern: {
        num: 191,
        name: "Sunkern",
        types: ["Grass"],
        baseStats: {
            hp: 30,
            atk: 30,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Early Bird"
        },
        heightm: 0.3,
        weightkg: 1.8,
        color: "Yellow",
        evos: ["Sunflora"],
        eggGroups: ["Grass"],
        tier: "2"
    },
    sunflora: {
        num: 192,
        name: "Sunflora",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 55,
            spa: 105,
            spd: 85,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Early Bird"
        },
        heightm: 0.8,
        weightkg: 8.5,
        color: "Yellow",
        prevo: "Sunkern",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Grass"],
        tier: "2"
    },
    yanma: {
        num: 193,
        name: "Yanma",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 65,
            atk: 65,
            def: 45,
            spa: 75,
            spd: 45,
            spe: 95
        },
        abilities: {
            "0": "Compound Eyes",
            H: "Speed Boost"
        },
        heightm: 1.2,
        weightkg: 38,
        color: "Red",
        evos: ["Yanmega"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    wooper: {
        num: 194,
        name: "Wooper",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 55,
            atk: 45,
            def: 45,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Damp",
            "1": "Water Absorb",
            H: "Unaware"
        },
        heightm: 0.4,
        weightkg: 8.5,
        color: "Blue",
        evos: ["Quagsire"],
        eggGroups: ["Water 1", "Field"],
        tier: "2"
    },
    quagsire: {
        num: 195,
        name: "Quagsire",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 95,
            atk: 85,
            def: 85,
            spa: 65,
            spd: 65,
            spe: 35
        },
        abilities: {
            "0": "Damp",
            "1": "Water Absorb",
            H: "Unaware"
        },
        heightm: 1.4,
        weightkg: 75,
        color: "Blue",
        prevo: "Wooper",
        evoLevel: 20,
        eggGroups: ["Water 1", "Field"],
        tier: "2"
    },
    espeon: {
        num: 196,
        name: "Espeon",
        types: ["Psychic"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 65,
            def: 60,
            spa: 130,
            spd: 95,
            spe: 110
        },
        abilities: {
            "0": "Synchronize",
            H: "Magic Bounce"
        },
        heightm: 0.9,
        weightkg: 26.5,
        color: "Purple",
        prevo: "Eevee",
        evoType: "levelFriendship",
        evoCondition: "during the day",
        eggGroups: ["Field"],
        tier: "2"
    },
    umbreon: {
        num: 197,
        name: "Umbreon",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 65,
            def: 110,
            spa: 60,
            spd: 130,
            spe: 65
        },
        abilities: {
            "0": "Synchronize",
            H: "Inner Focus"
        },
        heightm: 1,
        weightkg: 27,
        color: "Black",
        prevo: "Eevee",
        evoType: "levelFriendship",
        evoCondition: "at night",
        eggGroups: ["Field"],
        tier: "2"
    },
    murkrow: {
        num: 198,
        name: "Murkrow",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 42,
            spa: 85,
            spd: 42,
            spe: 91
        },
        abilities: {
            "0": "Insomnia",
            H: "Prankster"
        },
        heightm: 0.5,
        weightkg: 2.1,
        color: "Black",
        evos: ["Honchkrow"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    slowking: {
        num: 199,
        name: "Slowking",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 75,
            def: 80,
            spa: 100,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Oblivious",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 2,
        weightkg: 79.5,
        color: "Pink",
        prevo: "Slowpoke",
        evoType: "useItem",
        evoItem: "King's Rock",
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["Slowking-Galar"],
        formeOrder: ["Slowking", "Slowking-Galar"],
        tier: "1"
    },
    slowkinggalar: {
        num: 199,
        name: "Slowking-Galar",
        baseSpecies: "Slowking",
        forme: "Galar",
        types: ["Poison", "Psychic"],
        baseStats: {
            hp: 95,
            atk: 65,
            def: 80,
            spa: 110,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Curious Medicine",
            "1": "Own Tempo",
            H: "Regenerator"
        },
        heightm: 1.8,
        weightkg: 79.5,
        color: "Pink",
        prevo: "Slowpoke-Galar",
        evoType: "useItem",
        evoItem: "Galarica Wreath",
        eggGroups: ["Monster", "Water 1"],
        tier: "2"
    },
    misdreavus: {
        num: 200,
        name: "Misdreavus",
        types: ["Ghost"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 85,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.7,
        weightkg: 1,
        color: "Gray",
        evos: ["Mismagius"],
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    unown: {
        num: 201,
        name: "Unown",
        baseForme: "A",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 48,
            atk: 72,
            def: 48,
            spa: 72,
            spd: 48,
            spe: 48
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.5,
        weightkg: 5,
        color: "Black",
        eggGroups: ["Undiscovered"],
        cosmeticFormes: ["Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"],
        formeOrder: ["Unown", "Unown-B", "Unown-C", "Unown-D", "Unown-E", "Unown-F", "Unown-G", "Unown-H", "Unown-I", "Unown-J", "Unown-K", "Unown-L", "Unown-M", "Unown-N", "Unown-O", "Unown-P", "Unown-Q", "Unown-R", "Unown-S", "Unown-T", "Unown-U", "Unown-V", "Unown-W", "Unown-X", "Unown-Y", "Unown-Z", "Unown-Exclamation", "Unown-Question"],
        tier: "2",
    },
    wobbuffet: {
        num: 202,
        name: "Wobbuffet",
        types: ["Psychic"],
        baseStats: {
            hp: 190,
            atk: 33,
            def: 58,
            spa: 33,
            spd: 58,
            spe: 33
        },
        abilities: {
            "0": "Shadow Tag",
            H: "Telepathy"
        },
        heightm: 1.3,
        weightkg: 28.5,
        color: "Blue",
        prevo: "Wynaut",
        evoLevel: 15,
        eggGroups: ["Amorphous"],
        canHatch: true,
        tier: "2",
    },
    girafarig: {
        num: 203,
        name: "Girafarig",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 70,
            atk: 80,
            def: 65,
            spa: 90,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Early Bird",
            H: "Sap Sipper"
        },
        heightm: 1.5,
        weightkg: 41.5,
        color: "Yellow",
        eggGroups: ["Field"],
        tier: "2"
    },
    pineco: {
        num: 204,
        name: "Pineco",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 90,
            spa: 35,
            spd: 35,
            spe: 15
        },
        abilities: {
            "0": "Sturdy",
            H: "Overcoat"
        },
        heightm: 0.6,
        weightkg: 7.2,
        color: "Gray",
        evos: ["Forretress"],
        eggGroups: ["Bug"],
        tier: "2"
    },
    forretress: {
        num: 205,
        name: "Forretress",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 140,
            spa: 60,
            spd: 60,
            spe: 40
        },
        abilities: {
            "0": "Sturdy",
            H: "Overcoat"
        },
        heightm: 1.2,
        weightkg: 125.8,
        color: "Purple",
        prevo: "Pineco",
        evoLevel: 31,
        eggGroups: ["Bug"],
        tier: "2"
    },
    dunsparce: {
        num: 206,
        name: "Dunsparce",
        types: ["Normal"],
        baseStats: {
            hp: 100,
            atk: 70,
            def: 70,
            spa: 65,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Serene Grace",
            "1": "Run Away",
            H: "Rattled"
        },
        heightm: 1.5,
        weightkg: 14,
        color: "Yellow",
        eggGroups: ["Field"],
        tier: "2"
    },
    gligar: {
        num: 207,
        name: "Gligar",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 105,
            spa: 35,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Hyper Cutter",
            H: "Immunity"
        },
        heightm: 1.1,
        weightkg: 64.8,
        color: "Purple",
        evos: ["Gliscor"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    steelix: {
        num: 208,
        name: "Steelix",
        types: ["Steel", "Ground"],
        baseStats: {
            hp: 75,
            atk: 85,
            def: 200,
            spa: 55,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Rock Head",
            "1": "Sheer Force",
            H: "Sturdy"
        },
        heightm: 9.2,
        weightkg: 400,
        color: "Gray",
        prevo: "Onix",
        evoType: "useItem",
        evoItem: "Metal Coat",
        eggGroups: ["Mineral"],
        otherFormes: ["Steelix-Mega"],
        formeOrder: ["Steelix", "Steelix-Mega"],
        tier: "1",
    },
    steelixmega: {
        num: 208,
        name: "Steelix-Mega",
        baseSpecies: "Steelix",
        forme: "Mega",
        types: ["Steel", "Ground"],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 230,
            spa: 55,
            spd: 95,
            spe: 30
        },
        abilities: {
            "0": "Sand Force"
        },
        heightm: 10.5,
        weightkg: 740,
        color: "Gray",
        eggGroups: ["Mineral"],
        requiredItem: "Steelixite",
        tier: "1",
    },
    snubbull: {
        num: 209,
        name: "Snubbull",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Intimidate",
            H: "Rattled"
        },
        heightm: 0.6,
        weightkg: 7.8,
        color: "Pink",
        evos: ["Granbull"],
        eggGroups: ["Field", "Fairy"],
        tier: "1",
    },
    granbull: {
        num: 210,
        name: "Granbull",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 90,
            atk: 120,
            def: 75,
            spa: 60,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Intimidate",
            H: "Quick Feet"
        },
        heightm: 1.4,
        weightkg: 48.7,
        color: "Purple",
        prevo: "Snubbull",
        evoLevel: 23,
        eggGroups: ["Field", "Fairy"],
        tier: "1",
    },
    qwilfish: {
        num: 211,
        name: "Qwilfish",
        types: ["Water", "Poison"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            H: "Swift Swim"
        },
        heightm: 0.5,
        weightkg: 3.9,
        color: "Gray",
        eggGroups: ["Water 2"],
        otherFormes: ["Qwilfish-Hisui"],
        formeOrder: ["Qwilfish", "Qwilfish-Hisui"],
        tier: "1"
    },
    qwilfishhisui: {
        num: 211,
        name: "Qwilfish-Hisui",
        baseSpecies: "Qwilfish",
        forme: "Hisui",
        types: ["Dark", "Poison"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            "1": "Poison Point",
            H: "Swift Swim"
        },
        heightm: 0.5,
        weightkg: 3.9,
        color: "Black",
        evos: ["Overqwil"],
        eggGroups: ["Water 2"],
        tier: "1"
    },
    scizor: {
        num: 212,
        name: "Scizor",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 130,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            H: "Technician"
        },
        heightm: 1.8,
        weightkg: 118,
        color: "Red",
        prevo: "Scyther",
        evoType: "useItem",
        evoItem: "Metal Coat",
        eggGroups: ["Bug"],
        otherFormes: ["Scizor-Mega"],
        formeOrder: ["Scizor", "Scizor-Mega"],
        tier: "1"
    },
    scizormega: {
        num: 212,
        name: "Scizor-Mega",
        baseSpecies: "Scizor",
        forme: "Mega",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 150,
            def: 140,
            spa: 65,
            spd: 100,
            spe: 75
        },
        abilities: {
            "0": "Technician"
        },
        heightm: 2,
        weightkg: 125,
        color: "Red",
        eggGroups: ["Bug"],
        requiredItem: "Scizorite",
        tier: "1",
    },
    shuckle: {
        num: 213,
        name: "Shuckle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 20,
            atk: 10,
            def: 230,
            spa: 10,
            spd: 230,
            spe: 5
        },
        abilities: {
            "0": "Sturdy",
            "1": "Gluttony",
            H: "Contrary"
        },
        heightm: 0.6,
        weightkg: 20.5,
        color: "Yellow",
        eggGroups: ["Bug"],
        tier: "2",
    },
    heracross: {
        num: 214,
        name: "Heracross",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 125,
            def: 75,
            spa: 40,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Swarm",
            "1": "Guts",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 54,
        color: "Blue",
        eggGroups: ["Bug"],
        otherFormes: ["Heracross-Mega"],
        formeOrder: ["Heracross", "Heracross-Mega"],
        tier: "1"
    },
    heracrossmega: {
        num: 214,
        name: "Heracross-Mega",
        baseSpecies: "Heracross",
        forme: "Mega",
        types: ["Bug", "Fighting"],
        baseStats: {
            hp: 80,
            atk: 185,
            def: 115,
            spa: 40,
            spd: 105,
            spe: 75
        },
        abilities: {
            "0": "Skill Link"
        },
        heightm: 1.7,
        weightkg: 62.5,
        color: "Blue",
        eggGroups: ["Bug"],
        requiredItem: "Heracronite",
        tier: "1",
    },
    sneasel: {
        num: 215,
        name: "Sneasel",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 55,
            spa: 35,
            spd: 75,
            spe: 115
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Keen Eye",
            H: "Pickpocket"
        },
        heightm: 0.9,
        weightkg: 28,
        color: "Black",
        evos: ["Weavile"],
        eggGroups: ["Field"],
        otherFormes: ["Sneasel-Hisui"],
        formeOrder: ["Sneasel", "Sneasel-Hisui"],
        tier: "1"
    },
    sneaselhisui: {
        num: 215,
        name: "Sneasel-Hisui",
        baseSpecies: "Sneasel",
        forme: "Hisui",
        types: ["Fighting", "Poison"],
        baseStats: {
            hp: 55,
            atk: 95,
            def: 55,
            spa: 35,
            spd: 75,
            spe: 115
        },
        abilities: {
            "0": "Inner Focus",
            H: "Poison Touch"
        },
        heightm: 0.9,
        weightkg: 27,
        color: "Gray",
        evos: ["Sneasler"],
        eggGroups: ["Field"],
        tier: "1"
    },
    teddiursa: {
        num: 216,
        name: "Teddiursa",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 80,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Quick Feet",
            H: "Honey Gather"
        },
        heightm: 0.6,
        weightkg: 8.8,
        color: "Brown",
        evos: ["Ursaring"],
        eggGroups: ["Field"],
        tier: "1"
    },
    ursaring: {
        num: 217,
        name: "Ursaring",
        types: ["Normal"],
        baseStats: {
            hp: 90,
            atk: 130,
            def: 75,
            spa: 75,
            spd: 75,
            spe: 55
        },
        abilities: {
            "0": "Guts",
            "1": "Unnerve",
            H: "Quick Feet"
        },
        heightm: 1.8,
        weightkg: 125.8,
        color: "Brown",
        prevo: "Teddiursa",
        evoLevel: 30,
        evos: ["Ursaluna"],
        eggGroups: ["Field"],
        tier: "1"
    },
    slugma: {
        num: 218,
        name: "Slugma",
        types: ["Fire"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 40,
            spa: 70,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Flame Body",
            H: "Weak Armor"
        },
        heightm: 0.7,
        weightkg: 35,
        color: "Red",
        evos: ["Magcargo"],
        eggGroups: ["Amorphous"],
        tier: "2",
    },
    magcargo: {
        num: 219,
        name: "Magcargo",
        types: ["Fire", "Rock"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 120,
            spa: 90,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Flame Body",
            H: "Weak Armor"
        },
        heightm: 0.8,
        weightkg: 55,
        color: "Red",
        prevo: "Slugma",
        evoLevel: 38,
        eggGroups: ["Amorphous"],
        tier: "2",
    },
    swinub: {
        num: 220,
        name: "Swinub",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 50
        },
        abilities: {
            "0": "Oblivious",
            "1": "Thick Fat",
            H: "Snow Cloak"
        },
        heightm: 0.4,
        weightkg: 6.5,
        color: "Brown",
        evos: ["Piloswine"],
        eggGroups: ["Field"],
        tier: "1",
    },
    piloswine: {
        num: 221,
        name: "Piloswine",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Oblivious",
            "1": "Thick Fat",
            H: "Snow Cloak"
        },
        heightm: 1.1,
        weightkg: 55.8,
        color: "Brown",
        prevo: "Swinub",
        evoLevel: 30,
        evos: ["Mamoswine"],
        eggGroups: ["Field"],
        tier: "1",
    },
    corsola: {
        num: 222,
        name: "Corsola",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 65,
            atk: 55,
            def: 95,
            spa: 65,
            spd: 95,
            spe: 35
        },
        abilities: {
            "0": "Hustle",
            "1": "Natural Cure",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 5,
        color: "Pink",
        eggGroups: ["Water 1", "Water 3"],
        otherFormes: ["Corsola-Galar"],
        formeOrder: ["Corsola", "Corsola-Galar"],
        tier: "2",
    },
    corsolagalar: {
        num: 222,
        name: "Corsola-Galar",
        baseSpecies: "Corsola",
        forme: "Galar",
        types: ["Ghost"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 55,
            def: 100,
            spa: 65,
            spd: 100,
            spe: 30
        },
        abilities: {
            "0": "Weak Armor",
            H: "Cursed Body"
        },
        heightm: 0.6,
        weightkg: 0.5,
        color: "White",
        evos: ["Cursola"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "2",
    },
    remoraid: {
        num: 223,
        name: "Remoraid",
        types: ["Water"],
        baseStats: {
            hp: 35,
            atk: 65,
            def: 35,
            spa: 65,
            spd: 35,
            spe: 65
        },
        abilities: {
            "0": "Hustle",
            H: "Sniper"
        },
        heightm: 0.6,
        weightkg: 12,
        color: "Gray",
        evos: ["Octillery"],
        eggGroups: ["Water 1", "Water 2"],
        tier: "1",
    },
    octillery: {
        num: 224,
        name: "Octillery",
        types: ["Water"],
        baseStats: {
            hp: 75,
            atk: 105,
            def: 75,
            spa: 105,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Suction Cups",
            H: "Sniper"
        },
        heightm: 0.9,
        weightkg: 28.5,
        color: "Red",
        prevo: "Remoraid",
        evoLevel: 25,
        eggGroups: ["Water 1", "Water 2"],
        tier: "1",
    },
    delibird: {
        num: 225,
        name: "Delibird",
        types: ["Ice", "Flying"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 45,
            spa: 65,
            spd: 45,
            spe: 75
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Hustle",
            H: "Insomnia"
        },
        heightm: 0.9,
        weightkg: 16,
        color: "Red",
        eggGroups: ["Water 1", "Field"],
        tier: "2"
    },
    mantine: {
        num: 226,
        name: "Mantine",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 85,
            atk: 40,
            def: 70,
            spa: 80,
            spd: 140,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Absorb",
            H: "Water Veil"
        },
        heightm: 2.1,
        weightkg: 220,
        color: "Purple",
        prevo: "Mantyke",
        evoType: "levelExtra",
        evoCondition: "with a Remoraid in party",
        eggGroups: ["Water 1"],
        canHatch: true,
        tier: "2",
    },
    skarmory: {
        num: 227,
        name: "Skarmory",
        types: ["Steel", "Flying"],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 140,
            spa: 40,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sturdy",
            H: "Weak Armor"
        },
        heightm: 1.7,
        weightkg: 50.5,
        color: "Gray",
        eggGroups: ["Flying"],
        tier: "2",
    },
    houndour: {
        num: 228,
        name: "Houndour",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 30,
            spa: 80,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Early Bird",
            "1": "Unnerve",
            H: "Flash Fire"
        },
        heightm: 0.6,
        weightkg: 10.8,
        color: "Black",
        evos: ["Houndoom"],
        eggGroups: ["Field"],
        tier: "1"
    },
    houndoom: {
        num: 229,
        name: "Houndoom",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 50,
            spa: 110,
            spd: 80,
            spe: 95
        },
        abilities: {
            "0": "Early Bird",
            "1": "Unnerve",
            H: "Flash Fire"
        },
        heightm: 1.4,
        weightkg: 35,
        color: "Black",
        prevo: "Houndour",
        evoLevel: 24,
        eggGroups: ["Field"],
        otherFormes: ["Houndoom-Mega"],
        formeOrder: ["Houndoom", "Houndoom-Mega"],
        tier: "1"
    },
    houndoommega: {
        num: 229,
        name: "Houndoom-Mega",
        baseSpecies: "Houndoom",
        forme: "Mega",
        types: ["Dark", "Fire"],
        baseStats: {
            hp: 75,
            atk: 90,
            def: 90,
            spa: 140,
            spd: 90,
            spe: 115
        },
        abilities: {
            "0": "Solar Power"
        },
        heightm: 1.9,
        weightkg: 49.5,
        color: "Black",
        eggGroups: ["Field"],
        requiredItem: "Houndoominite",
        tier: "1",
    },
    kingdra: {
        num: 230,
        name: "Kingdra",
        types: ["Water", "Dragon"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Sniper",
            H: "Damp"
        },
        heightm: 1.8,
        weightkg: 152,
        color: "Blue",
        prevo: "Seadra",
        evoType: "useItem",
        evoItem: "Dragon Scale",
        eggGroups: ["Water 1", "Dragon"],
        tier: "1",
    },
    phanpy: {
        num: 231,
        name: "Phanpy",
        types: ["Ground"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 60,
            spa: 40,
            spd: 40,
            spe: 40
        },
        abilities: {
            "0": "Cute Charm",
            H: "Sand Veil"
        },
        heightm: 0.5,
        weightkg: 33.5,
        color: "Blue",
        evos: ["Donphan"],
        eggGroups: ["Field"],
        tier: "1"
    },
    donphan: {
        num: 232,
        name: "Donphan",
        types: ["Ground"],
        baseStats: {
            hp: 90,
            atk: 120,
            def: 120,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Sturdy",
            "1": "Battle Armor",
            H: "Sand Veil"
        },
        heightm: 1.1,
        weightkg: 120,
        color: "Gray",
        prevo: "Phanpy",
        evoLevel: 25,
        eggGroups: ["Field"],
        tier: "1"
    },
    porygon2: {
        num: 233,
        name: "Porygon2",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 80,
            def: 90,
            spa: 105,
            spd: 95,
            spe: 60
        },
        abilities: {
            "0": "Trace",
            "1": "Analytic",
            H: "Download"
        },
        heightm: 0.6,
        weightkg: 32.5,
        color: "Red",
        prevo: "Porygon",
        evoType: "useItem",
        evoItem: "Up-Grade",
        evos: ["Porygon-Z"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    stantler: {
        num: 234,
        name: "Stantler",
        types: ["Normal"],
        baseStats: {
            hp: 73,
            atk: 95,
            def: 62,
            spa: 85,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            H: "Sap Sipper"
        },
        heightm: 1.4,
        weightkg: 71.2,
        color: "Brown",
        evos: ["Wyrdeer"],
        eggGroups: ["Field"],
        tier: "1"
    },
    smeargle: {
        num: 235,
        name: "Smeargle",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 20,
            def: 35,
            spa: 20,
            spd: 45,
            spe: 75
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Technician",
            H: "Moody"
        },
        heightm: 1.2,
        weightkg: 58,
        color: "White",
        eggGroups: ["Field"],
        tier: "2",
    },
    tyrogue: {
        num: 236,
        name: "Tyrogue",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 35,
            atk: 35,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "Steadfast",
            H: "Vital Spirit"
        },
        heightm: 0.7,
        weightkg: 21,
        color: "Purple",
        evos: ["Hitmonlee", "Hitmonchan", "Hitmontop"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    hitmontop: {
        num: 237,
        name: "Hitmontop",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 50,
            atk: 95,
            def: 95,
            spa: 35,
            spd: 110,
            spe: 70
        },
        abilities: {
            "0": "Intimidate",
            "1": "Technician",
            H: "Steadfast"
        },
        heightm: 1.4,
        weightkg: 48,
        color: "Brown",
        prevo: "Tyrogue",
        evoLevel: 20,
        evoCondition: "with an Atk stat equal to its Def stat",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    smoochum: {
        num: 238,
        name: "Smoochum",
        types: ["Ice", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 45,
            atk: 30,
            def: 15,
            spa: 85,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Oblivious",
            "1": "Forewarn",
            H: "Hydration"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Pink",
        evos: ["Jynx"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    elekid: {
        num: 239,
        name: "Elekid",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 45,
            atk: 63,
            def: 37,
            spa: 65,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Vital Spirit",
            H: "Static"
        },
        heightm: 0.6,
        weightkg: 23.5,
        color: "Yellow",
        evos: ["Electabuzz"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    magby: {
        num: 240,
        name: "Magby",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 45,
            atk: 75,
            def: 37,
            spa: 70,
            spd: 55,
            spe: 83
        },
        abilities: {
            "0": "Flame Body",
            "1": "Vital Spirit",
            H: "Flash Fire"
        },
        heightm: 0.7,
        weightkg: 21.4,
        color: "Red",
        evos: ["Magmar"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    miltank: {
        num: 241,
        name: "Miltank",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 95,
            atk: 80,
            def: 105,
            spa: 40,
            spd: 70,
            spe: 100
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Scrappy",
            H: "Sap Sipper"
        },
        heightm: 1.2,
        weightkg: 75.5,
        color: "Pink",
        eggGroups: ["Field"],
        tier: "1",
    },
    blissey: {
        num: 242,
        name: "Blissey",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 255,
            atk: 10,
            def: 10,
            spa: 75,
            spd: 135,
            spe: 55
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Healer"
        },
        heightm: 1.5,
        weightkg: 46.8,
        color: "Pink",
        prevo: "Chansey",
        evoType: "levelFriendship",
        eggGroups: ["Fairy"],
        tier: "2"
    },
    raikou: {
        num: 243,
        name: "Raikou",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 85,
            def: 75,
            spa: 115,
            spd: 100,
            spe: 115
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 1.9,
        weightkg: 178,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    entei: {
        num: 244,
        name: "Entei",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 115,
            atk: 115,
            def: 85,
            spa: 90,
            spd: 75,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 2.1,
        weightkg: 198,
        color: "Brown",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    suicune: {
        num: 245,
        name: "Suicune",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 75,
            def: 115,
            spa: 90,
            spd: 115,
            spe: 85
        },
        abilities: {
            "0": "Pressure",
            H: "Inner Focus"
        },
        heightm: 2,
        weightkg: 187,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    larvitar: {
        num: 246,
        name: "Larvitar",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 50,
            atk: 64,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 41
        },
        abilities: {
            "0": "Guts",
            H: "Sand Veil"
        },
        heightm: 0.6,
        weightkg: 72,
        color: "Green",
        evos: ["Pupitar"],
        eggGroups: ["Monster"],
        tier: "1"
    },
    pupitar: {
        num: 247,
        name: "Pupitar",
        types: ["Rock", "Ground"],
        baseStats: {
            hp: 70,
            atk: 84,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 51
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 1.2,
        weightkg: 152,
        color: "Gray",
        prevo: "Larvitar",
        evoLevel: 30,
        evos: ["Tyranitar"],
        eggGroups: ["Monster"],
        tier: "1"
    },
    tyranitar: {
        num: 248,
        name: "Tyranitar",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 100,
            atk: 134,
            def: 110,
            spa: 95,
            spd: 100,
            spe: 61
        },
        abilities: {
            "0": "Unnerve",
            H: "Sand Stream"
        },
        heightm: 2,
        weightkg: 202,
        color: "Green",
        prevo: "Pupitar",
        evoLevel: 55,
        eggGroups: ["Monster"],
        otherFormes: ["Tyranitar-Mega"],
        formeOrder: ["Tyranitar", "Tyranitar-Mega"],
        tier: "1"
    },
    tyranitarmega: {
        num: 248,
        name: "Tyranitar-Mega",
        baseSpecies: "Tyranitar",
        forme: "Mega",
        types: ["Rock", "Dark"],
        baseStats: {
            hp: 100,
            atk: 164,
            def: 150,
            spa: 95,
            spd: 120,
            spe: 71
        },
        abilities: {
            "0": "Sand Stream"
        },
        heightm: 2.5,
        weightkg: 255,
        color: "Green",
        eggGroups: ["Monster"],
        requiredItem: "Tyranitarite",
        tier: "1",
    },
    lugia: {
        num: 249,
        name: "Lugia",
        types: ["Psychic", "Flying"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 90,
            def: 130,
            spa: 90,
            spd: 154,
            spe: 110
        },
        abilities: {
            "0": "Pressure",
            H: "Multiscale"
        },
        heightm: 5.2,
        weightkg: 216,
        color: "White",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    hooh: {
        num: 250,
        name: "Ho-Oh",
        types: ["Fire", "Flying"],
        gender: "N",
        baseStats: {
            hp: 106,
            atk: 130,
            def: 90,
            spa: 110,
            spd: 154,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Regenerator"
        },
        heightm: 3.8,
        weightkg: 199,
        color: "Red",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    celebi: {
        num: 251,
        name: "Celebi",
        types: ["Psychic", "Grass"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Natural Cure"
        },
        heightm: 0.6,
        weightkg: 5,
        color: "Green",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    treecko: {
        num: 252,
        name: "Treecko",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 45,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 70
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 0.5,
        weightkg: 5,
        color: "Green",
        evos: ["Grovyle"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    grovyle: {
        num: 253,
        name: "Grovyle",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 65,
            def: 45,
            spa: 85,
            spd: 65,
            spe: 95
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 0.9,
        weightkg: 21.6,
        color: "Green",
        prevo: "Treecko",
        evoLevel: 16,
        evos: ["Sceptile"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    sceptile: {
        num: 254,
        name: "Sceptile",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 65,
            spa: 105,
            spd: 85,
            spe: 120
        },
        abilities: {
            "0": "Overgrow",
            H: "Unburden"
        },
        heightm: 1.7,
        weightkg: 52.2,
        color: "Green",
        prevo: "Grovyle",
        evoLevel: 36,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["Sceptile-Mega"],
        formeOrder: ["Sceptile", "Sceptile-Mega"],
        tier: "1",
    },
    sceptilemega: {
        num: 254,
        name: "Sceptile-Mega",
        baseSpecies: "Sceptile",
        forme: "Mega",
        types: ["Grass", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 110,
            def: 75,
            spa: 145,
            spd: 85,
            spe: 145
        },
        abilities: {
            "0": "Lightning Rod"
        },
        heightm: 1.9,
        weightkg: 55.2,
        color: "Green",
        eggGroups: ["Monster", "Dragon"],
        requiredItem: "Sceptilite",
        tier: "2",
    },
    torchic: {
        num: 255,
        name: "Torchic",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 60,
            def: 40,
            spa: 70,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 0.4,
        weightkg: 2.5,
        color: "Red",
        evos: ["Combusken"],
        eggGroups: ["Field"],
        tier: "1",
    },
    combusken: {
        num: 256,
        name: "Combusken",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 85,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 0.9,
        weightkg: 19.5,
        color: "Red",
        prevo: "Torchic",
        evoLevel: 16,
        evos: ["Blaziken"],
        eggGroups: ["Field"],
        tier: "1",
    },
    blaziken: {
        num: 257,
        name: "Blaziken",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 120,
            def: 70,
            spa: 110,
            spd: 70,
            spe: 80
        },
        abilities: {
            "0": "Blaze",
            H: "Speed Boost"
        },
        heightm: 1.9,
        weightkg: 52,
        color: "Red",
        prevo: "Combusken",
        evoLevel: 36,
        eggGroups: ["Field"],
        otherFormes: ["Blaziken-Mega"],
        formeOrder: ["Blaziken", "Blaziken-Mega"],
        tier: "1",
    },
    blazikenmega: {
        num: 257,
        name: "Blaziken-Mega",
        baseSpecies: "Blaziken",
        forme: "Mega",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 160,
            def: 80,
            spa: 130,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Speed Boost"
        },
        heightm: 1.9,
        weightkg: 52,
        color: "Red",
        eggGroups: ["Field"],
        requiredItem: "Blazikenite",
        tier: "2",
    },
    mudkip: {
        num: 258,
        name: "Mudkip",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 0.4,
        weightkg: 7.6,
        color: "Blue",
        evos: ["Marshtomp"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    marshtomp: {
        num: 259,
        name: "Marshtomp",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 0.7,
        weightkg: 28,
        color: "Blue",
        prevo: "Mudkip",
        evoLevel: 16,
        evos: ["Swampert"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1",
    },
    swampert: {
        num: 260,
        name: "Swampert",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 110,
            def: 90,
            spa: 85,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Damp"
        },
        heightm: 1.5,
        weightkg: 81.9,
        color: "Blue",
        prevo: "Marshtomp",
        evoLevel: 36,
        eggGroups: ["Monster", "Water 1"],
        otherFormes: ["Swampert-Mega"],
        formeOrder: ["Swampert", "Swampert-Mega"],
        tier: "1",
    },
    swampertmega: {
        num: 260,
        name: "Swampert-Mega",
        baseSpecies: "Swampert",
        forme: "Mega",
        types: ["Water", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 150,
            def: 110,
            spa: 95,
            spd: 110,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim"
        },
        heightm: 1.9,
        weightkg: 102,
        color: "Blue",
        eggGroups: ["Monster", "Water 1"],
        requiredItem: "Swampertite",
        tier: "1",
    },
    poochyena: {
        num: 261,
        name: "Poochyena",
        types: ["Dark"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 35,
            spa: 30,
            spd: 30,
            spe: 35
        },
        abilities: {
            "0": "Run Away",
            H: "Rattled"
        },
        heightm: 0.5,
        weightkg: 13.6,
        color: "Gray",
        evos: ["Mightyena"],
        eggGroups: ["Field"],
        tier: "1",
    },
    mightyena: {
        num: 262,
        name: "Mightyena",
        types: ["Dark"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 60,
            spe: 70
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 1,
        weightkg: 37,
        color: "Gray",
        prevo: "Poochyena",
        evoLevel: 18,
        eggGroups: ["Field"],
        tier: "1",
    },
    zigzagoon: {
        num: 263,
        name: "Zigzagoon",
        types: ["Normal"],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 41,
            spa: 30,
            spd: 41,
            spe: 60
        },
        abilities: {
            "0": "Pickup",
            "1": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.4,
        weightkg: 17.5,
        color: "Brown",
        evos: ["Linoone"],
        eggGroups: ["Field"],
        otherFormes: ["Zigzagoon-Galar"],
        formeOrder: ["Zigzagoon", "Zigzagoon-Galar"],
        tier: "2",
    },
    zigzagoongalar: {
        num: 263,
        name: "Zigzagoon-Galar",
        baseSpecies: "Zigzagoon",
        forme: "Galar",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 41,
            spa: 30,
            spd: 41,
            spe: 60
        },
        abilities: {
            "0": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.4,
        weightkg: 17.5,
        color: "White",
        evos: ["Linoone-Galar"],
        eggGroups: ["Field"],
        tier: "1",
    },
    linoone: {
        num: 264,
        name: "Linoone",
        types: ["Normal"],
        baseStats: {
            hp: 78,
            atk: 70,
            def: 61,
            spa: 50,
            spd: 61,
            spe: 100
        },
        abilities: {
            "0": "Pickup",
            "1": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.5,
        weightkg: 32.5,
        color: "White",
        prevo: "Zigzagoon",
        evoLevel: 20,
        eggGroups: ["Field"],
        otherFormes: ["Linoone-Galar"],
        formeOrder: ["Linoone", "Linoone-Galar"],
        tier: "2",
    },
    linoonegalar: {
        num: 264,
        name: "Linoone-Galar",
        baseSpecies: "Linoone",
        forme: "Galar",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 78,
            atk: 70,
            def: 61,
            spa: 50,
            spd: 61,
            spe: 100
        },
        abilities: {
            "0": "Gluttony",
            H: "Quick Feet"
        },
        heightm: 0.5,
        weightkg: 32.5,
        color: "White",
        prevo: "Zigzagoon-Galar",
        evoLevel: 20,
        evos: ["Obstagoon"],
        eggGroups: ["Field"],
        tier: "1",
    },
    wurmple: {
        num: 265,
        name: "Wurmple",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 45,
            def: 35,
            spa: 20,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Shield Dust",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 3.6,
        color: "Red",
        evos: ["Silcoon", "Cascoon"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    silcoon: {
        num: 266,
        name: "Silcoon",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.6,
        weightkg: 10,
        color: "White",
        prevo: "Wurmple",
        evoLevel: 7,
        evos: ["Beautifly"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    beautifly: {
        num: 267,
        name: "Beautifly",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 50,
            spa: 100,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            H: "Rivalry"
        },
        heightm: 1,
        weightkg: 28.4,
        color: "Yellow",
        prevo: "Silcoon",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "2",
    },
    cascoon: {
        num: 268,
        name: "Cascoon",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 55,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Shed Skin"
        },
        heightm: 0.7,
        weightkg: 11.5,
        color: "Purple",
        prevo: "Wurmple",
        evoLevel: 7,
        evos: ["Dustox"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    dustox: {
        num: 269,
        name: "Dustox",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 70,
            spa: 50,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Shield Dust",
            H: "Compound Eyes"
        },
        heightm: 1.2,
        weightkg: 31.6,
        color: "Green",
        prevo: "Cascoon",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "2",
    },
    lotad: {
        num: 270,
        name: "Lotad",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 40,
            spd: 50,
            spe: 30
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 0.5,
        weightkg: 2.6,
        color: "Green",
        evos: ["Lombre"],
        eggGroups: ["Water 1", "Grass"],
        tier: "1",
    },
    lombre: {
        num: 271,
        name: "Lombre",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 50,
            spa: 60,
            spd: 70,
            spe: 50
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 1.2,
        weightkg: 32.5,
        color: "Green",
        prevo: "Lotad",
        evoLevel: 14,
        evos: ["Ludicolo"],
        eggGroups: ["Water 1", "Grass"],
        tier: "1",
    },
    ludicolo: {
        num: 272,
        name: "Ludicolo",
        types: ["Water", "Grass"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 70,
            spa: 90,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rain Dish",
            H: "Own Tempo"
        },
        heightm: 1.5,
        weightkg: 55,
        color: "Green",
        prevo: "Lombre",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Water 1", "Grass"],
        tier: "1",
    },
    seedot: {
        num: 273,
        name: "Seedot",
        types: ["Grass"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 50,
            spa: 30,
            spd: 30,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 0.5,
        weightkg: 4,
        color: "Brown",
        evos: ["Nuzleaf"],
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    nuzleaf: {
        num: 274,
        name: "Nuzleaf",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 1,
        weightkg: 28,
        color: "Brown",
        prevo: "Seedot",
        evoLevel: 14,
        evos: ["Shiftry"],
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    shiftry: {
        num: 275,
        name: "Shiftry",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 60,
            spa: 90,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Early Bird",
            H: "Pickpocket"
        },
        heightm: 1.3,
        weightkg: 59.6,
        color: "Brown",
        prevo: "Nuzleaf",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    taillow: {
        num: 276,
        name: "Taillow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Guts",
            H: "Scrappy"
        },
        heightm: 0.3,
        weightkg: 2.3,
        color: "Blue",
        evos: ["Swellow"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    swellow: {
        num: 277,
        name: "Swellow",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 60,
            spa: 75,
            spd: 50,
            spe: 125
        },
        abilities: {
            "0": "Guts",
            H: "Scrappy"
        },
        heightm: 0.7,
        weightkg: 19.8,
        color: "Blue",
        prevo: "Taillow",
        evoLevel: 22,
        eggGroups: ["Flying"],
        tier: "2",
    },
    wingull: {
        num: 278,
        name: "Wingull",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 30,
            spa: 55,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Hydration",
            H: "Rain Dish"
        },
        heightm: 0.6,
        weightkg: 9.5,
        color: "White",
        evos: ["Pelipper"],
        eggGroups: ["Water 1", "Flying"],
        tier: "2"
    },
    pelipper: {
        num: 279,
        name: "Pelipper",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 100,
            spa: 95,
            spd: 70,
            spe: 65
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Drizzle",
            H: "Rain Dish"
        },
        heightm: 1.2,
        weightkg: 28,
        color: "Yellow",
        prevo: "Wingull",
        evoLevel: 25,
        eggGroups: ["Water 1", "Flying"],
        tier: "2"
    },
    ralts: {
        num: 280,
        name: "Ralts",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 28,
            atk: 25,
            def: 25,
            spa: 45,
            spd: 35,
            spe: 40
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 0.4,
        weightkg: 6.6,
        color: "White",
        evos: ["Kirlia"],
        eggGroups: ["Human-Like", "Amorphous"],
        tier: "1"
    },
    kirlia: {
        num: 281,
        name: "Kirlia",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 35,
            spa: 65,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 0.8,
        weightkg: 20.2,
        color: "White",
        prevo: "Ralts",
        evoLevel: 20,
        evos: ["Gardevoir", "Gallade"],
        eggGroups: ["Human-Like", "Amorphous"],
        tier: "1"
    },
    gardevoir: {
        num: 282,
        name: "Gardevoir",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 68,
            atk: 65,
            def: 65,
            spa: 125,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Synchronize",
            "1": "Trace",
            H: "Telepathy"
        },
        heightm: 1.6,
        weightkg: 48.4,
        color: "White",
        prevo: "Kirlia",
        evoLevel: 38,
        eggGroups: ["Human-Like", "Amorphous"],
        otherFormes: ["Gardevoir-Mega"],
        formeOrder: ["Gardevoir", "Gardevoir-Mega"],
        tier: "1"
    },
    gardevoirmega: {
        num: 282,
        name: "Gardevoir-Mega",
        baseSpecies: "Gardevoir",
        forme: "Mega",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 68,
            atk: 85,
            def: 65,
            spa: 165,
            spd: 135,
            spe: 100
        },
        abilities: {
            "0": "Pixilate"
        },
        heightm: 1.6,
        weightkg: 48.4,
        color: "White",
        eggGroups: ["Amorphous"],
        requiredItem: "Gardevoirite",
        tier: "1",
    },
    surskit: {
        num: 283,
        name: "Surskit",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 32,
            spa: 50,
            spd: 52,
            spe: 65
        },
        abilities: {
            "0": "Swift Swim",
            H: "Rain Dish"
        },
        heightm: 0.5,
        weightkg: 1.7,
        color: "Blue",
        evos: ["Masquerain"],
        eggGroups: ["Water 1", "Bug"],
        tier: "1"
    },
    masquerain: {
        num: 284,
        name: "Masquerain",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 62,
            spa: 100,
            spd: 82,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            H: "Unnerve"
        },
        heightm: 0.8,
        weightkg: 3.6,
        color: "Blue",
        prevo: "Surskit",
        evoLevel: 22,
        eggGroups: ["Water 1", "Bug"],
        tier: "1"
    },
    shroomish: {
        num: 285,
        name: "Shroomish",
        types: ["Grass"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 35
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Poison Heal",
            H: "Quick Feet"
        },
        heightm: 0.4,
        weightkg: 4.5,
        color: "Brown",
        evos: ["Breloom"],
        eggGroups: ["Fairy", "Grass"],
        tier: "1"
    },
    breloom: {
        num: 286,
        name: "Breloom",
        types: ["Grass", "Fighting"],
        baseStats: {
            hp: 60,
            atk: 130,
            def: 80,
            spa: 60,
            spd: 60,
            spe: 70
        },
        abilities: {
            "0": "Effect Spore",
            "1": "Poison Heal",
            H: "Technician"
        },
        heightm: 1.2,
        weightkg: 39.2,
        color: "Green",
        prevo: "Shroomish",
        evoLevel: 23,
        eggGroups: ["Fairy", "Grass"],
        tier: "1"
    },
    slakoth: {
        num: 287,
        name: "Slakoth",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 35,
            spd: 35,
            spe: 30
        },
        abilities: {
            "0": "Truant"
        },
        heightm: 0.8,
        weightkg: 24,
        color: "Brown",
        evos: ["Vigoroth"],
        eggGroups: ["Field"],
        tier: "2"
    },
    vigoroth: {
        num: 288,
        name: "Vigoroth",
        types: ["Normal"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 55,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Vital Spirit"
        },
        heightm: 1.4,
        weightkg: 46.5,
        color: "White",
        prevo: "Slakoth",
        evoLevel: 18,
        evos: ["Slaking"],
        eggGroups: ["Field"],
        tier: "2"
    },
    slaking: {
        num: 289,
        name: "Slaking",
        types: ["Normal"],
        baseStats: {
            hp: 150,
            atk: 160,
            def: 100,
            spa: 95,
            spd: 65,
            spe: 100
        },
        abilities: {
            "0": "Truant"
        },
        heightm: 2,
        weightkg: 130.5,
        color: "Brown",
        prevo: "Vigoroth",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "2"
    },
    nincada: {
        num: 290,
        name: "Nincada",
        types: ["Bug", "Ground"],
        baseStats: {
            hp: 31,
            atk: 45,
            def: 90,
            spa: 30,
            spd: 30,
            spe: 40
        },
        abilities: {
            "0": "Compound Eyes",
            H: "Run Away"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Gray",
        evos: ["Ninjask", "Shedinja"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    ninjask: {
        num: 291,
        name: "Ninjask",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 61,
            atk: 90,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 160
        },
        abilities: {
            "0": "Speed Boost",
            H: "Infiltrator"
        },
        heightm: 0.8,
        weightkg: 12,
        color: "Yellow",
        prevo: "Nincada",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "2",
    },
    shedinja: {
        num: 292,
        name: "Shedinja",
        types: ["Bug", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 1,
            atk: 90,
            def: 45,
            spa: 30,
            spd: 30,
            spe: 40
        },
        maxHP: 1,
        abilities: {
            "0": "Wonder Guard"
        },
        heightm: 0.8,
        weightkg: 1.2,
        color: "Brown",
        prevo: "Nincada",
        evoLevel: 20,
        eggGroups: ["Mineral"],
        tier: "2",
    },
    whismur: {
        num: 293,
        name: "Whismur",
        types: ["Normal"],
        baseStats: {
            hp: 64,
            atk: 51,
            def: 23,
            spa: 51,
            spd: 23,
            spe: 28
        },
        abilities: {
            "0": "Soundproof",
            H: "Rattled"
        },
        heightm: 0.6,
        weightkg: 16.3,
        color: "Pink",
        evos: ["Loudred"],
        eggGroups: ["Monster", "Field"],
        tier: "2",
    },
    loudred: {
        num: 294,
        name: "Loudred",
        types: ["Normal"],
        baseStats: {
            hp: 84,
            atk: 71,
            def: 43,
            spa: 71,
            spd: 43,
            spe: 48
        },
        abilities: {
            "0": "Soundproof",
            H: "Scrappy"
        },
        heightm: 1,
        weightkg: 40.5,
        color: "Blue",
        prevo: "Whismur",
        evoLevel: 20,
        evos: ["Exploud"],
        eggGroups: ["Monster", "Field"],
        tier: "2",
    },
    exploud: {
        num: 295,
        name: "Exploud",
        types: ["Normal"],
        baseStats: {
            hp: 104,
            atk: 91,
            def: 63,
            spa: 91,
            spd: 73,
            spe: 68
        },
        abilities: {
            "0": "Soundproof",
            H: "Scrappy"
        },
        heightm: 1.5,
        weightkg: 84,
        color: "Blue",
        prevo: "Loudred",
        evoLevel: 40,
        eggGroups: ["Monster", "Field"],
        tier: "2",
    },
    makuhita: {
        num: 296,
        name: "Makuhita",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 72,
            atk: 60,
            def: 30,
            spa: 20,
            spd: 30,
            spe: 25
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Guts",
            H: "Sheer Force"
        },
        heightm: 1,
        weightkg: 86.4,
        color: "Yellow",
        evos: ["Hariyama"],
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    hariyama: {
        num: 297,
        name: "Hariyama",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 144,
            atk: 120,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Guts",
            H: "Sheer Force"
        },
        heightm: 2.3,
        weightkg: 253.8,
        color: "Brown",
        prevo: "Makuhita",
        evoLevel: 24,
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    azurill: {
        num: 298,
        name: "Azurill",
        types: ["Normal", "Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 20,
            def: 40,
            spa: 20,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Thick Fat",
            H: "Huge Power"
        },
        heightm: 0.2,
        weightkg: 2,
        color: "Blue",
        evos: ["Marill"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1"
    },
    nosepass: {
        num: 299,
        name: "Nosepass",
        types: ["Rock"],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 135,
            spa: 45,
            spd: 90,
            spe: 30
        },
        abilities: {
            "0": "Magnet Pull",
            H: "Sand Force"
        },
        heightm: 1,
        weightkg: 97,
        color: "Gray",
        evos: ["Probopass"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    skitty: {
        num: 300,
        name: "Skitty",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 50,
            atk: 45,
            def: 45,
            spa: 35,
            spd: 35,
            spe: 50
        },
        abilities: {
            "0": "Normalize"
        },
        heightm: 0.6,
        weightkg: 11,
        color: "Pink",
        evos: ["Delcatty"],
        eggGroups: ["Field", "Fairy"],
        tier: "1",
    },
    delcatty: {
        num: 301,
        name: "Delcatty",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 65,
            def: 65,
            spa: 55,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Normalize"
        },
        heightm: 1.1,
        weightkg: 32.6,
        color: "Purple",
        prevo: "Skitty",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Field", "Fairy"],
        tier: "1",
    },
    sableye: {
        num: 302,
        name: "Sableye",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 75,
            spa: 65,
            spd: 65,
            spe: 50
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Stall",
            H: "Prankster"
        },
        heightm: 0.5,
        weightkg: 11,
        color: "Purple",
        eggGroups: ["Human-Like"],
        otherFormes: ["Sableye-Mega"],
        formeOrder: ["Sableye", "Sableye-Mega"],
        tier: "1"
    },
    sableyemega: {
        num: 302,
        name: "Sableye-Mega",
        baseSpecies: "Sableye",
        forme: "Mega",
        types: ["Dark", "Ghost"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 125,
            spa: 85,
            spd: 115,
            spe: 20
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 0.5,
        weightkg: 161,
        color: "Purple",
        eggGroups: ["Human-Like"],
        requiredItem: "Sablenite",
        tier: "2",
    },
    mawile: {
        num: 303,
        name: "Mawile",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 85,
            spa: 55,
            spd: 55,
            spe: 50
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Intimidate",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 11.5,
        color: "Black",
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["Mawile-Mega"],
        formeOrder: ["Mawile", "Mawile-Mega"],
        tier: "1",
    },
    mawilemega: {
        num: 303,
        name: "Mawile-Mega",
        baseSpecies: "Mawile",
        forme: "Mega",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 50,
            atk: 105,
            def: 125,
            spa: 55,
            spd: 95,
            spe: 50
        },
        abilities: {
            "0": "Huge Power"
        },
        heightm: 1,
        weightkg: 23.5,
        color: "Black",
        eggGroups: ["Field", "Fairy"],
        requiredItem: "Mawilite",
        tier: "1",
    },
    aron: {
        num: 304,
        name: "Aron",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 100,
            spa: 40,
            spd: 40,
            spe: 30
        },
        abilities: {
            "0": "Heavy Metal",
            "1": "Rock Head",
            H: "Sturdy"
        },
        heightm: 0.4,
        weightkg: 60,
        color: "Gray",
        evos: ["Lairon"],
        eggGroups: ["Monster"],
        tier: "1",
    },
    lairon: {
        num: 305,
        name: "Lairon",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 140,
            spa: 50,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Heavy Metal",
            "1": "Rock Head",
            H: "Sturdy"
        },
        heightm: 0.9,
        weightkg: 120,
        color: "Gray",
        prevo: "Aron",
        evoLevel: 26,
        evos: ["Aggron"],
        eggGroups: ["Monster"],
        tier: "1",
    },
    aggron: {
        num: 306,
        name: "Aggron",
        types: ["Steel", "Rock"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 180,
            spa: 60,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Heavy Metal",
            "1": "Rock Head",
            H: "Sturdy"
        },
        heightm: 2.1,
        weightkg: 360,
        color: "Gray",
        prevo: "Lairon",
        evoLevel: 42,
        eggGroups: ["Monster"],
        otherFormes: ["Aggron-Mega"],
        formeOrder: ["Aggron", "Aggron-Mega"],
        tier: "1",
    },
    aggronmega: {
        num: 306,
        name: "Aggron-Mega",
        baseSpecies: "Aggron",
        forme: "Mega",
        types: ["Steel"],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 230,
            spa: 60,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Filter"
        },
        heightm: 2.2,
        weightkg: 395,
        color: "Gray",
        eggGroups: ["Monster"],
        requiredItem: "Aggronite",
        tier: "1",
    },
    meditite: {
        num: 307,
        name: "Meditite",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 55,
            spe: 60
        },
        abilities: {
            "0": "Pure Power",
            H: "Inner Focus"
        },
        heightm: 0.6,
        weightkg: 11.2,
        color: "Blue",
        evos: ["Medicham"],
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    medicham: {
        num: 308,
        name: "Medicham",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 80
        },
        abilities: {
            "0": "Pure Power",
            H: "Inner Focus"
        },
        heightm: 1.3,
        weightkg: 31.5,
        color: "Red",
        prevo: "Meditite",
        evoLevel: 34,
        eggGroups: ["Human-Like"],
        otherFormes: ["Medicham-Mega"],
        formeOrder: ["Medicham", "Medicham-Mega"],
        tier: "1"
    },
    medichammega: {
        num: 308,
        name: "Medicham-Mega",
        baseSpecies: "Medicham",
        forme: "Mega",
        types: ["Fighting", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 85,
            spa: 80,
            spd: 85,
            spe: 100
        },
        abilities: {
            "0": "Pure Power"
        },
        heightm: 1.3,
        weightkg: 31.5,
        color: "Red",
        eggGroups: ["Human-Like"],
        requiredItem: "Medichamite",
        tier: "1",
    },
    electrike: {
        num: 309,
        name: "Electrike",
        types: ["Electric"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 65,
            spd: 40,
            spe: 65
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 0.6,
        weightkg: 15.2,
        color: "Green",
        evos: ["Manectric"],
        eggGroups: ["Field"],
        tier: "1",
    },
    manectric: {
        num: 310,
        name: "Manectric",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 60,
            spa: 105,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Static",
            H: "Lightning Rod"
        },
        heightm: 1.5,
        weightkg: 40.2,
        color: "Yellow",
        prevo: "Electrike",
        evoLevel: 26,
        eggGroups: ["Field"],
        otherFormes: ["Manectric-Mega"],
        formeOrder: ["Manectric", "Manectric-Mega"],
        tier: "1",
    },
    manectricmega: {
        num: 310,
        name: "Manectric-Mega",
        baseSpecies: "Manectric",
        forme: "Mega",
        types: ["Electric"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 80,
            spa: 135,
            spd: 80,
            spe: 135
        },
        abilities: {
            "0": "Intimidate"
        },
        heightm: 1.8,
        weightkg: 44,
        color: "Yellow",
        eggGroups: ["Field"],
        requiredItem: "Manectite",
        tier: "1",
    },
    plusle: {
        num: 311,
        name: "Plusle",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 40,
            spa: 85,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Plus",
            H: "Lightning Rod"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        eggGroups: ["Fairy"],
        tier: "2",
    },
    minun: {
        num: 312,
        name: "Minun",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 50,
            spa: 75,
            spd: 85,
            spe: 95
        },
        abilities: {
            "0": "Minus",
            H: "Volt Absorb"
        },
        heightm: 0.4,
        weightkg: 4.2,
        color: "Yellow",
        eggGroups: ["Fairy"],
        tier: "2",
    },
    volbeat: {
        num: 313,
        name: "Volbeat",
        types: ["Bug"],
        gender: "M",
        baseStats: {
            hp: 65,
            atk: 73,
            def: 75,
            spa: 47,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Illuminate",
            "1": "Swarm",
            H: "Prankster"
        },
        heightm: 0.7,
        weightkg: 17.7,
        color: "Gray",
        eggGroups: ["Bug", "Human-Like"],
        tier: "2",
    },
    illumise: {
        num: 314,
        name: "Illumise",
        types: ["Bug"],
        gender: "F",
        baseStats: {
            hp: 65,
            atk: 47,
            def: 75,
            spa: 73,
            spd: 85,
            spe: 85
        },
        abilities: {
            "0": "Oblivious",
            "1": "Tinted Lens",
            H: "Prankster"
        },
        heightm: 0.6,
        weightkg: 17.7,
        color: "Purple",
        eggGroups: ["Bug", "Human-Like"],
        tier: "2",
    },
    roselia: {
        num: 315,
        name: "Roselia",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 45,
            spa: 100,
            spd: 80,
            spe: 65
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Poison Point",
            H: "Leaf Guard"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Green",
        prevo: "Budew",
        evoLevel: "16",
        evos: ["Roserade"],
        eggGroups: ["Fairy", "Grass"],
        canHatch: true,
        tier: "1",
    },
    gulpin: {
        num: 316,
        name: "Gulpin",
        types: ["Poison"],
        baseStats: {
            hp: 70,
            atk: 43,
            def: 53,
            spa: 43,
            spd: 53,
            spe: 40
        },
        abilities: {
            "0": "Liquid Ooze",
            "1": "Sticky Hold",
            H: "Gluttony"
        },
        heightm: 0.4,
        weightkg: 10.3,
        color: "Green",
        evos: ["Swalot"],
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    swalot: {
        num: 317,
        name: "Swalot",
        types: ["Poison"],
        baseStats: {
            hp: 100,
            atk: 73,
            def: 83,
            spa: 73,
            spd: 83,
            spe: 55
        },
        abilities: {
            "0": "Liquid Ooze",
            "1": "Sticky Hold",
            H: "Gluttony"
        },
        heightm: 1.7,
        weightkg: 80,
        color: "Purple",
        prevo: "Gulpin",
        evoLevel: 26,
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    carvanha: {
        num: 318,
        name: "Carvanha",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 45,
            atk: 90,
            def: 20,
            spa: 65,
            spd: 20,
            spe: 65
        },
        abilities: {
            "0": "Rough Skin",
            H: "Speed Boost"
        },
        heightm: 0.8,
        weightkg: 20.8,
        color: "Red",
        evos: ["Sharpedo"],
        eggGroups: ["Water 2"],
        tier: "1",
    },
    sharpedo: {
        num: 319,
        name: "Sharpedo",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 40,
            spa: 95,
            spd: 40,
            spe: 95
        },
        abilities: {
            "0": "Rough Skin",
            H: "Speed Boost"
        },
        heightm: 1.8,
        weightkg: 88.8,
        color: "Blue",
        prevo: "Carvanha",
        evoLevel: 30,
        eggGroups: ["Water 2"],
        otherFormes: ["Sharpedo-Mega"],
        formeOrder: ["Sharpedo", "Sharpedo-Mega"],
        tier: "1",
    },
    sharpedomega: {
        num: 319,
        name: "Sharpedo-Mega",
        baseSpecies: "Sharpedo",
        forme: "Mega",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 70,
            atk: 140,
            def: 70,
            spa: 110,
            spd: 65,
            spe: 105
        },
        abilities: {
            "0": "Strong Jaw"
        },
        heightm: 2.5,
        weightkg: 130.3,
        color: "Blue",
        eggGroups: ["Water 2"],
        requiredItem: "Sharpedonite",
        tier: "1",
    },
    wailmer: {
        num: 320,
        name: "Wailmer",
        types: ["Water"],
        baseStats: {
            hp: 130,
            atk: 70,
            def: 35,
            spa: 70,
            spd: 35,
            spe: 60
        },
        abilities: {
            "0": "Water Veil",
            "1": "Oblivious",
            H: "Pressure"
        },
        heightm: 2,
        weightkg: 130,
        color: "Blue",
        evos: ["Wailord"],
        eggGroups: ["Field", "Water 2"],
        tier: "1",
    },
    wailord: {
        num: 321,
        name: "Wailord",
        types: ["Water"],
        baseStats: {
            hp: 170,
            atk: 90,
            def: 45,
            spa: 90,
            spd: 45,
            spe: 60
        },
        abilities: {
            "0": "Water Veil",
            "1": "Oblivious",
            H: "Pressure"
        },
        heightm: 14.5,
        weightkg: 398,
        color: "Blue",
        prevo: "Wailmer",
        evoLevel: 40,
        eggGroups: ["Field", "Water 2"],
        tier: "1",
    },
    numel: {
        num: 322,
        name: "Numel",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 40,
            spa: 65,
            spd: 45,
            spe: 35
        },
        abilities: {
            "0": "Oblivious",
            "1": "Simple",
            H: "Own Tempo"
        },
        heightm: 0.7,
        weightkg: 24,
        color: "Yellow",
        evos: ["Camerupt"],
        eggGroups: ["Field"],
        tier: "1"
    },
    camerupt: {
        num: 323,
        name: "Camerupt",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 70,
            spa: 105,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Magma Armor",
            "1": "Solid Rock",
            H: "Anger Point"
        },
        heightm: 1.9,
        weightkg: 220,
        color: "Red",
        prevo: "Numel",
        evoLevel: 33,
        eggGroups: ["Field"],
        otherFormes: ["Camerupt-Mega"],
        formeOrder: ["Camerupt", "Camerupt-Mega"],
        tier: "1"
    },
    cameruptmega: {
        num: 323,
        name: "Camerupt-Mega",
        baseSpecies: "Camerupt",
        forme: "Mega",
        types: ["Fire", "Ground"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 100,
            spa: 145,
            spd: 105,
            spe: 20
        },
        abilities: {
            "0": "Sheer Force"
        },
        heightm: 2.5,
        weightkg: 320.5,
        color: "Red",
        eggGroups: ["Field"],
        requiredItem: "Cameruptite",
        tier: "1",
    },
    torkoal: {
        num: 324,
        name: "Torkoal",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 140,
            spa: 85,
            spd: 70,
            spe: 20
        },
        abilities: {
            "0": "Shell Armor",
            H: "Drought"
        },
        heightm: 0.5,
        weightkg: 80.4,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "1"
    },
    spoink: {
        num: 325,
        name: "Spoink",
        types: ["Psychic"],
        baseStats: {
            hp: 60,
            atk: 25,
            def: 35,
            spa: 70,
            spd: 80,
            spe: 60
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Gluttony"
        },
        heightm: 0.7,
        weightkg: 30.6,
        color: "Black",
        evos: ["Grumpig"],
        eggGroups: ["Field"],
        tier: "2"
    },
    grumpig: {
        num: 326,
        name: "Grumpig",
        types: ["Psychic"],
        baseStats: {
            hp: 80,
            atk: 45,
            def: 65,
            spa: 90,
            spd: 110,
            spe: 80
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Gluttony"
        },
        heightm: 0.9,
        weightkg: 71.5,
        color: "Purple",
        prevo: "Spoink",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "2"
    },
    spinda: {
        num: 327,
        name: "Spinda",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Tangled Feet",
            H: "Contrary"
        },
        heightm: 1.1,
        weightkg: 5,
        color: "Brown",
        eggGroups: ["Field", "Human-Like"],
        tier: "2",
    },
    trapinch: {
        num: 328,
        name: "Trapinch",
        types: ["Ground"],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 10
        },
        abilities: {
            "0": "Arena Trap"
        },
        heightm: 0.7,
        weightkg: 15,
        color: "Brown",
        evos: ["Vibrava"],
        eggGroups: ["Bug", "Dragon"],
        tier: "1",
    },
    vibrava: {
        num: 329,
        name: "Vibrava",
        types: ["Ground", "Dragon"],
        baseStats: {
            hp: 50,
            atk: 70,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.1,
        weightkg: 15.3,
        color: "Green",
        prevo: "Trapinch",
        evoLevel: 30,
        evos: ["Flygon"],
        eggGroups: ["Bug", "Dragon"],
        tier: "1",
    },
    flygon: {
        num: 330,
        name: "Flygon",
        types: ["Ground", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2,
        weightkg: 82,
        color: "Green",
        prevo: "Vibrava",
        evoLevel: 40,
        eggGroups: ["Bug", "Dragon"],
        tier: "1",
    },
    cacnea: {
        num: 331,
        name: "Cacnea",
        types: ["Grass"],
        baseStats: {
            hp: 50,
            atk: 85,
            def: 40,
            spa: 85,
            spd: 40,
            spe: 35
        },
        abilities: {
            "0": "Sand Veil",
            H: "Water Absorb"
        },
        heightm: 0.4,
        weightkg: 51.3,
        color: "Green",
        evos: ["Cacturne"],
        eggGroups: ["Grass", "Human-Like"],
        tier: "2"
    },
    cacturne: {
        num: 332,
        name: "Cacturne",
        types: ["Grass", "Dark"],
        baseStats: {
            hp: 70,
            atk: 115,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Sand Veil",
            H: "Water Absorb"
        },
        heightm: 1.3,
        weightkg: 77.4,
        color: "Green",
        prevo: "Cacnea",
        evoLevel: 32,
        eggGroups: ["Grass", "Human-Like"],
        tier: "2"
    },
    swablu: {
        num: 333,
        name: "Swablu",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 45,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 75,
            spe: 50
        },
        abilities: {
            "0": "Natural Cure",
            H: "Cloud Nine"
        },
        heightm: 0.4,
        weightkg: 1.2,
        color: "Blue",
        evos: ["Altaria"],
        eggGroups: ["Flying", "Dragon"],
        tier: "1"
    },
    altaria: {
        num: 334,
        name: "Altaria",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 75,
            atk: 70,
            def: 90,
            spa: 70,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Natural Cure",
            H: "Cloud Nine"
        },
        heightm: 1.1,
        weightkg: 20.6,
        color: "Blue",
        prevo: "Swablu",
        evoLevel: 35,
        eggGroups: ["Flying", "Dragon"],
        otherFormes: ["Altaria-Mega"],
        formeOrder: ["Altaria", "Altaria-Mega"],
        tier: "1"
    },
    altariamega: {
        num: 334,
        name: "Altaria-Mega",
        baseSpecies: "Altaria",
        forme: "Mega",
        types: ["Dragon", "Fairy"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 110,
            spa: 110,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Pixilate"
        },
        heightm: 1.5,
        weightkg: 20.6,
        color: "Blue",
        eggGroups: ["Flying", "Dragon"],
        requiredItem: "Altarianite",
        tier: "1",
    },
    zangoose: {
        num: 335,
        name: "Zangoose",
        types: ["Normal"],
        baseStats: {
            hp: 73,
            atk: 115,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 90
        },
        abilities: {
            "0": "Immunity",
            H: "Toxic Boost"
        },
        heightm: 1.3,
        weightkg: 40.3,
        color: "White",
        eggGroups: ["Field"],
        tier: "2"
    },
    seviper: {
        num: 336,
        name: "Seviper",
        types: ["Poison"],
        baseStats: {
            hp: 73,
            atk: 100,
            def: 60,
            spa: 100,
            spd: 60,
            spe: 65
        },
        abilities: {
            "0": "Shed Skin",
            H: "Infiltrator"
        },
        heightm: 2.7,
        weightkg: 52.5,
        color: "Black",
        eggGroups: ["Field", "Dragon"],
        tier: "2"
    },
    lunatone: {
        num: 337,
        name: "Lunatone",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 55,
            def: 65,
            spa: 95,
            spd: 85,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1,
        weightkg: 168,
        color: "Yellow",
        eggGroups: ["Mineral"],
        tier: "2",
    },
    solrock: {
        num: 338,
        name: "Solrock",
        types: ["Rock", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 95,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 70
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.2,
        weightkg: 154,
        color: "Red",
        eggGroups: ["Mineral"],
        tier: "2",
    },
    barboach: {
        num: 339,
        name: "Barboach",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 50,
            atk: 48,
            def: 43,
            spa: 46,
            spd: 41,
            spe: 60
        },
        abilities: {
            "0": "Oblivious",
            "1": "Anticipation",
            H: "Hydration"
        },
        heightm: 0.4,
        weightkg: 1.9,
        color: "Gray",
        evos: ["Whiscash"],
        eggGroups: ["Water 2"],
        tier: "2"
    },
    whiscash: {
        num: 340,
        name: "Whiscash",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 110,
            atk: 78,
            def: 73,
            spa: 76,
            spd: 71,
            spe: 60
        },
        abilities: {
            "0": "Oblivious",
            "1": "Anticipation",
            H: "Hydration"
        },
        heightm: 0.9,
        weightkg: 23.6,
        color: "Blue",
        prevo: "Barboach",
        evoLevel: 30,
        eggGroups: ["Water 2"],
        tier: "2"
    },
    corphish: {
        num: 341,
        name: "Corphish",
        types: ["Water"],
        baseStats: {
            hp: 43,
            atk: 80,
            def: 65,
            spa: 50,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Adaptability"
        },
        heightm: 0.6,
        weightkg: 11.5,
        color: "Red",
        evos: ["Crawdaunt"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    crawdaunt: {
        num: 342,
        name: "Crawdaunt",
        types: ["Water", "Dark"],
        baseStats: {
            hp: 63,
            atk: 120,
            def: 85,
            spa: 90,
            spd: 55,
            spe: 55
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Shell Armor",
            H: "Adaptability"
        },
        heightm: 1.1,
        weightkg: 32.8,
        color: "Red",
        prevo: "Corphish",
        evoLevel: 26,
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    baltoy: {
        num: 343,
        name: "Baltoy",
        types: ["Ground", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.5,
        weightkg: 21.5,
        color: "Brown",
        evos: ["Claydol"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    claydol: {
        num: 344,
        name: "Claydol",
        types: ["Ground", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 70,
            def: 105,
            spa: 70,
            spd: 120,
            spe: 75
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 108,
        color: "Black",
        prevo: "Baltoy",
        evoLevel: 36,
        eggGroups: ["Mineral"],
        tier: "1",
    },
    lileep: {
        num: 345,
        name: "Lileep",
        types: ["Rock", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 66,
            atk: 41,
            def: 77,
            spa: 61,
            spd: 87,
            spe: 23
        },
        abilities: {
            "0": "Suction Cups",
            H: "Storm Drain"
        },
        heightm: 1,
        weightkg: 23.8,
        color: "Purple",
        evos: ["Cradily"],
        eggGroups: ["Water 3"],
        tier: "1",
    },
    cradily: {
        num: 346,
        name: "Cradily",
        types: ["Rock", "Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 86,
            atk: 81,
            def: 97,
            spa: 81,
            spd: 107,
            spe: 43
        },
        abilities: {
            "0": "Suction Cups",
            H: "Storm Drain"
        },
        heightm: 1.5,
        weightkg: 60.4,
        color: "Green",
        prevo: "Lileep",
        evoLevel: 40,
        eggGroups: ["Water 3"],
        tier: "1",
    },
    anorith: {
        num: 347,
        name: "Anorith",
        types: ["Rock", "Bug"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 95,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Battle Armor",
            H: "Swift Swim"
        },
        heightm: 0.7,
        weightkg: 12.5,
        color: "Gray",
        evos: ["Armaldo"],
        eggGroups: ["Water 3"],
        tier: "1",
    },
    armaldo: {
        num: 348,
        name: "Armaldo",
        types: ["Rock", "Bug"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 125,
            def: 100,
            spa: 70,
            spd: 80,
            spe: 45
        },
        abilities: {
            "0": "Battle Armor",
            H: "Swift Swim"
        },
        heightm: 1.5,
        weightkg: 68.2,
        color: "Gray",
        prevo: "Anorith",
        evoLevel: 40,
        eggGroups: ["Water 3"],
        tier: "1",
    },
    feebas: {
        num: 349,
        name: "Feebas",
        types: ["Water"],
        baseStats: {
            hp: 20,
            atk: 15,
            def: 20,
            spa: 10,
            spd: 55,
            spe: 80
        },
        abilities: {
            "0": "Swift Swim"
        },
        heightm: 0.6,
        weightkg: 7.4,
        color: "Brown",
        evos: ["Milotic"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1",
    },
    milotic: {
        num: 350,
        name: "Milotic",
        types: ["Water"],
        baseStats: {
            hp: 95,
            atk: 60,
            def: 79,
            spa: 100,
            spd: 125,
            spe: 81
        },
        abilities: {
            "0": "Marvel Scale",
            H: "Competitive"
        },
        heightm: 6.2,
        weightkg: 162,
        color: "Pink",
        prevo: "Feebas",
        evoType: "useItem",
        evoItem: "Prism Scale",
        eggGroups: ["Water 1", "Dragon"],
        tier: "1",
    },
    castform: {
        num: 351,
        name: "Castform",
        types: ["Normal"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "Gray",
        eggGroups: ["Fairy", "Amorphous"],
        otherFormes: ["Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
        formeOrder: ["Castform", "Castform-Sunny", "Castform-Rainy", "Castform-Snowy"],
        tier: "1",
    },
    castformsunny: {
        num: 351,
        name: "Castform-Sunny",
        baseSpecies: "Castform",
        forme: "Sunny",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "Red",
        eggGroups: ["Fairy", "Amorphous"],
        requiredAbility: "Forecast",
        battleOnly: "Castform",
    },
    castformrainy: {
        num: 351,
        name: "Castform-Rainy",
        baseSpecies: "Castform",
        forme: "Rainy",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "Blue",
        eggGroups: ["Fairy", "Amorphous"],
        requiredAbility: "Forecast",
        battleOnly: "Castform",
    },
    castformsnowy: {
        num: 351,
        name: "Castform-Snowy",
        baseSpecies: "Castform",
        forme: "Snowy",
        types: ["Ice"],
        baseStats: {
            hp: 70,
            atk: 70,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Forecast"
        },
        heightm: 0.3,
        weightkg: 0.8,
        color: "White",
        eggGroups: ["Fairy", "Amorphous"],
        requiredAbility: "Forecast",
        battleOnly: "Castform",
    },
    kecleon: {
        num: 352,
        name: "Kecleon",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 90,
            def: 70,
            spa: 60,
            spd: 120,
            spe: 40
        },
        abilities: {
            "0": "Protean",
            H: "Color Change"
        },
        heightm: 1,
        weightkg: 22,
        color: "Green",
        eggGroups: ["Field"],
        tier: "1",
    },
    shuppet: {
        num: 353,
        name: "Shuppet",
        types: ["Ghost"],
        baseStats: {
            hp: 44,
            atk: 75,
            def: 35,
            spa: 63,
            spd: 33,
            spe: 45
        },
        abilities: {
            "0": "Insomnia",
            H: "Cursed Body"
        },
        heightm: 0.6,
        weightkg: 2.3,
        color: "Black",
        evos: ["Banette"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    banette: {
        num: 354,
        name: "Banette",
        types: ["Ghost"],
        baseStats: {
            hp: 64,
            atk: 115,
            def: 65,
            spa: 83,
            spd: 63,
            spe: 65
        },
        abilities: {
            "0": "Insomnia",
            H: "Cursed Body"
        },
        heightm: 1.1,
        weightkg: 12.5,
        color: "Black",
        prevo: "Shuppet",
        evoLevel: 37,
        eggGroups: ["Amorphous"],
        otherFormes: ["Banette-Mega"],
        formeOrder: ["Banette", "Banette-Mega"],
        tier: "1"
    },
    banettemega: {
        num: 354,
        name: "Banette-Mega",
        baseSpecies: "Banette",
        forme: "Mega",
        types: ["Ghost"],
        baseStats: {
            hp: 64,
            atk: 165,
            def: 75,
            spa: 93,
            spd: 83,
            spe: 75
        },
        abilities: {
            "0": "Prankster"
        },
        heightm: 1.2,
        weightkg: 13,
        color: "Black",
        eggGroups: ["Amorphous"],
        requiredItem: "Banettite",
        tier: "1",
    },
    duskull: {
        num: 355,
        name: "Duskull",
        types: ["Ghost"],
        baseStats: {
            hp: 20,
            atk: 40,
            def: 90,
            spa: 30,
            spd: 90,
            spe: 25
        },
        abilities: {
            "0": "Levitate",
            H: "Frisk"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Black",
        evos: ["Dusclops"],
        eggGroups: ["Amorphous"],
        tier: "2",
    },
    dusclops: {
        num: 356,
        name: "Dusclops",
        types: ["Ghost"],
        baseStats: {
            hp: 40,
            atk: 70,
            def: 130,
            spa: 60,
            spd: 130,
            spe: 25
        },
        abilities: {
            "0": "Pressure",
            H: "Frisk"
        },
        heightm: 1.6,
        weightkg: 30.6,
        color: "Black",
        prevo: "Duskull",
        evoLevel: 37,
        evos: ["Dusknoir"],
        eggGroups: ["Amorphous"],
        tier: "2",
    },
    tropius: {
        num: 357,
        name: "Tropius",
        types: ["Grass", "Flying"],
        baseStats: {
            hp: 99,
            atk: 68,
            def: 83,
            spa: 72,
            spd: 87,
            spe: 51
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Solar Power",
            H: "Harvest"
        },
        heightm: 2,
        weightkg: 100,
        color: "Green",
        eggGroups: ["Monster", "Grass"],
        tier: "2"
    },
    chimecho: {
        num: 358,
        name: "Chimecho",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 50,
            def: 80,
            spa: 95,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.6,
        weightkg: 1,
        color: "Blue",
        prevo: "Chingling",
        evoType: "levelFriendship",
        evoCondition: "at night",
        eggGroups: ["Amorphous"],
        canHatch: true,
        tier: "2",
    },
    absol: {
        num: 359,
        name: "Absol",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 130,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 75
        },
        abilities: {
            "0": "Pressure",
            H: "Super Luck"
        },
        heightm: 1.2,
        weightkg: 47,
        color: "White",
        eggGroups: ["Field"],
        otherFormes: ["Absol-Mega"],
        formeOrder: ["Absol", "Absol-Mega"],
        tier: "1",
    },
    absolmega: {
        num: 359,
        name: "Absol-Mega",
        baseSpecies: "Absol",
        forme: "Mega",
        types: ["Dark"],
        baseStats: {
            hp: 65,
            atk: 150,
            def: 60,
            spa: 115,
            spd: 60,
            spe: 115
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 1.2,
        weightkg: 49,
        color: "White",
        eggGroups: ["Field"],
        requiredItem: "Absolite",
        tier: "1",
    },
    wynaut: {
        num: 360,
        name: "Wynaut",
        types: ["Psychic"],
        baseStats: {
            hp: 95,
            atk: 23,
            def: 48,
            spa: 23,
            spd: 48,
            spe: 23
        },
        abilities: {
            "0": "Shadow Tag",
            H: "Telepathy"
        },
        heightm: 0.6,
        weightkg: 14,
        color: "Blue",
        evos: ["Wobbuffet"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2",
    },
    snorunt: {
        num: 361,
        name: "Snorunt",
        types: ["Ice"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 50,
            spa: 50,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Inner Focus",
            H: "Moody"
        },
        heightm: 0.7,
        weightkg: 16.8,
        color: "Gray",
        evos: ["Glalie", "Froslass"],
        eggGroups: ["Fairy", "Mineral"],
        tier: "1"
    },
    glalie: {
        num: 362,
        name: "Glalie",
        types: ["Ice"],
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        abilities: {
            "0": "Inner Focus",
            H: "Moody"
        },
        heightm: 1.5,
        weightkg: 256.5,
        color: "Gray",
        prevo: "Snorunt",
        evoLevel: 25,
        eggGroups: ["Fairy", "Mineral"],
        otherFormes: ["Glalie-Mega"],
        formeOrder: ["Glalie", "Glalie-Mega"],
        tier: "1"
    },
    glaliemega: {
        num: 362,
        name: "Glalie-Mega",
        baseSpecies: "Glalie",
        forme: "Mega",
        types: ["Ice"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 80,
            spa: 120,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Refrigerate"
        },
        heightm: 2.1,
        weightkg: 350.2,
        color: "Gray",
        eggGroups: ["Fairy", "Mineral"],
        requiredItem: "Glalitite",
        tier: "1",
    },
    spheal: {
        num: 363,
        name: "Spheal",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 70,
            atk: 40,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 25
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Oblivious",
            H: "Ice Body"
        },
        heightm: 0.8,
        weightkg: 39.5,
        color: "Blue",
        evos: ["Sealeo"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    sealeo: {
        num: 364,
        name: "Sealeo",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 45
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Oblivious",
            H: "Ice Body"
        },
        heightm: 1.1,
        weightkg: 87.6,
        color: "Blue",
        prevo: "Spheal",
        evoLevel: 20,
        evos: ["Walrein"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    walrein: {
        num: 365,
        name: "Walrein",
        types: ["Ice", "Water"],
        baseStats: {
            hp: 110,
            atk: 80,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Oblivious",
            H: "Ice Body"
        },
        heightm: 1.4,
        weightkg: 150.6,
        color: "Blue",
        prevo: "Sealeo",
        evoLevel: 34,
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    clamperl: {
        num: 366,
        name: "Clamperl",
        types: ["Water"],
        baseStats: {
            hp: 35,
            atk: 64,
            def: 85,
            spa: 74,
            spd: 55,
            spe: 32
        },
        abilities: {
            "0": "Shell Armor",
            H: "Rattled"
        },
        heightm: 0.4,
        weightkg: 52.5,
        color: "Blue",
        evos: ["Huntail", "Gorebyss"],
        eggGroups: ["Water 1"],
        tier: "1",
    },
    huntail: {
        num: 367,
        name: "Huntail",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 104,
            def: 105,
            spa: 94,
            spd: 75,
            spe: 52
        },
        abilities: {
            "0": "Swift Swim",
            H: "Water Veil"
        },
        heightm: 1.7,
        weightkg: 27,
        color: "Blue",
        prevo: "Clamperl",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Water 1"],
        tier: "1",
    },
    gorebyss: {
        num: 368,
        name: "Gorebyss",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 84,
            def: 105,
            spa: 114,
            spd: 75,
            spe: 52
        },
        abilities: {
            "0": "Swift Swim",
            H: "Hydration"
        },
        heightm: 1.8,
        weightkg: 22.6,
        color: "Pink",
        prevo: "Clamperl",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Water 1"],
        tier: "1",
    },
    relicanth: {
        num: 369,
        name: "Relicanth",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 90,
            def: 130,
            spa: 45,
            spd: 65,
            spe: 55
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Rock Head",
            H: "Sturdy"
        },
        heightm: 1,
        weightkg: 23.4,
        color: "Gray",
        eggGroups: ["Water 1", "Water 2"],
        tier: "1",
    },
    luvdisc: {
        num: 370,
        name: "Luvdisc",
        types: ["Water"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 43,
            atk: 30,
            def: 55,
            spa: 40,
            spd: 65,
            spe: 97
        },
        abilities: {
            "0": "Swift Swim",
            H: "Hydration"
        },
        heightm: 0.6,
        weightkg: 8.7,
        color: "Pink",
        eggGroups: ["Water 2"],
        tier: "2"
    },
    bagon: {
        num: 371,
        name: "Bagon",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 75,
            def: 60,
            spa: 40,
            spd: 30,
            spe: 50
        },
        abilities: {
            "0": "Rock Head",
            H: "Sheer Force"
        },
        heightm: 0.6,
        weightkg: 42.1,
        color: "Blue",
        evos: ["Shelgon"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    shelgon: {
        num: 372,
        name: "Shelgon",
        types: ["Dragon"],
        baseStats: {
            hp: 65,
            atk: 95,
            def: 100,
            spa: 60,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Rock Head",
            H: "Overcoat"
        },
        heightm: 1.1,
        weightkg: 110.5,
        color: "White",
        prevo: "Bagon",
        evoLevel: 30,
        evos: ["Salamence"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    salamence: {
        num: 373,
        name: "Salamence",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 95,
            atk: 135,
            def: 80,
            spa: 110,
            spd: 80,
            spe: 100
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 102.6,
        color: "Blue",
        prevo: "Shelgon",
        evoLevel: 50,
        eggGroups: ["Dragon"],
        otherFormes: ["Salamence-Mega"],
        formeOrder: ["Salamence", "Salamence-Mega"],
        tier: "1"
    },
    salamencemega: {
        num: 373,
        name: "Salamence-Mega",
        baseSpecies: "Salamence",
        forme: "Mega",
        types: ["Dragon", "Flying"],
        baseStats: {
            hp: 95,
            atk: 145,
            def: 130,
            spa: 120,
            spd: 90,
            spe: 120
        },
        abilities: {
            "0": "Aerilate"
        },
        heightm: 1.8,
        weightkg: 112.6,
        color: "Blue",
        eggGroups: ["Dragon"],
        requiredItem: "Salamencite",
        tier: "2",
    },
    beldum: {
        num: 374,
        name: "Beldum",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 55,
            def: 80,
            spa: 35,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Clear Body"
        },
        heightm: 0.6,
        weightkg: 95.2,
        color: "Blue",
        evos: ["Metang"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    metang: {
        num: 375,
        name: "Metang",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 75,
            def: 100,
            spa: 55,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Clear Body"
        },
        heightm: 1.2,
        weightkg: 202.5,
        color: "Blue",
        prevo: "Beldum",
        evoLevel: 20,
        evos: ["Metagross"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    metagross: {
        num: 376,
        name: "Metagross",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 135,
            def: 130,
            spa: 95,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Clear Body"
        },
        heightm: 1.6,
        weightkg: 550,
        color: "Blue",
        prevo: "Metang",
        evoLevel: 45,
        eggGroups: ["Mineral"],
        otherFormes: ["Metagross-Mega"],
        formeOrder: ["Metagross", "Metagross-Mega"],
        tier: "1",
    },
    metagrossmega: {
        num: 376,
        name: "Metagross-Mega",
        baseSpecies: "Metagross",
        forme: "Mega",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 145,
            def: 150,
            spa: 105,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 2.5,
        weightkg: 942.9,
        color: "Blue",
        eggGroups: ["Mineral"],
        requiredItem: "Metagrossite",
        tier: "2",
    },
    regirock: {
        num: 377,
        name: "Regirock",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 200,
            spa: 50,
            spd: 100,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Sturdy"
        },
        heightm: 1.7,
        weightkg: 230,
        color: "Brown",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    regice: {
        num: 378,
        name: "Regice",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 50,
            def: 100,
            spa: 100,
            spd: 200,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Ice Body"
        },
        heightm: 1.8,
        weightkg: 175,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    registeel: {
        num: 379,
        name: "Registeel",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 75,
            def: 150,
            spa: 75,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Light Metal"
        },
        heightm: 1.9,
        weightkg: 205,
        color: "Gray",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    latias: {
        num: 380,
        name: "Latias",
        types: ["Dragon", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 80,
            atk: 80,
            def: 90,
            spa: 110,
            spd: 130,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.4,
        weightkg: 40,
        color: "Red",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Latias-Mega"],
        formeOrder: ["Latias", "Latias-Mega"],
        tier: "1",
    },
    latiasmega: {
        num: 380,
        name: "Latias-Mega",
        baseSpecies: "Latias",
        forme: "Mega",
        types: ["Dragon", "Psychic"],
        gender: "F",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 120,
            spa: 140,
            spd: 150,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.8,
        weightkg: 52,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Latiasite",
        tier: "2",
    },
    latios: {
        num: 381,
        name: "Latios",
        types: ["Dragon", "Psychic"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 90,
            def: 80,
            spa: 130,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2,
        weightkg: 60,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tags: ["Sub-Legendary"],
        otherFormes: ["Latios-Mega"],
        formeOrder: ["Latios", "Latios-Mega"],
        tier: "1",
    },
    latiosmega: {
        num: 381,
        name: "Latios-Mega",
        baseSpecies: "Latios",
        forme: "Mega",
        types: ["Dragon", "Psychic"],
        gender: "M",
        baseStats: {
            hp: 80,
            atk: 130,
            def: 100,
            spa: 160,
            spd: 120,
            spe: 110
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2.3,
        weightkg: 70,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Latiosite",
        tier: "2",
    },
    kyogre: {
        num: 382,
        name: "Kyogre",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 90,
            spa: 150,
            spd: 140,
            spe: 90
        },
        abilities: {
            "0": "Drizzle"
        },
        heightm: 4.5,
        weightkg: 352,
        color: "Blue",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Kyogre-Primal"],
        formeOrder: ["Kyogre", "Kyogre-Primal"],
        tier: "2"
    },
    kyogreprimal: {
        num: 382,
        name: "Kyogre-Primal",
        baseSpecies: "Kyogre",
        forme: "Primal",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 90,
            spa: 180,
            spd: 160,
            spe: 90
        },
        abilities: {
            "0": "Primordial Sea"
        },
        heightm: 9.8,
        weightkg: 430,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        requiredItem: "Blue Orb",
        tier: "2",
    },
    groudon: {
        num: 383,
        name: "Groudon",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 140,
            spa: 100,
            spd: 90,
            spe: 90
        },
        abilities: {
            "0": "Drought"
        },
        heightm: 3.5,
        weightkg: 950,
        color: "Red",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Groudon-Primal"],
        formeOrder: ["Groudon", "Groudon-Primal"],
        tier: "2"
    },
    groudonprimal: {
        num: 383,
        name: "Groudon-Primal",
        baseSpecies: "Groudon",
        forme: "Primal",
        types: ["Ground", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 180,
            def: 160,
            spa: 150,
            spd: 90,
            spe: 90
        },
        abilities: {
            "0": "Desolate Land"
        },
        heightm: 5,
        weightkg: 999.7,
        color: "Red",
        eggGroups: ["Undiscovered"],
        requiredItem: "Red Orb",
        tier: "2",
    },
    rayquaza: {
        num: 384,
        name: "Rayquaza",
        types: ["Dragon", "Flying"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 150,
            def: 90,
            spa: 150,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Air Lock"
        },
        heightm: 7,
        weightkg: 206.5,
        color: "Green",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Rayquaza-Mega"],
        formeOrder: ["Rayquaza", "Rayquaza-Mega"],
        tier: "2"
    },
    rayquazamega: {
        num: 384,
        name: "Rayquaza-Mega",
        baseSpecies: "Rayquaza",
        forme: "Mega",
        types: ["Dragon", "Flying"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 180,
            def: 100,
            spa: 180,
            spd: 100,
            spe: 115
        },
        abilities: {
            "0": "Delta Stream"
        },
        heightm: 10.8,
        weightkg: 392,
        color: "Green",
        eggGroups: ["Undiscovered"],
        requiredMove: "Dragon Ascent",
        tier: "2",
    },
    jirachi: {
        num: 385,
        name: "Jirachi",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.3,
        weightkg: 1.1,
        color: "Yellow",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    deoxys: {
        num: 386,
        name: "Deoxys",
        baseForme: "Normal",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 150,
            def: 50,
            spa: 150,
            spd: 50,
            spe: 150
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"],
        formeOrder: ["Deoxys", "Deoxys-Attack", "Deoxys-Defense", "Deoxys-Speed"],
        tier: "2",
    },
    deoxysattack: {
        num: 386,
        name: "Deoxys-Attack",
        baseSpecies: "Deoxys",
        forme: "Attack",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 180,
            def: 20,
            spa: 180,
            spd: 20,
            spe: 150
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        changesFrom: "Deoxys",
        tier: "2",
    },
    deoxysdefense: {
        num: 386,
        name: "Deoxys-Defense",
        baseSpecies: "Deoxys",
        forme: "Defense",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 70,
            def: 160,
            spa: 70,
            spd: 160,
            spe: 90
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        changesFrom: "Deoxys",
        tier: "2",
    },
    deoxysspeed: {
        num: 386,
        name: "Deoxys-Speed",
        baseSpecies: "Deoxys",
        forme: "Speed",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 95,
            def: 90,
            spa: 95,
            spd: 90,
            spe: 180
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 1.7,
        weightkg: 60.8,
        color: "Red",
        eggGroups: ["Undiscovered"],
        changesFrom: "Deoxys",
        tier: "2",
    },
    turtwig: {
        num: 387,
        name: "Turtwig",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 68,
            def: 64,
            spa: 45,
            spd: 55,
            spe: 31
        },
        abilities: {
            "0": "Overgrow",
            "1": "Rock Head",
            H: "Shell Armor"
        },
        heightm: 0.4,
        weightkg: 10.2,
        color: "Green",
        evos: ["Grotle"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    grotle: {
        num: 388,
        name: "Grotle",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 89,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 36
        },
        abilities: {
            "0": "Overgrow",
            "1": "Rock Head",
            H: "Shell Armor"
        },
        heightm: 1.1,
        weightkg: 97,
        color: "Green",
        prevo: "Turtwig",
        evoLevel: 16,
        evos: ["Torterra"],
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    torterra: {
        num: 389,
        name: "Torterra",
        types: ["Grass", "Ground"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 109,
            def: 105,
            spa: 75,
            spd: 85,
            spe: 56
        },
        abilities: {
            "0": "Overgrow",
            "1": "Rock Head",
            H: "Shell Armor"
        },
        heightm: 2.2,
        weightkg: 310,
        color: "Green",
        prevo: "Grotle",
        evoLevel: 36,
        eggGroups: ["Monster", "Grass"],
        tier: "1",
    },
    chimchar: {
        num: 390,
        name: "Chimchar",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 44,
            atk: 58,
            def: 44,
            spa: 58,
            spd: 44,
            spe: 61
        },
        abilities: {
            "0": "Blaze",
            "1": "Iron Fist",
            H: "Vital Spirit"
        },
        heightm: 0.5,
        weightkg: 6.2,
        color: "Brown",
        evos: ["Monferno"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    monferno: {
        num: 391,
        name: "Monferno",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 64,
            atk: 78,
            def: 52,
            spa: 78,
            spd: 52,
            spe: 81
        },
        abilities: {
            "0": "Blaze",
            "1": "Iron Fist",
            H: "Vital Spirit"
        },
        heightm: 0.9,
        weightkg: 22,
        color: "Brown",
        prevo: "Chimchar",
        evoLevel: 16,
        evos: ["Infernape"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    infernape: {
        num: 392,
        name: "Infernape",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 76,
            atk: 104,
            def: 71,
            spa: 104,
            spd: 71,
            spe: 108
        },
        abilities: {
            "0": "Blaze",
            "1": "Iron Fist",
            H: "Vital Spirit"
        },
        heightm: 1.2,
        weightkg: 55,
        color: "Brown",
        prevo: "Monferno",
        evoLevel: 36,
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    piplup: {
        num: 393,
        name: "Piplup",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 53,
            atk: 51,
            def: 53,
            spa: 61,
            spd: 56,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            "1": "Defiant",
            H: "Clear Body"
        },
        heightm: 0.4,
        weightkg: 5.2,
        color: "Blue",
        evos: ["Prinplup"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    prinplup: {
        num: 394,
        name: "Prinplup",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 64,
            atk: 66,
            def: 68,
            spa: 81,
            spd: 76,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            "1": "Defiant",
            H: "Clear Body"
        },
        heightm: 0.8,
        weightkg: 23,
        color: "Blue",
        prevo: "Piplup",
        evoLevel: 16,
        evos: ["Empoleon"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    empoleon: {
        num: 395,
        name: "Empoleon",
        types: ["Water", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 84,
            atk: 86,
            def: 88,
            spa: 111,
            spd: 101,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            "1": "Defiant",
            H: "Clear Body"
        },
        heightm: 1.7,
        weightkg: 84.5,
        color: "Blue",
        prevo: "Prinplup",
        evoLevel: 36,
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    starly: {
        num: 396,
        name: "Starly",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            H: "Reckless"
        },
        heightm: 0.3,
        weightkg: 2,
        color: "Brown",
        evos: ["Staravia"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    staravia: {
        num: 397,
        name: "Staravia",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            H: "Reckless"
        },
        heightm: 0.6,
        weightkg: 15.5,
        color: "Brown",
        prevo: "Starly",
        evoLevel: 14,
        evos: ["Staraptor"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    staraptor: {
        num: 398,
        name: "Staraptor",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 85,
            atk: 120,
            def: 70,
            spa: 50,
            spd: 60,
            spe: 100
        },
        abilities: {
            "0": "Intimidate",
            H: "Reckless"
        },
        heightm: 1.2,
        weightkg: 24.9,
        color: "Brown",
        prevo: "Staravia",
        evoLevel: 34,
        eggGroups: ["Flying"],
        tier: "1"
    },
    bidoof: {
        num: 399,
        name: "Bidoof",
        types: ["Normal"],
        baseStats: {
            hp: 59,
            atk: 45,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 31
        },
        abilities: {
            "0": "Simple",
            "1": "Unaware",
            H: "Unaware"
        },
        heightm: 0.5,
        weightkg: 20,
        color: "Brown",
        evos: ["Bibarel"],
        eggGroups: ["Water 1", "Field"],
        tier: "2",
    },
    bibarel: {
        num: 400,
        name: "Bibarel",
        types: ["Normal", "Water"],
        baseStats: {
            hp: 79,
            atk: 85,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 71
        },
        abilities: {
            "0": "Simple",
            "1": "Unaware",
            H: "Unaware"
        },
        heightm: 1,
        weightkg: 31.5,
        color: "Brown",
        prevo: "Bidoof",
        evoLevel: 15,
        eggGroups: ["Water 1", "Field"],
        tier: "2",
    },
    kricketot: {
        num: 401,
        name: "Kricketot",
        types: ["Bug"],
        baseStats: {
            hp: 37,
            atk: 25,
            def: 41,
            spa: 25,
            spd: 41,
            spe: 25
        },
        abilities: {
            "0": "Shed Skin",
            H: "Run Away"
        },
        heightm: 0.3,
        weightkg: 2.2,
        color: "Red",
        evos: ["Kricketune"],
        eggGroups: ["Bug"],
        tier: "2"
    },
    kricketune: {
        num: 402,
        name: "Kricketune",
        types: ["Bug"],
        baseStats: {
            hp: 77,
            atk: 85,
            def: 51,
            spa: 55,
            spd: 51,
            spe: 65
        },
        abilities: {
            "0": "Swarm",
            H: "Technician"
        },
        heightm: 1,
        weightkg: 25.5,
        color: "Red",
        prevo: "Kricketot",
        evoLevel: 10,
        eggGroups: ["Bug"],
        tier: "2"
    },
    shinx: {
        num: 403,
        name: "Shinx",
        types: ["Electric"],
        baseStats: {
            hp: 45,
            atk: 65,
            def: 34,
            spa: 40,
            spd: 34,
            spe: 45
        },
        abilities: {
            "0": "Intimidate",
            H: "Guts"
        },
        heightm: 0.5,
        weightkg: 9.5,
        color: "Blue",
        evos: ["Luxio"],
        eggGroups: ["Field"],
        tier: "1"
    },
    luxio: {
        num: 404,
        name: "Luxio",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 49,
            spa: 60,
            spd: 49,
            spe: 60
        },
        abilities: {
            "0": "Intimidate",
            H: "Guts"
        },
        heightm: 0.9,
        weightkg: 30.5,
        color: "Blue",
        prevo: "Shinx",
        evoLevel: 15,
        evos: ["Luxray"],
        eggGroups: ["Field"],
        tier: "1"
    },
    luxray: {
        num: 405,
        name: "Luxray",
        types: ["Electric"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 79,
            spa: 95,
            spd: 79,
            spe: 70
        },
        abilities: {
            "0": "Intimidate",
            H: "Guts"
        },
        heightm: 1.4,
        weightkg: 42,
        color: "Blue",
        prevo: "Luxio",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "1"
    },
    budew: {
        num: 406,
        name: "Budew",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 50,
            spd: 70,
            spe: 55
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Poison Point",
            H: "Leaf Guard"
        },
        heightm: 0.2,
        weightkg: 1.2,
        color: "Green",
        evos: ["Roselia"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1",
    },
    roserade: {
        num: 407,
        name: "Roserade",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 60,
            atk: 70,
            def: 65,
            spa: 125,
            spd: 105,
            spe: 90
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Technician",
            H: "Leaf Guard"
        },
        heightm: 0.9,
        weightkg: 14.5,
        color: "Green",
        prevo: "Roselia",
        evoType: "useItem",
        evoItem: "Shiny Stone",
        eggGroups: ["Fairy", "Grass"],
        tier: "1",
    },
    cranidos: {
        num: 408,
        name: "Cranidos",
        types: ["Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 67,
            atk: 125,
            def: 40,
            spa: 30,
            spd: 30,
            spe: 58
        },
        abilities: {
            "0": "Mold Breaker",
            H: "Sheer Force"
        },
        heightm: 0.9,
        weightkg: 31.5,
        color: "Blue",
        evos: ["Rampardos"],
        eggGroups: ["Monster"],
        tier: "1",
    },
    rampardos: {
        num: 409,
        name: "Rampardos",
        types: ["Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 97,
            atk: 165,
            def: 60,
            spa: 65,
            spd: 50,
            spe: 58
        },
        abilities: {
            "0": "Mold Breaker",
            H: "Sheer Force"
        },
        heightm: 1.6,
        weightkg: 102.5,
        color: "Blue",
        prevo: "Cranidos",
        evoLevel: 30,
        eggGroups: ["Monster"],
        tier: "1",
    },
    shieldon: {
        num: 410,
        name: "Shieldon",
        types: ["Rock", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 42,
            def: 118,
            spa: 42,
            spd: 88,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            H: "Soundproof"
        },
        heightm: 0.5,
        weightkg: 57,
        color: "Gray",
        evos: ["Bastiodon"],
        eggGroups: ["Monster"],
        tier: "1",
    },
    bastiodon: {
        num: 411,
        name: "Bastiodon",
        types: ["Rock", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 52,
            def: 168,
            spa: 47,
            spd: 138,
            spe: 30
        },
        abilities: {
            "0": "Sturdy",
            H: "Soundproof"
        },
        heightm: 1.3,
        weightkg: 149.5,
        color: "Gray",
        prevo: "Shieldon",
        evoLevel: 30,
        eggGroups: ["Monster"],
        tier: "1",
    },
    burmy: {
        num: 412,
        name: "Burmy",
        baseForme: "Plant",
        types: ["Bug"],
        baseStats: {
            hp: 40,
            atk: 29,
            def: 45,
            spa: 29,
            spd: 45,
            spe: 36
        },
        abilities: {
            "0": "Shed Skin",
            H: "Overcoat"
        },
        heightm: 0.2,
        weightkg: 3.4,
        color: "Green",
        evos: ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash", "Mothim"],
        eggGroups: ["Bug"],
        cosmeticFormes: ["Burmy-Sandy", "Burmy-Trash"],
        formeOrder: ["Burmy", "Burmy-Sandy", "Burmy-Trash"],
        tier: "2",
    },
    wormadam: {
        num: 413,
        name: "Wormadam",
        baseForme: "Plant",
        types: ["Bug", "Grass"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 59,
            def: 85,
            spa: 79,
            spd: 105,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Green",
        prevo: "Burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        otherFormes: ["Wormadam-Sandy", "Wormadam-Trash"],
        formeOrder: ["Wormadam", "Wormadam-Sandy", "Wormadam-Trash"],
        tier: "2",
    },
    wormadamsandy: {
        num: 413,
        name: "Wormadam-Sandy",
        baseSpecies: "Wormadam",
        forme: "Sandy",
        types: ["Bug", "Ground"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 79,
            def: 105,
            spa: 59,
            spd: 85,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Brown",
        prevo: "Burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "2",
    },
    wormadamtrash: {
        num: 413,
        name: "Wormadam-Trash",
        baseSpecies: "Wormadam",
        forme: "Trash",
        types: ["Bug", "Steel"],
        gender: "F",
        baseStats: {
            hp: 60,
            atk: 69,
            def: 95,
            spa: 69,
            spd: 95,
            spe: 36
        },
        abilities: {
            "0": "Anticipation",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 6.5,
        color: "Red",
        prevo: "Burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "2",
    },
    mothim: {
        num: 414,
        name: "Mothim",
        types: ["Bug", "Flying"],
        gender: "M",
        baseStats: {
            hp: 70,
            atk: 94,
            def: 50,
            spa: 94,
            spd: 50,
            spe: 66
        },
        abilities: {
            "0": "Swarm",
            H: "Tinted Lens"
        },
        heightm: 0.9,
        weightkg: 23.3,
        color: "Yellow",
        prevo: "Burmy",
        evoLevel: 20,
        eggGroups: ["Bug"],
        tier: "2",
    },
    combee: {
        num: 415,
        name: "Combee",
        types: ["Bug", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 30,
            atk: 30,
            def: 42,
            spa: 30,
            spd: 42,
            spe: 70
        },
        abilities: {
            "0": "Honey Gather",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 5.5,
        color: "Yellow",
        evos: ["Vespiquen"],
        eggGroups: ["Bug"],
        tier: "1"
    },
    vespiquen: {
        num: 416,
        name: "Vespiquen",
        types: ["Bug", "Flying"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 80,
            def: 102,
            spa: 80,
            spd: 102,
            spe: 40
        },
        abilities: {
            "0": "Unnerve",
            H: "Pressure"
        },
        heightm: 1.2,
        weightkg: 38.5,
        color: "Yellow",
        prevo: "Combee",
        evoLevel: 21,
        eggGroups: ["Bug"],
        tier: "1"
    },
    pachirisu: {
        num: 417,
        name: "Pachirisu",
        types: ["Electric"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 45,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Run Away",
            "1": "Pickup",
            H: "Volt Absorb"
        },
        heightm: 0.4,
        weightkg: 3.9,
        color: "White",
        eggGroups: ["Field", "Fairy"],
        tier: "2"
    },
    buizel: {
        num: 418,
        name: "Buizel",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 65,
            def: 35,
            spa: 60,
            spd: 30,
            spe: 85
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Swift Swim"
        },
        heightm: 0.7,
        weightkg: 29.5,
        color: "Brown",
        evos: ["Floatzel"],
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    floatzel: {
        num: 419,
        name: "Floatzel",
        types: ["Water"],
        baseStats: {
            hp: 85,
            atk: 105,
            def: 55,
            spa: 85,
            spd: 50,
            spe: 115
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Swift Swim"
        },
        heightm: 1.1,
        weightkg: 33.5,
        color: "Brown",
        prevo: "Buizel",
        evoLevel: 26,
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    cherubi: {
        num: 420,
        name: "Cherubi",
        types: ["Grass"],
        baseStats: {
            hp: 45,
            atk: 35,
            def: 45,
            spa: 62,
            spd: 53,
            spe: 35
        },
        abilities: {
            "0": "Chlorophyll"
        },
        heightm: 0.4,
        weightkg: 3.3,
        color: "Pink",
        evos: ["Cherrim"],
        eggGroups: ["Fairy", "Grass"],
        tier: "2",
    },
    cherrim: {
        num: 421,
        name: "Cherrim",
        baseForme: "Overcast",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 70,
            spa: 87,
            spd: 78,
            spe: 85
        },
        abilities: {
            "0": "Flower Gift"
        },
        heightm: 0.5,
        weightkg: 9.3,
        color: "Purple",
        prevo: "Cherubi",
        evoLevel: 25,
        eggGroups: ["Fairy", "Grass"],
        otherFormes: ["Cherrim-Sunshine"],
        formeOrder: ["Cherrim", "Cherrim-Sunshine"],
        tier: "2",
    },
    cherrimsunshine: {
        num: 421,
        name: "Cherrim-Sunshine",
        baseSpecies: "Cherrim",
        forme: "Sunshine",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 60,
            def: 70,
            spa: 87,
            spd: 78,
            spe: 85
        },
        abilities: {
            "0": "Flower Gift"
        },
        heightm: 0.5,
        weightkg: 9.3,
        color: "Pink",
        eggGroups: ["Fairy", "Grass"],
        requiredAbility: "Flower Gift",
        battleOnly: "Cherrim",
    },
    shellos: {
        num: 422,
        name: "Shellos",
        baseForme: "West",
        types: ["Water"],
        baseStats: {
            hp: 76,
            atk: 48,
            def: 48,
            spa: 57,
            spd: 62,
            spe: 34
        },
        abilities: {
            "0": "Sticky Hold",
            "1": "Sand Force",
            H: "Storm Drain"
        },
        heightm: 0.3,
        weightkg: 6.3,
        color: "Purple",
        evos: ["Gastrodon"],
        eggGroups: ["Water 1", "Amorphous"],
        cosmeticFormes: ["Shellos-East"],
        formeOrder: ["Shellos", "Shellos-East"],
        tier: "1"
    },
    gastrodon: {
        num: 423,
        name: "Gastrodon",
        baseForme: "West",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 111,
            atk: 83,
            def: 68,
            spa: 92,
            spd: 82,
            spe: 39
        },
        abilities: {
            "0": "Sticky Hold",
            "1": "Sand Force",
            H: "Storm Drain"
        },
        heightm: 0.9,
        weightkg: 29.9,
        color: "Purple",
        prevo: "Shellos",
        evoLevel: 30,
        eggGroups: ["Water 1", "Amorphous"],
        cosmeticFormes: ["Gastrodon-East"],
        formeOrder: ["Gastrodon", "Gastrodon-East"],
        tier: "1"
    },
    ambipom: {
        num: 424,
        name: "Ambipom",
        types: ["Normal"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 66,
            spa: 60,
            spd: 66,
            spe: 115
        },
        abilities: {
            "0": "Technician",
            H: "Skill Link"
        },
        heightm: 1.2,
        weightkg: 20.3,
        color: "Purple",
        prevo: "Aipom",
        evoType: "levelMove",
        evoMove: "Double Hit",
        eggGroups: ["Field"],
        tier: "1",
    },
    drifloon: {
        num: 425,
        name: "Drifloon",
        types: ["Ghost", "Flying"],
        baseStats: {
            hp: 90,
            atk: 50,
            def: 34,
            spa: 60,
            spd: 44,
            spe: 70
        },
        abilities: {
            "0": "Aftermath",
            "1": "Unburden",
            H: "Flare Boost"
        },
        heightm: 0.4,
        weightkg: 1.2,
        color: "Purple",
        evos: ["Drifblim"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    drifblim: {
        num: 426,
        name: "Drifblim",
        types: ["Ghost", "Flying"],
        baseStats: {
            hp: 150,
            atk: 80,
            def: 44,
            spa: 90,
            spd: 54,
            spe: 80
        },
        abilities: {
            "0": "Aftermath",
            "1": "Unburden",
            H: "Flare Boost"
        },
        heightm: 1.2,
        weightkg: 15,
        color: "Purple",
        prevo: "Drifloon",
        evoLevel: 28,
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    buneary: {
        num: 427,
        name: "Buneary",
        types: ["Normal"],
        baseStats: {
            hp: 55,
            atk: 66,
            def: 44,
            spa: 44,
            spd: 56,
            spe: 85
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Limber",
            H: "Limber"
        },
        heightm: 0.4,
        weightkg: 5.5,
        color: "Brown",
        evos: ["Lopunny"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    lopunny: {
        num: 428,
        name: "Lopunny",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 76,
            def: 84,
            spa: 54,
            spd: 96,
            spe: 105
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Limber",
            H: "Limber"
        },
        heightm: 1.2,
        weightkg: 33.3,
        color: "Brown",
        prevo: "Buneary",
        evoLevel: "20",
        eggGroups: ["Field", "Human-Like"],
        otherFormes: ["Lopunny-Mega"],
        formeOrder: ["Lopunny", "Lopunny-Mega"],
        tier: "1",
    },
    lopunnymega: {
        num: 428,
        name: "Lopunny-Mega",
        baseSpecies: "Lopunny",
        forme: "Mega",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 65,
            atk: 136,
            def: 94,
            spa: 54,
            spd: 96,
            spe: 135
        },
        abilities: {
            "0": "Scrappy"
        },
        heightm: 1.3,
        weightkg: 28.3,
        color: "Brown",
        eggGroups: ["Field", "Human-Like"],
        requiredItem: "Lopunnite",
        tier: "1",
    },
    mismagius: {
        num: 429,
        name: "Mismagius",
        types: ["Ghost"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 60,
            spa: 105,
            spd: 105,
            spe: 105
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.9,
        weightkg: 4.4,
        color: "Purple",
        prevo: "Misdreavus",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    honchkrow: {
        num: 430,
        name: "Honchkrow",
        types: ["Dark", "Flying"],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 52,
            spa: 105,
            spd: 52,
            spe: 71
        },
        abilities: {
            "0": "Insomnia",
            H: "Super Luck"
        },
        heightm: 0.9,
        weightkg: 27.3,
        color: "Black",
        prevo: "Murkrow",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Flying"],
        tier: "1"
    },
    glameow: {
        num: 431,
        name: "Glameow",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 49,
            atk: 55,
            def: 42,
            spa: 42,
            spd: 37,
            spe: 85
        },
        abilities: {
            "0": "Limber",
            "1": "Own Tempo",
            H: "Keen Eye"
        },
        heightm: 0.5,
        weightkg: 3.9,
        color: "Gray",
        evos: ["Purugly"],
        eggGroups: ["Field"],
        tier: "2",
    },
    purugly: {
        num: 432,
        name: "Purugly",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 71,
            atk: 82,
            def: 64,
            spa: 64,
            spd: 59,
            spe: 112
        },
        abilities: {
            "0": "Thick Fat",
            "1": "Own Tempo",
            H: "Defiant"
        },
        heightm: 1,
        weightkg: 43.8,
        color: "Gray",
        prevo: "Glameow",
        evoLevel: 38,
        eggGroups: ["Field"],
        tier: "2",
    },
    chingling: {
        num: 433,
        name: "Chingling",
        types: ["Psychic"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 65,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.2,
        weightkg: 0.6,
        color: "Yellow",
        evos: ["Chimecho"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2",
    },
    stunky: {
        num: 434,
        name: "Stunky",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 63,
            atk: 63,
            def: 47,
            spa: 41,
            spd: 41,
            spe: 74
        },
        abilities: {
            "0": "Stench",
            "1": "Aftermath",
            H: "Keen Eye"
        },
        heightm: 0.4,
        weightkg: 19.2,
        color: "Purple",
        evos: ["Skuntank"],
        eggGroups: ["Field"],
        tier: "1"
    },
    skuntank: {
        num: 435,
        name: "Skuntank",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 103,
            atk: 93,
            def: 67,
            spa: 71,
            spd: 61,
            spe: 84
        },
        abilities: {
            "0": "Stench",
            "1": "Aftermath",
            H: "Keen Eye"
        },
        heightm: 1,
        weightkg: 38,
        color: "Purple",
        prevo: "Stunky",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "1"
    },
    bronzor: {
        num: 436,
        name: "Bronzor",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 57,
            atk: 24,
            def: 86,
            spa: 24,
            spd: 86,
            spe: 23
        },
        abilities: {
            "0": "Levitate",
            "1": "Heatproof",
            H: "Heavy Metal"
        },
        heightm: 0.5,
        weightkg: 60.5,
        color: "Green",
        evos: ["Bronzong"],
        eggGroups: ["Mineral"],
        tier: "2"
    },
    bronzong: {
        num: 437,
        name: "Bronzong",
        types: ["Steel", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 67,
            atk: 89,
            def: 116,
            spa: 79,
            spd: 116,
            spe: 33
        },
        abilities: {
            "0": "Levitate",
            "1": "Heatproof",
            H: "Heavy Metal"
        },
        heightm: 1.3,
        weightkg: 187,
        color: "Green",
        prevo: "Bronzor",
        evoLevel: 33,
        eggGroups: ["Mineral"],
        tier: "2"
    },
    bonsly: {
        num: 438,
        name: "Bonsly",
        types: ["Rock"],
        baseStats: {
            hp: 50,
            atk: 80,
            def: 95,
            spa: 10,
            spd: 45,
            spe: 10
        },
        abilities: {
            "0": "Sturdy",
            "1": "Rock Head",
            H: "Rock Head"
        },
        heightm: 0.5,
        weightkg: 15,
        color: "Brown",
        evos: ["Sudowoodo"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2"
    },
    mimejr: {
        num: 439,
        name: "Mime Jr.",
        types: ["Psychic", "Fairy"],
        baseStats: {
            hp: 20,
            atk: 25,
            def: 45,
            spa: 70,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Soundproof",
            "1": "Filter",
            H: "Technician"
        },
        heightm: 0.6,
        weightkg: 13,
        color: "Pink",
        evos: ["Mr. Mime", "Mr. Mime-Galar"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2",
    },
    happiny: {
        num: 440,
        name: "Happiny",
        types: ["Normal"],
        gender: "F",
        baseStats: {
            hp: 100,
            atk: 5,
            def: 5,
            spa: 15,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Natural Cure",
            "1": "Serene Grace",
            H: "Friend Guard"
        },
        heightm: 0.6,
        weightkg: 24.4,
        color: "Pink",
        evos: ["Chansey"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2"
    },
    chatot: {
        num: 441,
        name: "Chatot",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 76,
            atk: 65,
            def: 45,
            spa: 92,
            spd: 42,
            spe: 91
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Tangled Feet",
            H: "Big Pecks"
        },
        heightm: 0.5,
        weightkg: 1.9,
        color: "Black",
        eggGroups: ["Flying"],
        tier: "2",
    },
    spiritomb: {
        num: 442,
        name: "Spiritomb",
        types: ["Ghost", "Dark"],
        baseStats: {
            hp: 50,
            atk: 92,
            def: 108,
            spa: 92,
            spd: 108,
            spe: 35
        },
        abilities: {
            "0": "Pressure",
            H: "Infiltrator"
        },
        heightm: 1,
        weightkg: 108,
        color: "Purple",
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    gible: {
        num: 443,
        name: "Gible",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 58,
            atk: 70,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 42
        },
        abilities: {
            "0": "Rough Skin",
            H: "Sand Veil"
        },
        heightm: 0.7,
        weightkg: 20.5,
        color: "Blue",
        evos: ["Gabite"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    gabite: {
        num: 444,
        name: "Gabite",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 68,
            atk: 90,
            def: 65,
            spa: 50,
            spd: 55,
            spe: 82
        },
        abilities: {
            "0": "Rough Skin",
            H: "Sand Veil"
        },
        heightm: 1.4,
        weightkg: 56,
        color: "Blue",
        prevo: "Gible",
        evoLevel: 24,
        evos: ["Garchomp"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    garchomp: {
        num: 445,
        name: "Garchomp",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 108,
            atk: 130,
            def: 95,
            spa: 80,
            spd: 85,
            spe: 102
        },
        abilities: {
            "0": "Rough Skin",
            H: "Sand Veil"
        },
        heightm: 1.9,
        weightkg: 95,
        color: "Blue",
        prevo: "Gabite",
        evoLevel: 48,
        eggGroups: ["Monster", "Dragon"],
        otherFormes: ["Garchomp-Mega"],
        formeOrder: ["Garchomp", "Garchomp-Mega"],
        tier: "1"
    },
    garchompmega: {
        num: 445,
        name: "Garchomp-Mega",
        baseSpecies: "Garchomp",
        forme: "Mega",
        types: ["Dragon", "Ground"],
        baseStats: {
            hp: 108,
            atk: 170,
            def: 115,
            spa: 120,
            spd: 95,
            spe: 92
        },
        abilities: {
            "0": "Sand Force"
        },
        heightm: 1.9,
        weightkg: 95,
        color: "Blue",
        eggGroups: ["Monster", "Dragon"],
        requiredItem: "Garchompite",
        tier: "1",
    },
    munchlax: {
        num: 446,
        name: "Munchlax",
        types: ["Normal"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 135,
            atk: 85,
            def: 40,
            spa: 40,
            spd: 85,
            spe: 5
        },
        abilities: {
            "0": "Pickup",
            "1": "Thick Fat",
            H: "Gluttony"
        },
        heightm: 0.6,
        weightkg: 105,
        color: "Black",
        evos: ["Snorlax"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2",
    },
    riolu: {
        num: 447,
        name: "Riolu",
        types: ["Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 70,
            def: 40,
            spa: 35,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Steadfast",
            "1": "Inner Focus",
            H: "Prankster"
        },
        heightm: 0.7,
        weightkg: 20.2,
        color: "Blue",
        evos: ["Lucario"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1"
    },
    lucario: {
        num: 448,
        name: "Lucario",
        types: ["Fighting", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 110,
            def: 70,
            spa: 115,
            spd: 70,
            spe: 90
        },
        abilities: {
            "0": "Steadfast",
            "1": "Inner Focus",
            H: "Justified"
        },
        heightm: 1.2,
        weightkg: 54,
        color: "Blue",
        prevo: "Riolu",
        evoLevel: "28",
        eggGroups: ["Field", "Human-Like"],
        otherFormes: ["Lucario-Mega"],
        formeOrder: ["Lucario", "Lucario-Mega"],
        tier: "1"
    },
    lucariomega: {
        num: 448,
        name: "Lucario-Mega",
        baseSpecies: "Lucario",
        forme: "Mega",
        types: ["Fighting", "Steel"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 145,
            def: 88,
            spa: 140,
            spd: 70,
            spe: 112
        },
        abilities: {
            "0": "Adaptability"
        },
        heightm: 1.3,
        weightkg: 57.5,
        color: "Blue",
        eggGroups: ["Field", "Human-Like"],
        requiredItem: "Lucarionite",
        tier: "2",
    },
    hippopotas: {
        num: 449,
        name: "Hippopotas",
        types: ["Ground"],
        baseStats: {
            hp: 68,
            atk: 72,
            def: 78,
            spa: 38,
            spd: 42,
            spe: 32
        },
        abilities: {
            "0": "Sand Stream",
            H: "Sand Force"
        },
        heightm: 0.8,
        weightkg: 49.5,
        color: "Brown",
        evos: ["Hippowdon"],
        eggGroups: ["Field"],
        tier: "2"
    },
    hippowdon: {
        num: 450,
        name: "Hippowdon",
        types: ["Ground"],
        baseStats: {
            hp: 108,
            atk: 112,
            def: 118,
            spa: 68,
            spd: 72,
            spe: 47
        },
        abilities: {
            "0": "Sand Stream",
            H: "Sand Force"
        },
        heightm: 2,
        weightkg: 300,
        color: "Brown",
        prevo: "Hippopotas",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "2"
    },
    skorupi: {
        num: 451,
        name: "Skorupi",
        types: ["Poison", "Bug"],
        baseStats: {
            hp: 40,
            atk: 50,
            def: 90,
            spa: 30,
            spd: 55,
            spe: 65
        },
        abilities: {
            "0": "Battle Armor",
            H: "Sniper"
        },
        heightm: 0.8,
        weightkg: 12,
        color: "Purple",
        evos: ["Drapion"],
        eggGroups: ["Bug", "Water 3"],
        tier: "1",
    },
    drapion: {
        num: 452,
        name: "Drapion",
        types: ["Poison", "Dark"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 110,
            spa: 60,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Battle Armor",
            H: "Sniper"
        },
        heightm: 1.3,
        weightkg: 61.5,
        color: "Purple",
        prevo: "Skorupi",
        evoLevel: 40,
        eggGroups: ["Bug", "Water 3"],
        tier: "1",
    },
    croagunk: {
        num: 453,
        name: "Croagunk",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 48,
            atk: 61,
            def: 40,
            spa: 61,
            spd: 40,
            spe: 50
        },
        abilities: {
            "0": "Poison Touch",
            H: "Dry Skin"
        },
        heightm: 0.7,
        weightkg: 23,
        color: "Blue",
        evos: ["Toxicroak"],
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    toxicroak: {
        num: 454,
        name: "Toxicroak",
        types: ["Poison", "Fighting"],
        baseStats: {
            hp: 83,
            atk: 106,
            def: 65,
            spa: 86,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Poison Touch",
            H: "Dry Skin"
        },
        heightm: 1.3,
        weightkg: 44.4,
        color: "Blue",
        prevo: "Croagunk",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        tier: "1"
    },
    carnivine: {
        num: 455,
        name: "Carnivine",
        types: ["Grass"],
        baseStats: {
            hp: 74,
            atk: 100,
            def: 72,
            spa: 90,
            spd: 72,
            spe: 46
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.4,
        weightkg: 27,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "1",
    },
    finneon: {
        num: 456,
        name: "Finneon",
        types: ["Water"],
        baseStats: {
            hp: 49,
            atk: 49,
            def: 56,
            spa: 49,
            spd: 61,
            spe: 66
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Storm Drain"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Blue",
        evos: ["Lumineon"],
        eggGroups: ["Water 2"],
        tier: "1"
    },
    lumineon: {
        num: 457,
        name: "Lumineon",
        types: ["Water"],
        baseStats: {
            hp: 69,
            atk: 69,
            def: 76,
            spa: 69,
            spd: 86,
            spe: 91
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Veil",
            H: "Storm Drain"
        },
        heightm: 1.2,
        weightkg: 24,
        color: "Blue",
        prevo: "Finneon",
        evoLevel: 20,
        eggGroups: ["Water 2"],
        tier: "1"
    },
    mantyke: {
        num: 458,
        name: "Mantyke",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 45,
            atk: 20,
            def: 50,
            spa: 60,
            spd: 120,
            spe: 50
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Water Absorb",
            H: "Water Veil"
        },
        heightm: 1,
        weightkg: 65,
        color: "Blue",
        evos: ["Mantine"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "2",
    },
    snover: {
        num: 459,
        name: "Snover",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 60,
            atk: 62,
            def: 50,
            spa: 62,
            spd: 60,
            spe: 40
        },
        abilities: {
            "0": "Soundproof",
            H: "Snow Warning"
        },
        heightm: 1,
        weightkg: 50.5,
        color: "White",
        evos: ["Abomasnow"],
        eggGroups: ["Monster", "Grass"],
        tier: "1"
    },
    abomasnow: {
        num: 460,
        name: "Abomasnow",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 90,
            atk: 92,
            def: 75,
            spa: 92,
            spd: 85,
            spe: 60
        },
        abilities: {
            "0": "Soundproof",
            H: "Snow Warning"
        },
        heightm: 2.2,
        weightkg: 135.5,
        color: "White",
        prevo: "Snover",
        evoLevel: 36,
        eggGroups: ["Monster", "Grass"],
        otherFormes: ["Abomasnow-Mega"],
        formeOrder: ["Abomasnow", "Abomasnow-Mega"],
        tier: "1"
    },
    abomasnowmega: {
        num: 460,
        name: "Abomasnow-Mega",
        baseSpecies: "Abomasnow",
        forme: "Mega",
        types: ["Grass", "Ice"],
        baseStats: {
            hp: 90,
            atk: 132,
            def: 105,
            spa: 132,
            spd: 105,
            spe: 30
        },
        abilities: {
            "0": "Snow Warning"
        },
        heightm: 2.7,
        weightkg: 185,
        color: "White",
        eggGroups: ["Monster", "Grass"],
        requiredItem: "Abomasite",
        tier: "2",
    },
    weavile: {
        num: 461,
        name: "Weavile",
        types: ["Dark", "Ice"],
        baseStats: {
            hp: 70,
            atk: 120,
            def: 65,
            spa: 45,
            spd: 85,
            spe: 125
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Pressure",
            H: "Pickpocket"
        },
        heightm: 1.1,
        weightkg: 34,
        color: "Black",
        prevo: "Sneasel",
        evoType: "useItem",
        evoItem: "Razor Claw",
        evoCondition: "at night",
        eggGroups: ["Field"],
        tier: "1"
    },
    magnezone: {
        num: 462,
        name: "Magnezone",
        types: ["Electric", "Steel"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 70,
            def: 115,
            spa: 130,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Magnet Pull",
            "1": "Analytic",
            H: "Sturdy"
        },
        heightm: 1.2,
        weightkg: 180,
        color: "Gray",
        prevo: "Magneton",
        evoType: "levelExtra",
        evoCondition: "at New Mauville",
        eggGroups: ["Mineral"],
        tier: "1"
    },
    lickilicky: {
        num: 463,
        name: "Lickilicky",
        types: ["Normal"],
        baseStats: {
            hp: 110,
            atk: 85,
            def: 95,
            spa: 80,
            spd: 95,
            spe: 50
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Oblivious",
            H: "Cloud Nine"
        },
        heightm: 1.7,
        weightkg: 140,
        color: "Pink",
        prevo: "Lickitung",
        evoType: "levelMove",
        evoMove: "Rollout",
        eggGroups: ["Monster"],
        tier: "2",
    },
    rhyperior: {
        num: 464,
        name: "Rhyperior",
        types: ["Ground", "Rock"],
        baseStats: {
            hp: 115,
            atk: 140,
            def: 130,
            spa: 55,
            spd: 55,
            spe: 40
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Rock Head",
            H: "Lightning Rod"
        },
        heightm: 2.4,
        weightkg: 282.8,
        color: "Gray",
        prevo: "Rhydon",
        evoType: "useItem",
        evoItem: "Protector",
        eggGroups: ["Monster", "Field"],
        tier: "1",
    },
    tangrowth: {
        num: 465,
        name: "Tangrowth",
        types: ["Grass"],
        baseStats: {
            hp: 100,
            atk: 100,
            def: 125,
            spa: 110,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            H: "Regenerator"
        },
        heightm: 2,
        weightkg: 128.6,
        color: "Blue",
        prevo: "Tangela",
        evoType: "levelMove",
        evoMove: "Ancient Power",
        eggGroups: ["Grass"],
        tier: "2",
    },
    electivire: {
        num: 466,
        name: "Electivire",
        types: ["Electric"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 123,
            def: 67,
            spa: 95,
            spd: 85,
            spe: 95
        },
        abilities: {
            "0": "Vital Spirit",
            H: "Motor Drive"
        },
        heightm: 1.8,
        weightkg: 138.6,
        color: "Yellow",
        prevo: "Electabuzz",
        evoType: "useItem",
        evoItem: "Electirizer",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    magmortar: {
        num: 467,
        name: "Magmortar",
        types: ["Fire"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 95,
            def: 67,
            spa: 125,
            spd: 95,
            spe: 83
        },
        abilities: {
            "0": "Flame Body",
            "1": "Vital Spirit",
            H: "Flash Fire"
        },
        heightm: 1.6,
        weightkg: 68,
        color: "Red",
        prevo: "Magmar",
        evoType: "useItem",
        evoItem: "Magmarizer",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    togekiss: {
        num: 468,
        name: "Togekiss",
        types: ["Fairy", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 85,
            atk: 50,
            def: 95,
            spa: 120,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Super Luck",
            "1": "Serene Grace",
            H: "Hustle"
        },
        heightm: 1.5,
        weightkg: 38,
        color: "White",
        prevo: "Togetic",
        evoType: "useItem",
        evoItem: "Shiny Stone",
        eggGroups: ["Flying", "Fairy"],
        tier: "1",
    },
    yanmega: {
        num: 469,
        name: "Yanmega",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 86,
            atk: 76,
            def: 86,
            spa: 116,
            spd: 56,
            spe: 95
        },
        abilities: {
            "0": "Tinted Lens",
            H: "Speed Boost"
        },
        heightm: 1.9,
        weightkg: 51.5,
        color: "Green",
        prevo: "Yanma",
        evoType: "levelMove",
        evoMove: "Ancient Power",
        eggGroups: ["Bug"],
        tier: "1",
    },
    leafeon: {
        num: 470,
        name: "Leafeon",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 110,
            def: 130,
            spa: 60,
            spd: 65,
            spe: 95
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Chlorophyll"
        },
        heightm: 1,
        weightkg: 25.5,
        color: "Green",
        prevo: "Eevee",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Field"],
        tier: "2"
    },
    glaceon: {
        num: 471,
        name: "Glaceon",
        types: ["Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 60,
            def: 110,
            spa: 130,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Snow Cloak",
            H: "Ice Body"
        },
        heightm: 0.8,
        weightkg: 25.9,
        color: "Blue",
        prevo: "Eevee",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Field"],
        tier: "2"
    },
    gliscor: {
        num: 472,
        name: "Gliscor",
        types: ["Ground", "Flying"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 125,
            spa: 45,
            spd: 75,
            spe: 95
        },
        abilities: {
            "0": "Hyper Cutter",
            H: "Poison Heal"
        },
        heightm: 2,
        weightkg: 42.5,
        color: "Purple",
        prevo: "Gligar",
        evoType: "useItem",
        evoItem: "Razor Fang",
        evoCondition: "at night",
        eggGroups: ["Bug"],
        tier: "1",
    },
    mamoswine: {
        num: 473,
        name: "Mamoswine",
        types: ["Ice", "Ground"],
        baseStats: {
            hp: 110,
            atk: 130,
            def: 80,
            spa: 70,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Oblivious",
            "1": "Thick Fat",
            H: "Snow Cloak"
        },
        heightm: 2.5,
        weightkg: 291,
        color: "Brown",
        prevo: "Piloswine",
        evoType: "levelMove",
        evoMove: "Ancient Power",
        eggGroups: ["Field"],
        tier: "1",
    },
    porygonz: {
        num: 474,
        name: "Porygon-Z",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 85,
            atk: 80,
            def: 70,
            spa: 135,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Adaptability",
            "1": "Analytic",
            H: "Download"
        },
        heightm: 0.9,
        weightkg: 34,
        color: "Red",
        prevo: "Porygon2",
        evoType: "useItem",
        evoItem: "Dubious Disc",
        eggGroups: ["Mineral"],
        tier: "1",
    },
    gallade: {
        num: 475,
        name: "Gallade",
        types: ["Psychic", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 68,
            atk: 125,
            def: 65,
            spa: 65,
            spd: 115,
            spe: 80
        },
        abilities: {
            "0": "Inner Focus",
            H: "Justified"
        },
        heightm: 1.6,
        weightkg: 52,
        color: "White",
        prevo: "Kirlia",
        evoType: "useItem",
        evoItem: "Dawn Stone",
        eggGroups: ["Human-Like", "Amorphous"],
        otherFormes: ["Gallade-Mega"],
        formeOrder: ["Gallade", "Gallade-Mega"],
        tier: "1"
    },
    gallademega: {
        num: 475,
        name: "Gallade-Mega",
        baseSpecies: "Gallade",
        forme: "Mega",
        types: ["Psychic", "Fighting"],
        gender: "M",
        baseStats: {
            hp: 68,
            atk: 165,
            def: 95,
            spa: 65,
            spd: 115,
            spe: 110
        },
        abilities: {
            "0": "Inner Focus"
        },
        heightm: 1.6,
        weightkg: 56.4,
        color: "White",
        eggGroups: ["Amorphous"],
        requiredItem: "Galladite",
        tier: "1",
    },
    probopass: {
        num: 476,
        name: "Probopass",
        types: ["Rock", "Steel"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 145,
            spa: 75,
            spd: 150,
            spe: 40
        },
        abilities: {
            "0": "Magnet Pull",
            H: "Sand Force"
        },
        heightm: 1.4,
        weightkg: 340,
        color: "Gray",
        prevo: "Nosepass",
        evoType: "levelExtra",
        evoCondition: "at New Mauville",
        eggGroups: ["Mineral"],
        tier: "1",
    },
    dusknoir: {
        num: 477,
        name: "Dusknoir",
        types: ["Ghost"],
        baseStats: {
            hp: 45,
            atk: 100,
            def: 135,
            spa: 65,
            spd: 135,
            spe: 45
        },
        abilities: {
            "0": "Pressure",
            H: "Frisk"
        },
        heightm: 2.2,
        weightkg: 106.6,
        color: "Black",
        prevo: "Dusclops",
        evoType: "trade",
        evoItem: "Reaper Cloth",
        eggGroups: ["Amorphous"],
        tier: "2",
    },
    froslass: {
        num: 478,
        name: "Froslass",
        types: ["Ice", "Ghost"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 80,
            def: 70,
            spa: 80,
            spd: 70,
            spe: 110
        },
        abilities: {
            "0": "Cursed Body",
            H: "Snow Cloak"
        },
        heightm: 1.3,
        weightkg: 26.6,
        color: "White",
        prevo: "Snorunt",
        evoType: "useItem",
        evoItem: "Dawn Stone",
        eggGroups: ["Fairy", "Mineral"],
        tier: "1"
    },
    rotom: {
        num: 479,
        name: "Rotom",
        types: ["Electric", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 50,
            def: 77,
            spa: 95,
            spd: 77,
            spe: 91
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        otherFormes: ["Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
        formeOrder: ["Rotom", "Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
        tier: "2"
    },
    rotomheat: {
        num: 479,
        name: "Rotom-Heat",
        baseSpecies: "Rotom",
        forme: "Heat",
        types: ["Electric", "Fire"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        changesFrom: "Rotom",
        tier: "2"
    },
    rotomwash: {
        num: 479,
        name: "Rotom-Wash",
        baseSpecies: "Rotom",
        forme: "Wash",
        types: ["Electric", "Water"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        changesFrom: "Rotom",
        tier: "2"
    },
    rotomfrost: {
        num: 479,
        name: "Rotom-Frost",
        baseSpecies: "Rotom",
        forme: "Frost",
        types: ["Electric", "Ice"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        changesFrom: "Rotom",
        tier: "2"
    },
    rotomfan: {
        num: 479,
        name: "Rotom-Fan",
        baseSpecies: "Rotom",
        forme: "Fan",
        types: ["Electric", "Flying"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        changesFrom: "Rotom",
        tier: "2"
    },
    rotommow: {
        num: 479,
        name: "Rotom-Mow",
        baseSpecies: "Rotom",
        forme: "Mow",
        types: ["Electric", "Grass"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 65,
            def: 107,
            spa: 105,
            spd: 107,
            spe: 86
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Amorphous"],
        changesFrom: "Rotom",
        tier: "2"
    },
    uxie: {
        num: 480,
        name: "Uxie",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 75,
            def: 130,
            spa: 75,
            spd: 130,
            spe: 95
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    mesprit: {
        num: 481,
        name: "Mesprit",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 105,
            def: 105,
            spa: 105,
            spd: 105,
            spe: 80
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Pink",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    azelf: {
        num: 482,
        name: "Azelf",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 75,
            atk: 125,
            def: 70,
            spa: 125,
            spd: 70,
            spe: 115
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    dialga: {
        num: 483,
        name: "Dialga",
        types: ["Steel", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 120,
            def: 120,
            spa: 150,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 5.4,
        weightkg: 683,
        tags: ["Restricted Legendary"],
        color: "White",
        eggGroups: ["Undiscovered"],
        otherFormes: ["Dialga-Origin"],
        formeOrder: ["Dialga", "Dialga-Origin"],
        tier: "2"
    },
    dialgaorigin: {
        num: 483,
        name: "Dialga-Origin",
        baseSpecies: "Dialga",
        forme: "Origin",
        types: ["Steel", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 120,
            spa: 150,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 7,
        weightkg: 850,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItem: "Adamant Crystal",
        changesFrom: "Dialga",
        gen: 8,
        tier: "2"
    },
    palkia: {
        num: 484,
        name: "Palkia",
        types: ["Water", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 100
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 4.2,
        weightkg: 336,
        color: "Purple",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Palkia-Origin"],
        formeOrder: ["Palkia", "Palkia-Origin"],
        tier: "2"
    },
    palkiaorigin: {
        num: 484,
        name: "Palkia-Origin",
        baseSpecies: "Palkia",
        forme: "Origin",
        types: ["Water", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 6.3,
        weightkg: 660,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Lustrous Globe",
        changesFrom: "Palkia",
        gen: 8,
        tier: "2"
    },
    heatran: {
        num: 485,
        name: "Heatran",
        types: ["Fire", "Steel"],
        baseStats: {
            hp: 91,
            atk: 90,
            def: 106,
            spa: 130,
            spd: 106,
            spe: 77
        },
        abilities: {
            "0": "Flash Fire",
            H: "Flame Body"
        },
        heightm: 1.7,
        weightkg: 430,
        color: "Brown",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    regigigas: {
        num: 486,
        name: "Regigigas",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 110,
            atk: 160,
            def: 110,
            spa: 80,
            spd: 110,
            spe: 100
        },
        abilities: {
            "0": "Slow Start"
        },
        heightm: 3.7,
        weightkg: 420,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    giratina: {
        num: 487,
        name: "Giratina",
        baseForme: "Altered",
        types: ["Ghost", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 150,
            atk: 100,
            def: 120,
            spa: 100,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Pressure",
            H: "Telepathy"
        },
        heightm: 4.5,
        weightkg: 750,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Giratina-Origin"],
        formeOrder: ["Giratina", "Giratina-Origin"],
        tier: "2"
    },
    giratinaorigin: {
        num: 487,
        name: "Giratina-Origin",
        baseSpecies: "Giratina",
        forme: "Origin",
        types: ["Ghost", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 150,
            atk: 120,
            def: 100,
            spa: 120,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 6.9,
        weightkg: 650,
        color: "Black",
        eggGroups: ["Undiscovered"],
        requiredItem: "Griseous Core",
        changesFrom: "Giratina",
        tier: "2"
    },
    cresselia: {
        num: 488,
        name: "Cresselia",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 120,
            atk: 70,
            def: 110,
            spa: 75,
            spd: 120,
            spe: 85
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 85.6,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "1"
    },
    phione: {
        num: 489,
        name: "Phione",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        abilities: {
            "0": "Hydration"
        },
        heightm: 0.4,
        weightkg: 3.1,
        color: "Blue",
        tags: ["Mythical"],
        eggGroups: ["Water 1", "Fairy"],
        tier: "2",
    },
    manaphy: {
        num: 490,
        name: "Manaphy",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Hydration"
        },
        heightm: 0.3,
        weightkg: 1.4,
        color: "Blue",
        tags: ["Mythical"],
        eggGroups: ["Water 1", "Fairy"],
        tier: "2",
    },
    darkrai: {
        num: 491,
        name: "Darkrai",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 90,
            def: 90,
            spa: 135,
            spd: 90,
            spe: 125
        },
        abilities: {
            "0": "Bad Dreams"
        },
        heightm: 1.5,
        weightkg: 50.5,
        color: "Black",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    shaymin: {
        num: 492,
        name: "Shaymin",
        baseForme: "Land",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Natural Cure"
        },
        heightm: 0.2,
        weightkg: 2.1,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Shaymin-Sky"],
        formeOrder: ["Shaymin", "Shaymin-Sky"],
        tier: "2",
    },
    shayminsky: {
        num: 492,
        name: "Shaymin-Sky",
        baseSpecies: "Shaymin",
        forme: "Sky",
        types: ["Grass", "Flying"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 103,
            def: 75,
            spa: 120,
            spd: 75,
            spe: 127
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.4,
        weightkg: 5.2,
        color: "Green",
        eggGroups: ["Undiscovered"],
        changesFrom: "Shaymin",
        tier: "2",
    },
    arceus: {
        num: 493,
        name: "Arceus",
        baseForme: "Normal",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Arceus-Bug", "Arceus-Dark", "Arceus-Dragon", "Arceus-Electric", "Arceus-Fairy", "Arceus-Fighting", "Arceus-Fire", "Arceus-Flying", "Arceus-Ghost", "Arceus-Grass", "Arceus-Ground", "Arceus-Ice", "Arceus-Poison", "Arceus-Psychic", "Arceus-Rock", "Arceus-Steel", "Arceus-Water"],
        formeOrder: ["Arceus", "Arceus-Fighting", "Arceus-Flying", "Arceus-Poison", "Arceus-Ground", "Arceus-Rock", "Arceus-Bug", "Arceus-Ghost", "Arceus-Steel", "Arceus-Fire", "Arceus-Water", "Arceus-Grass", "Arceus-Electric", "Arceus-Psychic", "Arceus-Ice", "Arceus-Dragon", "Arceus-Dark", "Arceus-Fairy"],
        tier: "2"
    },
    arceusbug: {
        num: 493,
        name: "Arceus-Bug",
        baseSpecies: "Arceus",
        forme: "Bug",
        types: ["Bug"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Insect Plate", "Buginium Z"],
        changesFrom: "Arceus"
    },
    arceusdark: {
        num: 493,
        name: "Arceus-Dark",
        baseSpecies: "Arceus",
        forme: "Dark",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Dread Plate", "Darkinium Z"],
        changesFrom: "Arceus"
    },
    arceusdragon: {
        num: 493,
        name: "Arceus-Dragon",
        baseSpecies: "Arceus",
        forme: "Dragon",
        types: ["Dragon"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Draco Plate", "Dragonium Z"],
        changesFrom: "Arceus"
    },
    arceuselectric: {
        num: 493,
        name: "Arceus-Electric",
        baseSpecies: "Arceus",
        forme: "Electric",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Zap Plate", "Electrium Z"],
        changesFrom: "Arceus"
    },
    arceusfairy: {
        num: 493,
        name: "Arceus-Fairy",
        baseSpecies: "Arceus",
        forme: "Fairy",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Pixie Plate", "Fairium Z"],
        changesFrom: "Arceus",
        gen: 6
    },
    arceusfighting: {
        num: 493,
        name: "Arceus-Fighting",
        baseSpecies: "Arceus",
        forme: "Fighting",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Fist Plate", "Fightinium Z"],
        changesFrom: "Arceus"
    },
    arceusfire: {
        num: 493,
        name: "Arceus-Fire",
        baseSpecies: "Arceus",
        forme: "Fire",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Flame Plate", "Firium Z"],
        changesFrom: "Arceus"
    },
    arceusflying: {
        num: 493,
        name: "Arceus-Flying",
        baseSpecies: "Arceus",
        forme: "Flying",
        types: ["Flying"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Sky Plate", "Flyinium Z"],
        changesFrom: "Arceus"
    },
    arceusghost: {
        num: 493,
        name: "Arceus-Ghost",
        baseSpecies: "Arceus",
        forme: "Ghost",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Spooky Plate", "Ghostium Z"],
        changesFrom: "Arceus"
    },
    arceusgrass: {
        num: 493,
        name: "Arceus-Grass",
        baseSpecies: "Arceus",
        forme: "Grass",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Meadow Plate", "Grassium Z"],
        changesFrom: "Arceus"
    },
    arceusground: {
        num: 493,
        name: "Arceus-Ground",
        baseSpecies: "Arceus",
        forme: "Ground",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Earth Plate", "Groundium Z"],
        changesFrom: "Arceus"
    },
    arceusice: {
        num: 493,
        name: "Arceus-Ice",
        baseSpecies: "Arceus",
        forme: "Ice",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Icicle Plate", "Icium Z"],
        changesFrom: "Arceus"
    },
    arceuspoison: {
        num: 493,
        name: "Arceus-Poison",
        baseSpecies: "Arceus",
        forme: "Poison",
        types: ["Poison"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Toxic Plate", "Poisonium Z"],
        changesFrom: "Arceus"
    },
    arceuspsychic: {
        num: 493,
        name: "Arceus-Psychic",
        baseSpecies: "Arceus",
        forme: "Psychic",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Mind Plate", "Psychium Z"],
        changesFrom: "Arceus"
    },
    arceusrock: {
        num: 493,
        name: "Arceus-Rock",
        baseSpecies: "Arceus",
        forme: "Rock",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Stone Plate", "Rockium Z"],
        changesFrom: "Arceus"
    },
    arceussteel: {
        num: 493,
        name: "Arceus-Steel",
        baseSpecies: "Arceus",
        forme: "Steel",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Iron Plate", "Steelium Z"],
        changesFrom: "Arceus"
    },
    arceuswater: {
        num: 493,
        name: "Arceus-Water",
        baseSpecies: "Arceus",
        forme: "Water",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 120,
            atk: 120,
            def: 120,
            spa: 120,
            spd: 120,
            spe: 120
        },
        abilities: {
            "0": "Multitype"
        },
        heightm: 3.2,
        weightkg: 320,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredItems: ["Splash Plate", "Waterium Z"],
        changesFrom: "Arceus"
    },
    victini: {
        num: 494,
        name: "Victini",
        types: ["Psychic", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 100,
            def: 100,
            spa: 100,
            spd: 100,
            spe: 100
        },
        abilities: {
            "0": "Victory Star"
        },
        heightm: 0.4,
        weightkg: 4,
        color: "Yellow",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "1",
    },
    snivy: {
        num: 495,
        name: "Snivy",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 45,
            def: 55,
            spa: 45,
            spd: 55,
            spe: 63
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 0.6,
        weightkg: 8.1,
        color: "Green",
        evos: ["Servine"],
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    servine: {
        num: 496,
        name: "Servine",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 60,
            def: 75,
            spa: 60,
            spd: 75,
            spe: 83
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 0.8,
        weightkg: 16,
        color: "Green",
        prevo: "Snivy",
        evoLevel: 17,
        evos: ["Serperior"],
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    serperior: {
        num: 497,
        name: "Serperior",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 75,
            def: 95,
            spa: 75,
            spd: 95,
            spe: 113
        },
        abilities: {
            "0": "Overgrow",
            H: "Contrary"
        },
        heightm: 3.3,
        weightkg: 63,
        color: "Green",
        prevo: "Servine",
        evoLevel: 36,
        eggGroups: ["Field", "Grass"],
        tier: "1",
    },
    tepig: {
        num: 498,
        name: "Tepig",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 63,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Blaze",
            H: "Thick Fat"
        },
        heightm: 0.5,
        weightkg: 9.9,
        color: "Red",
        evos: ["Pignite"],
        eggGroups: ["Field"],
        tier: "1",
    },
    pignite: {
        num: 499,
        name: "Pignite",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 93,
            def: 55,
            spa: 70,
            spd: 55,
            spe: 55
        },
        abilities: {
            "0": "Blaze",
            H: "Thick Fat"
        },
        heightm: 1,
        weightkg: 55.5,
        color: "Red",
        prevo: "Tepig",
        evoLevel: 17,
        evos: ["Emboar"],
        eggGroups: ["Field"],
        tier: "1",
    },
    emboar: {
        num: 500,
        name: "Emboar",
        types: ["Fire", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 110,
            atk: 123,
            def: 65,
            spa: 100,
            spd: 65,
            spe: 65
        },
        abilities: {
            "0": "Blaze",
            H: "Reckless"
        },
        heightm: 1.6,
        weightkg: 150,
        color: "Red",
        prevo: "Pignite",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "1",
    },
    oshawott: {
        num: 501,
        name: "Oshawott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 55,
            def: 45,
            spa: 63,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 0.5,
        weightkg: 5.9,
        color: "Blue",
        evos: ["Dewott"],
        eggGroups: ["Field"],
        tier: "1"
    },
    dewott: {
        num: 502,
        name: "Dewott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 75,
            def: 60,
            spa: 83,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 0.8,
        weightkg: 24.5,
        color: "Blue",
        prevo: "Oshawott",
        evoLevel: 17,
        evos: ["Samurott", "Samurott-Hisui"],
        eggGroups: ["Field"],
        tier: "1"
    },
    samurott: {
        num: 503,
        name: "Samurott",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 100,
            def: 85,
            spa: 108,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 1.5,
        weightkg: 94.6,
        color: "Blue",
        prevo: "Dewott",
        evoLevel: 36,
        eggGroups: ["Field"],
        otherFormes: ["Samurott-Hisui"],
        formeOrder: ["Samurott", "Samurott-Hisui"],
        tier: "1"
    },
    samurotthisui: {
        num: 503,
        name: "Samurott-Hisui",
        baseSpecies: "Samurott",
        forme: "Hisui",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 90,
            atk: 108,
            def: 80,
            spa: 100,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Torrent",
            H: "Shell Armor"
        },
        heightm: 1.5,
        weightkg: 58.2,
        color: "Blue",
        prevo: "Dewott",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Field"],
        tier: "1"
    },
    patrat: {
        num: 504,
        name: "Patrat",
        types: ["Normal"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 39,
            spa: 35,
            spd: 39,
            spe: 42
        },
        abilities: {
            "0": "Run Away",
            "1": "Keen Eye",
            H: "Analytic"
        },
        heightm: 0.5,
        weightkg: 11.6,
        color: "Brown",
        evos: ["Watchog"],
        eggGroups: ["Field"],
        tier: "2",
    },
    watchog: {
        num: 505,
        name: "Watchog",
        types: ["Normal"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 69,
            spa: 60,
            spd: 69,
            spe: 77
        },
        abilities: {
            "0": "Illuminate",
            "1": "Keen Eye",
            H: "Analytic"
        },
        heightm: 1.1,
        weightkg: 27,
        color: "Brown",
        prevo: "Patrat",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "2",
    },
    lillipup: {
        num: 506,
        name: "Lillipup",
        types: ["Normal"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 45,
            spa: 25,
            spd: 45,
            spe: 55
        },
        abilities: {
            "0": "Vital Spirit",
            "1": "Run Away",
            H: "Scrappy"
        },
        heightm: 0.4,
        weightkg: 4.1,
        color: "Brown",
        evos: ["Herdier"],
        eggGroups: ["Field"],
        tier: "1",
    },
    herdier: {
        num: 507,
        name: "Herdier",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 80,
            def: 65,
            spa: 35,
            spd: 65,
            spe: 60
        },
        abilities: {
            "0": "Intimidate",
            "1": "Sand Rush",
            H: "Scrappy"
        },
        heightm: 0.9,
        weightkg: 14.7,
        color: "Gray",
        prevo: "Lillipup",
        evoLevel: 16,
        evos: ["Stoutland"],
        eggGroups: ["Field"],
        tier: "1",
    },
    stoutland: {
        num: 508,
        name: "Stoutland",
        types: ["Normal"],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 90,
            spa: 45,
            spd: 90,
            spe: 80
        },
        abilities: {
            "0": "Intimidate",
            "1": "Sand Rush",
            H: "Scrappy"
        },
        heightm: 1.2,
        weightkg: 61,
        color: "Gray",
        prevo: "Herdier",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "1",
    },
    purrloin: {
        num: 509,
        name: "Purrloin",
        types: ["Dark"],
        baseStats: {
            hp: 41,
            atk: 50,
            def: 37,
            spa: 50,
            spd: 37,
            spe: 66
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Prankster"
        },
        heightm: 0.4,
        weightkg: 10.1,
        color: "Purple",
        evos: ["Liepard"],
        eggGroups: ["Field"],
        tier: "2",
    },
    liepard: {
        num: 510,
        name: "Liepard",
        types: ["Dark"],
        baseStats: {
            hp: 64,
            atk: 88,
            def: 50,
            spa: 88,
            spd: 50,
            spe: 106
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Prankster"
        },
        heightm: 1.1,
        weightkg: 37.5,
        color: "Purple",
        prevo: "Purrloin",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "2",
    },
    pansage: {
        num: 511,
        name: "Pansage",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Overgrow"
        },
        heightm: 0.6,
        weightkg: 10.5,
        color: "Green",
        evos: ["Simisage"],
        eggGroups: ["Field"],
        tier: "2",
    },
    simisage: {
        num: 512,
        name: "Simisage",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Overgrow"
        },
        heightm: 1.1,
        weightkg: 30.5,
        color: "Green",
        prevo: "Pansage",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    pansear: {
        num: 513,
        name: "Pansear",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Blaze"
        },
        heightm: 0.6,
        weightkg: 11,
        color: "Red",
        evos: ["Simisear"],
        eggGroups: ["Field"],
        tier: "2",
    },
    simisear: {
        num: 514,
        name: "Simisear",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Blaze"
        },
        heightm: 1,
        weightkg: 28,
        color: "Red",
        prevo: "Pansear",
        evoType: "useItem",
        evoItem: "Fire Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    panpour: {
        num: 515,
        name: "Panpour",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 53,
            def: 48,
            spa: 53,
            spd: 48,
            spe: 64
        },
        abilities: {
            "0": "Gluttony",
            H: "Torrent"
        },
        heightm: 0.6,
        weightkg: 13.5,
        color: "Blue",
        evos: ["Simipour"],
        eggGroups: ["Field"],
        tier: "2",
    },
    simipour: {
        num: 516,
        name: "Simipour",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 98,
            def: 63,
            spa: 98,
            spd: 63,
            spe: 101
        },
        abilities: {
            "0": "Gluttony",
            H: "Torrent"
        },
        heightm: 1,
        weightkg: 29,
        color: "Blue",
        prevo: "Panpour",
        evoType: "useItem",
        evoItem: "Water Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    munna: {
        num: 517,
        name: "Munna",
        types: ["Psychic"],
        baseStats: {
            hp: 76,
            atk: 25,
            def: 45,
            spa: 67,
            spd: 55,
            spe: 24
        },
        abilities: {
            "0": "Synchronize",
            H: "Telepathy"
        },
        heightm: 0.6,
        weightkg: 23.3,
        color: "Pink",
        evos: ["Musharna"],
        eggGroups: ["Field"],
        tier: "1",
    },
    musharna: {
        num: 518,
        name: "Musharna",
        types: ["Psychic"],
        baseStats: {
            hp: 116,
            atk: 55,
            def: 85,
            spa: 107,
            spd: 95,
            spe: 29
        },
        abilities: {
            "0": "Synchronize",
            H: "Telepathy"
        },
        heightm: 1.1,
        weightkg: 60.5,
        color: "Pink",
        prevo: "Munna",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Field"],
        tier: "1",
    },
    pidove: {
        num: 519,
        name: "Pidove",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 50,
            atk: 55,
            def: 50,
            spa: 36,
            spd: 30,
            spe: 43
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 0.3,
        weightkg: 2.1,
        color: "Gray",
        evos: ["Tranquill"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    tranquill: {
        num: 520,
        name: "Tranquill",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 62,
            atk: 77,
            def: 62,
            spa: 50,
            spd: 42,
            spe: 65
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 0.6,
        weightkg: 15,
        color: "Gray",
        prevo: "Pidove",
        evoLevel: 21,
        evos: ["Unfezant"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    unfezant: {
        num: 521,
        name: "Unfezant",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 80,
            atk: 115,
            def: 80,
            spa: 65,
            spd: 55,
            spe: 93
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Super Luck",
            H: "Rivalry"
        },
        heightm: 1.2,
        weightkg: 29,
        color: "Gray",
        prevo: "Tranquill",
        evoLevel: 32,
        eggGroups: ["Flying"],
        tier: "2",
    },
    blitzle: {
        num: 522,
        name: "Blitzle",
        types: ["Electric"],
        baseStats: {
            hp: 45,
            atk: 60,
            def: 32,
            spa: 50,
            spd: 32,
            spe: 76
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Motor Drive",
            H: "Sap Sipper"
        },
        heightm: 0.8,
        weightkg: 29.8,
        color: "Black",
        evos: ["Zebstrika"],
        eggGroups: ["Field"],
        tier: "2",
    },
    zebstrika: {
        num: 523,
        name: "Zebstrika",
        types: ["Electric"],
        baseStats: {
            hp: 75,
            atk: 100,
            def: 63,
            spa: 80,
            spd: 63,
            spe: 116
        },
        abilities: {
            "0": "Lightning Rod",
            "1": "Motor Drive",
            H: "Sap Sipper"
        },
        heightm: 1.6,
        weightkg: 79.5,
        color: "Black",
        prevo: "Blitzle",
        evoLevel: 27,
        eggGroups: ["Field"],
        tier: "2",
    },
    roggenrola: {
        num: 524,
        name: "Roggenrola",
        types: ["Rock"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 85,
            spa: 25,
            spd: 25,
            spe: 15
        },
        abilities: {
            "0": "Weak Armor",
            "1": "Clear Body",
            H: "Sturdy"
        },
        heightm: 0.4,
        weightkg: 18,
        color: "Blue",
        evos: ["Boldore"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    boldore: {
        num: 525,
        name: "Boldore",
        types: ["Rock"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 105,
            spa: 50,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Clear Body",
            H: "Sturdy"
        },
        heightm: 0.9,
        weightkg: 102,
        color: "Blue",
        prevo: "Roggenrola",
        evoLevel: 25,
        evos: ["Gigalith"],
        eggGroups: ["Mineral"],
        tier: "1",
    },
    gigalith: {
        num: 526,
        name: "Gigalith",
        types: ["Rock"],
        baseStats: {
            hp: 85,
            atk: 135,
            def: 130,
            spa: 60,
            spd: 80,
            spe: 25
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Clear Body",
            H: "Sand Stream"
        },
        heightm: 1.7,
        weightkg: 260,
        color: "Blue",
        prevo: "Boldore",
        evoLevel: "38",
        eggGroups: ["Mineral"],
        tier: "1",
    },
    woobat: {
        num: 527,
        name: "Woobat",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 65,
            atk: 45,
            def: 43,
            spa: 55,
            spd: 43,
            spe: 72
        },
        abilities: {
            "0": "Unaware",
            "1": "Klutz",
            H: "Simple"
        },
        heightm: 0.4,
        weightkg: 2.1,
        color: "Blue",
        evos: ["Swoobat"],
        eggGroups: ["Flying", "Field"],
        tier: "2",
    },
    swoobat: {
        num: 528,
        name: "Swoobat",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 67,
            atk: 57,
            def: 55,
            spa: 77,
            spd: 55,
            spe: 114
        },
        abilities: {
            "0": "Unaware",
            "1": "Klutz",
            H: "Simple"
        },
        heightm: 0.9,
        weightkg: 10.5,
        color: "Blue",
        prevo: "Woobat",
        evoType: "levelFriendship",
        eggGroups: ["Flying", "Field"],
        tier: "2",
    },
    drilbur: {
        num: 529,
        name: "Drilbur",
        types: ["Ground"],
        baseStats: {
            hp: 60,
            atk: 85,
            def: 40,
            spa: 30,
            spd: 45,
            spe: 68
        },
        abilities: {
            "0": "Sand Rush",
            "1": "Sand Force",
            H: "Mold Breaker"
        },
        heightm: 0.3,
        weightkg: 8.5,
        color: "Gray",
        evos: ["Excadrill"],
        eggGroups: ["Field"],
        tier: "1",
    },
    excadrill: {
        num: 530,
        name: "Excadrill",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 110,
            atk: 135,
            def: 60,
            spa: 50,
            spd: 65,
            spe: 88
        },
        abilities: {
            "0": "Sand Rush",
            "1": "Sand Force",
            H: "Mold Breaker"
        },
        heightm: 0.7,
        weightkg: 40.4,
        color: "Gray",
        prevo: "Drilbur",
        evoLevel: 31,
        eggGroups: ["Field"],
        tier: "1",
    },
    audino: {
        num: 531,
        name: "Audino",
        types: ["Normal"],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 86,
            spa: 60,
            spd: 86,
            spe: 50
        },
        abilities: {
            "0": "Healer",
            H: "Regenerator"
        },
        heightm: 1.1,
        weightkg: 31,
        color: "Pink",
        eggGroups: ["Fairy"],
        otherFormes: ["Audino-Mega"],
        formeOrder: ["Audino", "Audino-Mega"],
        tier: "1",
    },
    audinomega: {
        num: 531,
        name: "Audino-Mega",
        baseSpecies: "Audino",
        forme: "Mega",
        types: ["Normal", "Fairy"],
        baseStats: {
            hp: 103,
            atk: 60,
            def: 126,
            spa: 80,
            spd: 126,
            spe: 50
        },
        abilities: {
            "0": "Healer"
        },
        heightm: 1.5,
        weightkg: 32,
        color: "White",
        eggGroups: ["Fairy"],
        requiredItem: "Audinite",
        tier: "1",
    },
    timburr: {
        num: 532,
        name: "Timburr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 75,
            atk: 80,
            def: 55,
            spa: 25,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 0.6,
        weightkg: 12.5,
        color: "Gray",
        evos: ["Gurdurr"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    gurdurr: {
        num: 533,
        name: "Gurdurr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 85,
            atk: 105,
            def: 85,
            spa: 40,
            spd: 50,
            spe: 40
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 1.2,
        weightkg: 40,
        color: "Gray",
        prevo: "Timburr",
        evoLevel: 25,
        evos: ["Conkeldurr"],
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    conkeldurr: {
        num: 534,
        name: "Conkeldurr",
        types: ["Fighting"],
        genderRatio: {
            M: 0.75,
            F: 0.25
        },
        baseStats: {
            hp: 105,
            atk: 140,
            def: 95,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Guts",
            "1": "Sheer Force",
            H: "Iron Fist"
        },
        heightm: 1.4,
        weightkg: 87,
        color: "Brown",
        prevo: "Gurdurr",
        evoLevel: "40",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    tympole: {
        num: 535,
        name: "Tympole",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 40,
            spa: 50,
            spd: 40,
            spe: 64
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Poison Touch",
            H: "Water Absorb"
        },
        heightm: 0.5,
        weightkg: 4.5,
        color: "Blue",
        evos: ["Palpitoad"],
        eggGroups: ["Water 1"],
        tier: "1",
    },
    palpitoad: {
        num: 536,
        name: "Palpitoad",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 75,
            atk: 65,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 69
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Poison Touch",
            H: "Water Absorb"
        },
        heightm: 0.8,
        weightkg: 17,
        color: "Blue",
        prevo: "Tympole",
        evoLevel: 16,
        evos: ["Seismitoad"],
        eggGroups: ["Water 1"],
        tier: "1",
    },
    seismitoad: {
        num: 537,
        name: "Seismitoad",
        types: ["Water", "Ground"],
        baseStats: {
            hp: 105,
            atk: 95,
            def: 75,
            spa: 85,
            spd: 75,
            spe: 74
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Poison Touch",
            H: "Water Absorb"
        },
        heightm: 1.5,
        weightkg: 62,
        color: "Blue",
        prevo: "Palpitoad",
        evoLevel: 36,
        eggGroups: ["Water 1"],
        tier: "1",
    },
    throh: {
        num: 538,
        name: "Throh",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 120,
            atk: 100,
            def: 85,
            spa: 30,
            spd: 85,
            spe: 45
        },
        abilities: {
            "0": "Mold Breaker",
            "1": "Inner Focus",
            H: "Guts"
        },
        heightm: 1.3,
        weightkg: 55.5,
        color: "Red",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    sawk: {
        num: 539,
        name: "Sawk",
        types: ["Fighting"],
        gender: "M",
        baseStats: {
            hp: 75,
            atk: 125,
            def: 75,
            spa: 30,
            spd: 75,
            spe: 85
        },
        abilities: {
            "0": "Mold Breaker",
            "1": "Inner Focus",
            H: "Sturdy"
        },
        heightm: 1.4,
        weightkg: 51,
        color: "Blue",
        eggGroups: ["Human-Like"],
        tier: "1",
    },
    sewaddle: {
        num: 540,
        name: "Sewaddle",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 45,
            atk: 53,
            def: 70,
            spa: 40,
            spd: 60,
            spe: 42
        },
        abilities: {
            "0": "Swarm",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 0.3,
        weightkg: 2.5,
        color: "Yellow",
        evos: ["Swadloon"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    swadloon: {
        num: 541,
        name: "Swadloon",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 55,
            atk: 63,
            def: 90,
            spa: 50,
            spd: 80,
            spe: 42
        },
        abilities: {
            "0": "Leaf Guard",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 0.5,
        weightkg: 7.3,
        color: "Green",
        prevo: "Sewaddle",
        evoLevel: 20,
        evos: ["Leavanny"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    leavanny: {
        num: 542,
        name: "Leavanny",
        types: ["Bug", "Grass"],
        baseStats: {
            hp: 75,
            atk: 103,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 92
        },
        abilities: {
            "0": "Swarm",
            "1": "Chlorophyll",
            H: "Overcoat"
        },
        heightm: 1.2,
        weightkg: 20.5,
        color: "Yellow",
        prevo: "Swadloon",
        evoType: "levelFriendship",
        eggGroups: ["Bug"],
        tier: "2",
    },
    venipede: {
        num: 543,
        name: "Venipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 30,
            atk: 45,
            def: 59,
            spa: 30,
            spd: 39,
            spe: 57
        },
        abilities: {
            "0": "Poison Point",
            H: "Speed Boost"
        },
        heightm: 0.4,
        weightkg: 5.3,
        color: "Red",
        evos: ["Whirlipede"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    whirlipede: {
        num: 544,
        name: "Whirlipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 99,
            spa: 40,
            spd: 79,
            spe: 47
        },
        abilities: {
            "0": "Poison Point",
            H: "Speed Boost"
        },
        heightm: 1.2,
        weightkg: 58.5,
        color: "Gray",
        prevo: "Venipede",
        evoLevel: 20,
        evos: ["Scolipede"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    scolipede: {
        num: 545,
        name: "Scolipede",
        types: ["Bug", "Poison"],
        baseStats: {
            hp: 60,
            atk: 100,
            def: 89,
            spa: 55,
            spd: 69,
            spe: 112
        },
        abilities: {
            "0": "Poison Point",
            H: "Speed Boost"
        },
        heightm: 2.5,
        weightkg: 200.5,
        color: "Red",
        prevo: "Whirlipede",
        evoLevel: 30,
        eggGroups: ["Bug"],
        tier: "1",
    },
    cottonee: {
        num: 546,
        name: "Cottonee",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 27,
            def: 60,
            spa: 37,
            spd: 50,
            spe: 66
        },
        abilities: {
            "0": "Prankster",
            "1": "Infiltrator",
            H: "Chlorophyll"
        },
        heightm: 0.3,
        weightkg: 0.6,
        color: "Green",
        evos: ["Whimsicott"],
        eggGroups: ["Fairy", "Grass"],
        tier: "2",
    },
    whimsicott: {
        num: 547,
        name: "Whimsicott",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 67,
            def: 85,
            spa: 77,
            spd: 75,
            spe: 116
        },
        abilities: {
            "0": "Prankster",
            "1": "Infiltrator",
            H: "Chlorophyll"
        },
        heightm: 0.7,
        weightkg: 6.6,
        color: "Green",
        prevo: "Cottonee",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Fairy", "Grass"],
        tier: "2",
    },
    petilil: {
        num: 548,
        name: "Petilil",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 45,
            atk: 35,
            def: 50,
            spa: 70,
            spd: 50,
            spe: 30
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Own Tempo",
            H: "Leaf Guard"
        },
        heightm: 0.5,
        weightkg: 6.6,
        color: "Green",
        evos: ["Lilligant", "Lilligant-Hisui"],
        eggGroups: ["Grass"],
        tier: "1"
    },
    lilligant: {
        num: 549,
        name: "Lilligant",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 60,
            def: 75,
            spa: 110,
            spd: 75,
            spe: 90
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Own Tempo"
        },
        heightm: 1.1,
        weightkg: 16.3,
        color: "Green",
        prevo: "Petilil",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Grass"],
        otherFormes: ["Lilligant-Hisui"],
        formeOrder: ["Lilligant", "Lilligant-Hisui"],
        tier: "1"
    },
    lilliganthisui: {
        num: 549,
        name: "Lilligant-Hisui",
        baseSpecies: "Lilligant",
        forme: "Hisui",
        types: ["Grass", "Fighting"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 105,
            def: 75,
            spa: 50,
            spd: 75,
            spe: 105
        },
        abilities: {
            "0": "Chlorophyll",
            "1": "Own Tempo",
            H: "Hustle"
        },
        heightm: 1.2,
        weightkg: 19.2,
        color: "Green",
        prevo: "Petilil",
        evoType: "useItem",
        evoItem: "Leaf Stone",
        eggGroups: ["Grass"],
        tier: "1"
    },
    basculin: {
        num: 550,
        name: "Basculin",
        baseForme: "Red-Striped",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        abilities: {
            "0": "Reckless",
            "1": "Mold Breaker",
            H: "Adaptability"
        },
        heightm: 1,
        weightkg: 18,
        color: "Green",
        evos: ["Basculegion"],
        eggGroups: ["Water 2"],
        otherFormes: ["Basculin-Blue-Striped"],
        formeOrder: ["Basculin", "Basculin-Blue-Striped"],
        tier: "1"
    },
    basculinbluestriped: {
        num: 550,
        name: "Basculin-Blue-Striped",
        baseSpecies: "Basculin",
        forme: "Blue-Striped",
        types: ["Water"],
        baseStats: {
            hp: 70,
            atk: 92,
            def: 65,
            spa: 80,
            spd: 55,
            spe: 98
        },
        abilities: {
            "0": "Rock Head",
            "1": "Mold Breaker",
            H: "Adaptability"
        },
        heightm: 1,
        weightkg: 18,
        color: "Green",
        evos: ["Basculegion"],
        eggGroups: ["Water 2"],
        tier: "1"
    },
    sandile: {
        num: 551,
        name: "Sandile",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 50,
            atk: 72,
            def: 35,
            spa: 35,
            spd: 35,
            spe: 65
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 0.7,
        weightkg: 15.2,
        color: "Brown",
        evos: ["Krokorok"],
        eggGroups: ["Field"],
        tier: "1"
    },
    krokorok: {
        num: 552,
        name: "Krokorok",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 60,
            atk: 82,
            def: 45,
            spa: 45,
            spd: 45,
            spe: 74
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 1,
        weightkg: 33.4,
        color: "Brown",
        prevo: "Sandile",
        evoLevel: 22,
        evos: ["Krookodile"],
        eggGroups: ["Field"],
        tier: "1"
    },
    krookodile: {
        num: 553,
        name: "Krookodile",
        types: ["Ground", "Dark"],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 80,
            spa: 65,
            spd: 70,
            spe: 92
        },
        abilities: {
            "0": "Intimidate",
            H: "Moxie"
        },
        heightm: 1.5,
        weightkg: 96.3,
        color: "Red",
        prevo: "Krokorok",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "1"
    },
    darumaka: {
        num: 554,
        name: "Darumaka",
        types: ["Fire"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 45,
            spa: 15,
            spd: 45,
            spe: 50
        },
        abilities: {
            "0": "Hustle",
            H: "Inner Focus"
        },
        heightm: 0.6,
        weightkg: 37.5,
        color: "Red",
        evos: ["Darmanitan"],
        eggGroups: ["Field"],
        otherFormes: ["Darumaka-Galar"],
        formeOrder: ["Darumaka", "Darumaka-Galar"],
        tier: "2",
    },
    darumakagalar: {
        num: 554,
        name: "Darumaka-Galar",
        baseSpecies: "Darumaka",
        forme: "Galar",
        types: ["Ice"],
        baseStats: {
            hp: 70,
            atk: 90,
            def: 45,
            spa: 15,
            spd: 45,
            spe: 50
        },
        abilities: {
            "0": "Hustle",
            H: "Inner Focus"
        },
        heightm: 0.7,
        weightkg: 40,
        color: "White",
        evos: ["Darmanitan-Galar"],
        eggGroups: ["Field"],
        tier: "2",
    },
    darmanitan: {
        num: 555,
        name: "Darmanitan",
        baseForme: "Standard",
        types: ["Fire"],
        baseStats: {
            hp: 105,
            atk: 140,
            def: 55,
            spa: 30,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Sheer Force",
            H: "Zen Mode"
        },
        heightm: 1.3,
        weightkg: 92.9,
        color: "Red",
        prevo: "Darumaka",
        evoLevel: 35,
        eggGroups: ["Field"],
        otherFormes: ["Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"],
        formeOrder: ["Darmanitan", "Darmanitan-Zen", "Darmanitan-Galar", "Darmanitan-Galar-Zen"],
        tier: "2",
    },
    darmanitanzen: {
        num: 555,
        name: "Darmanitan-Zen",
        baseSpecies: "Darmanitan",
        forme: "Zen",
        types: ["Fire", "Psychic"],
        baseStats: {
            hp: 105,
            atk: 30,
            def: 105,
            spa: 140,
            spd: 105,
            spe: 55
        },
        abilities: {
            "0": "Zen Mode"
        },
        heightm: 1.3,
        weightkg: 92.9,
        color: "Blue",
        eggGroups: ["Field"],
        requiredAbility: "Zen Mode",
        battleOnly: "Darmanitan",
    },
    darmanitangalar: {
        num: 555,
        name: "Darmanitan-Galar",
        baseSpecies: "Darmanitan",
        forme: "Galar",
        types: ["Ice"],
        baseStats: {
            hp: 105,
            atk: 140,
            def: 55,
            spa: 30,
            spd: 55,
            spe: 95
        },
        abilities: {
            "0": "Gorilla Tactics",
            H: "Zen Mode"
        },
        heightm: 1.7,
        weightkg: 120,
        color: "White",
        prevo: "Darumaka-Galar",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    darmanitangalarzen: {
        num: 555,
        name: "Darmanitan-Galar-Zen",
        baseSpecies: "Darmanitan",
        forme: "Galar-Zen",
        types: ["Ice", "Fire"],
        baseStats: {
            hp: 105,
            atk: 160,
            def: 55,
            spa: 30,
            spd: 55,
            spe: 135
        },
        abilities: {
            "0": "Zen Mode"
        },
        heightm: 1.7,
        weightkg: 120,
        color: "White",
        eggGroups: ["Field"],
        requiredAbility: "Zen Mode",
        battleOnly: "Darmanitan-Galar",
    },
    maractus: {
        num: 556,
        name: "Maractus",
        types: ["Grass"],
        baseStats: {
            hp: 75,
            atk: 86,
            def: 67,
            spa: 106,
            spd: 67,
            spe: 60
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Storm Drain"
        },
        heightm: 1,
        weightkg: 28,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "1",
    },
    dwebble: {
        num: 557,
        name: "Dwebble",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 85,
            spa: 35,
            spd: 35,
            spe: 55
        },
        abilities: {
            "0": "Sturdy",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 0.3,
        weightkg: 14.5,
        color: "Red",
        evos: ["Crustle"],
        eggGroups: ["Bug", "Mineral"],
        tier: "1",
    },
    crustle: {
        num: 558,
        name: "Crustle",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 125,
            spa: 65,
            spd: 75,
            spe: 45
        },
        abilities: {
            "0": "Sturdy",
            "1": "Shell Armor",
            H: "Weak Armor"
        },
        heightm: 1.4,
        weightkg: 200,
        color: "Red",
        prevo: "Dwebble",
        evoLevel: 34,
        eggGroups: ["Bug", "Mineral"],
        tier: "1",
    },
    scraggy: {
        num: 559,
        name: "Scraggy",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 70,
            spa: 35,
            spd: 70,
            spe: 48
        },
        abilities: {
            "0": "Shed Skin",
            "1": "Moxie",
            H: "Intimidate"
        },
        heightm: 0.6,
        weightkg: 11.8,
        color: "Yellow",
        evos: ["Scrafty"],
        eggGroups: ["Field", "Dragon"],
        tier: "2",
    },
    scrafty: {
        num: 560,
        name: "Scrafty",
        types: ["Dark", "Fighting"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 115,
            spa: 45,
            spd: 115,
            spe: 58
        },
        abilities: {
            "0": "Shed Skin",
            "1": "Moxie",
            H: "Intimidate"
        },
        heightm: 1.1,
        weightkg: 30,
        color: "Red",
        prevo: "Scraggy",
        evoLevel: 39,
        eggGroups: ["Field", "Dragon"],
        tier: "2",
    },
    sigilyph: {
        num: 561,
        name: "Sigilyph",
        types: ["Psychic", "Flying"],
        baseStats: {
            hp: 72,
            atk: 58,
            def: 80,
            spa: 103,
            spd: 80,
            spe: 97
        },
        abilities: {
            "0": "Tinted Lens",
            "1": "Magic Guard",
            H: "Tinted Lens"
        },
        heightm: 1.4,
        weightkg: 14,
        color: "Black",
        eggGroups: ["Flying"],
        tier: "1",
    },
    yamask: {
        num: 562,
        name: "Yamask",
        types: ["Ghost"],
        baseStats: {
            hp: 38,
            atk: 30,
            def: 85,
            spa: 55,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Mummy"
        },
        heightm: 0.5,
        weightkg: 1.5,
        color: "Black",
        evos: ["Cofagrigus"],
        eggGroups: ["Mineral", "Amorphous"],
        otherFormes: ["Yamask-Galar"],
        formeOrder: ["Yamask", "Yamask-Galar"],
        tier: "2",
    },
    yamaskgalar: {
        num: 562,
        name: "Yamask-Galar",
        baseSpecies: "Yamask",
        forme: "Galar",
        types: ["Ground", "Ghost"],
        baseStats: {
            hp: 38,
            atk: 55,
            def: 85,
            spa: 30,
            spd: 65,
            spe: 30
        },
        abilities: {
            "0": "Wandering Spirit"
        },
        heightm: 0.5,
        weightkg: 1.5,
        color: "Black",
        evos: ["Runerigus"],
        eggGroups: ["Mineral", "Amorphous"],
        tier: "2",
    },
    cofagrigus: {
        num: 563,
        name: "Cofagrigus",
        types: ["Ghost"],
        baseStats: {
            hp: 58,
            atk: 50,
            def: 145,
            spa: 95,
            spd: 105,
            spe: 30
        },
        abilities: {
            "0": "Mummy"
        },
        heightm: 1.7,
        weightkg: 76.5,
        color: "Yellow",
        prevo: "Yamask",
        evoLevel: 34,
        eggGroups: ["Mineral", "Amorphous"],
        tier: "2",
    },
    tirtouga: {
        num: 564,
        name: "Tirtouga",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 54,
            atk: 78,
            def: 103,
            spa: 53,
            spd: 45,
            spe: 22
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Swift Swim",
            H: "Sturdy"
        },
        heightm: 0.7,
        weightkg: 16.5,
        color: "Blue",
        evos: ["Carracosta"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    carracosta: {
        num: 565,
        name: "Carracosta",
        types: ["Water", "Rock"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 74,
            atk: 108,
            def: 133,
            spa: 83,
            spd: 65,
            spe: 32
        },
        abilities: {
            "0": "Solid Rock",
            "1": "Swift Swim",
            H: "Sturdy"
        },
        heightm: 1.2,
        weightkg: 81,
        color: "Blue",
        prevo: "Tirtouga",
        evoLevel: 37,
        eggGroups: ["Water 1", "Water 3"],
        tier: "1",
    },
    archen: {
        num: 566,
        name: "Archen",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 112,
            def: 45,
            spa: 74,
            spd: 45,
            spe: 70
        },
        abilities: {
            "0": "Defeatist"
        },
        heightm: 0.5,
        weightkg: 9.5,
        color: "Yellow",
        evos: ["Archeops"],
        eggGroups: ["Flying", "Water 3"],
        tier: "1",
    },
    archeops: {
        num: 567,
        name: "Archeops",
        types: ["Rock", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 140,
            def: 65,
            spa: 112,
            spd: 65,
            spe: 110
        },
        abilities: {
            "0": "Defeatist"
        },
        heightm: 1.4,
        weightkg: 32,
        color: "Yellow",
        prevo: "Archen",
        evoLevel: 37,
        eggGroups: ["Flying", "Water 3"],
        tier: "1",
    },
    trubbish: {
        num: 568,
        name: "Trubbish",
        types: ["Poison"],
        baseStats: {
            hp: 50,
            atk: 50,
            def: 62,
            spa: 40,
            spd: 62,
            spe: 65
        },
        abilities: {
            "0": "Stench",
            "1": "Sticky Hold",
            H: "Aftermath"
        },
        heightm: 0.6,
        weightkg: 31,
        color: "Green",
        evos: ["Garbodor"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    garbodor: {
        num: 569,
        name: "Garbodor",
        types: ["Poison"],
        baseStats: {
            hp: 80,
            atk: 95,
            def: 82,
            spa: 60,
            spd: 82,
            spe: 75
        },
        abilities: {
            "0": "Stench",
            "1": "Weak Armor",
            H: "Aftermath"
        },
        heightm: 1.9,
        weightkg: 107.3,
        color: "Green",
        prevo: "Trubbish",
        evoLevel: 36,
        eggGroups: ["Mineral"],
        canGigantamax: "G-Max Malodor",
        tier: "2",
    },
    zorua: {
        num: 570,
        name: "Zorua",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 65,
            def: 40,
            spa: 80,
            spd: 40,
            spe: 65
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 0.7,
        weightkg: 12.5,
        color: "Gray",
        evos: ["Zoroark"],
        eggGroups: ["Field"],
        otherFormes: ["Zorua-Hisui"],
        formeOrder: ["Zorua", "Zorua-Hisui"],
        tier: "1"
    },
    zoruahisui: {
        num: 570,
        name: "Zorua-Hisui",
        baseSpecies: "Zorua",
        forme: "Hisui",
        types: ["Normal", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 35,
            atk: 60,
            def: 40,
            spa: 85,
            spd: 40,
            spe: 70
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 0.7,
        weightkg: 12.5,
        color: "Gray",
        evos: ["Zoroark-Hisui"],
        eggGroups: ["Field"],
        tier: "1"
    },
    zoroark: {
        num: 571,
        name: "Zoroark",
        types: ["Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 105,
            def: 60,
            spa: 120,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 1.6,
        weightkg: 81.1,
        color: "Gray",
        prevo: "Zorua",
        evoLevel: 30,
        eggGroups: ["Field"],
        otherFormes: ["Zoroark-Hisui"],
        formeOrder: ["Zoroark", "Zoroark-Hisui"],
        tier: "1NUBL"
    },
    zoroarkhisui: {
        num: 571,
        name: "Zoroark-Hisui",
        baseSpecies: "Zoroark",
        forme: "Hisui",
        types: ["Normal", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 55,
            atk: 100,
            def: 60,
            spa: 125,
            spd: 60,
            spe: 110
        },
        abilities: {
            "0": "Illusion"
        },
        heightm: 1.6,
        weightkg: 73,
        color: "Gray",
        prevo: "Zorua-Hisui",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "1"
    },
    minccino: {
        num: 572,
        name: "Minccino",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 55,
            atk: 50,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 75
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Technician",
            H: "Skill Link"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Gray",
        evos: ["Cinccino"],
        eggGroups: ["Field"],
        tier: "2",
    },
    cinccino: {
        num: 573,
        name: "Cinccino",
        types: ["Normal"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 95,
            def: 60,
            spa: 65,
            spd: 60,
            spe: 115
        },
        abilities: {
            "0": "Cute Charm",
            "1": "Technician",
            H: "Skill Link"
        },
        heightm: 0.5,
        weightkg: 7.5,
        color: "Gray",
        prevo: "Minccino",
        evoType: "useItem",
        evoItem: "Shiny Stone",
        eggGroups: ["Field"],
        tier: "2",
    },
    gothita: {
        num: 574,
        name: "Gothita",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 45,
            atk: 30,
            def: 50,
            spa: 55,
            spd: 65,
            spe: 45
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 0.4,
        weightkg: 5.8,
        color: "Purple",
        evos: ["Gothorita"],
        eggGroups: ["Human-Like"],
        tier: "2"
    },
    gothorita: {
        num: 575,
        name: "Gothorita",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 45,
            def: 70,
            spa: 75,
            spd: 85,
            spe: 55
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 0.7,
        weightkg: 18,
        color: "Purple",
        prevo: "Gothita",
        evoLevel: 32,
        evos: ["Gothitelle"],
        eggGroups: ["Human-Like"],
        tier: "2"
    },
    gothitelle: {
        num: 576,
        name: "Gothitelle",
        types: ["Psychic"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 70,
            atk: 55,
            def: 95,
            spa: 95,
            spd: 110,
            spe: 65
        },
        abilities: {
            "0": "Frisk",
            "1": "Competitive",
            H: "Shadow Tag"
        },
        heightm: 1.5,
        weightkg: 44,
        color: "Purple",
        prevo: "Gothorita",
        evoLevel: 41,
        eggGroups: ["Human-Like"],
        tier: "2"
    },
    solosis: {
        num: 577,
        name: "Solosis",
        types: ["Psychic"],
        baseStats: {
            hp: 45,
            atk: 30,
            def: 40,
            spa: 105,
            spd: 50,
            spe: 20
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Green",
        evos: ["Duosion"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    duosion: {
        num: 578,
        name: "Duosion",
        types: ["Psychic"],
        baseStats: {
            hp: 65,
            atk: 40,
            def: 50,
            spa: 125,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 8,
        color: "Green",
        prevo: "Solosis",
        evoLevel: 32,
        evos: ["Reuniclus"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    reuniclus: {
        num: 579,
        name: "Reuniclus",
        types: ["Psychic"],
        baseStats: {
            hp: 110,
            atk: 65,
            def: 75,
            spa: 125,
            spd: 85,
            spe: 30
        },
        abilities: {
            "0": "Overcoat",
            "1": "Magic Guard",
            H: "Regenerator"
        },
        heightm: 1,
        weightkg: 20.1,
        color: "Green",
        prevo: "Duosion",
        evoLevel: 41,
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    ducklett: {
        num: 580,
        name: "Ducklett",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 62,
            atk: 44,
            def: 50,
            spa: 44,
            spd: 50,
            spe: 55
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Big Pecks",
            H: "Hydration"
        },
        heightm: 0.5,
        weightkg: 5.5,
        color: "Blue",
        evos: ["Swanna"],
        eggGroups: ["Water 1", "Flying"],
        tier: "2",
    },
    swanna: {
        num: 581,
        name: "Swanna",
        types: ["Water", "Flying"],
        baseStats: {
            hp: 75,
            atk: 87,
            def: 63,
            spa: 87,
            spd: 63,
            spe: 98
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Big Pecks",
            H: "Hydration"
        },
        heightm: 1.3,
        weightkg: 24.2,
        color: "White",
        prevo: "Ducklett",
        evoLevel: 35,
        eggGroups: ["Water 1", "Flying"],
        tier: "2",
    },
    vanillite: {
        num: 582,
        name: "Vanillite",
        types: ["Ice"],
        baseStats: {
            hp: 36,
            atk: 50,
            def: 50,
            spa: 65,
            spd: 60,
            spe: 44
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Cloak",
            H: "Weak Armor"
        },
        heightm: 0.4,
        weightkg: 5.7,
        color: "White",
        evos: ["Vanillish"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    vanillish: {
        num: 583,
        name: "Vanillish",
        types: ["Ice"],
        baseStats: {
            hp: 51,
            atk: 65,
            def: 65,
            spa: 80,
            spd: 75,
            spe: 59
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Cloak",
            H: "Weak Armor"
        },
        heightm: 1.1,
        weightkg: 41,
        color: "White",
        prevo: "Vanillite",
        evoLevel: 35,
        evos: ["Vanilluxe"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    vanilluxe: {
        num: 584,
        name: "Vanilluxe",
        types: ["Ice"],
        baseStats: {
            hp: 71,
            atk: 95,
            def: 85,
            spa: 110,
            spd: 95,
            spe: 79
        },
        abilities: {
            "0": "Ice Body",
            "1": "Snow Warning",
            H: "Weak Armor"
        },
        heightm: 1.3,
        weightkg: 57.5,
        color: "White",
        prevo: "Vanillish",
        evoLevel: 47,
        eggGroups: ["Mineral"],
        tier: "2",
    },
    deerling: {
        num: 585,
        name: "Deerling",
        baseForme: "Spring",
        types: ["Normal", "Grass"],
        baseStats: {
            hp: 60,
            atk: 60,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 19.5,
        color: "Pink",
        evos: ["Sawsbuck"],
        eggGroups: ["Field"],
        cosmeticFormes: ["Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"],
        formeOrder: ["Deerling", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter"],
        tier: "1"
    },
    sawsbuck: {
        num: 586,
        name: "Sawsbuck",
        baseForme: "Spring",
        types: ["Normal", "Grass"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 70,
            spa: 60,
            spd: 70,
            spe: 95
        },
        abilities: {
            "0": "Chlorophyll",
            H: "Serene Grace"
        },
        heightm: 1.9,
        weightkg: 92.5,
        color: "Brown",
        prevo: "Deerling",
        evoLevel: 30,
        eggGroups: ["Field"],
        cosmeticFormes: ["Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
        formeOrder: ["Sawsbuck", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"],
        tier: "1"
    },
    emolga: {
        num: 587,
        name: "Emolga",
        types: ["Electric", "Flying"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 60,
            spa: 75,
            spd: 60,
            spe: 103
        },
        abilities: {
            "0": "Static",
            H: "Motor Drive"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "White",
        eggGroups: ["Field"],
        tier: "2",
    },
    karrablast: {
        num: 588,
        name: "Karrablast",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 75,
            def: 45,
            spa: 40,
            spd: 45,
            spe: 60
        },
        abilities: {
            "0": "No Guard",
            "1": "Shed Skin",
            H: "No Guard"
        },
        heightm: 0.5,
        weightkg: 5.9,
        color: "Blue",
        evos: ["Escavalier"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    escavalier: {
        num: 589,
        name: "Escavalier",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 70,
            atk: 135,
            def: 105,
            spa: 60,
            spd: 105,
            spe: 20
        },
        abilities: {
            "0": "Overcoat",
            "1": "Shell Armor",
            H: "Shell Armor"
        },
        heightm: 1,
        weightkg: 33,
        color: "Gray",
        prevo: "Karrablast",
        evoType: "useItem",
        evoItem: "Metal Coal",
        eggGroups: ["Bug"],
        tier: "1",
    },
    foongus: {
        num: 590,
        name: "Foongus",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 69,
            atk: 55,
            def: 45,
            spa: 55,
            spd: 55,
            spe: 15
        },
        abilities: {
            "0": "Effect Spore",
            H: "Regenerator"
        },
        heightm: 0.2,
        weightkg: 1,
        color: "White",
        evos: ["Amoonguss"],
        eggGroups: ["Grass"],
        tier: "1"
    },
    amoonguss: {
        num: 591,
        name: "Amoonguss",
        types: ["Grass", "Poison"],
        baseStats: {
            hp: 114,
            atk: 85,
            def: 70,
            spa: 85,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Effect Spore",
            H: "Regenerator"
        },
        heightm: 0.6,
        weightkg: 10.5,
        color: "White",
        prevo: "Foongus",
        evoLevel: 36,
        eggGroups: ["Grass"],
        tier: "1"
    },
    frillish: {
        num: 592,
        name: "Frillish",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 55,
            atk: 40,
            def: 50,
            spa: 65,
            spd: 85,
            spe: 40
        },
        abilities: {
            "0": "Cursed Body",
            H: "Water Aborb"
        },
        heightm: 1.2,
        weightkg: 33,
        color: "White",
        evos: ["Jellicent"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    jellicent: {
        num: 593,
        name: "Jellicent",
        types: ["Water", "Ghost"],
        baseStats: {
            hp: 100,
            atk: 60,
            def: 70,
            spa: 85,
            spd: 105,
            spe: 60
        },
        abilities: {
            "0": "Cursed Body",
            H: "Water Aborb"
        },
        heightm: 2.2,
        weightkg: 135,
        color: "White",
        prevo: "Frillish",
        evoLevel: 40,
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    alomomola: {
        num: 594,
        name: "Alomomola",
        types: ["Water"],
        baseStats: {
            hp: 165,
            atk: 75,
            def: 80,
            spa: 40,
            spd: 45,
            spe: 65
        },
        abilities: {
            "0": "Healer",
            "1": "Hydration",
            H: "Regenerator"
        },
        heightm: 1.2,
        weightkg: 31.6,
        color: "Pink",
        eggGroups: ["Water 1", "Water 2"],
        tier: "2"
    },
    joltik: {
        num: 595,
        name: "Joltik",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 50,
            atk: 47,
            def: 50,
            spa: 57,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Unnerve",
            H: "Swarm"
        },
        heightm: 0.1,
        weightkg: 0.6,
        color: "Yellow",
        evos: ["Galvantula"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    galvantula: {
        num: 596,
        name: "Galvantula",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 70,
            atk: 77,
            def: 60,
            spa: 97,
            spd: 60,
            spe: 108
        },
        abilities: {
            "0": "Compound Eyes",
            "1": "Unnerve",
            H: "Swarm"
        },
        heightm: 0.8,
        weightkg: 14.3,
        color: "Yellow",
        prevo: "Joltik",
        evoLevel: 30,
        eggGroups: ["Bug"],
        tier: "1",
    },
    ferroseed: {
        num: 597,
        name: "Ferroseed",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 44,
            atk: 50,
            def: 91,
            spa: 24,
            spd: 86,
            spe: 10
        },
        abilities: {
            "0": "Anticipation",
            H: "Iron Barbs"
        },
        heightm: 0.6,
        weightkg: 18.8,
        color: "Gray",
        evos: ["Ferrothorn"],
        eggGroups: ["Grass", "Mineral"],
        tier: "1",
    },
    ferrothorn: {
        num: 598,
        name: "Ferrothorn",
        types: ["Grass", "Steel"],
        baseStats: {
            hp: 74,
            atk: 94,
            def: 131,
            spa: 54,
            spd: 116,
            spe: 20
        },
        abilities: {
            "0": "Anticipation",
            H: "Iron Barbs"
        },
        heightm: 1,
        weightkg: 110,
        color: "Gray",
        prevo: "Ferroseed",
        evoLevel: 40,
        eggGroups: ["Grass", "Mineral"],
        tier: "1",
    },
    klink: {
        num: 599,
        name: "Klink",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 55,
            def: 70,
            spa: 45,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.3,
        weightkg: 21,
        color: "Gray",
        evos: ["Klang"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    klang: {
        num: 600,
        name: "Klang",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 80,
            def: 95,
            spa: 70,
            spd: 85,
            spe: 50
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.6,
        weightkg: 51,
        color: "Gray",
        prevo: "Klink",
        evoLevel: 38,
        evos: ["Klinklang"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    klinklang: {
        num: 601,
        name: "Klinklang",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 100,
            def: 115,
            spa: 70,
            spd: 85,
            spe: 90
        },
        abilities: {
            "0": "Plus",
            "1": "Minus",
            H: "Clear Body"
        },
        heightm: 0.6,
        weightkg: 81,
        color: "Gray",
        prevo: "Klang",
        evoLevel: 49,
        eggGroups: ["Mineral"],
        tier: "2",
    },
    tynamo: {
        num: 602,
        name: "Tynamo",
        types: ["Electric"],
        baseStats: {
            hp: 35,
            atk: 55,
            def: 40,
            spa: 45,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 0.2,
        weightkg: 0.3,
        color: "White",
        evos: ["Eelektrik"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    eelektrik: {
        num: 603,
        name: "Eelektrik",
        types: ["Electric"],
        baseStats: {
            hp: 65,
            atk: 85,
            def: 70,
            spa: 75,
            spd: 70,
            spe: 40
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.2,
        weightkg: 22,
        color: "Blue",
        prevo: "Tynamo",
        evoLevel: 22,
        evos: ["Eelektross"],
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    eelektross: {
        num: 604,
        name: "Eelektross",
        types: ["Electric"],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 80,
            spa: 105,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 2.1,
        weightkg: 80.5,
        color: "Blue",
        prevo: "Eelektrik",
        evoType: "useItem",
        evoItem: "Thunder Stone",
        eggGroups: ["Amorphous"],
        tier: "1"
    },
    elgyem: {
        num: 605,
        name: "Elgyem",
        types: ["Psychic"],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 55,
            spa: 85,
            spd: 55,
            spe: 30
        },
        abilities: {
            "0": "Telepathy",
            "1": "Synchronize",
            H: "Analytic"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Blue",
        evos: ["Beheeyem"],
        eggGroups: ["Human-Like"],
        tier: "2",
    },
    beheeyem: {
        num: 606,
        name: "Beheeyem",
        types: ["Psychic"],
        baseStats: {
            hp: 75,
            atk: 75,
            def: 75,
            spa: 125,
            spd: 95,
            spe: 40
        },
        abilities: {
            "0": "Telepathy",
            "1": "Synchronize",
            H: "Analytic"
        },
        heightm: 1,
        weightkg: 34.5,
        color: "Brown",
        prevo: "Elgyem",
        evoLevel: 42,
        eggGroups: ["Human-Like"],
        tier: "2",
    },
    litwick: {
        num: 607,
        name: "Litwick",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 50,
            atk: 30,
            def: 55,
            spa: 65,
            spd: 55,
            spe: 20
        },
        abilities: {
            "0": "Shadow Tag",
            "1": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 0.3,
        weightkg: 3.1,
        color: "White",
        evos: ["Lampent"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    lampent: {
        num: 608,
        name: "Lampent",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 60,
            atk: 40,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 55
        },
        abilities: {
            "0": "Shadow Tag",
            "1": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 0.6,
        weightkg: 13,
        color: "Black",
        prevo: "Litwick",
        evoLevel: 41,
        evos: ["Chandelure"],
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    chandelure: {
        num: 609,
        name: "Chandelure",
        types: ["Ghost", "Fire"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 90,
            spa: 145,
            spd: 90,
            spe: 80
        },
        abilities: {
            "0": "Shadow Tag",
            "1": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 1,
        weightkg: 34.3,
        color: "Black",
        prevo: "Lampent",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Amorphous"],
        tier: "1",
    },
    axew: {
        num: 610,
        name: "Axew",
        types: ["Dragon"],
        baseStats: {
            hp: 46,
            atk: 87,
            def: 60,
            spa: 30,
            spd: 40,
            spe: 57
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 0.6,
        weightkg: 18,
        color: "Green",
        evos: ["Fraxure"],
        eggGroups: ["Monster", "Dragon"],
        tier: "2"
    },
    fraxure: {
        num: 611,
        name: "Fraxure",
        types: ["Dragon"],
        baseStats: {
            hp: 66,
            atk: 117,
            def: 70,
            spa: 40,
            spd: 50,
            spe: 67
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 1,
        weightkg: 36,
        color: "Green",
        prevo: "Axew",
        evoLevel: 38,
        evos: ["Haxorus"],
        eggGroups: ["Monster", "Dragon"],
        tier: "2"
    },
    haxorus: {
        num: 612,
        name: "Haxorus",
        types: ["Dragon"],
        baseStats: {
            hp: 76,
            atk: 147,
            def: 90,
            spa: 60,
            spd: 70,
            spe: 97
        },
        abilities: {
            "0": "Rivalry",
            "1": "Mold Breaker",
            H: "Unnerve"
        },
        heightm: 1.8,
        weightkg: 105.5,
        color: "Yellow",
        prevo: "Fraxure",
        evoLevel: 48,
        eggGroups: ["Monster", "Dragon"],
        tier: "2"
    },
    cubchoo: {
        num: 613,
        name: "Cubchoo",
        types: ["Ice"],
        baseStats: {
            hp: 55,
            atk: 70,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 40
        },
        abilities: {
            "0": "Snow Cloak",
            "1": "Slush Rush",
            H: "Rattled"
        },
        heightm: 0.5,
        weightkg: 8.5,
        color: "White",
        evos: ["Beartic"],
        eggGroups: ["Field"],
        tier: "2"
    },
    beartic: {
        num: 614,
        name: "Beartic",
        types: ["Ice"],
        baseStats: {
            hp: 95,
            atk: 130,
            def: 80,
            spa: 70,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Snow Cloak",
            "1": "Slush Rush",
            H: "Swift Swim"
        },
        heightm: 2.6,
        weightkg: 260,
        color: "White",
        prevo: "Cubchoo",
        evoLevel: 37,
        eggGroups: ["Field"],
        tier: "2"
    },
    cryogonal: {
        num: 615,
        name: "Cryogonal",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 50,
            def: 50,
            spa: 95,
            spd: 135,
            spe: 105
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.1,
        weightkg: 148,
        color: "Blue",
        eggGroups: ["Mineral"],
        tier: "1"
    },
    shelmet: {
        num: 616,
        name: "Shelmet",
        types: ["Bug"],
        baseStats: {
            hp: 50,
            atk: 40,
            def: 85,
            spa: 40,
            spd: 65,
            spe: 25
        },
        abilities: {
            "0": "Hydration",
            "1": "Shell Armor",
            H: "Overcoat"
        },
        heightm: 0.4,
        weightkg: 7.7,
        color: "Red",
        evos: ["Accelgor"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    accelgor: {
        num: 617,
        name: "Accelgor",
        types: ["Bug"],
        baseStats: {
            hp: 80,
            atk: 70,
            def: 40,
            spa: 100,
            spd: 60,
            spe: 145
        },
        abilities: {
            "0": "Hydration",
            "1": "Sticky Hold",
            H: "Unburden"
        },
        heightm: 0.8,
        weightkg: 25.3,
        color: "Red",
        prevo: "Shelmet",
        evoLevel: "36",
        eggGroups: ["Bug"],
        tier: "1",
    },
    stunfisk: {
        num: 618,
        name: "Stunfisk",
        types: ["Ground", "Electric"],
        baseStats: {
            hp: 109,
            atk: 66,
            def: 84,
            spa: 81,
            spd: 99,
            spe: 32
        },
        abilities: {
            "0": "Static",
            H: "Sand Veil"
        },
        heightm: 0.7,
        weightkg: 11,
        color: "Brown",
        eggGroups: ["Water 1", "Amorphous"],
        otherFormes: ["Stunfisk-Galar"],
        formeOrder: ["Stunfisk", "Stunfisk-Galar"],
        tier: "1",
    },
    stunfiskgalar: {
        num: 618,
        name: "Stunfisk-Galar",
        baseSpecies: "Stunfisk",
        forme: "Galar",
        types: ["Ground", "Steel"],
        baseStats: {
            hp: 109,
            atk: 81,
            def: 99,
            spa: 66,
            spd: 84,
            spe: 32
        },
        abilities: {
            "0": "Mimicry"
        },
        heightm: 0.7,
        weightkg: 20.5,
        color: "Green",
        eggGroups: ["Water 1", "Amorphous"],
        tier: "2",
    },
    mienfoo: {
        num: 619,
        name: "Mienfoo",
        types: ["Fighting"],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 50,
            spa: 55,
            spd: 50,
            spe: 65
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Regenerator",
            H: "Reckless"
        },
        heightm: 0.9,
        weightkg: 20,
        color: "Yellow",
        evos: ["Mienshao"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    mienshao: {
        num: 620,
        name: "Mienshao",
        types: ["Fighting"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 60,
            spa: 95,
            spd: 60,
            spe: 105
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Regenerator",
            H: "Reckless"
        },
        heightm: 1.4,
        weightkg: 35.5,
        color: "Purple",
        prevo: "Mienfoo",
        evoLevel: 38,
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    druddigon: {
        num: 621,
        name: "Druddigon",
        types: ["Dragon"],
        baseStats: {
            hp: 77,
            atk: 120,
            def: 90,
            spa: 60,
            spd: 90,
            spe: 48
        },
        abilities: {
            "0": "Rough Skin",
            "1": "Sheer Force",
            H: "Mold Breaker"
        },
        heightm: 1.6,
        weightkg: 139,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    golett: {
        num: 622,
        name: "Golett",
        types: ["Ground", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 59,
            atk: 74,
            def: 50,
            spa: 35,
            spd: 50,
            spe: 35
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Klutz",
            H: "No Guard"
        },
        heightm: 1,
        weightkg: 92,
        color: "Green",
        evos: ["Golurk"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    golurk: {
        num: 623,
        name: "Golurk",
        types: ["Ground", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 89,
            atk: 124,
            def: 80,
            spa: 55,
            spd: 80,
            spe: 55
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Klutz",
            H: "No Guard"
        },
        heightm: 2.8,
        weightkg: 330,
        color: "Green",
        prevo: "Golett",
        evoLevel: 43,
        eggGroups: ["Mineral"],
        tier: "2",
    },
    pawniard: {
        num: 624,
        name: "Pawniard",
        types: ["Dark", "Steel"],
        baseStats: {
            hp: 45,
            atk: 85,
            def: 70,
            spa: 40,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Defiant",
            "1": "Inner Focus",
            H: "Pressure"
        },
        heightm: 0.5,
        weightkg: 10.2,
        color: "Red",
        evos: ["Bisharp"],
        eggGroups: ["Human-Like"],
        tier: "2"
    },
    bisharp: {
        num: 625,
        name: "Bisharp",
        types: ["Dark", "Steel"],
        baseStats: {
            hp: 65,
            atk: 125,
            def: 100,
            spa: 60,
            spd: 70,
            spe: 70
        },
        abilities: {
            "0": "Defiant",
            "1": "Inner Focus",
            H: "Pressure"
        },
        heightm: 1.6,
        weightkg: 70,
        color: "Red",
        prevo: "Pawniard",
        evoLevel: 52,
        evos: ["Kingambit"],
        eggGroups: ["Human-Like"],
        tier: "2"
    },
    bouffalant: {
        num: 626,
        name: "Bouffalant",
        types: ["Normal"],
        baseStats: {
            hp: 95,
            atk: 110,
            def: 95,
            spa: 40,
            spd: 95,
            spe: 55
        },
        abilities: {
            "0": "Reckless",
            "1": "Sap Sipper",
            H: "Soundproof"
        },
        heightm: 1.6,
        weightkg: 94.6,
        color: "Brown",
        eggGroups: ["Field"],
        tier: "2",
    },
    rufflet: {
        num: 627,
        name: "Rufflet",
        types: ["Normal", "Flying"],
        gender: "M",
        baseStats: {
            hp: 70,
            atk: 83,
            def: 50,
            spa: 37,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sheer Force",
            H: "Hustle"
        },
        heightm: 0.5,
        weightkg: 10.5,
        color: "White",
        evos: ["Braviary", "Braviary-Hisui"],
        eggGroups: ["Flying"],
        tier: "2"
    },
    braviary: {
        num: 628,
        name: "Braviary",
        types: ["Normal", "Flying"],
        gender: "M",
        baseStats: {
            hp: 100,
            atk: 123,
            def: 75,
            spa: 57,
            spd: 75,
            spe: 80
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sheer Force",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 41,
        color: "Red",
        prevo: "Rufflet",
        evoLevel: 54,
        eggGroups: ["Flying"],
        otherFormes: ["Braviary-Hisui"],
        formeOrder: ["Braviary", "Braviary-Hisui"],
        tier: "2"
    },
    braviaryhisui: {
        num: 628,
        name: "Braviary-Hisui",
        baseSpecies: "Braviary",
        forme: "Hisui",
        types: ["Psychic", "Flying"],
        gender: "M",
        baseStats: {
            hp: 110,
            atk: 83,
            def: 70,
            spa: 112,
            spd: 70,
            spe: 65
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Sheer Force",
            H: "Defiant"
        },
        heightm: 1.7,
        weightkg: 43.4,
        color: "White",
        prevo: "Rufflet",
        evoLevel: 54,
        eggGroups: ["Flying"],
        tier: "2"
    },
    vullaby: {
        num: 629,
        name: "Vullaby",
        types: ["Dark", "Flying"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 55,
            def: 75,
            spa: 45,
            spd: 65,
            spe: 60
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Overcoat",
            H: "Weak Armor"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Brown",
        evos: ["Mandibuzz"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    mandibuzz: {
        num: 630,
        name: "Mandibuzz",
        types: ["Dark", "Flying"],
        gender: "F",
        baseStats: {
            hp: 110,
            atk: 65,
            def: 105,
            spa: 55,
            spd: 95,
            spe: 80
        },
        abilities: {
            "0": "Big Pecks",
            "1": "Overcoat",
            H: "Weak Armor"
        },
        heightm: 1.2,
        weightkg: 39.5,
        color: "Brown",
        prevo: "Vullaby",
        evoLevel: 54,
        eggGroups: ["Flying"],
        tier: "2",
    },
    heatmor: {
        num: 631,
        name: "Heatmor",
        types: ["Fire"],
        baseStats: {
            hp: 85,
            atk: 97,
            def: 66,
            spa: 105,
            spd: 66,
            spe: 65
        },
        abilities: {
            "0": "Gluttony",
            "1": "Flash Fire",
            H: "White Smoke"
        },
        heightm: 1.4,
        weightkg: 58,
        color: "Red",
        eggGroups: ["Field"],
        tier: "2",
    },
    durant: {
        num: 632,
        name: "Durant",
        types: ["Bug", "Steel"],
        baseStats: {
            hp: 58,
            atk: 109,
            def: 112,
            spa: 48,
            spd: 48,
            spe: 109
        },
        abilities: {
            "0": "Swarm",
            "1": "Hustle",
            H: "Truant"
        },
        heightm: 0.3,
        weightkg: 33,
        color: "Gray",
        eggGroups: ["Bug"],
        tier: "1",
    },
    deino: {
        num: 633,
        name: "Deino",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 52,
            atk: 65,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 38
        },
        abilities: {
            "0": "Hustle"
        },
        heightm: 0.8,
        weightkg: 17.3,
        color: "Blue",
        evos: ["Zweilous"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    zweilous: {
        num: 634,
        name: "Zweilous",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 72,
            atk: 85,
            def: 70,
            spa: 65,
            spd: 70,
            spe: 58
        },
        abilities: {
            "0": "Hustle"
        },
        heightm: 1.4,
        weightkg: 50,
        color: "Blue",
        prevo: "Deino",
        evoLevel: 50,
        evos: ["Hydreigon"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    hydreigon: {
        num: 635,
        name: "Hydreigon",
        types: ["Dark", "Dragon"],
        baseStats: {
            hp: 92,
            atk: 105,
            def: 90,
            spa: 125,
            spd: 90,
            spe: 98
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.8,
        weightkg: 160,
        color: "Blue",
        prevo: "Zweilous",
        evoLevel: 64,
        eggGroups: ["Dragon"],
        tier: "1"
    },
    larvesta: {
        num: 636,
        name: "Larvesta",
        types: ["Bug", "Fire"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 55,
            spa: 50,
            spd: 55,
            spe: 60
        },
        abilities: {
            "0": "Swarm",
            H: "Flame Body"
        },
        heightm: 1.1,
        weightkg: 28.8,
        color: "White",
        evos: ["Volcarona"],
        eggGroups: ["Bug"],
        tier: "1"
    },
    volcarona: {
        num: 637,
        name: "Volcarona",
        types: ["Bug", "Fire"],
        baseStats: {
            hp: 85,
            atk: 60,
            def: 65,
            spa: 135,
            spd: 105,
            spe: 100
        },
        abilities: {
            "0": "Swarm",
            H: "Flame Body"
        },
        heightm: 1.6,
        weightkg: 46,
        color: "White",
        prevo: "Larvesta",
        evoLevel: 59,
        eggGroups: ["Bug"],
        tier: "1"
    },
    cobalion: {
        num: 638,
        name: "Cobalion",
        types: ["Steel", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 90,
            def: 129,
            spa: 90,
            spd: 72,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 2.1,
        weightkg: 250,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    terrakion: {
        num: 639,
        name: "Terrakion",
        types: ["Rock", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 129,
            def: 90,
            spa: 72,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.9,
        weightkg: 260,
        color: "Gray",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    virizion: {
        num: 640,
        name: "Virizion",
        types: ["Grass", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 90,
            def: 72,
            spa: 90,
            spd: 129,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 2,
        weightkg: 200,
        color: "Green",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    tornadus: {
        num: 641,
        name: "Tornadus",
        baseForme: "Incarnate",
        types: ["Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        abilities: {
            "0": "Prankster",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 63,
        color: "Green",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Tornadus-Therian"],
        formeOrder: ["Tornadus", "Tornadus-Therian"],
        tier: "1"
    },
    tornadustherian: {
        num: 641,
        name: "Tornadus-Therian",
        baseSpecies: "Tornadus",
        forme: "Therian",
        types: ["Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 100,
            def: 80,
            spa: 110,
            spd: 90,
            spe: 121
        },
        abilities: {
            "0": "Regenerator"
        },
        heightm: 1.4,
        weightkg: 63,
        color: "Green",
        eggGroups: ["Undiscovered"],
        changesFrom: "Tornadus",
        tier: "2"
    },
    thundurus: {
        num: 642,
        name: "Thundurus",
        baseForme: "Incarnate",
        types: ["Electric", "Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 115,
            def: 70,
            spa: 125,
            spd: 80,
            spe: 111
        },
        abilities: {
            "0": "Prankster",
            H: "Defiant"
        },
        heightm: 1.5,
        weightkg: 61,
        color: "Blue",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Thundurus-Therian"],
        formeOrder: ["Thundurus", "Thundurus-Therian"],
        tier: "1"
    },
    thundurustherian: {
        num: 642,
        name: "Thundurus-Therian",
        baseSpecies: "Thundurus",
        forme: "Therian",
        types: ["Electric", "Flying"],
        gender: "M",
        baseStats: {
            hp: 79,
            atk: 105,
            def: 70,
            spa: 145,
            spd: 80,
            spe: 101
        },
        abilities: {
            "0": "Volt Absorb"
        },
        heightm: 3,
        weightkg: 61,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        changesFrom: "Thundurus",
        tier: "2"
    },
    reshiram: {
        num: 643,
        name: "Reshiram",
        types: ["Dragon", "Fire"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 120,
            def: 100,
            spa: 150,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Turboblaze"
        },
        heightm: 3.2,
        weightkg: 330,
        color: "White",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    zekrom: {
        num: 644,
        name: "Zekrom",
        types: ["Dragon", "Electric"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 150,
            def: 120,
            spa: 120,
            spd: 100,
            spe: 90
        },
        abilities: {
            "0": "Teravolt"
        },
        heightm: 2.9,
        weightkg: 345,
        color: "Black",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    landorus: {
        num: 645,
        name: "Landorus",
        baseForme: "Incarnate",
        types: ["Ground", "Flying"],
        gender: "M",
        baseStats: {
            hp: 89,
            atk: 125,
            def: 90,
            spa: 115,
            spd: 80,
            spe: 101
        },
        abilities: {
            "0": "Sand Force",
            H: "Sheer Force"
        },
        heightm: 1.5,
        weightkg: 68,
        color: "Brown",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Landorus-Therian"],
        formeOrder: ["Landorus", "Landorus-Therian"],
        tier: "1"
    },
    landorustherian: {
        num: 645,
        name: "Landorus-Therian",
        baseSpecies: "Landorus",
        forme: "Therian",
        types: ["Ground", "Flying"],
        gender: "M",
        baseStats: {
            hp: 89,
            atk: 145,
            def: 90,
            spa: 105,
            spd: 80,
            spe: 91
        },
        abilities: {
            "0": "Intimidate"
        },
        heightm: 1.3,
        weightkg: 68,
        color: "Brown",
        eggGroups: ["Undiscovered"],
        changesFrom: "Landorus",
        tier: "2"
    },
    kyurem: {
        num: 646,
        name: "Kyurem",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 130,
            def: 90,
            spa: 130,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 3,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Kyurem-Black", "Kyurem-White"],
        formeOrder: ["Kyurem", "Kyurem-White", "Kyurem-Black"],
        tier: "2",
    },
    kyuremblack: {
        num: 646,
        name: "Kyurem-Black",
        baseSpecies: "Kyurem",
        forme: "Black",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 170,
            def: 100,
            spa: 120,
            spd: 90,
            spe: 95
        },
        abilities: {
            "0": "Teravolt"
        },
        heightm: 3.3,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        changesFrom: "Kyurem",
        tier: "2",
    },
    kyuremwhite: {
        num: 646,
        name: "Kyurem-White",
        baseSpecies: "Kyurem",
        forme: "White",
        types: ["Dragon", "Ice"],
        gender: "N",
        baseStats: {
            hp: 125,
            atk: 120,
            def: 90,
            spa: 170,
            spd: 100,
            spe: 95
        },
        abilities: {
            "0": "Turboblaze"
        },
        heightm: 3.6,
        weightkg: 325,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        changesFrom: "Kyurem",
        tier: "2",
    },
    keldeo: {
        num: 647,
        name: "Keldeo",
        baseForme: "Ordinary",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 72,
            def: 90,
            spa: 129,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.4,
        weightkg: 48.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Keldeo-Resolute"],
        formeOrder: ["Keldeo", "Keldeo-Resolute"],
        tier: "2",
    },
    keldeoresolute: {
        num: 647,
        name: "Keldeo-Resolute",
        baseSpecies: "Keldeo",
        forme: "Resolute",
        types: ["Water", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 91,
            atk: 72,
            def: 90,
            spa: 129,
            spd: 90,
            spe: 108
        },
        abilities: {
            "0": "Justified"
        },
        heightm: 1.4,
        weightkg: 48.5,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        requiredMove: "Secret Sword",
        changesFrom: "Keldeo",
    },
    meloetta: {
        num: 648,
        name: "Meloetta",
        baseForme: "Aria",
        types: ["Normal", "Psychic"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 77,
            def: 77,
            spa: 128,
            spd: 128,
            spe: 90
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 6.5,
        color: "White",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Meloetta-Pirouette"],
        formeOrder: ["Meloetta", "Meloetta-Pirouette"],
        tier: "2"
    },
    meloettapirouette: {
        num: 648,
        name: "Meloetta-Pirouette",
        baseSpecies: "Meloetta",
        forme: "Pirouette",
        types: ["Normal", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 128,
            def: 90,
            spa: 77,
            spd: 77,
            spe: 128
        },
        abilities: {
            "0": "Serene Grace"
        },
        heightm: 0.6,
        weightkg: 6.5,
        color: "White",
        eggGroups: ["Undiscovered"],
        requiredMove: "Relic Song",
        battleOnly: "Meloetta"
    },
    genesect: {
        num: 649,
        name: "Genesect",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
        formeOrder: ["Genesect", "Genesect-Douse", "Genesect-Shock", "Genesect-Burn", "Genesect-Chill"],
        tier: "2",
    },
    genesectdouse: {
        num: 649,
        name: "Genesect-Douse",
        baseSpecies: "Genesect",
        forme: "Douse",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Douse Drive",
        changesFrom: "Genesect",
        tier: "2",
    },
    genesectshock: {
        num: 649,
        name: "Genesect-Shock",
        baseSpecies: "Genesect",
        forme: "Shock",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Shock Drive",
        changesFrom: "Genesect",
        tier: "2",
    },
    genesectburn: {
        num: 649,
        name: "Genesect-Burn",
        baseSpecies: "Genesect",
        forme: "Burn",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Burn Drive",
        changesFrom: "Genesect",
        tier: "2",
    },
    genesectchill: {
        num: 649,
        name: "Genesect-Chill",
        baseSpecies: "Genesect",
        forme: "Chill",
        types: ["Bug", "Steel"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 120,
            def: 95,
            spa: 120,
            spd: 95,
            spe: 99
        },
        abilities: {
            "0": "Download"
        },
        heightm: 1.5,
        weightkg: 82.5,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        requiredItem: "Chill Drive",
        changesFrom: "Genesect",
        tier: "2",
    },
    chespin: {
        num: 650,
        name: "Chespin",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 56,
            atk: 61,
            def: 65,
            spa: 48,
            spd: 45,
            spe: 38
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 0.4,
        weightkg: 9,
        color: "Green",
        evos: ["Quilladin"],
        eggGroups: ["Field"],
        tier: "1"
    },
    quilladin: {
        num: 651,
        name: "Quilladin",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 61,
            atk: 78,
            def: 95,
            spa: 56,
            spd: 58,
            spe: 57
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 0.7,
        weightkg: 29,
        color: "Green",
        prevo: "Chespin",
        evoLevel: 16,
        evos: ["Chesnaught"],
        eggGroups: ["Field"],
        tier: "1"
    },
    chesnaught: {
        num: 652,
        name: "Chesnaught",
        types: ["Grass", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 88,
            atk: 107,
            def: 122,
            spa: 74,
            spd: 75,
            spe: 64
        },
        abilities: {
            "0": "Overgrow",
            H: "Bulletproof"
        },
        heightm: 1.6,
        weightkg: 90,
        color: "Green",
        prevo: "Quilladin",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "1"
    },
    fennekin: {
        num: 653,
        name: "Fennekin",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 62,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Blaze",
            H: "Magic Guard"
        },
        heightm: 0.4,
        weightkg: 9.4,
        color: "Red",
        evos: ["Braixen"],
        eggGroups: ["Field"],
        tier: "1"
    },
    braixen: {
        num: 654,
        name: "Braixen",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 59,
            atk: 59,
            def: 58,
            spa: 90,
            spd: 70,
            spe: 73
        },
        abilities: {
            "0": "Blaze",
            H: "Magic Guard"
        },
        heightm: 1,
        weightkg: 14.5,
        color: "Red",
        prevo: "Fennekin",
        evoLevel: 16,
        evos: ["Delphox"],
        eggGroups: ["Field"],
        tier: "1"
    },
    delphox: {
        num: 655,
        name: "Delphox",
        types: ["Fire", "Psychic"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 75,
            atk: 69,
            def: 72,
            spa: 114,
            spd: 100,
            spe: 104
        },
        abilities: {
            "0": "Blaze",
            H: "Magic Guard"
        },
        heightm: 1.5,
        weightkg: 39,
        color: "Red",
        prevo: "Braixen",
        evoLevel: 36,
        eggGroups: ["Field"],
        tier: "1"
    },
    froakie: {
        num: 656,
        name: "Froakie",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 41,
            atk: 56,
            def: 40,
            spa: 62,
            spd: 44,
            spe: 71
        },
        abilities: {
            "0": "Torrent",
            H: "Protean"
        },
        heightm: 0.3,
        weightkg: 7,
        color: "Blue",
        evos: ["Frogadier"],
        eggGroups: ["Water 1"],
        tier: "1"
    },
    frogadier: {
        num: 657,
        name: "Frogadier",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 54,
            atk: 63,
            def: 52,
            spa: 83,
            spd: 56,
            spe: 97
        },
        abilities: {
            "0": "Torrent",
            H: "Protean"
        },
        heightm: 0.6,
        weightkg: 10.9,
        color: "Blue",
        prevo: "Froakie",
        evoLevel: 16,
        evos: ["Greninja"],
        eggGroups: ["Water 1"],
        tier: "1"
    },
    greninja: {
        num: 658,
        name: "Greninja",
        types: ["Water", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 72,
            atk: 95,
            def: 67,
            spa: 103,
            spd: 71,
            spe: 122
        },
        abilities: {
            "0": "Torrent",
            H: "Protean",
            S: "Battle Bond"
        },
        heightm: 1.5,
        weightkg: 40,
        color: "Blue",
        prevo: "Frogadier",
        evoLevel: 36,
        eggGroups: ["Water 1"],
        otherFormes: ["Greninja-Bond", "Greninja-Ash"],
        formeOrder: ["Greninja", "Greninja-Bond", "Greninja-Ash"],
        tier: "1"
    },
    greninjabond: {
        num: 658,
        name: "Greninja-Bond",
        baseSpecies: "Greninja",
        forme: "Bond",
        types: ["Water", "Dark"],
        gender: "M",
        baseStats: {
            hp: 72,
            atk: 95,
            def: 67,
            spa: 103,
            spd: 71,
            spe: 122
        },
        abilities: {
            "0": "Battle Bond"
        },
        heightm: 1.5,
        weightkg: 40,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        gen: 7
    },
    greninjaash: {
        num: 658,
        name: "Greninja-Ash",
        baseSpecies: "Greninja",
        forme: "Ash",
        types: ["Water", "Dark"],
        gender: "M",
        baseStats: {
            hp: 72,
            atk: 145,
            def: 67,
            spa: 153,
            spd: 71,
            spe: 132
        },
        abilities: {
            "0": "Battle Bond"
        },
        heightm: 1.5,
        weightkg: 40,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        requiredAbility: "Battle Bond",
        battleOnly: "Greninja-Bond",
        gen: 7,
        tier: "2",
    },
    bunnelby: {
        num: 659,
        name: "Bunnelby",
        types: ["Normal"],
        baseStats: {
            hp: 38,
            atk: 36,
            def: 38,
            spa: 32,
            spd: 36,
            spe: 57
        },
        abilities: {
            "0": "Cheek Pouch",
            H: "Huge Power"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "Brown",
        evos: ["Diggersby"],
        eggGroups: ["Field"],
        tier: "1",
    },
    diggersby: {
        num: 660,
        name: "Diggersby",
        types: ["Normal", "Ground"],
        baseStats: {
            hp: 85,
            atk: 56,
            def: 77,
            spa: 50,
            spd: 77,
            spe: 78
        },
        abilities: {
            "0": "Cheek Pouch",
            H: "Huge Power"
        },
        heightm: 1,
        weightkg: 42.4,
        color: "Brown",
        prevo: "Bunnelby",
        evoLevel: 20,
        eggGroups: ["Field"],
        tier: "1",
    },
    fletchling: {
        num: 661,
        name: "Fletchling",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 43,
            spa: 40,
            spd: 38,
            spe: 62
        },
        abilities: {
            "0": "Keen Eye",
            H: "Gale Wings"
        },
        heightm: 0.3,
        weightkg: 1.7,
        color: "Red",
        evos: ["Fletchinder"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    fletchinder: {
        num: 662,
        name: "Fletchinder",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 62,
            atk: 73,
            def: 55,
            spa: 56,
            spd: 52,
            spe: 84
        },
        abilities: {
            "0": "Flame Body",
            H: "Gale Wings"
        },
        heightm: 0.7,
        weightkg: 16,
        color: "Red",
        prevo: "Fletchling",
        evoLevel: 17,
        evos: ["Talonflame"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    talonflame: {
        num: 663,
        name: "Talonflame",
        types: ["Fire", "Flying"],
        baseStats: {
            hp: 78,
            atk: 81,
            def: 71,
            spa: 74,
            spd: 69,
            spe: 126
        },
        abilities: {
            "0": "Flame Body",
            H: "Gale Wings"
        },
        heightm: 1.2,
        weightkg: 24.5,
        color: "Red",
        prevo: "Fletchinder",
        evoLevel: 35,
        eggGroups: ["Flying"],
        tier: "1"
    },
    scatterbug: {
        num: 664,
        name: "Scatterbug",
        types: ["Bug"],
        baseStats: {
            hp: 38,
            atk: 35,
            def: 40,
            spa: 27,
            spd: 25,
            spe: 35
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 2.5,
        color: "Black",
        evos: ["Spewpa"],
        eggGroups: ["Bug"],
        tier: "1"
    },
    spewpa: {
        num: 665,
        name: "Spewpa",
        types: ["Bug"],
        baseStats: {
            hp: 45,
            atk: 22,
            def: 60,
            spa: 27,
            spd: 30,
            spe: 29
        },
        abilities: {
            "0": "Shed Skin",
            H: "Friend Guard"
        },
        heightm: 0.3,
        weightkg: 8.4,
        color: "Black",
        prevo: "Scatterbug",
        evoLevel: 9,
        evos: ["Vivillon", "Vivillon-Fancy"],
        eggGroups: ["Bug"],
        tier: "1"
    },
    vivillon: {
        num: 666,
        name: "Vivillon",
        baseForme: "Meadow",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "White",
        prevo: "Spewpa",
        evoLevel: 12,
        eggGroups: ["Bug"],
        otherFormes: ["Vivillon-Fancy", "Vivillon-Pokeball"],
        cosmeticFormes: ["Vivillon-Archipelago", "Vivillon-Continental", "Vivillon-Elegant", "Vivillon-Garden", "Vivillon-High Plains", "Vivillon-Icy Snow", "Vivillon-Jungle", "Vivillon-Marine", "Vivillon-Modern", "Vivillon-Monsoon", "Vivillon-Ocean", "Vivillon-Polar", "Vivillon-River", "Vivillon-Sandstorm", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Tundra"],
        formeOrder: ["Vivillon-Icy Snow", "Vivillon-Polar", "Vivillon-Tundra", "Vivillon-Continental", "Vivillon-Garden", "Vivillon-Elegant", "Vivillon", "Vivillon-Modern", "Vivillon-Marine", "Vivillon-Archipelago", "Vivillon-High Plains", "Vivillon-Sandstorm", "Vivillon-River", "Vivillon-Monsoon", "Vivillon-Savanna", "Vivillon-Sun", "Vivillon-Ocean", "Vivillon-Jungle", "Vivillon-Fancy", "Vivillon-Pokeball"],
        tier: "1"
    },
    vivillonfancy: {
        num: 666,
        name: "Vivillon-Fancy",
        baseSpecies: "Vivillon",
        forme: "Fancy",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "Black",
        prevo: "Spewpa",
        evoLevel: 12,
        eggGroups: ["Bug"]
    },
    vivillonpokeball: {
        num: 666,
        name: "Vivillon-Pokeball",
        baseSpecies: "Vivillon",
        forme: "Pokeball",
        types: ["Bug", "Flying"],
        baseStats: {
            hp: 80,
            atk: 52,
            def: 50,
            spa: 90,
            spd: 50,
            spe: 89
        },
        abilities: {
            "0": "Shield Dust",
            "1": "Compound Eyes",
            H: "Friend Guard"
        },
        heightm: 1.2,
        weightkg: 17,
        color: "Black",
        eggGroups: ["Bug"]
    },
    litleo: {
        num: 667,
        name: "Litleo",
        types: ["Fire", "Normal"],
        genderRatio: {
            M: 0.125,
            F: 0.875
        },
        baseStats: {
            hp: 62,
            atk: 50,
            def: 58,
            spa: 73,
            spd: 54,
            spe: 72
        },
        abilities: {
            "0": "Unnerve"
        },
        heightm: 0.6,
        weightkg: 13.5,
        color: "Brown",
        evos: ["Pyroar"],
        eggGroups: ["Field"],
        tier: "1"
    },
    pyroar: {
        num: 668,
        name: "Pyroar",
        types: ["Fire", "Normal"],
        genderRatio: {
            M: 0.125,
            F: 0.875
        },
        baseStats: {
            hp: 86,
            atk: 68,
            def: 72,
            spa: 109,
            spd: 66,
            spe: 106
        },
        abilities: {
            "0": "Unnerve"
        },
        heightm: 1.5,
        weightkg: 81.5,
        color: "Brown",
        prevo: "Litleo",
        evoLevel: 35,
        eggGroups: ["Field"],
        tier: "1"
    },
    flabebe: {
        num: 669,
        name: "FlabeÌbeÌ",
        baseForme: "Red",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 44,
            atk: 38,
            def: 39,
            spa: 61,
            spd: 79,
            spe: 42
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 0.1,
        weightkg: 0.1,
        color: "White",
        evos: ["Floette"],
        eggGroups: ["Fairy"],
        cosmeticFormes: ["FlabeÌbeÌ-Blue", "FlabeÌbeÌ-Orange", "FlabeÌbeÌ-White", "FlabeÌbeÌ-Yellow"],
        formeOrder: ["FlabeÌbeÌ", "FlabeÌbeÌ-Blue", "FlabeÌbeÌ-Orange", "FlabeÌbeÌ-White", "FlabeÌbeÌ-Yellow"],
        tier: "1"
    },
    floette: {
        num: 670,
        name: "Floette",
        baseForme: "Red",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 54,
            atk: 45,
            def: 47,
            spa: 75,
            spd: 98,
            spe: 52
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 0.2,
        weightkg: 0.9,
        color: "White",
        prevo: "FlabeÌbeÌ",
        evoLevel: 19,
        evos: ["Florges"],
        eggGroups: ["Fairy"],
        otherFormes: ["Floette-Eternal"],
        cosmeticFormes: ["Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow"],
        formeOrder: ["Floette", "Floette-Blue", "Floette-Orange", "Floette-White", "Floette-Yellow", "Floette-Eternal"],
        tier: "1"
    },
    floetteeternal: {
        num: 670,
        name: "Floette-Eternal",
        baseSpecies: "Floette",
        forme: "Eternal",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 65,
            def: 67,
            spa: 125,
            spd: 128,
            spe: 92
        },
        abilities: {
            "0": "Flower Veil"
        },
        heightm: 0.2,
        weightkg: 0.9,
        color: "White",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    florges: {
        num: 671,
        name: "Florges",
        baseForme: "Red",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 78,
            atk: 65,
            def: 68,
            spa: 112,
            spd: 154,
            spe: 75
        },
        abilities: {
            "0": "Flower Veil",
            H: "Symbiosis"
        },
        heightm: 1.1,
        weightkg: 10,
        color: "White",
        prevo: "Floette",
        evoType: "useItem",
        evoItem: "Shiny Stone",
        eggGroups: ["Fairy"],
        cosmeticFormes: ["Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
        formeOrder: ["Florges", "Florges-Blue", "Florges-Orange", "Florges-White", "Florges-Yellow"],
        tier: "1"
    },
    skiddo: {
        num: 672,
        name: "Skiddo",
        types: ["Grass"],
        baseStats: {
            hp: 66,
            atk: 65,
            def: 48,
            spa: 62,
            spd: 57,
            spe: 52
        },
        abilities: {
            "0": "Sap Sipper",
            H: "Grass Pelt"
        },
        heightm: 0.9,
        weightkg: 31,
        color: "Brown",
        evos: ["Gogoat"],
        eggGroups: ["Field"],
        tier: "2"
    },
    gogoat: {
        num: 673,
        name: "Gogoat",
        types: ["Grass"],
        baseStats: {
            hp: 123,
            atk: 100,
            def: 62,
            spa: 97,
            spd: 81,
            spe: 68
        },
        abilities: {
            "0": "Sap Sipper",
            H: "Grass Pelt"
        },
        heightm: 1.7,
        weightkg: 91,
        color: "Brown",
        prevo: "Skiddo",
        evoLevel: 32,
        eggGroups: ["Field"],
        tier: "2"
    },
    pancham: {
        num: 674,
        name: "Pancham",
        types: ["Fighting"],
        baseStats: {
            hp: 67,
            atk: 82,
            def: 62,
            spa: 46,
            spd: 48,
            spe: 43
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Mold Breaker",
            H: "Scrappy"
        },
        heightm: 0.6,
        weightkg: 8,
        color: "White",
        evos: ["Pangoro"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    pangoro: {
        num: 675,
        name: "Pangoro",
        types: ["Fighting", "Dark"],
        baseStats: {
            hp: 95,
            atk: 124,
            def: 78,
            spa: 69,
            spd: 71,
            spe: 58
        },
        abilities: {
            "0": "Iron Fist",
            "1": "Mold Breaker",
            H: "Scrappy"
        },
        heightm: 2.1,
        weightkg: 136,
        color: "White",
        prevo: "Pancham",
        evoLevel: 32,
        eggGroups: ["Field", "Human-Like"],
        tier: "1",
    },
    furfrou: {
        num: 676,
        name: "Furfrou",
        baseForme: "Natural",
        types: ["Normal"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 60,
            spa: 65,
            spd: 90,
            spe: 102
        },
        abilities: {
            "0": "Fur Coat"
        },
        heightm: 1.2,
        weightkg: 28,
        color: "White",
        eggGroups: ["Field"],
        cosmeticFormes: ["Furfrou-Dandy", "Furfrou-Debutante", "Furfrou-Diamond", "Furfrou-Heart", "Furfrou-Kabuki", "Furfrou-La Reine", "Furfrou-Matron", "Furfrou-Pharaoh", "Furfrou-Star"],
        formeOrder: ["Furfrou", "Furfrou-Heart", "Furfrou-Star", "Furfrou-Diamond", "Furfrou-Debutante", "Furfrou-Matron", "Furfrou-Dandy", "Furfrou-La Reine", "Furfrou-Kabuki", "Furfrou-Pharaoh"],
        tier: "2",
    },
    espurr: {
        num: 677,
        name: "Espurr",
        types: ["Psychic"],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 54,
            spa: 63,
            spd: 60,
            spe: 68
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Own Tempo"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Gray",
        evos: ["Meowstic", "Meowstic-F"],
        eggGroups: ["Field"],
        tier: "2",
    },
    meowstic: {
        num: 678,
        name: "Meowstic",
        baseForme: "M",
        types: ["Psychic"],
        gender: "M",
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Prankster"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "Blue",
        prevo: "Espurr",
        evoLevel: 25,
        eggGroups: ["Field"],
        otherFormes: ["Meowstic-F"],
        formeOrder: ["Meowstic", "Meowstic-F"],
        tier: "2",
    },
    meowsticf: {
        num: 678,
        name: "Meowstic-F",
        baseSpecies: "Meowstic",
        forme: "F",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 48,
            def: 76,
            spa: 83,
            spd: 81,
            spe: 104
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Infiltrator",
            H: "Competitive"
        },
        heightm: 0.6,
        weightkg: 8.5,
        color: "White",
        prevo: "Espurr",
        evoLevel: 25,
        eggGroups: ["Field"],
        tier: "2",
    },
    honedge: {
        num: 679,
        name: "Honedge",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 45,
            atk: 80,
            def: 100,
            spa: 35,
            spd: 37,
            spe: 28
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 0.8,
        weightkg: 2,
        color: "Brown",
        evos: ["Doublade"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    doublade: {
        num: 680,
        name: "Doublade",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 59,
            atk: 110,
            def: 150,
            spa: 45,
            spd: 49,
            spe: 35
        },
        abilities: {
            "0": "No Guard"
        },
        heightm: 0.8,
        weightkg: 4.5,
        color: "Brown",
        prevo: "Honedge",
        evoLevel: 35,
        evos: ["Aegislash"],
        eggGroups: ["Mineral"],
        tier: "2",
    },
    aegislash: {
        num: 681,
        name: "Aegislash",
        baseForme: "Shield",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 140,
            spa: 50,
            spd: 140,
            spe: 60
        },
        abilities: {
            "0": "Stance Change"
        },
        heightm: 1.7,
        weightkg: 53,
        color: "Brown",
        prevo: "Doublade",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Mineral"],
        otherFormes: ["Aegislash-Blade"],
        formeOrder: ["Aegislash", "Aegislash-Blade"],
        tier: "2",
    },
    aegislashblade: {
        num: 681,
        name: "Aegislash-Blade",
        baseSpecies: "Aegislash",
        forme: "Blade",
        types: ["Steel", "Ghost"],
        baseStats: {
            hp: 60,
            atk: 140,
            def: 50,
            spa: 140,
            spd: 50,
            spe: 60
        },
        abilities: {
            "0": "Stance Change"
        },
        heightm: 1.7,
        weightkg: 53,
        color: "Brown",
        eggGroups: ["Mineral"],
        requiredAbility: "Stance Change",
        battleOnly: "Aegislash",
    },
    spritzee: {
        num: 682,
        name: "Spritzee",
        types: ["Fairy"],
        baseStats: {
            hp: 78,
            atk: 52,
            def: 60,
            spa: 63,
            spd: 65,
            spe: 23
        },
        abilities: {
            "0": "Healer",
            H: "Aroma Veil"
        },
        heightm: 0.2,
        weightkg: 0.5,
        color: "Pink",
        evos: ["Aromatisse"],
        eggGroups: ["Fairy"],
        tier: "2",
    },
    aromatisse: {
        num: 683,
        name: "Aromatisse",
        types: ["Fairy"],
        baseStats: {
            hp: 101,
            atk: 72,
            def: 72,
            spa: 99,
            spd: 89,
            spe: 29
        },
        abilities: {
            "0": "Healer",
            H: "Aroma Veil"
        },
        heightm: 0.8,
        weightkg: 15.5,
        color: "Pink",
        prevo: "Spritzee",
        evoType: "trade",
        evoItem: "Sachet",
        eggGroups: ["Fairy"],
        tier: "2",
    },
    swirlix: {
        num: 684,
        name: "Swirlix",
        types: ["Fairy"],
        baseStats: {
            hp: 62,
            atk: 48,
            def: 66,
            spa: 59,
            spd: 57,
            spe: 49
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Unburden"
        },
        heightm: 0.4,
        weightkg: 3.5,
        color: "White",
        evos: ["Slurpuff"],
        eggGroups: ["Fairy"],
        tier: "2",
    },
    slurpuff: {
        num: 685,
        name: "Slurpuff",
        types: ["Fairy"],
        baseStats: {
            hp: 82,
            atk: 80,
            def: 86,
            spa: 85,
            spd: 75,
            spe: 72
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Unburden"
        },
        heightm: 0.8,
        weightkg: 5,
        color: "White",
        prevo: "Swirlix",
        evoType: "trade",
        evoItem: "Whipped Dream",
        eggGroups: ["Fairy"],
        tier: "2",
    },
    inkay: {
        num: 686,
        name: "Inkay",
        types: ["Dark", "Psychic"],
        baseStats: {
            hp: 53,
            atk: 54,
            def: 53,
            spa: 37,
            spd: 46,
            spe: 45
        },
        abilities: {
            "0": "Contrary",
            "1": "Suction Cups",
            H: "Infiltrator"
        },
        heightm: 0.4,
        weightkg: 3.5,
        color: "Blue",
        evos: ["Malamar"],
        eggGroups: ["Water 1", "Water 2"],
        tier: "2",
    },
    malamar: {
        num: 687,
        name: "Malamar",
        types: ["Dark", "Psychic"],
        baseStats: {
            hp: 86,
            atk: 92,
            def: 88,
            spa: 68,
            spd: 75,
            spe: 73
        },
        abilities: {
            "0": "Contrary",
            "1": "Suction Cups",
            H: "Infiltrator"
        },
        heightm: 1.5,
        weightkg: 47,
        color: "Blue",
        prevo: "Inkay",
        evoLevel: 30,
        evoCondition: "with the console turned upside-down",
        eggGroups: ["Water 1", "Water 2"],
        tier: "2",
    },
    binacle: {
        num: 688,
        name: "Binacle",
        types: ["Rock", "Water"],
        baseStats: {
            hp: 42,
            atk: 52,
            def: 67,
            spa: 39,
            spd: 56,
            spe: 50
        },
        abilities: {
            "0": "Tough Claws",
            "1": "Sniper",
            H: "Pickpocket"
        },
        heightm: 0.5,
        weightkg: 31,
        color: "Brown",
        evos: ["Barbaracle"],
        eggGroups: ["Water 3"],
        tier: "2",
    },
    barbaracle: {
        num: 689,
        name: "Barbaracle",
        types: ["Rock", "Water"],
        baseStats: {
            hp: 72,
            atk: 105,
            def: 115,
            spa: 54,
            spd: 86,
            spe: 68
        },
        abilities: {
            "0": "Tough Claws",
            "1": "Sniper",
            H: "Pickpocket"
        },
        heightm: 1.3,
        weightkg: 96,
        color: "Brown",
        prevo: "Binacle",
        evoLevel: 39,
        eggGroups: ["Water 3"],
        tier: "2",
    },
    skrelp: {
        num: 690,
        name: "Skrelp",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 60,
            def: 60,
            spa: 60,
            spd: 60,
            spe: 30
        },
        abilities: {
            "0": "Poison Point",
            H: "Adaptability"
        },
        heightm: 0.5,
        weightkg: 7.3,
        color: "Brown",
        evos: ["Dragalge"],
        eggGroups: ["Water 1", "Dragon"],
        tier: "1"
    },
    dragalge: {
        num: 691,
        name: "Dragalge",
        types: ["Poison", "Dragon"],
        baseStats: {
            hp: 65,
            atk: 75,
            def: 90,
            spa: 97,
            spd: 123,
            spe: 44
        },
        abilities: {
            "0": "Poison Point",
            H: "Adaptability"
        },
        heightm: 1.8,
        weightkg: 81.5,
        color: "Brown",
        prevo: "Skrelp",
        evoLevel: 38,
        eggGroups: ["Water 1", "Dragon"],
        tier: "1"
    },
    clauncher: {
        num: 692,
        name: "Clauncher",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 62,
            spa: 58,
            spd: 63,
            spe: 44
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 0.5,
        weightkg: 8.3,
        color: "Blue",
        evos: ["Clawitzer"],
        eggGroups: ["Water 1", "Water 3"],
        tier: "1"
    },
    clawitzer: {
        num: 693,
        name: "Clawitzer",
        types: ["Water"],
        baseStats: {
            hp: 71,
            atk: 73,
            def: 88,
            spa: 120,
            spd: 89,
            spe: 59
        },
        abilities: {
            "0": "Mega Launcher"
        },
        heightm: 1.3,
        weightkg: 35.3,
        color: "Blue",
        prevo: "Clauncher",
        evoLevel: 32,
        eggGroups: ["Water 1", "Water 3"],
        tier: "1"
    },
    helioptile: {
        num: 694,
        name: "Helioptile",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 44,
            atk: 38,
            def: 33,
            spa: 61,
            spd: 43,
            spe: 70
        },
        abilities: {
            "0": "Dry Skin",
            "1": "Sand Veil",
            H: "Solar Power"
        },
        heightm: 0.5,
        weightkg: 6,
        color: "Yellow",
        evos: ["Heliolisk"],
        eggGroups: ["Monster", "Dragon"],
        tier: "2",
    },
    heliolisk: {
        num: 695,
        name: "Heliolisk",
        types: ["Electric", "Normal"],
        baseStats: {
            hp: 62,
            atk: 55,
            def: 52,
            spa: 109,
            spd: 94,
            spe: 109
        },
        abilities: {
            "0": "Dry Skin",
            "1": "Sand Veil",
            H: "Solar Power"
        },
        heightm: 1,
        weightkg: 21,
        color: "Yellow",
        prevo: "Helioptile",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Monster", "Dragon"],
        tier: "2",
    },
    tyrunt: {
        num: 696,
        name: "Tyrunt",
        types: ["Rock", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 58,
            atk: 89,
            def: 77,
            spa: 45,
            spd: 45,
            spe: 48
        },
        abilities: {
            "0": "Strong Jaw",
            H: "Sturdy"
        },
        heightm: 0.8,
        weightkg: 26,
        color: "Brown",
        evos: ["Tyrantrum"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    tyrantrum: {
        num: 697,
        name: "Tyrantrum",
        types: ["Rock", "Dragon"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 82,
            atk: 121,
            def: 119,
            spa: 69,
            spd: 59,
            spe: 71
        },
        abilities: {
            "0": "Strong Jaw",
            H: "Rock Head"
        },
        heightm: 2.5,
        weightkg: 270,
        color: "Red",
        prevo: "Tyrunt",
        evoLevel: 39,
        evoCondition: "during the day",
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    amaura: {
        num: 698,
        name: "Amaura",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 77,
            atk: 59,
            def: 50,
            spa: 67,
            spd: 63,
            spe: 46
        },
        abilities: {
            "0": "Refrigerate",
            H: "Snow Warning"
        },
        heightm: 1.3,
        weightkg: 25.2,
        color: "Blue",
        evos: ["Aurorus"],
        eggGroups: ["Monster"],
        tier: "1",
    },
    aurorus: {
        num: 699,
        name: "Aurorus",
        types: ["Rock", "Ice"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 123,
            atk: 77,
            def: 72,
            spa: 99,
            spd: 92,
            spe: 58
        },
        abilities: {
            "0": "Refrigerate",
            H: "Snow Warning"
        },
        heightm: 2.7,
        weightkg: 225,
        color: "Blue",
        prevo: "Amaura",
        evoLevel: 34,
        evoCondition: "at night",
        eggGroups: ["Monster"],
        tier: "1",
    },
    sylveon: {
        num: 700,
        name: "Sylveon",
        types: ["Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 65,
            def: 65,
            spa: 110,
            spd: 130,
            spe: 60
        },
        abilities: {
            "0": "Cute Charm",
            H: "Pixilate"
        },
        heightm: 1,
        weightkg: 23.5,
        color: "Pink",
        prevo: "Eevee",
        evoType: "levelExtra",
        evoCondition: "with a Fairy-type move and two levels of Affection",
        eggGroups: ["Field"],
        tier: "2"
    },
    hawlucha: {
        num: 701,
        name: "Hawlucha",
        types: ["Fighting", "Flying"],
        baseStats: {
            hp: 78,
            atk: 92,
            def: 75,
            spa: 74,
            spd: 63,
            spe: 118
        },
        abilities: {
            "0": "Limber",
            "1": "Unburden",
            H: "Mold Breaker"
        },
        heightm: 0.8,
        weightkg: 21.5,
        color: "Green",
        eggGroups: ["Flying", "Human-Like"],
        tier: "1"
    },
    dedenne: {
        num: 702,
        name: "Dedenne",
        types: ["Electric", "Fairy"],
        baseStats: {
            hp: 67,
            atk: 58,
            def: 57,
            spa: 81,
            spd: 67,
            spe: 101
        },
        abilities: {
            "0": "Cheek Pouch",
            "1": "Pickup",
            H: "Plus"
        },
        heightm: 0.2,
        weightkg: 2.2,
        color: "Yellow",
        eggGroups: ["Field", "Fairy"],
        tier: "2"
    },
    carbink: {
        num: 703,
        name: "Carbink",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 50,
            def: 150,
            spa: 50,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body",
            H: "Sturdy"
        },
        heightm: 0.3,
        weightkg: 5.7,
        color: "Gray",
        eggGroups: ["Fairy", "Mineral"],
        tier: "2"
    },
    goomy: {
        num: 704,
        name: "Goomy",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 50,
            def: 35,
            spa: 55,
            spd: 75,
            spe: 40
        },
        abilities: {
            "0": "Gooey",
            "1": "Hydration",
            H: "Sap Sipper"
        },
        heightm: 0.3,
        weightkg: 2.8,
        color: "Purple",
        evos: ["Sliggoo", "Sliggoo-Hisui"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    sliggoo: {
        num: 705,
        name: "Sliggoo",
        types: ["Dragon"],
        baseStats: {
            hp: 68,
            atk: 75,
            def: 53,
            spa: 83,
            spd: 113,
            spe: 60
        },
        abilities: {
            "0": "Gooey",
            "1": "Hydration",
            H: "Sap Sipper"
        },
        heightm: 0.8,
        weightkg: 17.5,
        color: "Purple",
        prevo: "Goomy",
        evoLevel: 40,
        evos: ["Goodra"],
        eggGroups: ["Dragon"],
        otherFormes: ["Sliggoo-Hisui"],
        formeOrder: ["Sliggoo", "Sliggoo-Hisui"],
        tier: "1"
    },
    sliggoohisui: {
        num: 705,
        name: "Sliggoo-Hisui",
        baseSpecies: "Sliggoo",
        forme: "Hisui",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 58,
            atk: 75,
            def: 83,
            spa: 83,
            spd: 113,
            spe: 40
        },
        abilities: {
            "0": "Gooey",
            "1": "Shell Armor",
            H: "Sap Sipper"
        },
        heightm: 0.7,
        weightkg: 68.5,
        color: "Purple",
        prevo: "Goomy",
        evoType: "useItem",
        evoItem: "Metal Coat",
        evos: ["Goodra-Hisui"],
        eggGroups: ["Dragon"],
        tier: "1"
    },
    goodra: {
        num: 706,
        name: "Goodra",
        types: ["Dragon"],
        baseStats: {
            hp: 90,
            atk: 100,
            def: 70,
            spa: 110,
            spd: 150,
            spe: 80
        },
        abilities: {
            "0": "Gooey",
            "1": "Hydration",
            H: "Sap Sipper"
        },
        heightm: 2,
        weightkg: 150.5,
        color: "Purple",
        prevo: "Sliggoo",
        evoLevel: 50,
        evoCondition: "on a rainy route",
        eggGroups: ["Dragon"],
        otherFormes: ["Goodra-Hisui"],
        formeOrder: ["Goodra", "Goodra-Hisui"],
        tier: "1"
    },
    goodrahisui: {
        num: 706,
        name: "Goodra-Hisui",
        baseSpecies: "Goodra",
        forme: "Hisui",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 80,
            atk: 100,
            def: 100,
            spa: 110,
            spd: 150,
            spe: 60
        },
        abilities: {
            "0": "Gooey",
            "1": "Shell Armor",
            H: "Sap Sipper"
        },
        heightm: 1.7,
        weightkg: 334.1,
        color: "Purple",
        prevo: "Sliggoo-Hisui",
        evoLevel: 50,
        evoCondition: "on a rainy route",
        eggGroups: ["Dragon"],
        tier: "1"
    },
    klefki: {
        num: 707,
        name: "Klefki",
        types: ["Steel", "Fairy"],
        baseStats: {
            hp: 57,
            atk: 80,
            def: 91,
            spa: 80,
            spd: 87,
            spe: 75
        },
        abilities: {
            "0": "Prankster",
            H: "Magician"
        },
        heightm: 0.2,
        weightkg: 3,
        color: "Gray",
        eggGroups: ["Mineral"],
        tier: "2"
    },
    phantump: {
        num: 708,
        name: "Phantump",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 43,
            atk: 70,
            def: 48,
            spa: 50,
            spd: 60,
            spe: 38
        },
        abilities: {
            "0": "Natural Cure",
            H: "Harvest"
        },
        heightm: 0.4,
        weightkg: 7,
        color: "Brown",
        evos: ["Trevenant"],
        eggGroups: ["Grass", "Amorphous"],
        tier: "1",
    },
    trevenant: {
        num: 709,
        name: "Trevenant",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 85,
            atk: 110,
            def: 76,
            spa: 65,
            spd: 82,
            spe: 56
        },
        abilities: {
            "0": "Natural Cure",
            H: "Harvest"
        },
        heightm: 1.5,
        weightkg: 71,
        color: "Brown",
        prevo: "Phantump",
        evoLevel: "36",
        eggGroups: ["Grass", "Amorphous"],
        tier: "1",
    },
    pumpkaboo: {
        num: 710,
        name: "Pumpkaboo",
        baseForme: "Average",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 49,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 51
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.4,
        weightkg: 5,
        color: "Brown",
        evos: ["Gourgeist"],
        eggGroups: ["Amorphous"],
        otherFormes: ["Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"],
        formeOrder: ["Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super"],
        tier: "1",
    },
    pumpkaboosmall: {
        num: 710,
        name: "Pumpkaboo-Small",
        baseSpecies: "Pumpkaboo",
        forme: "Small",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 44,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 56
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.3,
        weightkg: 3.5,
        color: "Brown",
        evos: ["Gourgeist-Small"],
        eggGroups: ["Amorphous"],
    },
    pumpkaboolarge: {
        num: 710,
        name: "Pumpkaboo-Large",
        baseSpecies: "Pumpkaboo",
        forme: "Large",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 54,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 46
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.5,
        weightkg: 7.5,
        color: "Brown",
        evos: ["Gourgeist-Large"],
        eggGroups: ["Amorphous"],
    },
    pumpkaboosuper: {
        num: 710,
        name: "Pumpkaboo-Super",
        baseSpecies: "Pumpkaboo",
        forme: "Super",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 59,
            atk: 66,
            def: 70,
            spa: 44,
            spd: 55,
            spe: 41
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.8,
        weightkg: 15,
        color: "Brown",
        evos: ["Gourgeist-Super"],
        eggGroups: ["Amorphous"],
    },
    gourgeist: {
        num: 711,
        name: "Gourgeist",
        baseForme: "Average",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 65,
            atk: 90,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 84
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.9,
        weightkg: 12.5,
        color: "Brown",
        prevo: "Pumpkaboo",
        evoLevel: "36",
        eggGroups: ["Amorphous"],
        otherFormes: ["Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
        formeOrder: ["Gourgeist", "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"],
        tier: "1",
    },
    gourgeistsmall: {
        num: 711,
        name: "Gourgeist-Small",
        baseSpecies: "Gourgeist",
        forme: "Small",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 99
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 0.7,
        weightkg: 9.5,
        color: "Brown",
        prevo: "Pumpkaboo-Small",
        evoLevel: "36",
        eggGroups: ["Amorphous"],
    },
    gourgeistlarge: {
        num: 711,
        name: "Gourgeist-Large",
        baseSpecies: "Gourgeist",
        forme: "Large",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 75,
            atk: 95,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 69
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 1.1,
        weightkg: 14,
        color: "Brown",
        prevo: "Pumpkaboo-Large",
        evoLevel: "36",
        eggGroups: ["Amorphous"],
    },
    gourgeistsuper: {
        num: 711,
        name: "Gourgeist-Super",
        baseSpecies: "Gourgeist",
        forme: "Super",
        types: ["Ghost", "Grass"],
        baseStats: {
            hp: 85,
            atk: 100,
            def: 122,
            spa: 58,
            spd: 75,
            spe: 54
        },
        abilities: {
            "0": "Frisk",
            H: "Insomnia"
        },
        heightm: 1.7,
        weightkg: 39,
        color: "Brown",
        prevo: "Pumpkaboo-Super",
        evoLevel: "36",
        eggGroups: ["Amorphous"],
    },
    bergmite: {
        num: 712,
        name: "Bergmite",
        types: ["Ice"],
        baseStats: {
            hp: 55,
            atk: 69,
            def: 85,
            spa: 32,
            spd: 35,
            spe: 28
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Ice Body",
            H: "Sturdy"
        },
        heightm: 1,
        weightkg: 99.5,
        color: "Blue",
        evos: ["Avalugg", "Avalugg-Hisui"],
        eggGroups: ["Monster", "Mineral"],
        tier: "1"
    },
    avalugg: {
        num: 713,
        name: "Avalugg",
        types: ["Ice"],
        baseStats: {
            hp: 95,
            atk: 117,
            def: 184,
            spa: 44,
            spd: 46,
            spe: 28
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Ice Body",
            H: "Sturdy"
        },
        heightm: 2,
        weightkg: 505,
        color: "Blue",
        prevo: "Bergmite",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Monster", "Mineral"],
        otherFormes: ["Avalugg-Hisui"],
        formeOrder: ["Avalugg", "Avalugg-Hisui"],
        tier: "1"
    },
    avalugghisui: {
        num: 713,
        name: "Avalugg-Hisui",
        baseSpecies: "Avalugg",
        forme: "Hisui",
        types: ["Ice", "Rock"],
        baseStats: {
            hp: 95,
            atk: 127,
            def: 184,
            spa: 34,
            spd: 36,
            spe: 38
        },
        abilities: {
            "0": "Strong Jaw",
            "1": "Ice Body",
            H: "Sturdy"
        },
        heightm: 1.4,
        weightkg: 262.4,
        color: "Blue",
        prevo: "Bergmite",
        evoType: "levelMove",
        evoMove: "Ancient Power",
        eggGroups: ["Monster", "Mineral"],
        tier: "1"
    },
    noibat: {
        num: 714,
        name: "Noibat",
        types: ["Flying", "Dragon"],
        baseStats: {
            hp: 40,
            atk: 30,
            def: 35,
            spa: 45,
            spd: 40,
            spe: 55
        },
        abilities: {
            "0": "Frisk",
            "1": "Infiltrator",
            H: "Telepathy"
        },
        heightm: 0.5,
        weightkg: 8,
        color: "Purple",
        evos: ["Noivern"],
        eggGroups: ["Flying", "Dragon"],
        tier: "1"
    },
    noivern: {
        num: 715,
        name: "Noivern",
        types: ["Flying", "Dragon"],
        baseStats: {
            hp: 85,
            atk: 70,
            def: 80,
            spa: 97,
            spd: 80,
            spe: 123
        },
        abilities: {
            "0": "Frisk",
            "1": "Infiltrator",
            H: "Telepathy"
        },
        heightm: 1.5,
        weightkg: 85,
        color: "Purple",
        prevo: "Noibat",
        evoLevel: 48,
        eggGroups: ["Flying", "Dragon"],
        tier: "1"
    },
    xerneas: {
        num: 716,
        name: "Xerneas",
        baseForme: "Active",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        abilities: {
            "0": "Fairy Aura"
        },
        heightm: 3,
        weightkg: 215,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Xerneas-Neutral"],
        formeOrder: ["Xerneas-Neutral", "Xerneas"],
        tier: "2",
    },
    xerneasneutral: {
        num: 716,
        name: "Xerneas-Neutral",
        baseSpecies: "Xerneas",
        forme: "Neutral",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        abilities: {
            "0": "Fairy Aura"
        },
        heightm: 3,
        weightkg: 215,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "2",
        isNonstandard: "Custom"
    },
    yveltal: {
        num: 717,
        name: "Yveltal",
        types: ["Dark", "Flying"],
        gender: "N",
        baseStats: {
            hp: 126,
            atk: 131,
            def: 95,
            spa: 131,
            spd: 98,
            spe: 99
        },
        abilities: {
            "0": "Dark Aura"
        },
        heightm: 5.8,
        weightkg: 203,
        color: "Red",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    zygarde: {
        num: 718,
        name: "Zygarde",
        baseForme: "50%",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 108,
            atk: 100,
            def: 121,
            spa: 81,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "Aura Break",
            S: "Power Construct"
        },
        heightm: 5,
        weightkg: 305,
        color: "Green",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Zygarde-10%", "Zygarde-Complete"],
        formeOrder: ["Zygarde", "Zygarde-10%", "Zygarde-10%", "Zygarde", "Zygarde-Complete"],
        tier: "2",
    },
    zygarde10: {
        num: 718,
        name: "Zygarde-10%",
        baseSpecies: "Zygarde",
        forme: "10%",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 54,
            atk: 100,
            def: 71,
            spa: 61,
            spd: 85,
            spe: 115
        },
        abilities: {
            "0": "Aura Break",
            S: "Power Construct"
        },
        heightm: 1.2,
        weightkg: 33.5,
        color: "Black",
        eggGroups: ["Undiscovered"],
        changesFrom: "Zygarde",
        gen: 7,
        tier: "2",
    },
    zygardecomplete: {
        num: 718,
        name: "Zygarde-Complete",
        baseSpecies: "Zygarde",
        forme: "Complete",
        types: ["Dragon", "Ground"],
        gender: "N",
        baseStats: {
            hp: 216,
            atk: 100,
            def: 121,
            spa: 91,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Power Construct"
        },
        heightm: 4.5,
        weightkg: 610,
        color: "Black",
        eggGroups: ["Undiscovered"],
        requiredAbility: "Power Construct",
        battleOnly: ["Zygarde", "Zygarde-10%"],
        gen: 7,
        tier: "2",
    },
    diancie: {
        num: 719,
        name: "Diancie",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 100,
            def: 150,
            spa: 100,
            spd: 150,
            spe: 50
        },
        abilities: {
            "0": "Clear Body"
        },
        heightm: 0.7,
        weightkg: 8.8,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Diancie-Mega"],
        formeOrder: ["Diancie", "Diancie-Mega"],
        tier: "2"
    },
    dianciemega: {
        num: 719,
        name: "Diancie-Mega",
        baseSpecies: "Diancie",
        forme: "Mega",
        types: ["Rock", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 50,
            atk: 160,
            def: 110,
            spa: 160,
            spd: 110,
            spe: 110
        },
        abilities: {
            "0": "Magic Bounce"
        },
        heightm: 1.1,
        weightkg: 27.8,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        requiredItem: "Diancite",
        tier: "2",
    },
    hoopa: {
        num: 720,
        name: "Hoopa",
        baseForme: "Confined",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 110,
            def: 60,
            spa: 150,
            spd: 130,
            spe: 70
        },
        abilities: {
            "0": "Magician"
        },
        heightm: 0.5,
        weightkg: 9,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Hoopa-Unbound"],
        formeOrder: ["Hoopa", "Hoopa-Unbound"],
        tier: "2"
    },
    hoopaunbound: {
        num: 720,
        name: "Hoopa-Unbound",
        baseSpecies: "Hoopa",
        forme: "Unbound",
        types: ["Psychic", "Dark"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 160,
            def: 60,
            spa: 170,
            spd: 130,
            spe: 80
        },
        abilities: {
            "0": "Magician"
        },
        heightm: 6.5,
        weightkg: 490,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        changesFrom: "Hoopa",
        tier: "2"
    },
    volcanion: {
        num: 721,
        name: "Volcanion",
        types: ["Fire", "Water"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 110,
            def: 120,
            spa: 130,
            spd: 90,
            spe: 70
        },
        abilities: {
            "0": "Water Absorb"
        },
        heightm: 1.7,
        weightkg: 195,
        color: "Brown",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    rowlet: {
        num: 722,
        name: "Rowlet",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 68,
            atk: 55,
            def: 55,
            spa: 50,
            spd: 50,
            spe: 42
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "Brown",
        evos: ["Dartrix"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    dartrix: {
        num: 723,
        name: "Dartrix",
        types: ["Grass", "Flying"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 75,
            def: 75,
            spa: 70,
            spd: 70,
            spe: 52
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 0.7,
        weightkg: 16,
        color: "Brown",
        prevo: "Rowlet",
        evoLevel: 17,
        evos: ["Decidueye", "Decidueye-Hisui"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    decidueye: {
        num: 724,
        name: "Decidueye",
        types: ["Grass", "Ghost"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 78,
            atk: 107,
            def: 75,
            spa: 100,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Overgrow",
            H: "Long Reach"
        },
        heightm: 1.6,
        weightkg: 36.6,
        color: "Brown",
        prevo: "Dartrix",
        evoLevel: 34,
        eggGroups: ["Flying"],
        otherFormes: ["Decidueye-Hisui"],
        formeOrder: ["Decidueye", "Decidueye-Hisui"],
        tier: "1"
    },
    decidueyehisui: {
        num: 724,
        name: "Decidueye-Hisui",
        baseSpecies: "Decidueye",
        forme: "Hisui",
        types: ["Grass", "Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 88,
            atk: 112,
            def: 80,
            spa: 95,
            spd: 95,
            spe: 60
        },
        abilities: {
            "0": "Overgrow",
            H: "Scrappy"
        },
        heightm: 1.6,
        weightkg: 37,
        color: "Brown",
        prevo: "Dartrix",
        evoLevel: 34,
        eggGroups: ["Flying"],
        tier: "1"
    },
    litten: {
        num: 725,
        name: "Litten",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 45,
            atk: 65,
            def: 40,
            spa: 60,
            spd: 40,
            spe: 70
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 0.4,
        weightkg: 4.3,
        color: "Red",
        evos: ["Torracat"],
        eggGroups: ["Field"],
        tier: "1",
    },
    torracat: {
        num: 726,
        name: "Torracat",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 85,
            def: 50,
            spa: 80,
            spd: 50,
            spe: 90
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 0.7,
        weightkg: 25,
        color: "Red",
        prevo: "Litten",
        evoLevel: 17,
        evos: ["Incineroar"],
        eggGroups: ["Field"],
        tier: "1",
    },
    incineroar: {
        num: 727,
        name: "Incineroar",
        types: ["Fire", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 95,
            atk: 115,
            def: 90,
            spa: 80,
            spd: 90,
            spe: 60
        },
        abilities: {
            "0": "Blaze",
            H: "Intimidate"
        },
        heightm: 1.8,
        weightkg: 83,
        color: "Red",
        prevo: "Torracat",
        evoLevel: 34,
        eggGroups: ["Field"],
        tier: "1",
    },
    popplio: {
        num: 728,
        name: "Popplio",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 54,
            def: 54,
            spa: 66,
            spd: 56,
            spe: 40
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 0.4,
        weightkg: 7.5,
        color: "Blue",
        evos: ["Brionne"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    brionne: {
        num: 729,
        name: "Brionne",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 69,
            def: 69,
            spa: 91,
            spd: 81,
            spe: 50
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 0.6,
        weightkg: 17.5,
        color: "Blue",
        prevo: "Popplio",
        evoLevel: 17,
        evos: ["Primarina"],
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    primarina: {
        num: 730,
        name: "Primarina",
        types: ["Water", "Fairy"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 74,
            def: 74,
            spa: 126,
            spd: 116,
            spe: 60
        },
        abilities: {
            "0": "Torrent",
            H: "Liquid Voice"
        },
        heightm: 1.8,
        weightkg: 44,
        color: "Blue",
        prevo: "Brionne",
        evoLevel: 34,
        eggGroups: ["Water 1", "Field"],
        tier: "1",
    },
    pikipek: {
        num: 731,
        name: "Pikipek",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 35,
            atk: 75,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 65
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Pickup"
        },
        heightm: 0.3,
        weightkg: 1.2,
        color: "Black",
        evos: ["Trumbeak"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    trumbeak: {
        num: 732,
        name: "Trumbeak",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 55,
            atk: 85,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 75
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Pickup"
        },
        heightm: 0.6,
        weightkg: 14.8,
        color: "Black",
        prevo: "Pikipek",
        evoLevel: 14,
        evos: ["Toucannon"],
        eggGroups: ["Flying"],
        tier: "2",
    },
    toucannon: {
        num: 733,
        name: "Toucannon",
        types: ["Normal", "Flying"],
        baseStats: {
            hp: 80,
            atk: 120,
            def: 75,
            spa: 75,
            spd: 75,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Skill Link",
            H: "Sheer Force"
        },
        heightm: 1.1,
        weightkg: 26,
        color: "Black",
        prevo: "Trumbeak",
        evoLevel: 28,
        eggGroups: ["Flying"],
        tier: "2",
    },
    yungoos: {
        num: 734,
        name: "Yungoos",
        types: ["Normal"],
        baseStats: {
            hp: 48,
            atk: 70,
            def: 30,
            spa: 30,
            spd: 30,
            spe: 45
        },
        abilities: {
            "0": "Stakeout",
            "1": "Strong Jaw",
            H: "Adaptability"
        },
        heightm: 0.4,
        weightkg: 6,
        color: "Brown",
        evos: ["Gumshoos"],
        eggGroups: ["Field"],
        tier: "2"
    },
    gumshoos: {
        num: 735,
        name: "Gumshoos",
        types: ["Normal"],
        baseStats: {
            hp: 88,
            atk: 110,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 45
        },
        abilities: {
            "0": "Stakeout",
            "1": "Strong Jaw",
            H: "Adaptability"
        },
        heightm: 0.7,
        weightkg: 14.2,
        color: "Brown",
        prevo: "Yungoos",
        evoLevel: 20,
        evoCondition: "during the day",
        eggGroups: ["Field"],
        tier: "2"
    },
    grubbin: {
        num: 736,
        name: "Grubbin",
        types: ["Bug"],
        baseStats: {
            hp: 47,
            atk: 62,
            def: 45,
            spa: 55,
            spd: 45,
            spe: 46
        },
        abilities: {
            "0": "Swarm"
        },
        heightm: 0.4,
        weightkg: 4.4,
        color: "Gray",
        evos: ["Charjabug"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    charjabug: {
        num: 737,
        name: "Charjabug",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 57,
            atk: 82,
            def: 95,
            spa: 55,
            spd: 75,
            spe: 36
        },
        abilities: {
            "0": "Battery"
        },
        heightm: 0.5,
        weightkg: 10.5,
        color: "Green",
        prevo: "Grubbin",
        evoLevel: 20,
        evos: ["Vikavolt"],
        eggGroups: ["Bug"],
        tier: "2",
    },
    vikavolt: {
        num: 738,
        name: "Vikavolt",
        types: ["Bug", "Electric"],
        baseStats: {
            hp: 77,
            atk: 70,
            def: 90,
            spa: 145,
            spd: 75,
            spe: 43
        },
        abilities: {
            "0": "Levitate"
        },
        heightm: 1.5,
        weightkg: 45,
        color: "Blue",
        prevo: "Charjabug",
        evoType: "useItem",
        evoItem: "Thunder Stone",
        eggGroups: ["Bug"],
        tier: "2",
    },
    crabrawler: {
        num: 739,
        name: "Crabrawler",
        types: ["Fighting"],
        baseStats: {
            hp: 47,
            atk: 82,
            def: 57,
            spa: 42,
            spd: 47,
            spe: 63
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Iron Fist",
            H: "Anger Point"
        },
        heightm: 0.6,
        weightkg: 7,
        color: "Purple",
        evos: ["Crabominable"],
        eggGroups: ["Water 3"],
        tier: "2"
    },
    crabominable: {
        num: 740,
        name: "Crabominable",
        types: ["Fighting", "Ice"],
        baseStats: {
            hp: 97,
            atk: 132,
            def: 77,
            spa: 62,
            spd: 67,
            spe: 43
        },
        abilities: {
            "0": "Hyper Cutter",
            "1": "Iron Fist",
            H: "Anger Point"
        },
        heightm: 1.7,
        weightkg: 180,
        color: "White",
        prevo: "Crabrawler",
        evoType: "useItem",
        evoItem: "Ice Stone",
        eggGroups: ["Water 3"],
        tier: "2"
    },
    oricorio: {
        num: 741,
        name: "Oricorio",
        baseForme: "Baile",
        types: ["Fire", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Red",
        eggGroups: ["Flying"],
        otherFormes: ["Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"],
        formeOrder: ["Oricorio", "Oricorio-Pom-Pom", "Oricorio-Pa'u", "Oricorio-Sensu"],
        tier: "2"
    },
    oricoriopompom: {
        num: 741,
        name: "Oricorio-Pom-Pom",
        baseSpecies: "Oricorio",
        forme: "Pom-Pom",
        types: ["Electric", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Yellow",
        eggGroups: ["Flying"],
        changesFrom: "Oricorio",
        tier: "2"
    },
    oricoriopau: {
        num: 741,
        name: "Oricorio-Pa'u",
        baseSpecies: "Oricorio",
        forme: "Pa'u",
        types: ["Psychic", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Pink",
        eggGroups: ["Flying"],
        changesFrom: "Oricorio",
        tier: "2"
    },
    oricoriosensu: {
        num: 741,
        name: "Oricorio-Sensu",
        baseSpecies: "Oricorio",
        forme: "Sensu",
        types: ["Ghost", "Flying"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 75,
            atk: 70,
            def: 70,
            spa: 98,
            spd: 70,
            spe: 93
        },
        abilities: {
            "0": "Dancer"
        },
        heightm: 0.6,
        weightkg: 3.4,
        color: "Purple",
        eggGroups: ["Flying"],
        changesFrom: "Oricorio",
        tier: "2"
    },
    cutiefly: {
        num: 742,
        name: "Cutiefly",
        types: ["Bug", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 45,
            def: 40,
            spa: 55,
            spd: 40,
            spe: 84
        },
        abilities: {
            "0": "Sweet Veil",
            "1": "Shield Dust",
            H: "Honey Gather"
        },
        heightm: 0.1,
        weightkg: 0.2,
        color: "Yellow",
        evos: ["Ribombee"],
        eggGroups: ["Bug", "Fairy"],
        tier: "1",
    },
    ribombee: {
        num: 743,
        name: "Ribombee",
        types: ["Bug", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 55,
            def: 60,
            spa: 95,
            spd: 70,
            spe: 124
        },
        abilities: {
            "0": "Sweet Veil",
            "1": "Shield Dust",
            H: "Honey Gather"
        },
        heightm: 0.2,
        weightkg: 0.5,
        color: "Yellow",
        prevo: "Cutiefly",
        evoLevel: 25,
        eggGroups: ["Bug", "Fairy"],
        tier: "1",
    },
    rockruff: {
        num: 744,
        name: "Rockruff",
        baseForme: "Midday",
        types: ["Rock"],
        baseStats: {
            hp: 45,
            atk: 65,
            def: 40,
            spa: 30,
            spd: 40,
            spe: 60
        },
        abilities: {
            "0": "Keen Eye",
            "1": "Vital Spirit",
            H: "Steadfast"
        },
        heightm: 0.5,
        weightkg: 9.2,
        color: "Brown",
        evos: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
        eggGroups: ["Field"],
        formeOrder: ["Rockruff", "Rockruff"],
        tier: "1"
    },
    lycanroc: {
        num: 745,
        name: "Lycanroc",
        baseForme: "Midday",
        types: ["Rock"],
        baseStats: {
            hp: 75,
            atk: 115,
            def: 65,
            spa: 55,
            spd: 65,
            spe: 112
        },
        abilities: {
            "0": "Sand Rush",
            H: "Steadfast"
        },
        heightm: 0.8,
        weightkg: 25,
        color: "Brown",
        prevo: "Rockruff",
        evoType: "useItem",
        evoItem: "Sun Stone",
        eggGroups: ["Field"],
        otherFormes: ["Lycanroc-Midnight", "Lycanroc-Dusk"],
        formeOrder: ["Lycanroc", "Lycanroc-Midnight", "Lycanroc-Dusk"],
        tier: "1"
    },
    lycanrocmidnight: {
        num: 745,
        name: "Lycanroc-Midnight",
        baseSpecies: "Lycanroc",
        forme: "Midnight",
        types: ["Rock"],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 75,
            spa: 55,
            spd: 75,
            spe: 82
        },
        abilities: {
            "0": "No Guard",
            H: "Vital Spirit"
        },
        heightm: 1.1,
        weightkg: 25,
        color: "Red",
        prevo: "Rockruff",
        evoType: "useItem",
        evoItem: "Moon Stone",
        eggGroups: ["Field"],
        tier: "1"
    },
    lycanrocdusk: {
        num: 745,
        name: "Lycanroc-Dusk",
        baseSpecies: "Lycanroc",
        forme: "Dusk",
        types: ["Rock"],
        baseStats: {
            hp: 75,
            atk: 117,
            def: 65,
            spa: 55,
            spd: 65,
            spe: 110
        },
        abilities: {
            "0": "Tough Claws"
        },
        heightm: 0.8,
        weightkg: 25,
        color: "Brown",
        prevo: "Rockruff",
        evoType: "useItem",
        evoItem: "Dusk Stone",
        eggGroups: ["Field"],
        tier: "1"
    },
    wishiwashi: {
        num: 746,
        name: "Wishiwashi",
        baseForme: "Solo",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 20,
            def: 20,
            spa: 25,
            spd: 25,
            spe: 40
        },
        abilities: {
            "0": "Schooling"
        },
        heightm: 0.2,
        weightkg: 0.3,
        color: "Blue",
        eggGroups: ["Water 2"],
        otherFormes: ["Wishiwashi-School"],
        formeOrder: ["Wishiwashi", "Wishiwashi-School"],
        tier: "2",
    },
    wishiwashischool: {
        num: 746,
        name: "Wishiwashi-School",
        baseSpecies: "Wishiwashi",
        forme: "School",
        types: ["Water"],
        baseStats: {
            hp: 45,
            atk: 140,
            def: 130,
            spa: 140,
            spd: 135,
            spe: 30
        },
        abilities: {
            "0": "Schooling"
        },
        heightm: 8.2,
        weightkg: 78.6,
        color: "Blue",
        eggGroups: ["Water 2"],
        requiredAbility: "Schooling",
        battleOnly: "Wishiwashi",
    },
    mareanie: {
        num: 747,
        name: "Mareanie",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 53,
            def: 62,
            spa: 43,
            spd: 52,
            spe: 45
        },
        abilities: {
            "0": "Merciless",
            "1": "Limber",
            H: "Regenerator"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
        evos: ["Toxapex"],
        eggGroups: ["Water 1"],
        tier: "2"
    },
    toxapex: {
        num: 748,
        name: "Toxapex",
        types: ["Poison", "Water"],
        baseStats: {
            hp: 50,
            atk: 63,
            def: 152,
            spa: 53,
            spd: 142,
            spe: 35
        },
        abilities: {
            "0": "Merciless",
            "1": "Limber",
            H: "Regenerator"
        },
        heightm: 0.7,
        weightkg: 14.5,
        color: "Blue",
        prevo: "Mareanie",
        evoLevel: 38,
        eggGroups: ["Water 1"],
        tier: "2"
    },
    mudbray: {
        num: 749,
        name: "Mudbray",
        types: ["Ground"],
        baseStats: {
            hp: 70,
            atk: 100,
            def: 70,
            spa: 45,
            spd: 55,
            spe: 45
        },
        abilities: {
            "0": "Tangling Hair",
            "1": "Inner Focus",
            H: "Stamina"
        },
        heightm: 1,
        weightkg: 110,
        color: "Brown",
        evos: ["Mudsdale"],
        eggGroups: ["Field"],
        tier: "1"
    },
    mudsdale: {
        num: 750,
        name: "Mudsdale",
        types: ["Ground"],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 100,
            spa: 55,
            spd: 85,
            spe: 35
        },
        abilities: {
            "0": "Tangling Hair",
            "1": "Inner Focus",
            H: "Stamina"
        },
        heightm: 2.5,
        weightkg: 920,
        color: "Brown",
        prevo: "Mudbray",
        evoLevel: 30,
        eggGroups: ["Field"],
        tier: "1"
    },
    dewpider: {
        num: 751,
        name: "Dewpider",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 38,
            atk: 40,
            def: 52,
            spa: 40,
            spd: 72,
            spe: 27
        },
        abilities: {
            "0": "Water Bubble",
            H: "Water Absorb"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Green",
        evos: ["Araquanid"],
        eggGroups: ["Water 1", "Bug"],
        tier: "1",
    },
    araquanid: {
        num: 752,
        name: "Araquanid",
        types: ["Water", "Bug"],
        baseStats: {
            hp: 68,
            atk: 70,
            def: 92,
            spa: 50,
            spd: 132,
            spe: 42
        },
        abilities: {
            "0": "Water Bubble",
            H: "Water Absorb"
        },
        heightm: 1.8,
        weightkg: 82,
        color: "Green",
        prevo: "Dewpider",
        evoLevel: 22,
        eggGroups: ["Water 1", "Bug"],
        tier: "1",
    },
    fomantis: {
        num: 753,
        name: "Fomantis",
        types: ["Grass"],
        baseStats: {
            hp: 40,
            atk: 55,
            def: 35,
            spa: 50,
            spd: 35,
            spe: 35
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Contrary"
        },
        heightm: 0.3,
        weightkg: 1.5,
        color: "Pink",
        evos: ["Lurantis"],
        eggGroups: ["Grass"],
        tier: "2"
    },
    lurantis: {
        num: 754,
        name: "Lurantis",
        types: ["Grass"],
        baseStats: {
            hp: 70,
            atk: 105,
            def: 90,
            spa: 80,
            spd: 90,
            spe: 45
        },
        abilities: {
            "0": "Leaf Guard",
            H: "Contrary"
        },
        heightm: 0.9,
        weightkg: 18.5,
        color: "Pink",
        prevo: "Fomantis",
        evoLevel: 34,
        evoCondition: "during the day",
        eggGroups: ["Grass"],
        tier: "2"
    },
    morelull: {
        num: 755,
        name: "Morelull",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 40,
            atk: 35,
            def: 55,
            spa: 65,
            spd: 75,
            spe: 15
        },
        abilities: {
            "0": "Effect Spore",
            H: "Rain Dish"
        },
        heightm: 0.2,
        weightkg: 1.5,
        color: "Purple",
        evos: ["Shiinotic"],
        eggGroups: ["Grass"],
        tier: "1",
    },
    shiinotic: {
        num: 756,
        name: "Shiinotic",
        types: ["Grass", "Fairy"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 80,
            spa: 90,
            spd: 100,
            spe: 30
        },
        abilities: {
            "0": "Effect Spore",
            H: "Rain Dish"
        },
        heightm: 1,
        weightkg: 11.5,
        color: "Purple",
        prevo: "Morelull",
        evoLevel: 24,
        eggGroups: ["Grass"],
        tier: "1",
    },
    salandit: {
        num: 757,
        name: "Salandit",
        types: ["Poison", "Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 48,
            atk: 44,
            def: 40,
            spa: 71,
            spd: 40,
            spe: 77
        },
        abilities: {
            "0": "Corrosion"
        },
        heightm: 0.6,
        weightkg: 4.8,
        color: "Black",
        evos: ["Salazzle"],
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    salazzle: {
        num: 758,
        name: "Salazzle",
        types: ["Poison", "Fire"],
        gender: "F",
        baseStats: {
            hp: 68,
            atk: 64,
            def: 60,
            spa: 111,
            spd: 60,
            spe: 117
        },
        abilities: {
            "0": "Corrosion"
        },
        heightm: 1.2,
        weightkg: 22.2,
        color: "Black",
        prevo: "Salandit",
        evoLevel: 30,
        eggGroups: ["Monster", "Dragon"],
        tier: "1"
    },
    stufful: {
        num: 759,
        name: "Stufful",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 70,
            atk: 75,
            def: 50,
            spa: 45,
            spd: 50,
            spe: 50
        },
        abilities: {
            "0": "Fluffy"
        },
        heightm: 0.5,
        weightkg: 6.8,
        color: "Pink",
        evos: ["Bewear"],
        eggGroups: ["Field"],
        tier: "1",
    },
    bewear: {
        num: 760,
        name: "Bewear",
        types: ["Normal", "Fighting"],
        baseStats: {
            hp: 120,
            atk: 125,
            def: 80,
            spa: 55,
            spd: 60,
            spe: 60
        },
        abilities: {
            "0": "Fluffy"
        },
        heightm: 2.1,
        weightkg: 135,
        color: "Pink",
        prevo: "Stufful",
        evoLevel: 26,
        eggGroups: ["Field"],
        tier: "1",
    },
    bounsweet: {
        num: 761,
        name: "Bounsweet",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 42,
            atk: 30,
            def: 38,
            spa: 30,
            spd: 38,
            spe: 32
        },
        abilities: {
            "0": "Sweet Veil",
            "1": "Oblivious",
            H: "Leaf Guard"
        },
        heightm: 0.3,
        weightkg: 3.2,
        color: "Purple",
        evos: ["Steenee"],
        eggGroups: ["Grass"],
        tier: "1"
    },
    steenee: {
        num: 762,
        name: "Steenee",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 52,
            atk: 40,
            def: 48,
            spa: 40,
            spd: 48,
            spe: 62
        },
        abilities: {
            "0": "Sweet Veil",
            "1": "Oblivious",
            H: "Leaf Guard"
        },
        heightm: 0.7,
        weightkg: 8.2,
        color: "Purple",
        prevo: "Bounsweet",
        evoLevel: 12,
        evos: ["Tsareena"],
        eggGroups: ["Grass"],
        tier: "1"
    },
    tsareena: {
        num: 763,
        name: "Tsareena",
        types: ["Grass"],
        gender: "F",
        baseStats: {
            hp: 72,
            atk: 120,
            def: 98,
            spa: 50,
            spd: 98,
            spe: 72
        },
        abilities: {
            "0": "Sweet Veil",
            "1": "Queenly Majesty",
            H: "Leaf Guard"
        },
        heightm: 1.2,
        weightkg: 21.4,
        color: "Purple",
        prevo: "Steenee",
        evoType: "levelMove",
        evoMove: "Stomp",
        eggGroups: ["Grass"],
        tier: "1"
    },
    comfey: {
        num: 764,
        name: "Comfey",
        types: ["Fairy"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 51,
            atk: 52,
            def: 90,
            spa: 82,
            spd: 110,
            spe: 100
        },
        abilities: {
            "0": "Triage",
            H: "Natural Cure"
        },
        heightm: 0.1,
        weightkg: 0.3,
        color: "Green",
        eggGroups: ["Grass"],
        tier: "2",
    },
    oranguru: {
        num: 765,
        name: "Oranguru",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 90,
            atk: 60,
            def: 80,
            spa: 90,
            spd: 110,
            spe: 60
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Telepathy",
            H: "Symbiosis"
        },
        heightm: 1.5,
        weightkg: 76,
        color: "White",
        eggGroups: ["Field"],
        tier: "2"
    },
    passimian: {
        num: 766,
        name: "Passimian",
        types: ["Fighting"],
        baseStats: {
            hp: 100,
            atk: 120,
            def: 90,
            spa: 40,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Receiver",
            H: "Defiant"
        },
        heightm: 2,
        weightkg: 82.8,
        color: "White",
        eggGroups: ["Field"],
        tier: "2"
    },
    wimpod: {
        num: 767,
        name: "Wimpod",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 25,
            atk: 35,
            def: 40,
            spa: 20,
            spd: 30,
            spe: 80
        },
        abilities: {
            "0": "Wimp Out"
        },
        heightm: 0.5,
        weightkg: 12,
        color: "Gray",
        evos: ["Golisopod"],
        eggGroups: ["Bug", "Water 3"],
        tier: "1",
    },
    golisopod: {
        num: 768,
        name: "Golisopod",
        types: ["Bug", "Water"],
        baseStats: {
            hp: 75,
            atk: 125,
            def: 140,
            spa: 60,
            spd: 90,
            spe: 40
        },
        abilities: {
            "0": "Emergency Exit"
        },
        heightm: 2,
        weightkg: 108,
        color: "Gray",
        prevo: "Wimpod",
        evoLevel: 30,
        eggGroups: ["Bug", "Water 3"],
        tier: "1",
    },
    sandygast: {
        num: 769,
        name: "Sandygast",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 55,
            atk: 55,
            def: 80,
            spa: 70,
            spd: 45,
            spe: 15
        },
        abilities: {
            "0": "Water Compaction",
            H: "Sand Veil"
        },
        heightm: 0.5,
        weightkg: 70,
        color: "Brown",
        evos: ["Palossand"],
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    palossand: {
        num: 770,
        name: "Palossand",
        types: ["Ghost", "Ground"],
        baseStats: {
            hp: 85,
            atk: 75,
            def: 110,
            spa: 100,
            spd: 75,
            spe: 35
        },
        abilities: {
            "0": "Water Compaction",
            H: "Sand Veil"
        },
        heightm: 1.3,
        weightkg: 250,
        color: "Brown",
        prevo: "Sandygast",
        evoLevel: 42,
        eggGroups: ["Amorphous"],
        tier: "2"
    },
    pyukumuku: {
        num: 771,
        name: "Pyukumuku",
        types: ["Water"],
        baseStats: {
            hp: 55,
            atk: 60,
            def: 130,
            spa: 30,
            spd: 130,
            spe: 5
        },
        abilities: {
            "0": "Innards Out",
            H: "Unaware"
        },
        heightm: 0.3,
        weightkg: 1.2,
        color: "Black",
        eggGroups: ["Water 1"],
        tier: "2",
    },
    typenull: {
        num: 772,
        name: "Type: Null",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 59
        },
        abilities: {
            "0": "Battle Armor"
        },
        heightm: 1.9,
        weightkg: 120.5,
        color: "Gray",
        tags: ["Sub-Legendary"],
        evos: ["Silvally"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    silvally: {
        num: 773,
        name: "Silvally",
        types: ["Normal"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        tags: ["Sub-Legendary"],
        prevo: "Type: Null",
        evoType: "levelFriendship",
        eggGroups: ["Undiscovered"],
        otherFormes: ["Silvally-Bug", "Silvally-Dark", "Silvally-Dragon", "Silvally-Electric", "Silvally-Fairy", "Silvally-Fighting", "Silvally-Fire", "Silvally-Flying", "Silvally-Ghost", "Silvally-Grass", "Silvally-Ground", "Silvally-Ice", "Silvally-Poison", "Silvally-Psychic", "Silvally-Rock", "Silvally-Steel", "Silvally-Water"],
        formeOrder: ["Silvally", "Silvally-Fighting", "Silvally-Flying", "Silvally-Poison", "Silvally-Ground", "Silvally-Rock", "Silvally-Bug", "Silvally-Ghost", "Silvally-Steel", "Silvally-Fire", "Silvally-Water", "Silvally-Grass", "Silvally-Electric", "Silvally-Psychic", "Silvally-Ice", "Silvally-Dragon", "Silvally-Dark", "Silvally-Fairy"],
        tier: "2",
    },
    silvallybug: {
        num: 773,
        name: "Silvally-Bug",
        baseSpecies: "Silvally",
        forme: "Bug",
        types: ["Bug"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Bug Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallydark: {
        num: 773,
        name: "Silvally-Dark",
        baseSpecies: "Silvally",
        forme: "Dark",
        types: ["Dark"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Dark Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallydragon: {
        num: 773,
        name: "Silvally-Dragon",
        baseSpecies: "Silvally",
        forme: "Dragon",
        types: ["Dragon"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Dragon Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyelectric: {
        num: 773,
        name: "Silvally-Electric",
        baseSpecies: "Silvally",
        forme: "Electric",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Electric Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyfairy: {
        num: 773,
        name: "Silvally-Fairy",
        baseSpecies: "Silvally",
        forme: "Fairy",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Fairy Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyfighting: {
        num: 773,
        name: "Silvally-Fighting",
        baseSpecies: "Silvally",
        forme: "Fighting",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Fighting Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyfire: {
        num: 773,
        name: "Silvally-Fire",
        baseSpecies: "Silvally",
        forme: "Fire",
        types: ["Fire"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Fire Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyflying: {
        num: 773,
        name: "Silvally-Flying",
        baseSpecies: "Silvally",
        forme: "Flying",
        types: ["Flying"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Flying Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyghost: {
        num: 773,
        name: "Silvally-Ghost",
        baseSpecies: "Silvally",
        forme: "Ghost",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Ghost Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallygrass: {
        num: 773,
        name: "Silvally-Grass",
        baseSpecies: "Silvally",
        forme: "Grass",
        types: ["Grass"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Grass Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyground: {
        num: 773,
        name: "Silvally-Ground",
        baseSpecies: "Silvally",
        forme: "Ground",
        types: ["Ground"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Ground Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyice: {
        num: 773,
        name: "Silvally-Ice",
        baseSpecies: "Silvally",
        forme: "Ice",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Ice Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallypoison: {
        num: 773,
        name: "Silvally-Poison",
        baseSpecies: "Silvally",
        forme: "Poison",
        types: ["Poison"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Poison Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallypsychic: {
        num: 773,
        name: "Silvally-Psychic",
        baseSpecies: "Silvally",
        forme: "Psychic",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Psychic Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallyrock: {
        num: 773,
        name: "Silvally-Rock",
        baseSpecies: "Silvally",
        forme: "Rock",
        types: ["Rock"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Rock Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallysteel: {
        num: 773,
        name: "Silvally-Steel",
        baseSpecies: "Silvally",
        forme: "Steel",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Steel Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    silvallywater: {
        num: 773,
        name: "Silvally-Water",
        baseSpecies: "Silvally",
        forme: "Water",
        types: ["Water"],
        gender: "N",
        baseStats: {
            hp: 95,
            atk: 95,
            def: 95,
            spa: 95,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "RKS System"
        },
        heightm: 2.3,
        weightkg: 100.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        requiredItem: "Water Memory",
        changesFrom: "Silvally",
        tier: "2",
    },
    minior: {
        num: 774,
        name: "Minior",
        baseForme: "Red",
        types: ["Rock", "Flying"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 100,
            def: 60,
            spa: 100,
            spd: 60,
            spe: 120
        },
        abilities: {
            "0": "Shields Down"
        },
        heightm: 0.3,
        weightkg: 0.3,
        color: "Red",
        eggGroups: ["Mineral"],
        otherFormes: ["Minior-Meteor"],
        cosmeticFormes: ["Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"],
        formeOrder: ["Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior", "Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"],
        tier: "2",
    },
    miniormeteor: {
        num: 774,
        name: "Minior-Meteor",
        baseSpecies: "Minior",
        forme: "Meteor",
        types: ["Rock", "Flying"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 60,
            def: 100,
            spa: 60,
            spd: 100,
            spe: 60
        },
        abilities: {
            "0": "Shields Down"
        },
        heightm: 0.3,
        weightkg: 40,
        color: "Brown",
        eggGroups: ["Mineral"],
        requiredAbility: "Shields Down",
        battleOnly: "Minior",
    },
    komala: {
        num: 775,
        name: "Komala",
        types: ["Normal"],
        baseStats: {
            hp: 65,
            atk: 115,
            def: 65,
            spa: 75,
            spd: 95,
            spe: 65
        },
        abilities: {
            "0": "Comatose"
        },
        heightm: 0.4,
        weightkg: 19.9,
        color: "Blue",
        eggGroups: ["Field"],
        tier: "2"
    },
    turtonator: {
        num: 776,
        name: "Turtonator",
        types: ["Fire", "Dragon"],
        baseStats: {
            hp: 60,
            atk: 78,
            def: 135,
            spa: 91,
            spd: 85,
            spe: 36
        },
        abilities: {
            "0": "Shell Armor"
        },
        heightm: 2,
        weightkg: 212,
        color: "Red",
        eggGroups: ["Monster", "Dragon"],
        tier: "1",
    },
    togedemaru: {
        num: 777,
        name: "Togedemaru",
        types: ["Electric", "Steel"],
        baseStats: {
            hp: 65,
            atk: 98,
            def: 63,
            spa: 40,
            spd: 73,
            spe: 96
        },
        abilities: {
            "0": "Iron Barbs",
            H: "Sturdy"
        },
        heightm: 0.3,
        weightkg: 3.3,
        color: "Gray",
        eggGroups: ["Field", "Fairy"],
        tier: "1",
    },
    mimikyu: {
        num: 778,
        name: "Mimikyu",
        baseForme: "Disguised",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 55,
            atk: 90,
            def: 80,
            spa: 50,
            spd: 105,
            spe: 96
        },
        abilities: {
            "0": "Disguise"
        },
        heightm: 0.2,
        weightkg: 0.7,
        color: "Yellow",
        eggGroups: ["Amorphous"],
        otherFormes: ["Mimikyu-Busted"],
        formeOrder: ["Mimikyu", "Mimikyu-Busted"],
        tier: "1"
    },
    mimikyubusted: {
        num: 778,
        name: "Mimikyu-Busted",
        baseSpecies: "Mimikyu",
        forme: "Busted",
        types: ["Ghost", "Fairy"],
        baseStats: {
            hp: 55,
            atk: 90,
            def: 80,
            spa: 50,
            spd: 105,
            spe: 96
        },
        abilities: {
            "0": "Disguise"
        },
        heightm: 0.2,
        weightkg: 0.7,
        color: "Yellow",
        eggGroups: ["Amorphous"],
        requiredAbility: "Disguise",
        battleOnly: "Mimikyu"
    },
    bruxish: {
        num: 779,
        name: "Bruxish",
        types: ["Water", "Psychic"],
        baseStats: {
            hp: 68,
            atk: 105,
            def: 70,
            spa: 70,
            spd: 70,
            spe: 92
        },
        abilities: {
            "0": "Dazzling",
            "1": "Strong Jaw",
            H: "Strong Jaw"
        },
        heightm: 0.9,
        weightkg: 19,
        color: "Pink",
        eggGroups: ["Water 2"],
        tier: "1"
    },
    drampa: {
        num: 780,
        name: "Drampa",
        types: ["Normal", "Dragon"],
        baseStats: {
            hp: 78,
            atk: 60,
            def: 85,
            spa: 135,
            spd: 91,
            spe: 36
        },
        abilities: {
            "0": "Berserk",
            "1": "Sap Sipper",
            H: "Cloud Nine"
        },
        heightm: 3,
        weightkg: 185,
        color: "White",
        eggGroups: ["Monster", "Dragon"],
        tier: "2",
    },
    dhelmise: {
        num: 781,
        name: "Dhelmise",
        types: ["Ghost", "Grass"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 131,
            def: 100,
            spa: 86,
            spd: 90,
            spe: 40
        },
        abilities: {
            "0": "Steelworker"
        },
        heightm: 3.9,
        weightkg: 210,
        color: "Green",
        eggGroups: ["Mineral"],
        tier: "1",
    },
    jangmoo: {
        num: 782,
        name: "Jangmo-o",
        types: ["Dragon"],
        baseStats: {
            hp: 45,
            atk: 55,
            def: 65,
            spa: 45,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Overcoat",
            "1": "Soundproof",
            H: "Bulletproof"
        },
        heightm: 0.6,
        weightkg: 29.7,
        color: "Gray",
        evos: ["Hakamo-o"],
        eggGroups: ["Dragon"],
        tier: "1",
    },
    hakamoo: {
        num: 783,
        name: "Hakamo-o",
        types: ["Dragon", "Fighting"],
        baseStats: {
            hp: 55,
            atk: 75,
            def: 90,
            spa: 65,
            spd: 70,
            spe: 65
        },
        abilities: {
            "0": "Overcoat",
            "1": "Soundproof",
            H: "Bulletproof"
        },
        heightm: 1.2,
        weightkg: 47,
        color: "Gray",
        prevo: "Jangmo-o",
        evoLevel: 35,
        evos: ["Kommo-o"],
        eggGroups: ["Dragon"],
        tier: "1",
    },
    kommoo: {
        num: 784,
        name: "Kommo-o",
        types: ["Dragon", "Fighting"],
        baseStats: {
            hp: 75,
            atk: 110,
            def: 125,
            spa: 100,
            spd: 105,
            spe: 85
        },
        abilities: {
            "0": "Overcoat",
            "1": "Soundproof",
            H: "Bulletproof"
        },
        heightm: 1.6,
        weightkg: 78.2,
        color: "Gray",
        prevo: "Hakamo-o",
        evoLevel: 45,
        eggGroups: ["Dragon"],
        tier: "1",
    },
    tapukoko: {
        num: 785,
        name: "Tapu Koko",
        types: ["Electric", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 115,
            def: 85,
            spa: 95,
            spd: 75,
            spe: 130
        },
        abilities: {
            "0": "Electric Surge",
            H: "Telepathy"
        },
        heightm: 1.8,
        weightkg: 20.5,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    tapulele: {
        num: 786,
        name: "Tapu Lele",
        types: ["Psychic", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 85,
            def: 75,
            spa: 130,
            spd: 115,
            spe: 95
        },
        abilities: {
            "0": "Psychic Surge",
            H: "Telepathy"
        },
        heightm: 1.2,
        weightkg: 18.6,
        color: "Pink",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    tapubulu: {
        num: 787,
        name: "Tapu Bulu",
        types: ["Grass", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 130,
            def: 115,
            spa: 85,
            spd: 95,
            spe: 75
        },
        abilities: {
            "0": "Grassy Surge",
            H: "Telepathy"
        },
        heightm: 1.9,
        weightkg: 45.5,
        color: "Red",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    tapufini: {
        num: 788,
        name: "Tapu Fini",
        types: ["Water", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 70,
            atk: 75,
            def: 115,
            spa: 95,
            spd: 130,
            spe: 85
        },
        abilities: {
            "0": "Misty Surge",
            H: "Telepathy"
        },
        heightm: 1.3,
        weightkg: 21.2,
        color: "Purple",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    cosmog: {
        num: 789,
        name: "Cosmog",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 43,
            atk: 29,
            def: 31,
            spa: 29,
            spd: 31,
            spe: 37
        },
        abilities: {
            "0": "Unaware"
        },
        heightm: 0.2,
        weightkg: 0.1,
        color: "Blue",
        evos: ["Cosmoem"],
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    cosmoem: {
        num: 790,
        name: "Cosmoem",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 43,
            atk: 29,
            def: 131,
            spa: 29,
            spd: 131,
            spe: 37
        },
        abilities: {
            "0": "Sturdy"
        },
        heightm: 0.1,
        weightkg: 999.9,
        color: "Blue",
        tags: ["Restricted Legendary"],
        prevo: "Cosmog",
        evoLevel: 43,
        evos: ["Solgaleo", "Lunala"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    solgaleo: {
        num: 791,
        name: "Solgaleo",
        types: ["Psychic", "Steel"],
        gender: "N",
        baseStats: {
            hp: 137,
            atk: 137,
            def: 107,
            spa: 113,
            spd: 89,
            spe: 97
        },
        abilities: {
            "0": "Full Metal Body"
        },
        heightm: 3.4,
        weightkg: 230,
        color: "White",
        tags: ["Restricted Legendary"],
        prevo: "Cosmoem",
        evoLevel: 53,
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    lunala: {
        num: 792,
        name: "Lunala",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 137,
            atk: 113,
            def: 89,
            spa: 137,
            spd: 107,
            spe: 97
        },
        abilities: {
            "0": "Shadow Shield"
        },
        heightm: 4,
        weightkg: 120,
        color: "Purple",
        tags: ["Restricted Legendary"],
        prevo: "Cosmoem",
        evoLevel: 53,
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    nihilego: {
        num: 793,
        name: "Nihilego",
        types: ["Rock", "Poison"],
        gender: "N",
        baseStats: {
            hp: 109,
            atk: 53,
            def: 47,
            spa: 127,
            spd: 131,
            spe: 103
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 1.2,
        weightkg: 55.5,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    buzzwole: {
        num: 794,
        name: "Buzzwole",
        types: ["Bug", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 107,
            atk: 139,
            def: 139,
            spa: 53,
            spd: 53,
            spe: 79
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 2.4,
        weightkg: 333.6,
        color: "Red",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    pheromosa: {
        num: 795,
        name: "Pheromosa",
        types: ["Bug", "Fighting"],
        gender: "N",
        baseStats: {
            hp: 71,
            atk: 137,
            def: 37,
            spa: 137,
            spd: 37,
            spe: 151
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 1.8,
        weightkg: 25,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    xurkitree: {
        num: 796,
        name: "Xurkitree",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 83,
            atk: 89,
            def: 71,
            spa: 173,
            spd: 71,
            spe: 83
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 3.8,
        weightkg: 100,
        color: "Black",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    celesteela: {
        num: 797,
        name: "Celesteela",
        types: ["Steel", "Flying"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 101,
            def: 103,
            spa: 107,
            spd: 101,
            spe: 61
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 9.2,
        weightkg: 999.9,
        color: "Green",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    kartana: {
        num: 798,
        name: "Kartana",
        types: ["Grass", "Steel"],
        gender: "N",
        baseStats: {
            hp: 59,
            atk: 181,
            def: 131,
            spa: 59,
            spd: 31,
            spe: 109
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 0.3,
        weightkg: 0.1,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    guzzlord: {
        num: 799,
        name: "Guzzlord",
        types: ["Dark", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 223,
            atk: 101,
            def: 53,
            spa: 97,
            spd: 53,
            spe: 43
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 5.5,
        weightkg: 888,
        color: "Black",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    necrozma: {
        num: 800,
        name: "Necrozma",
        types: ["Psychic"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 107,
            def: 101,
            spa: 127,
            spd: 89,
            spe: 79
        },
        abilities: {
            "0": "Prism Armor"
        },
        heightm: 2.4,
        weightkg: 230,
        color: "Black",
        tags: ["Restricted Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"],
        formeOrder: ["Necrozma", "Necrozma-Dusk-Mane", "Necrozma-Dawn-Wings", "Necrozma-Ultra"],
        tier: "2",
    },
    necrozmaduskmane: {
        num: 800,
        name: "Necrozma-Dusk-Mane",
        baseSpecies: "Necrozma",
        forme: "Dusk-Mane",
        types: ["Psychic", "Steel"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 157,
            def: 127,
            spa: 113,
            spd: 109,
            spe: 77
        },
        abilities: {
            "0": "Prism Armor"
        },
        heightm: 3.8,
        weightkg: 460,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        changesFrom: "Necrozma",
        tier: "2",
    },
    necrozmadawnwings: {
        num: 800,
        name: "Necrozma-Dawn-Wings",
        baseSpecies: "Necrozma",
        forme: "Dawn-Wings",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 113,
            def: 109,
            spa: 157,
            spd: 127,
            spe: 77
        },
        abilities: {
            "0": "Prism Armor"
        },
        heightm: 4.2,
        weightkg: 350,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        changesFrom: "Necrozma",
        tier: "2",
    },
    necrozmaultra: {
        num: 800,
        name: "Necrozma-Ultra",
        baseSpecies: "Necrozma",
        forme: "Ultra",
        types: ["Psychic", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 97,
            atk: 167,
            def: 97,
            spa: 167,
            spd: 97,
            spe: 129
        },
        abilities: {
            "0": "Neuroforce"
        },
        heightm: 7.5,
        weightkg: 230,
        color: "Yellow",
        eggGroups: ["Undiscovered"],
        requiredItem: "Ultranecrozium Z",
        battleOnly: ["Necrozma-Dawn-Wings", "Necrozma-Dusk-Mane"],
        tier: "2",
    },
    magearna: {
        num: 801,
        name: "Magearna",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 95,
            def: 115,
            spa: 130,
            spd: 115,
            spe: 65
        },
        abilities: {
            "0": "Soul-Heart"
        },
        heightm: 1,
        weightkg: 80.5,
        color: "Gray",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Magearna-Original"],
        formeOrder: ["Magearna", "Magearna-Original"],
        tier: "2"
    },
    magearnaoriginal: {
        num: 801,
        name: "Magearna-Original",
        baseSpecies: "Magearna",
        forme: "Original",
        types: ["Steel", "Fairy"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 95,
            def: 115,
            spa: 130,
            spd: 115,
            spe: 65
        },
        abilities: {
            "0": "Soul-Heart"
        },
        heightm: 1,
        weightkg: 80.5,
        color: "Red",
        eggGroups: ["Undiscovered"]
    },
    marshadow: {
        num: 802,
        name: "Marshadow",
        types: ["Fighting", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 125,
            def: 80,
            spa: 90,
            spd: 90,
            spe: 125
        },
        abilities: {
            "0": "Technician"
        },
        heightm: 0.7,
        weightkg: 22.2,
        color: "Gray",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    poipole: {
        num: 803,
        name: "Poipole",
        types: ["Poison"],
        gender: "N",
        baseStats: {
            hp: 67,
            atk: 73,
            def: 67,
            spa: 73,
            spd: 67,
            spe: 73
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 0.6,
        weightkg: 1.8,
        color: "Purple",
        tags: ["Sub-Legendary"],
        evos: ["Naganadel"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    naganadel: {
        num: 804,
        name: "Naganadel",
        types: ["Poison", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 73,
            atk: 73,
            def: 73,
            spa: 127,
            spd: 73,
            spe: 121
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 3.6,
        weightkg: 150,
        color: "Purple",
        tags: ["Sub-Legendary"],
        prevo: "Poipole",
        evoType: "levelMove",
        evoMove: "Dragon Pulse",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    stakataka: {
        num: 805,
        name: "Stakataka",
        types: ["Rock", "Steel"],
        gender: "N",
        baseStats: {
            hp: 61,
            atk: 131,
            def: 211,
            spa: 53,
            spd: 101,
            spe: 13
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 5.5,
        weightkg: 820,
        color: "Gray",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    blacephalon: {
        num: 806,
        name: "Blacephalon",
        types: ["Fire", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 53,
            atk: 127,
            def: 53,
            spa: 151,
            spd: 79,
            spe: 107
        },
        abilities: {
            "0": "Beast Boost"
        },
        heightm: 1.8,
        weightkg: 13,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    zeraora: {
        num: 807,
        name: "Zeraora",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 88,
            atk: 112,
            def: 75,
            spa: 102,
            spd: 80,
            spe: 143
        },
        abilities: {
            "0": "Volt Absorb"
        },
        heightm: 1.5,
        weightkg: 44.5,
        color: "Yellow",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    meltan: {
        num: 808,
        name: "Meltan",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 46,
            atk: 65,
            def: 65,
            spa: 55,
            spd: 35,
            spe: 34
        },
        abilities: {
            "0": "Magnet Pull"
        },
        heightm: 0.2,
        weightkg: 8,
        color: "Gray",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    melmetal: {
        num: 809,
        name: "Melmetal",
        types: ["Steel"],
        gender: "N",
        baseStats: {
            hp: 135,
            atk: 143,
            def: 143,
            spa: 80,
            spd: 65,
            spe: 34
        },
        abilities: {
            "0": "Iron Fist"
        },
        heightm: 2.5,
        weightkg: 800,
        color: "Gray",
        tags: ["Mythical"],
        eggGroups: ["Undiscovered"],
        canGigantamax: "G-Max Meltdown",
        tier: "2",
    },
    grookey: {
        num: 810,
        name: "Grookey",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 65,
            def: 50,
            spa: 40,
            spd: 40,
            spe: 65
        },
        abilities: {
            "0": "Overgrow",
            H: "Grassy Surge"
        },
        heightm: 0.3,
        weightkg: 5,
        color: "Green",
        evos: ["Thwackey"],
        eggGroups: ["Field", "Grass"],
        tier: "1"
    },
    thwackey: {
        num: 811,
        name: "Thwackey",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 70,
            spa: 55,
            spd: 60,
            spe: 80
        },
        abilities: {
            "0": "Overgrow",
            H: "Grassy Surge"
        },
        heightm: 0.7,
        weightkg: 14,
        color: "Green",
        prevo: "Grookey",
        evoLevel: 16,
        evos: ["Rillaboom"],
        eggGroups: ["Field", "Grass"],
        tier: "1"
    },
    rillaboom: {
        num: 812,
        name: "Rillaboom",
        types: ["Grass"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 125,
            def: 90,
            spa: 60,
            spd: 70,
            spe: 85
        },
        abilities: {
            "0": "Overgrow",
            H: "Grassy Surge"
        },
        heightm: 2.1,
        weightkg: 90,
        color: "Green",
        prevo: "Thwackey",
        evoLevel: 35,
        eggGroups: ["Field", "Grass"],
        canGigantamax: "G-Max Drum Solo",
        tier: "1"
    },
    scorbunny: {
        num: 813,
        name: "Scorbunny",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 71,
            def: 40,
            spa: 40,
            spd: 40,
            spe: 69
        },
        abilities: {
            "0": "Blaze",
            H: "Libero"
        },
        heightm: 0.3,
        weightkg: 4.5,
        color: "White",
        evos: ["Raboot"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1"
    },
    raboot: {
        num: 814,
        name: "Raboot",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 86,
            def: 60,
            spa: 55,
            spd: 60,
            spe: 94
        },
        abilities: {
            "0": "Blaze",
            H: "Libero"
        },
        heightm: 0.6,
        weightkg: 9,
        color: "Gray",
        prevo: "Scorbunny",
        evoLevel: 16,
        evos: ["Cinderace"],
        eggGroups: ["Field", "Human-Like"],
        tier: "1"
    },
    cinderace: {
        num: 815,
        name: "Cinderace",
        types: ["Fire"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 80,
            atk: 116,
            def: 75,
            spa: 65,
            spd: 75,
            spe: 119
        },
        abilities: {
            "0": "Blaze",
            H: "Libero"
        },
        heightm: 1.4,
        weightkg: 33,
        color: "White",
        prevo: "Raboot",
        evoLevel: 35,
        eggGroups: ["Field", "Human-Like"],
        canGigantamax: "G-Max Fireball",
        tier: "1"
    },
    sobble: {
        num: 816,
        name: "Sobble",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 50,
            atk: 40,
            def: 40,
            spa: 70,
            spd: 40,
            spe: 70
        },
        abilities: {
            "0": "Torrent",
            H: "Sniper"
        },
        heightm: 0.3,
        weightkg: 4,
        color: "Blue",
        evos: ["Drizzile"],
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    drizzile: {
        num: 817,
        name: "Drizzile",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 65,
            atk: 60,
            def: 55,
            spa: 95,
            spd: 55,
            spe: 90
        },
        abilities: {
            "0": "Torrent",
            H: "Sniper"
        },
        heightm: 0.7,
        weightkg: 11.5,
        color: "Blue",
        prevo: "Sobble",
        evoLevel: 16,
        evos: ["Inteleon"],
        eggGroups: ["Water 1", "Field"],
        tier: "1"
    },
    inteleon: {
        num: 818,
        name: "Inteleon",
        types: ["Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 70,
            atk: 85,
            def: 65,
            spa: 125,
            spd: 65,
            spe: 120
        },
        abilities: {
            "0": "Torrent",
            H: "Sniper"
        },
        heightm: 1.9,
        weightkg: 45.2,
        color: "Blue",
        prevo: "Drizzile",
        evoLevel: 35,
        eggGroups: ["Water 1", "Field"],
        canGigantamax: "G-Max Hydrosnipe",
        tier: "1"
    },
    skwovet: {
        num: 819,
        name: "Skwovet",
        types: ["Normal"],
        baseStats: {
            hp: 70,
            atk: 55,
            def: 55,
            spa: 35,
            spd: 35,
            spe: 25
        },
        abilities: {
            "0": "Cheek Pouch",
            H: "Gluttony"
        },
        heightm: 0.3,
        weightkg: 2.5,
        color: "Brown",
        evos: ["Greedent"],
        eggGroups: ["Field"],
        tier: "2"
    },
    greedent: {
        num: 820,
        name: "Greedent",
        types: ["Normal"],
        baseStats: {
            hp: 120,
            atk: 95,
            def: 95,
            spa: 55,
            spd: 75,
            spe: 20
        },
        abilities: {
            "0": "Cheek Pouch",
            H: "Gluttony"
        },
        heightm: 0.6,
        weightkg: 6,
        color: "Brown",
        prevo: "Skwovet",
        evoLevel: 24,
        eggGroups: ["Field"],
        tier: "2"
    },
    rookidee: {
        num: 821,
        name: "Rookidee",
        types: ["Flying"],
        baseStats: {
            hp: 38,
            atk: 47,
            def: 35,
            spa: 33,
            spd: 35,
            spe: 57
        },
        abilities: {
            "0": "Unnerve",
            H: "Big Pecks"
        },
        heightm: 0.2,
        weightkg: 1.8,
        color: "Blue",
        evos: ["Corvisquire"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    corvisquire: {
        num: 822,
        name: "Corvisquire",
        types: ["Flying"],
        baseStats: {
            hp: 68,
            atk: 67,
            def: 55,
            spa: 43,
            spd: 55,
            spe: 77
        },
        abilities: {
            "0": "Unnerve",
            H: "Big Pecks"
        },
        heightm: 0.8,
        weightkg: 16,
        color: "Blue",
        prevo: "Rookidee",
        evoLevel: 20,
        evos: ["Corviknight"],
        eggGroups: ["Flying"],
        tier: "1"
    },
    corviknight: {
        num: 823,
        name: "Corviknight",
        types: ["Flying", "Steel"],
        baseStats: {
            hp: 98,
            atk: 87,
            def: 105,
            spa: 53,
            spd: 85,
            spe: 67
        },
        abilities: {
            "0": "Unnerve",
            H: "Mirror Armor"
        },
        heightm: 2.2,
        weightkg: 75,
        color: "Purple",
        prevo: "Corvisquire",
        evoLevel: 44,
        eggGroups: ["Flying"],
        canGigantamax: "G-Max Wind Rage",
        tier: "1"
    },
    blipbug: {
        num: 824,
        name: "Blipbug",
        types: ["Bug"],
        baseStats: {
            hp: 25,
            atk: 20,
            def: 20,
            spa: 25,
            spd: 45,
            spe: 45
        },
        abilities: {
            "0": "Swarm",
            "1": "Compound Eyes",
            H: "Telepathy"
        },
        heightm: 0.4,
        weightkg: 8,
        color: "Blue",
        evos: ["Dottler"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    dottler: {
        num: 825,
        name: "Dottler",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 50,
            atk: 35,
            def: 80,
            spa: 50,
            spd: 90,
            spe: 30
        },
        abilities: {
            "0": "Swarm",
            "1": "Compound Eyes",
            H: "Telepathy"
        },
        heightm: 0.4,
        weightkg: 19.5,
        color: "Yellow",
        prevo: "Blipbug",
        evoLevel: 10,
        evos: ["Orbeetle"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    orbeetle: {
        num: 826,
        name: "Orbeetle",
        types: ["Bug", "Psychic"],
        baseStats: {
            hp: 60,
            atk: 45,
            def: 110,
            spa: 80,
            spd: 120,
            spe: 90
        },
        abilities: {
            "0": "Swarm",
            "1": "Compound Eyes",
            H: "Telepathy"
        },
        heightm: 0.4,
        weightkg: 40.8,
        color: "Red",
        prevo: "Dottler",
        evoLevel: 30,
        eggGroups: ["Bug"],
        canGigantamax: "G-Max Gravitas",
        tier: "1",
    },
    nickit: {
        num: 827,
        name: "Nickit",
        types: ["Dark"],
        baseStats: {
            hp: 40,
            atk: 28,
            def: 28,
            spa: 47,
            spd: 52,
            spe: 50
        },
        abilities: {
            "0": "Run Away",
            "1": "Unburden",
            H: "Stakeout"
        },
        heightm: 0.6,
        weightkg: 8.9,
        color: "Brown",
        evos: ["Thievul"],
        eggGroups: ["Field"],
        tier: "2",
    },
    thievul: {
        num: 828,
        name: "Thievul",
        types: ["Dark"],
        baseStats: {
            hp: 70,
            atk: 58,
            def: 58,
            spa: 87,
            spd: 92,
            spe: 90
        },
        abilities: {
            "0": "Run Away",
            "1": "Unburden",
            H: "Stakeout"
        },
        heightm: 1.2,
        weightkg: 19.9,
        color: "Brown",
        prevo: "Nickit",
        evoLevel: 18,
        eggGroups: ["Field"],
        tier: "2",
    },
    gossifleur: {
        num: 829,
        name: "Gossifleur",
        types: ["Grass"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 60,
            spa: 40,
            spd: 60,
            spe: 10
        },
        abilities: {
            "0": "Cotton Down",
            H: "Regenerator"
        },
        heightm: 0.4,
        weightkg: 2.2,
        color: "Green",
        evos: ["Eldegoss"],
        eggGroups: ["Grass"],
        tier: "1",
    },
    eldegoss: {
        num: 830,
        name: "Eldegoss",
        types: ["Grass"],
        baseStats: {
            hp: 60,
            atk: 50,
            def: 90,
            spa: 80,
            spd: 120,
            spe: 60
        },
        abilities: {
            "0": "Cotton Down",
            H: "Regenerator"
        },
        heightm: 0.5,
        weightkg: 2.5,
        color: "Green",
        prevo: "Gossifleur",
        evoLevel: 20,
        eggGroups: ["Grass"],
        tier: "1",
    },
    wooloo: {
        num: 831,
        name: "Wooloo",
        types: ["Normal"],
        baseStats: {
            hp: 42,
            atk: 40,
            def: 55,
            spa: 40,
            spd: 45,
            spe: 48
        },
        abilities: {
            "0": "Fluffy",
            "1": "Run Away",
            H: "Bulletproof"
        },
        heightm: 0.6,
        weightkg: 6,
        color: "White",
        evos: ["Dubwool"],
        eggGroups: ["Field"],
        tier: "2",
    },
    dubwool: {
        num: 832,
        name: "Dubwool",
        types: ["Normal"],
        baseStats: {
            hp: 72,
            atk: 80,
            def: 100,
            spa: 60,
            spd: 90,
            spe: 88
        },
        abilities: {
            "0": "Fluffy",
            "1": "Steadfast",
            H: "Bulletproof"
        },
        heightm: 1.3,
        weightkg: 43,
        color: "White",
        prevo: "Wooloo",
        evoLevel: 24,
        eggGroups: ["Field"],
        tier: "2",
    },
    chewtle: {
        num: 833,
        name: "Chewtle",
        types: ["Water"],
        baseStats: {
            hp: 50,
            atk: 64,
            def: 50,
            spa: 38,
            spd: 38,
            spe: 44
        },
        abilities: {
            "0": "Strong Jaw",
            "1": "Shell Armor",
            H: "Swift Swim"
        },
        heightm: 0.3,
        weightkg: 8.5,
        color: "Green",
        evos: ["Drednaw"],
        eggGroups: ["Monster", "Water 1"],
        tier: "1"
    },
    drednaw: {
        num: 834,
        name: "Drednaw",
        types: ["Water", "Rock"],
        baseStats: {
            hp: 90,
            atk: 115,
            def: 90,
            spa: 48,
            spd: 68,
            spe: 74
        },
        abilities: {
            "0": "Strong Jaw",
            "1": "Shell Armor",
            H: "Swift Swim"
        },
        heightm: 1,
        weightkg: 115.5,
        color: "Green",
        prevo: "Chewtle",
        evoLevel: 22,
        eggGroups: ["Monster", "Water 1"],
        canGigantamax: "G-Max Stonesurge",
        tier: "1"
    },
    yamper: {
        num: 835,
        name: "Yamper",
        types: ["Electric"],
        baseStats: {
            hp: 59,
            atk: 45,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 26
        },
        abilities: {
            "0": "Ball Fetch",
            H: "Rattled"
        },
        heightm: 0.3,
        weightkg: 13.5,
        color: "Yellow",
        evos: ["Boltund"],
        eggGroups: ["Field"],
        tier: "1",
    },
    boltund: {
        num: 836,
        name: "Boltund",
        types: ["Electric"],
        baseStats: {
            hp: 69,
            atk: 90,
            def: 60,
            spa: 90,
            spd: 60,
            spe: 121
        },
        abilities: {
            "0": "Strong Jaw",
            H: "Competitive"
        },
        heightm: 1,
        weightkg: 34,
        color: "Yellow",
        prevo: "Yamper",
        evoLevel: 22,
        eggGroups: ["Field"],
        tier: "1",
    },
    rolycoly: {
        num: 837,
        name: "Rolycoly",
        types: ["Rock"],
        baseStats: {
            hp: 30,
            atk: 40,
            def: 50,
            spa: 40,
            spd: 50,
            spe: 30
        },
        abilities: {
            "0": "Steam Engine",
            "1": "Heatproof",
            H: "Flash Fire"
        },
        heightm: 0.3,
        weightkg: 12,
        color: "Black",
        evos: ["Carkol"],
        eggGroups: ["Mineral"],
        tier: "2"
    },
    carkol: {
        num: 838,
        name: "Carkol",
        types: ["Rock", "Fire"],
        baseStats: {
            hp: 80,
            atk: 60,
            def: 90,
            spa: 60,
            spd: 70,
            spe: 50
        },
        abilities: {
            "0": "Steam Engine",
            "1": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 1.1,
        weightkg: 78,
        color: "Black",
        prevo: "Rolycoly",
        evoLevel: 18,
        evos: ["Coalossal"],
        eggGroups: ["Mineral"],
        tier: "2"
    },
    coalossal: {
        num: 839,
        name: "Coalossal",
        types: ["Rock", "Fire"],
        baseStats: {
            hp: 110,
            atk: 80,
            def: 120,
            spa: 80,
            spd: 90,
            spe: 30
        },
        abilities: {
            "0": "Steam Engine",
            "1": "Flame Body",
            H: "Flash Fire"
        },
        heightm: 2.8,
        weightkg: 310.5,
        color: "Black",
        prevo: "Carkol",
        evoLevel: 34,
        eggGroups: ["Mineral"],
        canGigantamax: "G-Max Volcalith",
        tier: "2"
    },
    applin: {
        num: 840,
        name: "Applin",
        types: ["Grass", "Dragon"],
        baseStats: {
            hp: 40,
            atk: 40,
            def: 80,
            spa: 40,
            spd: 40,
            spe: 20
        },
        abilities: {
            "0": "Ripen",
            "1": "Gluttony",
            H: "Bulletproof"
        },
        heightm: 0.2,
        weightkg: 0.5,
        color: "Green",
        evos: ["Flapple", "Appletun"],
        eggGroups: ["Grass", "Dragon"],
        tier: "2"
    },
    flapple: {
        num: 841,
        name: "Flapple",
        types: ["Grass", "Dragon"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 80,
            spa: 95,
            spd: 60,
            spe: 70
        },
        abilities: {
            "0": "Ripen",
            "1": "Gluttony",
            H: "Hustle"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Green",
        prevo: "Applin",
        evoType: "useItem",
        evoItem: "Tart Apple",
        eggGroups: ["Grass", "Dragon"],
        canGigantamax: "G-Max Tartness",
        tier: "2"
    },
    appletun: {
        num: 842,
        name: "Appletun",
        types: ["Grass", "Dragon"],
        baseStats: {
            hp: 110,
            atk: 85,
            def: 80,
            spa: 100,
            spd: 80,
            spe: 30
        },
        abilities: {
            "0": "Ripen",
            "1": "Gluttony",
            H: "Thick Fat"
        },
        heightm: 0.4,
        weightkg: 13,
        color: "Green",
        prevo: "Applin",
        evoType: "useItem",
        evoItem: "Sweet Apple",
        eggGroups: ["Grass", "Dragon"],
        canGigantamax: "G-Max Sweetness",
        tier: "2"
    },
    silicobra: {
        num: 843,
        name: "Silicobra",
        types: ["Ground"],
        baseStats: {
            hp: 52,
            atk: 57,
            def: 75,
            spa: 35,
            spd: 50,
            spe: 46
        },
        abilities: {
            "0": "Sand Spit",
            "1": "Shed Skin",
            H: "Sand Veil"
        },
        heightm: 2.2,
        weightkg: 7.6,
        color: "Green",
        evos: ["Sandaconda"],
        eggGroups: ["Field", "Dragon"],
        tier: "2"
    },
    sandaconda: {
        num: 844,
        name: "Sandaconda",
        types: ["Ground"],
        baseStats: {
            hp: 72,
            atk: 107,
            def: 125,
            spa: 65,
            spd: 70,
            spe: 71
        },
        abilities: {
            "0": "Sand Spit",
            "1": "Shed Skin",
            H: "Sand Veil"
        },
        heightm: 3.8,
        weightkg: 65.5,
        color: "Green",
        prevo: "Silicobra",
        evoLevel: 36,
        eggGroups: ["Field", "Dragon"],
        canGigantamax: "G-Max Sandblast",
        tier: "2"
    },
    cramorant: {
        num: 845,
        name: "Cramorant",
        types: ["Flying", "Water"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 55,
            spa: 85,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Gulp Missile"
        },
        heightm: 0.8,
        weightkg: 18,
        color: "Blue",
        eggGroups: ["Water 1", "Flying"],
        otherFormes: ["Cramorant-Gulping", "Cramorant-Gorging"],
        formeOrder: ["Cramorant", "Cramorant-Gulping", "Cramorant-Gorging"],
        tier: "2",
    },
    cramorantgulping: {
        num: 845,
        name: "Cramorant-Gulping",
        baseSpecies: "Cramorant",
        forme: "Gulping",
        types: ["Flying", "Water"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 55,
            spa: 85,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Gulp Missile"
        },
        heightm: 0.8,
        weightkg: 18,
        color: "Blue",
        eggGroups: ["Water 1", "Flying"],
        requiredAbility: "Gulp Missile",
        battleOnly: "Cramorant",
    },
    cramorantgorging: {
        num: 845,
        name: "Cramorant-Gorging",
        baseSpecies: "Cramorant",
        forme: "Gorging",
        types: ["Flying", "Water"],
        baseStats: {
            hp: 70,
            atk: 85,
            def: 55,
            spa: 85,
            spd: 95,
            spe: 85
        },
        abilities: {
            "0": "Gulp Missile"
        },
        heightm: 0.8,
        weightkg: 18,
        color: "Blue",
        eggGroups: ["Water 1", "Flying"],
        requiredAbility: "Gulp Missile",
        battleOnly: "Cramorant",
    },
    arrokuda: {
        num: 846,
        name: "Arrokuda",
        types: ["Water"],
        baseStats: {
            hp: 41,
            atk: 63,
            def: 40,
            spa: 40,
            spd: 30,
            spe: 66
        },
        abilities: {
            "0": "Swift Swim",
            H: "Propeller Tail"
        },
        heightm: 0.5,
        weightkg: 1,
        color: "Brown",
        evos: ["Barraskewda"],
        eggGroups: ["Water 2"],
        tier: "1"
    },
    barraskewda: {
        num: 847,
        name: "Barraskewda",
        types: ["Water"],
        baseStats: {
            hp: 61,
            atk: 123,
            def: 60,
            spa: 60,
            spd: 50,
            spe: 136
        },
        abilities: {
            "0": "Swift Swim",
            H: "Propeller Tail"
        },
        heightm: 1.3,
        weightkg: 30,
        color: "Brown",
        prevo: "Arrokuda",
        evoLevel: 26,
        eggGroups: ["Water 2"],
        tier: "1"
    },
    toxel: {
        num: 848,
        name: "Toxel",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 40,
            atk: 38,
            def: 35,
            spa: 54,
            spd: 35,
            spe: 40
        },
        abilities: {
            "0": "Rattled",
            "1": "Static",
            H: "Klutz"
        },
        heightm: 0.4,
        weightkg: 11,
        color: "Purple",
        evos: ["Toxtricity", "Toxtricity-Low-Key"],
        eggGroups: ["Undiscovered"],
        canHatch: true,
        tier: "1"
    },
    toxtricity: {
        num: 849,
        name: "Toxtricity",
        baseForme: "Amped",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 75,
            atk: 98,
            def: 70,
            spa: 114,
            spd: 70,
            spe: 75
        },
        abilities: {
            "0": "Punk Rock",
            H: "Technician"
        },
        heightm: 1.6,
        weightkg: 40,
        color: "Purple",
        prevo: "Toxel",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        otherFormes: ["Toxtricity-Low-Key"],
        formeOrder: ["Toxtricity", "Toxtricity-Low-Key"],
        canGigantamax: "G-Max Stun Shock",
        tier: "1"
    },
    toxtricitylowkey: {
        num: 849,
        name: "Toxtricity-Low-Key",
        baseSpecies: "Toxtricity",
        forme: "Low-Key",
        types: ["Electric", "Poison"],
        baseStats: {
            hp: 75,
            atk: 98,
            def: 70,
            spa: 114,
            spd: 70,
            spe: 75
        },
        abilities: {
            "0": "Punk Rock",
            H: "Technician"
        },
        heightm: 1.6,
        weightkg: 40,
        color: "Purple",
        prevo: "Toxel",
        evoLevel: 30,
        eggGroups: ["Human-Like"],
        canGigantamax: "G-Max Stun Shock"
    },
    sizzlipede: {
        num: 850,
        name: "Sizzlipede",
        types: ["Fire", "Bug"],
        baseStats: {
            hp: 50,
            atk: 65,
            def: 45,
            spa: 50,
            spd: 50,
            spe: 45
        },
        abilities: {
            "0": "Flame Body",
            "1": "White Smoke",
            H: "Flash Fire"
        },
        heightm: 0.7,
        weightkg: 1,
        color: "Red",
        evos: ["Centiskorch"],
        eggGroups: ["Bug"],
        tier: "1",
    },
    centiskorch: {
        num: 851,
        name: "Centiskorch",
        types: ["Fire", "Bug"],
        baseStats: {
            hp: 100,
            atk: 115,
            def: 65,
            spa: 90,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Flame Body",
            "1": "White Smoke",
            H: "Flash Fire"
        },
        heightm: 3,
        weightkg: 120,
        color: "Red",
        prevo: "Sizzlipede",
        evoLevel: 25,
        eggGroups: ["Bug"],
        canGigantamax: "G-Max Centiferno",
        tier: "1",
    },
    clobbopus: {
        num: 852,
        name: "Clobbopus",
        types: ["Fighting"],
        baseStats: {
            hp: 50,
            atk: 68,
            def: 60,
            spa: 50,
            spd: 50,
            spe: 32
        },
        abilities: {
            "0": "Limber",
            H: "Technician"
        },
        heightm: 0.6,
        weightkg: 4,
        color: "Brown",
        evos: ["Grapploct"],
        eggGroups: ["Water 1", "Human-Like"],
        tier: "2",
    },
    grapploct: {
        num: 853,
        name: "Grapploct",
        types: ["Fighting"],
        baseStats: {
            hp: 80,
            atk: 118,
            def: 90,
            spa: 70,
            spd: 80,
            spe: 42
        },
        abilities: {
            "0": "Limber",
            H: "Technician"
        },
        heightm: 1.6,
        weightkg: 39,
        color: "Blue",
        prevo: "Clobbopus",
        evoType: "levelMove",
        evoMove: "Taunt",
        eggGroups: ["Water 1", "Human-Like"],
        tier: "2",
    },
    sinistea: {
        num: 854,
        name: "Sinistea",
        baseForme: "Phony",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 45,
            def: 45,
            spa: 74,
            spd: 54,
            spe: 50
        },
        abilities: {
            "0": "Weak Armor",
            H: "Cursed Body"
        },
        heightm: 0.1,
        weightkg: 0.2,
        color: "Purple",
        evos: ["Polteageist"],
        eggGroups: ["Mineral", "Amorphous"],
        otherFormes: ["Sinistea-Antique"],
        formeOrder: ["Sinistea", "Sinistea-Antique"],
        tier: "2"
    },
    sinisteaantique: {
        num: 854,
        name: "Sinistea-Antique",
        baseSpecies: "Sinistea",
        forme: "Antique",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 40,
            atk: 45,
            def: 45,
            spa: 74,
            spd: 54,
            spe: 50
        },
        abilities: {
            "0": "Weak Armor",
            H: "Cursed Body"
        },
        heightm: 0.1,
        weightkg: 0.2,
        color: "Purple",
        evos: ["Polteageist-Antique"],
        eggGroups: ["Undiscovered"]
    },
    polteageist: {
        num: 855,
        name: "Polteageist",
        baseForme: "Phony",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 65,
            def: 65,
            spa: 134,
            spd: 114,
            spe: 70
        },
        abilities: {
            "0": "Weak Armor",
            H: "Cursed Body"
        },
        heightm: 0.2,
        weightkg: 0.4,
        color: "Purple",
        prevo: "Sinistea",
        evoType: "useItem",
        evoItem: "Cracked Pot",
        eggGroups: ["Mineral", "Amorphous"],
        otherFormes: ["Polteageist-Antique"],
        formeOrder: ["Polteageist", "Polteageist-Antique"],
        tier: "2"
    },
    polteageistantique: {
        num: 855,
        name: "Polteageist-Antique",
        baseSpecies: "Polteageist",
        forme: "Antique",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 60,
            atk: 65,
            def: 65,
            spa: 134,
            spd: 114,
            spe: 70
        },
        abilities: {
            "0": "Weak Armor",
            H: "Cursed Body"
        },
        heightm: 0.2,
        weightkg: 0.4,
        color: "Purple",
        prevo: "Sinistea-Antique",
        evoType: "useItem",
        evoItem: "Chipped Pot",
        eggGroups: ["Undiscovered"]
    },
    hatenna: {
        num: 856,
        name: "Hatenna",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 42,
            atk: 30,
            def: 45,
            spa: 56,
            spd: 53,
            spe: 39
        },
        abilities: {
            "0": "Synchronize",
            H: "Magic Bounce"
        },
        heightm: 0.4,
        weightkg: 3.4,
        color: "Pink",
        evos: ["Hattrem"],
        eggGroups: ["Fairy"],
        tier: "1"
    },
    hattrem: {
        num: 857,
        name: "Hattrem",
        types: ["Psychic"],
        gender: "F",
        baseStats: {
            hp: 57,
            atk: 40,
            def: 65,
            spa: 86,
            spd: 73,
            spe: 49
        },
        abilities: {
            "0": "Synchronize",
            H: "Magic Bounce"
        },
        heightm: 0.6,
        weightkg: 4.8,
        color: "Pink",
        prevo: "Hatenna",
        evoLevel: 22,
        evos: ["Hatterene"],
        eggGroups: ["Fairy"],
        tier: "1"
    },
    hatterene: {
        num: 858,
        name: "Hatterene",
        types: ["Psychic", "Fairy"],
        gender: "F",
        baseStats: {
            hp: 57,
            atk: 90,
            def: 95,
            spa: 136,
            spd: 103,
            spe: 29
        },
        abilities: {
            "0": "Synchronize",
            H: "Magic Bounce"
        },
        heightm: 2.1,
        weightkg: 5.1,
        color: "Pink",
        prevo: "Hattrem",
        evoLevel: 38,
        eggGroups: ["Fairy"],
        canGigantamax: "G-Max Smite",
        tier: "1"
    },
    impidimp: {
        num: 859,
        name: "Impidimp",
        types: ["Dark", "Fairy"],
        gender: "M",
        baseStats: {
            hp: 45,
            atk: 45,
            def: 30,
            spa: 55,
            spd: 40,
            spe: 50
        },
        abilities: {
            "0": "Prankster",
            H: "Pickpocket"
        },
        heightm: 0.4,
        weightkg: 5.5,
        color: "Pink",
        evos: ["Morgrem"],
        eggGroups: ["Fairy", "Human-Like"],
        tier: "1"
    },
    morgrem: {
        num: 860,
        name: "Morgrem",
        types: ["Dark", "Fairy"],
        gender: "M",
        baseStats: {
            hp: 65,
            atk: 60,
            def: 45,
            spa: 75,
            spd: 55,
            spe: 70
        },
        abilities: {
            "0": "Prankster",
            H: "Pickpocket"
        },
        heightm: 0.8,
        weightkg: 12.5,
        color: "Pink",
        prevo: "Impidimp",
        evoLevel: 32,
        evos: ["Grimmsnarl"],
        eggGroups: ["Fairy", "Human-Like"],
        tier: "1"
    },
    grimmsnarl: {
        num: 861,
        name: "Grimmsnarl",
        types: ["Dark", "Fairy"],
        gender: "M",
        baseStats: {
            hp: 95,
            atk: 120,
            def: 65,
            spa: 95,
            spd: 75,
            spe: 60
        },
        abilities: {
            "0": "Prankster",
            H: "Pickpocket"
        },
        heightm: 1.5,
        weightkg: 61,
        color: "Purple",
        prevo: "Morgrem",
        evoLevel: 42,
        eggGroups: ["Fairy", "Human-Like"],
        canGigantamax: "G-Max Snooze",
        tier: "1"
    },
    obstagoon: {
        num: 862,
        name: "Obstagoon",
        types: ["Dark", "Normal"],
        baseStats: {
            hp: 93,
            atk: 90,
            def: 101,
            spa: 60,
            spd: 81,
            spe: 95
        },
        abilities: {
            "0": "Reckless",
            "1": "Guts",
            H: "Defiant"
        },
        heightm: 1.6,
        weightkg: 46,
        color: "Gray",
        prevo: "Linoone-Galar",
        evoLevel: 35,
        eggGroups: ["Field"],
        tier: "1",
    },
    perrserker: {
        num: 863,
        name: "Perrserker",
        types: ["Steel"],
        baseStats: {
            hp: 70,
            atk: 110,
            def: 100,
            spa: 50,
            spd: 60,
            spe: 50
        },
        abilities: {
            "0": "Battle Armor",
            "1": "Tough Claws",
            H: "Steely Spirit"
        },
        heightm: 0.8,
        weightkg: 28,
        color: "Brown",
        prevo: "Meowth-Galar",
        evoLevel: 26,
        eggGroups: ["Field"],
        tier: "1"
    },
    cursola: {
        num: 864,
        name: "Cursola",
        types: ["Ghost"],
        genderRatio: {
            M: 0.25,
            F: 0.75
        },
        baseStats: {
            hp: 60,
            atk: 95,
            def: 50,
            spa: 145,
            spd: 130,
            spe: 30
        },
        abilities: {
            "0": "Weak Armor",
            H: "Perish Body"
        },
        heightm: 1,
        weightkg: 0.4,
        color: "White",
        prevo: "Corsola-Galar",
        evoLevel: 38,
        eggGroups: ["Water 1", "Water 3"],
        tier: "2",
    },
    sirfetchd: {
        num: 865,
        name: "Sirfetchâ€™d",
        types: ["Fighting"],
        baseStats: {
            hp: 62,
            atk: 135,
            def: 95,
            spa: 68,
            spd: 82,
            spe: 65
        },
        abilities: {
            "0": "Inner Focus",
            H: "Scrappy"
        },
        heightm: 0.8,
        weightkg: 117,
        color: "White",
        prevo: "Farfetchâ€™d-Galar",
        evoLevel: "36",
        eggGroups: ["Flying", "Field"],
        tier: "1",
    },
    mrrime: {
        num: 866,
        name: "Mr. Rime",
        types: ["Ice", "Psychic"],
        baseStats: {
            hp: 80,
            atk: 85,
            def: 75,
            spa: 110,
            spd: 100,
            spe: 70
        },
        abilities: {
            "0": "Tangled Feet",
            "1": "Screen Cleaner",
            H: "Ice Body"
        },
        heightm: 1.5,
        weightkg: 58.2,
        color: "Purple",
        prevo: "Mr. Mime-Galar",
        evoLevel: 42,
        eggGroups: ["Human-Like"],
        tier: "2",
    },
    runerigus: {
        num: 867,
        name: "Runerigus",
        types: ["Ground", "Ghost"],
        baseStats: {
            hp: 58,
            atk: 95,
            def: 145,
            spa: 50,
            spd: 105,
            spe: 30
        },
        abilities: {
            "0": "Wandering Spirit"
        },
        heightm: 1.6,
        weightkg: 66.6,
        color: "Gray",
        prevo: "Yamask-Galar",
        evoType: "other",
        evoCondition: "Have 49+ HP lost and walk under stone sculpture in Dusty Bowl",
        eggGroups: ["Mineral", "Amorphous"],
        tier: "2",
    },
    milcery: {
        num: 868,
        name: "Milcery",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 45,
            atk: 40,
            def: 40,
            spa: 50,
            spd: 61,
            spe: 34
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Aroma Veil"
        },
        heightm: 0.2,
        weightkg: 0.3,
        color: "White",
        evos: ["Alcremie"],
        eggGroups: ["Fairy", "Amorphous"],
        tier: "2",
    },
    alcremie: {
        num: 869,
        name: "Alcremie",
        baseForme: "Vanilla Cream",
        types: ["Fairy"],
        gender: "F",
        baseStats: {
            hp: 65,
            atk: 60,
            def: 75,
            spa: 110,
            spd: 121,
            spe: 64
        },
        abilities: {
            "0": "Sweet Veil",
            H: "Aroma Veil"
        },
        heightm: 0.3,
        weightkg: 0.5,
        color: "White",
        prevo: "Milcery",
        evoType: "other",
        evoCondition: "spin while holding a Sweet",
        eggGroups: ["Fairy", "Amorphous"],
        cosmeticFormes: ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
        formeOrder: ["Alcremie", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
        canGigantamax: "G-Max Finale",
        tier: "2",
    },
    falinks: {
        num: 870,
        name: "Falinks",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 65,
            atk: 100,
            def: 100,
            spa: 70,
            spd: 60,
            spe: 75
        },
        abilities: {
            "0": "Battle Armor",
            H: "Defiant"
        },
        heightm: 3,
        weightkg: 62,
        color: "Yellow",
        eggGroups: ["Fairy", "Mineral"],
        tier: "2"
    },
    pincurchin: {
        num: 871,
        name: "Pincurchin",
        types: ["Electric"],
        baseStats: {
            hp: 48,
            atk: 101,
            def: 95,
            spa: 91,
            spd: 85,
            spe: 15
        },
        abilities: {
            "0": "Lightning Rod",
            H: "Electric Surge"
        },
        heightm: 0.3,
        weightkg: 1,
        color: "Purple",
        eggGroups: ["Water 1", "Amorphous"],
        tier: "2"
    },
    snom: {
        num: 872,
        name: "Snom",
        types: ["Ice", "Bug"],
        baseStats: {
            hp: 30,
            atk: 25,
            def: 35,
            spa: 45,
            spd: 30,
            spe: 20
        },
        abilities: {
            "0": "Shield Dust",
            H: "Ice Scales"
        },
        heightm: 0.3,
        weightkg: 3.8,
        color: "White",
        evos: ["Frosmoth"],
        eggGroups: ["Bug"],
        tier: "2"
    },
    frosmoth: {
        num: 873,
        name: "Frosmoth",
        types: ["Ice", "Bug"],
        baseStats: {
            hp: 70,
            atk: 65,
            def: 60,
            spa: 125,
            spd: 90,
            spe: 65
        },
        abilities: {
            "0": "Shield Dust",
            H: "Ice Scales"
        },
        heightm: 1.3,
        weightkg: 42,
        color: "White",
        prevo: "Snom",
        evoType: "levelFriendship",
        evoCondition: "at night",
        eggGroups: ["Bug"],
        tier: "2"
    },
    stonjourner: {
        num: 874,
        name: "Stonjourner",
        types: ["Rock"],
        baseStats: {
            hp: 100,
            atk: 125,
            def: 135,
            spa: 20,
            spd: 20,
            spe: 70
        },
        abilities: {
            "0": "Power Spot"
        },
        heightm: 2.5,
        weightkg: 520,
        color: "Gray",
        eggGroups: ["Mineral"],
        tier: "2"
    },
    eiscue: {
        num: 875,
        name: "Eiscue",
        types: ["Ice"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 110,
            spa: 65,
            spd: 90,
            spe: 50
        },
        abilities: {
            "0": "Ice Face"
        },
        heightm: 1.4,
        weightkg: 89,
        color: "Blue",
        eggGroups: ["Water 1", "Field"],
        otherFormes: ["Eiscue-Noice"],
        formeOrder: ["Eiscue", "Eiscue-Noice"],
        tier: "2"
    },
    eiscuenoice: {
        num: 875,
        name: "Eiscue-Noice",
        baseSpecies: "Eiscue",
        forme: "Noice",
        types: ["Ice"],
        baseStats: {
            hp: 75,
            atk: 80,
            def: 70,
            spa: 65,
            spd: 50,
            spe: 130
        },
        abilities: {
            "0": "Ice Face"
        },
        heightm: 1.4,
        weightkg: 89,
        color: "Blue",
        eggGroups: ["Water 1", "Field"],
        requiredAbility: "Ice Face",
        battleOnly: "Eiscue"
    },
    indeedee: {
        num: 876,
        name: "Indeedee",
        baseForme: "M",
        types: ["Psychic", "Normal"],
        gender: "M",
        baseStats: {
            hp: 60,
            atk: 65,
            def: 55,
            spa: 105,
            spd: 95,
            spe: 95
        },
        abilities: {
            "0": "Inner Focus",
            "1": "Synchronize",
            H: "Psychic Surge"
        },
        heightm: 0.9,
        weightkg: 28,
        color: "Purple",
        eggGroups: ["Fairy"],
        otherFormes: ["Indeedee-F"],
        formeOrder: ["Indeedee", "Indeedee-F"],
        tier: "2"
    },
    indeedeef: {
        num: 876,
        name: "Indeedee-F",
        baseSpecies: "Indeedee",
        forme: "F",
        types: ["Psychic", "Normal"],
        gender: "F",
        baseStats: {
            hp: 70,
            atk: 55,
            def: 65,
            spa: 95,
            spd: 105,
            spe: 85
        },
        abilities: {
            "0": "Own Tempo",
            "1": "Synchronize",
            H: "Psychic Surge"
        },
        heightm: 0.9,
        weightkg: 28,
        color: "Purple",
        eggGroups: ["Fairy"],
        tier: "2"
    },
    morpeko: {
        num: 877,
        name: "Morpeko",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 58,
            atk: 95,
            def: 58,
            spa: 70,
            spd: 58,
            spe: 97
        },
        abilities: {
            "0": "Hunger Switch"
        },
        heightm: 0.3,
        weightkg: 3,
        color: "Yellow",
        eggGroups: ["Field", "Fairy"],
        otherFormes: ["Morpeko-Hangry"],
        formeOrder: ["Morpeko", "Morpeko-Hangry"],
        tier: "2",
    },
    morpekohangry: {
        num: 877,
        name: "Morpeko-Hangry",
        baseSpecies: "Morpeko",
        forme: "Hangry",
        types: ["Electric", "Dark"],
        baseStats: {
            hp: 58,
            atk: 95,
            def: 58,
            spa: 70,
            spd: 58,
            spe: 97
        },
        abilities: {
            "0": "Hunger Switch"
        },
        heightm: 0.3,
        weightkg: 3,
        color: "Purple",
        eggGroups: ["Field", "Fairy"],
        requiredAbility: "Hunger Switch",
        battleOnly: "Morpeko",
    },
    cufant: {
        num: 878,
        name: "Cufant",
        types: ["Steel"],
        baseStats: {
            hp: 72,
            atk: 80,
            def: 49,
            spa: 40,
            spd: 49,
            spe: 40
        },
        abilities: {
            "0": "Sheer Force",
            "1": "Heavy Metal",
            H: "Heavy Metal"
        },
        heightm: 1.2,
        weightkg: 100,
        color: "Yellow",
        evos: ["Copperajah"],
        eggGroups: ["Field", "Mineral"],
        tier: "1"
    },
    copperajah: {
        num: 879,
        name: "Copperajah",
        types: ["Steel"],
        baseStats: {
            hp: 122,
            atk: 130,
            def: 69,
            spa: 80,
            spd: 69,
            spe: 30
        },
        abilities: {
            "0": "Sheer Force",
            "1": "Heavy Metal",
            H: "Heavy Metal"
        },
        heightm: 3,
        weightkg: 650,
        color: "Green",
        prevo: "Cufant",
        evoLevel: 34,
        eggGroups: ["Field", "Mineral"],
        canGigantamax: "G-Max Steelsurge",
        tier: "1"
    },
    dracozolt: {
        num: 880,
        name: "Dracozolt",
        types: ["Electric", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 80,
            spd: 70,
            spe: 75
        },
        abilities: {
            "0": "Volt Absorb",
            "1": "Hustle",
            H: "Sand Rush"
        },
        heightm: 1.8,
        weightkg: 190,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    arctozolt: {
        num: 881,
        name: "Arctozolt",
        types: ["Electric", "Ice"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 100,
            def: 90,
            spa: 90,
            spd: 80,
            spe: 55
        },
        abilities: {
            "0": "Volt Absorb",
            "1": "Static",
            H: "Slush Rush"
        },
        heightm: 2.3,
        weightkg: 150,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    dracovish: {
        num: 882,
        name: "Dracovish",
        types: ["Water", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 90,
            def: 100,
            spa: 70,
            spd: 80,
            spe: 75
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Strong Jaw",
            H: "Sand Rush"
        },
        heightm: 2.3,
        weightkg: 215,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    arctovish: {
        num: 883,
        name: "Arctovish",
        types: ["Water", "Ice"],
        gender: "N",
        baseStats: {
            hp: 90,
            atk: 90,
            def: 100,
            spa: 80,
            spd: 90,
            spe: 55
        },
        abilities: {
            "0": "Water Absorb",
            "1": "Ice Body",
            H: "Slush Rush"
        },
        heightm: 2,
        weightkg: 175,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tier: "2",
    },
    duraludon: {
        num: 884,
        name: "Duraludon",
        types: ["Steel", "Dragon"],
        baseStats: {
            hp: 70,
            atk: 95,
            def: 115,
            spa: 120,
            spd: 50,
            spe: 85
        },
        abilities: {
            "0": "Light Metal",
            "1": "Heavy Metal",
            H: "Stalwart"
        },
        heightm: 1.8,
        weightkg: 40,
        color: "White",
        eggGroups: ["Mineral", "Dragon"],
        canGigantamax: "G-Max Depletion",
        tier: "1",
    },
    dreepy: {
        num: 885,
        name: "Dreepy",
        types: ["Dragon", "Ghost"],
        baseStats: {
            hp: 28,
            atk: 60,
            def: 30,
            spa: 40,
            spd: 30,
            spe: 82
        },
        abilities: {
            "0": "Clear Body",
            "1": "Infiltrator",
            H: "Cursed Body"
        },
        heightm: 0.5,
        weightkg: 2,
        color: "Green",
        evos: ["Drakloak"],
        eggGroups: ["Amorphous", "Dragon"],
        tier: "1"
    },
    drakloak: {
        num: 886,
        name: "Drakloak",
        types: ["Dragon", "Ghost"],
        baseStats: {
            hp: 68,
            atk: 80,
            def: 50,
            spa: 60,
            spd: 50,
            spe: 102
        },
        abilities: {
            "0": "Clear Body",
            "1": "Infiltrator",
            H: "Cursed Body"
        },
        heightm: 1.4,
        weightkg: 11,
        color: "Green",
        prevo: "Dreepy",
        evoLevel: 50,
        evos: ["Dragapult"],
        eggGroups: ["Amorphous", "Dragon"],
        tier: "1"
    },
    dragapult: {
        num: 887,
        name: "Dragapult",
        types: ["Dragon", "Ghost"],
        baseStats: {
            hp: 88,
            atk: 120,
            def: 75,
            spa: 100,
            spd: 75,
            spe: 142
        },
        abilities: {
            "0": "Clear Body",
            "1": "Infiltrator",
            H: "Cursed Body"
        },
        heightm: 3,
        weightkg: 50,
        color: "Green",
        prevo: "Drakloak",
        evoLevel: 60,
        eggGroups: ["Amorphous", "Dragon"],
        tier: "1"
    },
    zacian: {
        num: 888,
        name: "Zacian",
        baseForme: "Hero",
        types: ["Fairy"],
        gender: "N",
        baseStats: {
            hp: 92,
            atk: 120,
            def: 115,
            spa: 80,
            spd: 115,
            spe: 138
        },
        abilities: {
            "0": "Intrepid Sword"
        },
        heightm: 2.8,
        weightkg: 110,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Zacian-Crowned"],
        formeOrder: ["Zacian", "Zacian-Crowned"],
        cannotDynamax: true,
        tier: "2"
    },
    zaciancrowned: {
        num: 888,
        name: "Zacian-Crowned",
        baseSpecies: "Zacian",
        forme: "Crowned",
        types: ["Fairy", "Steel"],
        gender: "N",
        baseStats: {
            hp: 92,
            atk: 150,
            def: 115,
            spa: 80,
            spd: 115,
            spe: 148
        },
        abilities: {
            "0": "Intrepid Sword"
        },
        heightm: 2.8,
        weightkg: 355,
        color: "Blue",
        eggGroups: ["Undiscovered"],
        requiredItem: "Rusted Sword",
        battleOnly: "Zacian",
        cannotDynamax: true,
        tier: "2"
    },
    zamazenta: {
        num: 889,
        name: "Zamazenta",
        baseForme: "Hero",
        types: ["Fighting"],
        gender: "N",
        baseStats: {
            hp: 92,
            atk: 120,
            def: 115,
            spa: 80,
            spd: 115,
            spe: 138
        },
        abilities: {
            "0": "Dauntless Shield"
        },
        heightm: 2.9,
        weightkg: 210,
        color: "Red",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Zamazenta-Crowned"],
        formeOrder: ["Zamazenta", "Zamazenta-Crowned"],
        cannotDynamax: true,
        tier: "2"
    },
    zamazentacrowned: {
        num: 889,
        name: "Zamazenta-Crowned",
        baseSpecies: "Zamazenta",
        forme: "Crowned",
        types: ["Fighting", "Steel"],
        gender: "N",
        baseStats: {
            hp: 92,
            atk: 120,
            def: 140,
            spa: 80,
            spd: 140,
            spe: 128
        },
        abilities: {
            "0": "Dauntless Shield"
        },
        heightm: 2.9,
        weightkg: 785,
        color: "Red",
        eggGroups: ["Undiscovered"],
        requiredItem: "Rusted Shield",
        battleOnly: "Zamazenta",
        cannotDynamax: true,
        tier: "2"
    },
    eternatus: {
        num: 890,
        name: "Eternatus",
        types: ["Poison", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 140,
            atk: 85,
            def: 95,
            spa: 145,
            spd: 95,
            spe: 130
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 20,
        weightkg: 950,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Eternatus-Eternamax"],
        formeOrder: ["Eternatus", "Eternatus-Eternamax"],
        cannotDynamax: true,
        tier: "2"
    },
    eternatuseternamax: {
        num: 890,
        name: "Eternatus-Eternamax",
        baseSpecies: "Eternatus",
        forme: "Eternamax",
        types: ["Poison", "Dragon"],
        gender: "N",
        baseStats: {
            hp: 255,
            atk: 115,
            def: 250,
            spa: 125,
            spd: 250,
            spe: 130
        },
        abilities: {
            "0": "Pressure"
        },
        heightm: 100,
        weightkg: 0,
        color: "Purple",
        eggGroups: ["Undiscovered"],
        cannotDynamax: true,
        tier: "2",
    },
    kubfu: {
        num: 891,
        name: "Kubfu",
        types: ["Fighting"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 60,
            atk: 90,
            def: 60,
            spa: 53,
            spd: 50,
            spe: 72
        },
        abilities: {
            "0": "Inner Focus"
        },
        heightm: 0.6,
        weightkg: 12,
        color: "Gray",
        tags: ["Sub-Legendary"],
        evos: ["Urshifu", "Urshifu-Rapid-Strike"],
        eggGroups: ["Undiscovered"],
        tier: "1"
    },
    urshifu: {
        num: 892,
        name: "Urshifu",
        baseForme: "Single-Strike",
        types: ["Fighting", "Dark"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 130,
            def: 100,
            spa: 63,
            spd: 60,
            spe: 97
        },
        abilities: {
            "0": "Unseen Fist"
        },
        heightm: 1.9,
        weightkg: 105,
        color: "Gray",
        tags: ["Sub-Legendary"],
        prevo: "Kubfu",
        evoLevel: "50",
        eggGroups: ["Undiscovered"],
        otherFormes: ["Urshifu-Rapid-Strike"],
        formeOrder: ["Urshifu", "Urshifu-Rapid-Strike"],
        canGigantamax: "G-Max One Blow",
        tier: "1"
    },
    urshifurapidstrike: {
        num: 892,
        name: "Urshifu-Rapid-Strike",
        baseSpecies: "Urshifu",
        forme: "Rapid-Strike",
        types: ["Fighting", "Water"],
        genderRatio: {
            M: 0.875,
            F: 0.125
        },
        baseStats: {
            hp: 100,
            atk: 130,
            def: 100,
            spa: 63,
            spd: 60,
            spe: 97
        },
        abilities: {
            "0": "Unseen Fist"
        },
        heightm: 1.9,
        weightkg: 105,
        color: "Gray",
        prevo: "Kubfu",
        evoLevel: "50",
        eggGroups: ["Undiscovered"],
        canGigantamax: "G-Max Rapid Flow",
        tier: "1"
    },
    zarude: {
        num: 893,
        name: "Zarude",
        types: ["Dark", "Grass"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 120,
            def: 105,
            spa: 70,
            spd: 95,
            spe: 105
        },
        abilities: {
            "0": "Leaf Guard"
        },
        heightm: 1.8,
        weightkg: 70,
        color: "Black",
        eggGroups: ["Undiscovered"],
        tags: ["Mythical"],
        otherFormes: ["Zarude-Dada"],
        formeOrder: ["Zarude", "Zarude-Dada"],
        tier: "2"
    },
    zarudedada: {
        num: 893,
        name: "Zarude-Dada",
        baseSpecies: "Zarude",
        forme: "Dada",
        types: ["Dark", "Grass"],
        gender: "N",
        baseStats: {
            hp: 105,
            atk: 120,
            def: 105,
            spa: 70,
            spd: 95,
            spe: 105
        },
        abilities: {
            "0": "Leaf Guard"
        },
        heightm: 1.8,
        weightkg: 70,
        color: "Black",
        eggGroups: ["Undiscovered"]
    },
    regieleki: {
        num: 894,
        name: "Regieleki",
        types: ["Electric"],
        gender: "N",
        baseStats: {
            hp: 80,
            atk: 100,
            def: 50,
            spa: 100,
            spd: 50,
            spe: 200
        },
        abilities: {
            "0": "Transistor"
        },
        heightm: 1.2,
        weightkg: 145,
        color: "Yellow",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    regidrago: {
        num: 895,
        name: "Regidrago",
        types: ["Dragon"],
        gender: "N",
        baseStats: {
            hp: 200,
            atk: 100,
            def: 50,
            spa: 100,
            spd: 50,
            spe: 80
        },
        abilities: {
            "0": "Dragon's Maw"
        },
        heightm: 2.1,
        weightkg: 200,
        color: "Green",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    glastrier: {
        num: 896,
        name: "Glastrier",
        types: ["Ice"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 145,
            def: 130,
            spa: 65,
            spd: 110,
            spe: 30
        },
        abilities: {
            "0": "Chilling Neigh"
        },
        heightm: 2.2,
        weightkg: 800,
        color: "White",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    spectrier: {
        num: 897,
        name: "Spectrier",
        types: ["Ghost"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 65,
            def: 60,
            spa: 145,
            spd: 80,
            spe: 130
        },
        abilities: {
            "0": "Grim Neigh"
        },
        heightm: 2,
        weightkg: 44.5,
        color: "Black",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        tier: "2"
    },
    calyrex: {
        num: 898,
        name: "Calyrex",
        types: ["Psychic", "Grass"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 80,
            def: 80,
            spa: 80,
            spd: 80,
            spe: 80
        },
        abilities: {
            "0": "Unnerve"
        },
        heightm: 1.1,
        weightkg: 7.7,
        color: "Green",
        eggGroups: ["Undiscovered"],
        tags: ["Restricted Legendary"],
        otherFormes: ["Calyrex-Ice", "Calyrex-Shadow"],
        formeOrder: ["Calyrex", "Calyrex-Ice", "Calyrex-Shadow"],
        tier: "2"
    },
    calyrexice: {
        num: 898,
        name: "Calyrex-Ice",
        baseSpecies: "Calyrex",
        forme: "Ice",
        types: ["Psychic", "Ice"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 165,
            def: 150,
            spa: 85,
            spd: 130,
            spe: 50
        },
        abilities: {
            "0": "As One (Glastrier)"
        },
        heightm: 2.4,
        weightkg: 809.1,
        color: "White",
        eggGroups: ["Undiscovered"],
        changesFrom: "Calyrex",
        tier: "2"
    },
    calyrexshadow: {
        num: 898,
        name: "Calyrex-Shadow",
        baseSpecies: "Calyrex",
        forme: "Shadow",
        types: ["Psychic", "Ghost"],
        gender: "N",
        baseStats: {
            hp: 100,
            atk: 85,
            def: 80,
            spa: 165,
            spd: 100,
            spe: 150
        },
        abilities: {
            "0": "As One (Spectrier)"
        },
        heightm: 2.4,
        weightkg: 53.6,
        color: "Black",
        eggGroups: ["Undiscovered"],
        changesFrom: "Calyrex",
        tier: "2"
    },
    wyrdeer: {
        num: 899,
        name: "Wyrdeer",
        types: ["Normal", "Psychic"],
        baseStats: {
            hp: 103,
            atk: 105,
            def: 72,
            spa: 105,
            spd: 75,
            spe: 65
        },
        abilities: {
            "0": "Intimidate",
            H: "Sap Sipper"
        },
        heightm: 1.8,
        weightkg: 95.1,
        color: "White",
        prevo: "Stantler",
        evoLevel: "34",
        eggGroups: ["Field"],
        tier: "1"
    },
    kleavor: {
        num: 900,
        name: "Kleavor",
        types: ["Bug", "Rock"],
        baseStats: {
            hp: 70,
            atk: 135,
            def: 95,
            spa: 45,
            spd: 70,
            spe: 85
        },
        abilities: {
            "0": "Swarm",
            "1": "Sheer Force",
            H: "Steadfast"
        },
        heightm: 1.8,
        weightkg: 89,
        color: "Brown",
        prevo: "Scyther",
        evoType: "useItem",
        evoCondition: "Protector",
        eggGroups: ["Bug"],
        tier: "1"
    },
    ursaluna: {
        num: 901,
        name: "Ursaluna",
        types: ["Ground", "Normal"],
        baseStats: {
            hp: 130,
            atk: 140,
            def: 105,
            spa: 45,
            spd: 80,
            spe: 50
        },
        abilities: {
            "0": "Guts",
            "1": "Unnerve",
            H: "Bulletproof"
        },
        heightm: 2.4,
        weightkg: 290,
        color: "Brown",
        prevo: "Ursaring",
        evoType: "useItem",
        evoItem: "Honey",
        eggGroups: ["Field"],
        tier: "1"
    },
    basculegion: {
        num: 902,
        name: "Basculegion",
        baseForme: "M",
        types: ["Water", "Ghost"],
        gender: "M",
        baseStats: {
            hp: 120,
            atk: 112,
            def: 65,
            spa: 80,
            spd: 75,
            spe: 78
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Mold Breaker",
            H: "Adaptability"
        },
        heightm: 3,
        weightkg: 110,
        color: "Green",
        prevo: "Basculin",
        evoType: "levelExtra",
        evoCondition: "at Abandoned Ship",
        eggGroups: ["Water 2"],
        otherFormes: ["Basculegion-F"],
        formeOrder: ["Basculegion", "Basculegion-F"],
        tier: "1"
    },
    basculegionf: {
        num: 902,
        name: "Basculegion-F",
        baseSpecies: "Basculegion",
        forme: "F",
        types: ["Water", "Ghost"],
        gender: "F",
        baseStats: {
            hp: 120,
            atk: 92,
            def: 65,
            spa: 100,
            spd: 75,
            spe: 78
        },
        abilities: {
            "0": "Swift Swim",
            "1": "Mold Breaker",
            H: "Adaptability"
        },
        heightm: 3,
        weightkg: 110,
        prevo: "Basculin",
        color: "Green",
        evoType: "other",
        evoCondition: "Unavailable",
        eggGroups: ["Water 2"],
        tier: "2"
    },
    sneasler: {
        num: 903,
        name: "Sneasler",
        types: ["Fighting", "Poison"],
        baseStats: {
            hp: 80,
            atk: 130,
            def: 60,
            spa: 40,
            spd: 80,
            spe: 120
        },
        abilities: {
            "0": "Inner Focus",
            H: "Poison Touch"
        },
        heightm: 1.3,
        weightkg: 43,
        color: "Purple",
        prevo: "Sneasel-Hisui",
        evoType: "useItem",
        evoItem: "Razor Claw",
        eggGroups: ["Field"],
        tier: "1"
    },
    overqwil: {
        num: 904,
        name: "Overqwil",
        types: ["Dark", "Poison"],
        baseStats: {
            hp: 85,
            atk: 115,
            def: 95,
            spa: 65,
            spd: 65,
            spe: 85
        },
        abilities: {
            "0": "Intimidate",
            "1": "Poison Point",
            H: "Swift Swim"
        },
        heightm: 2.5,
        weightkg: 60.5,
        color: "Gray",
        prevo: "Qwilfish-Hisui",
        evoType: "levelMove",
        evoMove: "Explosion",
        eggGroups: ["Water 2"],
        tier: "1"
    },
    enamorus: {
        num: 905,
        name: "Enamorus",
        baseForme: "Incarnate",
        types: ["Fairy", "Flying"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 115,
            def: 70,
            spa: 135,
            spd: 80,
            spe: 106
        },
        abilities: {
            "0": "Healer",
            H: "Contrary"
        },
        heightm: 1.6,
        weightkg: 48,
        color: "Pink",
        tags: ["Sub-Legendary"],
        eggGroups: ["Undiscovered"],
        otherFormes: ["Enamorus-Therian"],
        formeOrder: ["Enamorus", "Enamorus-Therian"],
        tier: "1"
    },
    enamorustherian: {
        num: 905,
        name: "Enamorus-Therian",
        baseSpecies: "Enamorus",
        forme: "Therian",
        types: ["Fairy", "Flying"],
        gender: "F",
        baseStats: {
            hp: 74,
            atk: 115,
            def: 110,
            spa: 135,
            spd: 100,
            spe: 46
        },
        abilities: {
            "0": "Overcoat"
        },
        heightm: 1.6,
        weightkg: 48,
        color: "Pink",
        eggGroups: ["Undiscovered"],
        changesFrom: "Enamorus",
        tier: "2"
    }
};