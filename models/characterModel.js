const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Character name is required"
  },
  race: {
    type: String,
    trim: true,
    required: "Character race is required"
  },
  subrace: {
    type: String,
    trim: true,
  },
  class: {
    type: String,
    trim: true,
    required: "Character class is required"
  },
  level: {
    type: Number,
    default: 1
  },
  alignment: {
    type: String,
  },
  speed: {
    type: Number,
    default: 30
  },
  currentHP: {
    type: Number,
  },
  maxHP: {
    type: Number,
    default: 0,
  },
<<<<<<< HEAD
  tempHP: {
    type: Number,
    default: 0,
  },
  armor: {
    type: Number,
    default: 10,
  },
  shield: {
    type: Number,
    default: 0
  },
  maximumDexterity: {
    type: Number,
    default: 0
  },
  acMiscBonus: {
    type: Number,
    default: 0
=======
  ACarmor: {
    type: Number,
    default: 10,
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb
  },
  ACshield: {
    type: Number,
    default: 0
  },
<<<<<<< HEAD
  initiative: {
    type: Number,
    default: 0,
  },
  perception: {
    type: Number,
    default: 0,
=======
  ACmax: {
    type: Number,
    default: 0
  },
  ACmiscBonus: {
    type: Number,
    default: 0
  },
  proficiencyBonus: {
    type: Number,
    default: 0
>>>>>>> bd3ae09c0b5021521f5b05ac302ca24b607f19eb
  },
  background: {
    type: String,
  },
  str: {
    type: Number,
    default: 10
  },
  dex: {
    type: Number,
    default: 10
  },
  con: {
    type: Number,
    default: 10
  },
  int: {
    type: Number,
    default: 10
  },
  wis: {
    type: Number,
    default: 10
  },
  cha: {
    type: Number,
    default: 10
  },
  proficiencies: [
  ],
  traits: [
  ],
  abilities: [
  ],
  languages: [
  ],
  saves: {
    str: {
      type: Boolean,
      default: false,
    },
    dex: {
      type: Boolean,
      default: false,
    },
    con: {
      type: Boolean,
      default: false,
    },
    int: {
      type: Boolean,
      default: false,
    },
    wis: {
      type: Boolean,
      default: false,
    },
    cha: {
      type: Boolean,
      default: false,
    },
  },
  skills: {
    acrobatics: {
      ability: {
        type: String,
        default: "dex",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    animalHandling: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    arcana: {
      ability: {
        type: String,
        default: "int",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    athletics: {
      ability: {
        type: String,
        default: "str",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    deception: {
      ability: {
        type: String,
        default: "cha",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    history: {
      ability: {
        type: String,
        default: "int",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    insight: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    intimidation: {
      ability: {
        type: String,
        default: "cha",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    investigation: {
      ability: {
        type: String,
        default: "int",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    medicine: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    nature: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    perception: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    performance: {
      ability: {
        type: String,
        default: "cha",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    persuasion: {
      ability: {
        type: String,
        default: "cha",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    religion: {
      ability: {
        type: String,
        default: "int",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    sleightOfHand: {
      ability: {
        type: String,
        default: "dex",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    stealth: {
      ability: {
        type: String,
        default: "dex",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
    survival: {
      ability: {
        type: String,
        default: "wis",
      },
      trained: {
        type: Boolean,
        default: false
      }
    },
  },
  spells: {
    castingAbility: {
      type: String
    },
    lvl0: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl1: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl2: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl3: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl4: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl5: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl6: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl7: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl8: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
    lvl9: {
      dc: {
        type: Number,
      },
      spellsKnown: [],
    },
  },
  currency: {
    cp: {
      type: Number,
      default: 0,
    },
    sp: {
      type: Number,
      default: 0,
    },
    gp: {
      type: Number,
      default: 0,
    },
    pp: {
      type: Number,
      default: 0,
    },
  },
  equipment: [],
  items: [],
})

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character