module.exports = {
  SubraceSwitch: (race) => {
    switch (race) {
      case "dragonborn" :
        return ["black", "blue", "brass","bronze", "copper", "gold", "green", "red", "silver", "white",];
        break;
      case "dwarf" :
        return ["none", "hill dwarf", "mountain dwarf"];
        break;
      case "elf" :
        return ["none", "high elf", "wood elf"];
        break;
      case "gnome" :
        return ["none", "rock gnome"];
        break;
      case "half-elf" :
        return ["none"];
        break;
      case "halfling" :
        return ["none", "lightfoot halfling", "stout halfling"];
        break;
      case "half-orc" :
        return ["none"];
        break;
      case "human" :
        return ["none"];
        break;
      case "tiefling" :
        return ["none"];
        break;
      default :
        return ["none"];
    }
  },

  ClassSkillsSwitch: (charClass) => {
    switch (charClass) {
      case "barbarian" :
        return ["animalHandling", "athletics", "intimidation", "nature", "perception", "survival"]
        break;
      case "bard" :
        return ["acrobatics", "animalHandling", "arcana", "athletics", "deception", "history", "insight", "intimidation", "investigation", "medicine", "nature", "perception", "performance", "persuasion", "religion", "sleightOfHand", "stealth", "survival"]
        break;
      case "cleric" :
        return ["history", "insight", "medicine", "persuasion", "religion"]
        break;
      case "druid" :
        return ["arcana", "animalHandling", "insight", "medicine", "nature", "perception", "religion", "survival"]
        break;
      case "fighter" :
        return ["acrobatics", "animalHandling", "athletics", "history", "insight", "intimidation", "perception", "survival"]
        break;
      case "monk" :
        return ["acrobatics", "athletics", "history", "insight", "religion", "stealth"]
        break;
      case "paladin" :
        return ["athletics", "insight", "intimidation", "medicine", "pesuasion", "religion"]
        break;
      case "ranger" :
        return ["animalHandling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"]
        break;
      case "rogue" :
        return ["acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleightOfHand", "stealth"]
        break;
      case "sorcerer" :
        return ["arcana", "deception", "insight", "intimidation", "persuasion", "religion"]
        break;
      case "warlock" :
        return ["arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"]
        break;
      case "wizard" :
        return ["arcana", "history", "insight", "investigation", "medicine", "religion"]
        break;
    }
  },

  ClassSkillTotalSwitch: (charClass) => {
    switch (charClass) {
      case "barbarian" :
        return 2
        break;
      case "bard" :
        return 3
        break;
      case "cleric" :
        return 2
        break;
      case "druid" :
        return 2
        break;
      case "fighter" :
        return 2
        break;
      case "monk" :
        return 2
        break;
      case "paladin" :
        return 2
        break;
      case "ranger" :
        return 3
        break;
      case "rogue" :
        return 4
        break;
      case "sorcerer" :
        return 2
        break;
      case "warlock" :
        return 2
        break;
      case "wizard" :
        return 2
        break;
    }
  }
}