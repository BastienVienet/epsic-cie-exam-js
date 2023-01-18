class Episode {
  constructor(title, duration, hasBeenWatched) {
    this.title = title;
    this.duration = duration;
    this.hasBeenWatched = hasBeenWatched;
  }
}

let firstEpisode = new Episode("Dark Beginnings", 45, true);
let secondEpisode = new Episode("The Mystery Continues", 45, false);
let thirdEpisode = new Episode("An Unexpected Climax", 60, false);

// Modify the array here
// ====================================
let episodes = [];
// Point 1
episodes.push(firstEpisode)
episodes.push(secondEpisode)
episodes.push(thirdEpisode)
episodes.push(thirdEpisode)
// Point 2
episodes.pop();
// Point 3
let numberOfEpisodes = episodes.length
// Point 4
episodes.splice(1,2)
episodes.push(firstEpisode)
episodes.push(firstEpisode)
// On devrait avoir 3x le 1er épisodes dans l'array

// ====================================

const body = document.querySelector("body");

document.querySelector("#episodes").innerText = numberOfEpisodes;

for (let episode of episodes) {
  let newDiv = document.createElement("div");
  newDiv.classList.add("series-frame");
  let newTitle = document.createElement("h2");
  newTitle.innerText = "The Story of Tau";
  let newParagraph = document.createElement("p");
  newParagraph.innerText = `${episode.title}
${episode.duration} minutes
${episode.hasBeenWatched ? "Already been watched" : "Not yet watched"}`;
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}
