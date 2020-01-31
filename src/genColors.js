export const genColors = ({
		categories = [[1,2,3,4], [5,6,7], [8,9,10,11,12], [13,14,15,16]],
    minScale = 25,
    maxScale = 75,
    saturation = false,
    valOtherScale = 75
  }) => {
		
	const nSubCategories = Math.max(...categories.map(a => a.length));
	let colours = {}; // { 201: 'hsl(...)', 202: 'hsl(...)'}
  let hue;
  let genColour;
	let genVal;
  for (let i = 0; i < categories.length; i++) {
    hue = Math.round((360 / categories.length) * i);
    for (let j = 0; j < categories[i].length; j++) {
      genVal = Math.round(
        ((maxScale - minScale) / (nSubCategories - 1)) * j + minScale
      );
      if (saturation) {
        genColour = `hsl(${hue}, ${genVal}%, ${valOtherScale}%)`;
      } else {
        genColour = `hsl(${hue}, ${valOtherScale}%, ${genVal}%)`;
      }
	    colours[categories[i][j]] = genColour;
    }
  }
  return colours;
}