module.exports = {
  formatString: string => {
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    newString = newString.replace(/([A-Z])/g, ' $1').trim();
    return newString;
  }
} 