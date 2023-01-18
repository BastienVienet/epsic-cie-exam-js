let episode = {
  title: "Dark Beginnings",
  duration: 45,
  hasBeenWatched: false,
};

// Create variables here
// =====================================
const episodeTitle = episode.title;
const episodeDuration = episode.duration;
const episodeHasBeenWatched = episode.hasBeenWatched;
// =====================================

document.querySelector("#episode-info").innerText = `Episode: ${episodeTitle}
  Duration: ${episodeDuration} min
  ${episodeHasBeenWatched ? "Already watched" : "Not yet watched"}`;
