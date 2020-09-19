/* eslint-disable */

module.exports = {
  SubraceSwitch: (race) => {
    switch (race) {
      case "dragonborn":
        return ["Dragonborn (Black)", "Dragonborn (Blue)", "Dragonborn (Brass)", "Dragonborn (Bronze)", "Dragonborn (Copper)", "Dragonborn (Gold)", "Dragonborn (Green)", "Dragonborn (Red)", "Dragonborn (Silver)", "Dragonborn (White)",];
        break;
      case "dwarf":
        return ["none", "hillDwarf", "mountainDwarf"];
        break;
      case "elf":
        return ["none", "highElf", "woodElf"];
        break;
      case "gnome":
        return ["none", "rockGnome", "forestGnome"];
        break;
      case "half-elf":
        return ["none"];
        break;
      case "halfling":
        return ["none", "lightfootHalfling", "stoutHalfling"];
        break;
      case "half-orc":
        return ["none"];
        break;
      case "human":
        return ["none"];
        break;
      case "tiefling":
        return ["none"];
        break;
      default:
        return ["none"];
    }
  },

  ClassSkillsSwitch: (charClass) => {
    switch (charClass) {
      case "barbarian":
        return ["animalHandling", "athletics", "intimidation", "nature", "perception", "survival"]
        break;
      case "bard":
        return ["acrobatics", "animalHandling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleightOfHand", "stealth", "survival"]
        break;
      case "cleric":
        return ["history", "insight", "medicine", "persuasion", "religion"]
        break;
      case "druid":
        return ["arcana", "animalHandling", "insight", "medicine", "nature", "perception", "religion", "survival"]
        break;
      case "fighter":
        return ["acrobatics", "animalHandling", "athletics", "history", "insight", "intimidation", "perception", "survival"]
        break;
      case "monk":
        return ["acrobatics", "athletics", "history", "insight", "religion", "stealth"]
        break;
      case "paladin":
        return ["athletics", "insight", "intimidation", "medicine", "pesuasion", "religion"]
        break;
      case "ranger":
        return ["animalHandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"]
        break;
      case "rogue":
        return ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightOfHand", "stealth"]
        break;
      case "sorcerer":
        return ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"]
        break;
      case "warlock":
        return ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"]
        break;
      case "wizard":
        return ["arcana", "history", "insight", "investigation", "medicine", "religion"]
        break;
    }
  },

  ClassSkillTotalSwitch: (charClass) => {
    switch (charClass) {
      case "barbarian":
        return 2
        break;
      case "bard":
        return 3
        break;
      case "cleric":
        return 2
        break;
      case "druid":
        return 2
        break;
      case "fighter":
        return 2
        break;
      case "monk":
        return 2
        break;
      case "paladin":
        return 2
        break;
      case "ranger":
        return 3
        break;
      case "rogue":
        return 4
        break;
      case "sorcerer":
        return 2
        break;
      case "warlock":
        return 2
        break;
      case "wizard":
        return 2
        break;
    }
  },

  RaceLanguageSwitch: race => {
    switch (race) {
      case "dragonborn":
        return ["common", "draconic"];
        break;
      case "dwarf":
        return ["common", "dwarvish"];
        break;
      case "elf":
        return ["common", "elvish"];
        break;
      case "gnome":
        return ["common", "gnomish"];
        break;
      case "half-elf":
        return ["common", "elvish", 1];
        break;
      case "halfling":
        return ["common", "halfling"];
        break;
      case "half-orc":
        return ["common", "orc"];
        break;
      case "human":
        return ["common", 1];
        break;
      case "tiefling":
        return ["common", "infernal"];
        break;
      default:
        return ["common"];
    }
  },

  BackgroundLanguageSwitch: background => {
    switch (background) {
      case "acolyte" || "sage":
        return 2
        break;
      case "guildArtisan" || "guildMerchant" || "hermit" || "knight" || "noble" || "outlander":
        return 1
        break;
      default:
        return 0
    }
  },

  BackgroundSkillSwitch: background => {
    switch (background) {
      case "acolyte":
        return ["insight", "religion"]
        break;
      case "charlatan":
        return ["deception", "sleightOfHand"]
        break;
      case "criminal":
        return ["deception", "stealth"]
        break;
      case "entertainer":
        return ["acrobatics", "performance"]
        break;
      case "folkHero":
        return ["animalHandling", "survival"]
        break;
      case "gladiator":
        return ["acrobatics", "performance"]
        break;
      case "guildArtisan":
        return ["insight", "persuasion"]
        break;
      case "guildMerchant":
        return ["insight", "persuasion"]
        break;
      case "hermit":
        return ["medicine", "religion"]
        break;
      case "knight":
        return ["history", "persuasion"]
        break;
      case "noble":
        return ["history", "persuasion"]
        break;
      case "outlander":
        return ["athletics", "survival"]
        break;
      case "pirate":
        return ["athletics", "perception"]
        break;
      case "sage":
        return ["arcana", "history"]
        break;
      case "sailor":
        return ["athletics", "perception"]
        break;
      case "soldier":
        return ["athletics", "intimidation"]
        break;
      case "spy":
        return ["deception", "stealth"]
        break;
      case "urchin":
        return ["sleightOfHand", "stealth"]
        break;
    }
  },

}