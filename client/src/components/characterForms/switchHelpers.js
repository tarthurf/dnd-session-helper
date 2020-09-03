module.exports = {
  SubraceSwitch: (race) => {
    switch (race) {
      case "dragonborn" :
        return [
          "black",
          "blue",
          "brass",
          "bronze",
          "copper",
          "gold",
          "green",
          "red",
          "silver",
          "white",
        ];
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
  }

}