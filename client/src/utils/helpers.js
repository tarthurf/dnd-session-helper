module.exports = {
  formatString: string => {
    if (typeof string === "string") {
      let newString = string.charAt(0).toUpperCase() + string.slice(1);
      newString = newString.replace(/([A-Z])/g, ' $1').trim();
      return newString;
    }
    else return;
  },

  abilityBonusCalc: ability => {
    return Math.floor((ability - 10) / 2)
  },

  calcDex: (dex, maxDex) => {
    if (maxDex === 0) return dex;
    else if (maxDex <= dex) return maxDex;
    else return dex;
  },

  
} 