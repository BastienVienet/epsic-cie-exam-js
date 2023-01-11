// Modify the code here
// ======================

const calculateAverageRating = (ratingArray) => {
  let totalRating = 0;
  let numberOfRating = 0;

  if (ratingArray.length === 0) return "No rating yet"

  for (let rating of ratingArray) {
    numberOfRating++;
    totalRating += rating
  }

  return totalRating / numberOfRating
}


// ======================

const tauRatings = [5, 4, 5, 5, 1, 2];
const colinRatings = [5, 5, 5, 4, 5];

const tauAverage = calculateAverageRating(tauRatings);
const colinAverage = calculateAverageRating(colinRatings);

if (tauAverage && colinAverage) {
  document.querySelector("#tau-score").innerText =
    tauAverage.toFixed(1) + " stars";
  document.querySelector("#colin-score").innerText =
    colinAverage.toFixed(1) + " stars";
  document.querySelector("#clara-score").innerText = `${
    calculateAverageRating([]) === 0
      ? "No ratings"
      : calculateAverageRating([]) + " stars"
  }`;
}
