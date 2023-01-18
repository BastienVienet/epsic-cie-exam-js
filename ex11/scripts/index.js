// Create a class here
// =====================================
class Episode {
    constructor(title, duration, hasBeenWatched) {
        this.title = title
        this.duration = duration
        this.hasBeenWatched = hasBeenWatched
    }
}
// =====================================

const firstEpisode = new Episode("The King", 45, true);
const secondEpisode = new Episode("The Death of the King", 42, true);
const thirdEpisode = new Episode("The Return of the King", 50, false);

document.querySelector("#first-episode-info").innerText = `Episode: ${
  firstEpisode.title
}
Duration: ${firstEpisode.duration} min
${firstEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#second-episode-info").innerText = `Episode: ${
  secondEpisode.title
}
Duration: ${secondEpisode.duration} min
${secondEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;

document.querySelector("#third-episode-info").innerText = `Episode: ${
  thirdEpisode.title
}
Duration: ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
