const originalFlavors: string[] = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond"
];

function copy(array: string[]): string[] {
  return [...array];
}

function is31Flavors(array: string[]): boolean {
  return array.length === 31;
}

function addFlavor(array: string[], flavor: string): string[] {
  return [flavor, ...array];
}

function removeLastFlavor(array: string[]): string[] {
  array.pop();
  return array;
}

function getFlavorByIndex(array: string[], index: number): string {
  return array[index];
}

function removeFlavorByName(array: string[], flavor: string): string[] {
  const index = array.indexOf(flavor);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

function filterByWord(array: string[], word: string): string[] {
  const filteredArray: string[] = [];
  for (const flavor of array) {
    if (flavor.includes(word)) {
      filteredArray.push(flavor);
    }
  }
  return filteredArray;
}

function getAverageWordLength(array: string[]): number {
  const totalWords = array.reduce((acc, flavor) => acc + flavor.split(' ').length, 0);
  return totalWords / array.length;
}

function getRandomFlavors(original: string[], newFlavors: string[], seasonal: string[], regional: string[]): string[] {
  const allFlavors = [...original, ...newFlavors, ...seasonal, ...regional];
  const randomFlavors: string[] = [];
  while (randomFlavors.length < 31) {
    const randomIndex = Math.floor(Math.random() * allFlavors.length);
    randomFlavors.push(allFlavors[randomIndex]);
    allFlavors.splice(randomIndex, 1);
  }
  return randomFlavors;
}

const newFlavors: string[] = [
  "Date night",
  "U.S.S Butterscotch (Stranger Things special)",
  "Honey Almond",
  "Mint Chocolate Chip",
  "Chocolate",
  "Oreo® Cookies'n Cream",
  "Chocolate Chip",
  "Pralines 'n Cream",
  "Very Berry Strawberry",
  "Chocolate Chip Cookie Dough",
  "Old Fashioned Butter Pecan",
  "Jamoca®",
  "Jamoca® Almond Fudge",
  "Reese's® Peanut Butter Cup",
  "Rocky Road",
  "Peanut Butter ’n Chocolate",
  "Gold Medal Ribbon®",
  "World Class® Chocolate",
  "Cherries Jubilee",
  "Chocolate Fudge",
  "Daiquiri Ice",
  "Rainbow Sherbet",
  "Rainbow Swirl"
];

const seasonalFlavors: string[] = [
  "America's Birthday Cake",
  "Baseball Nut®",
  "Blueberry Cheesecake",
  "Bourbon Street Pecan Pie",
  "Brownie Bar Mashup",
  "Cherry Cordial with Kisses",
  "Chocolate Mousse Royale",
  "French Vanilla",
  "Eggnog",
  "German Chocolate Cake",
  "Icing on the Cake",
  "Love Potion #31",
  "New York Cheesecake",
  "Nutty Coconut",
  "Peppermint",
  "Strawberry Cheesecake",
  "Rock ’n Pop Swirl",
  "Reese’s Peanut Butter Cup",
  "Trick Oreo Treat",
  "Winter White Chocolate",
  "made with Snickers®",
  "made with M&M's®",
  "Heath®",
  "Mango Tango"
];

const regionalFlavors: string[] = [
  "Pink Bubblegum",
  "Caramel Macchiato",
  "York Peppermint Pattie",
  "Cotton Candy",
  "Orange Sherbet",
  "Grape Ice",
  "Watermelon Ice",
  "Miami Vice Sorbet",
  "Splish Splash®",
  "Wild 'n Reckless Sherbet",
  "Lemon Custard",
  "Oregon Blackberry",
  "Bananas ‘n Strawberries",
  "Mississippi Mud",
  "Rum Raisin",
  "Creole Cream Cheese",
  "Chocolate Almond",
  "Fudge Brownie",
  "Banana Nut",
  "Black Walnut",
  "Cotton Candy Crackle",
  "Quarterback Crunch",
  "Chocolate Chocolate Chip Cheesecake",
  "Caramel 'n' Cookies"
];

function foo(): string {
  console.log('its working');
  return 'bar';
}
foo();
export default {
  foo,
  is31Flavors,
  addFlavor,
  removeLastFlavor,
  getFlavorByIndex,
  removeFlavorByName,
  copy,
  filterByWord,
  getAverageWordLength,
  getRandomFlavors
};
