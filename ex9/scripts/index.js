// Create Object here
// =========================================
const episode = {
    title: "La vengeance du roi",
    duration: 26,
    hasBeenWatched: true,
}
// =========================================

document.querySelector("#episode-info").innerText = `Episode: ${episode.title}
Duration: ${episode.duration} min
${episode.hasBeenWatched ? "Already watched" : "Not yet watched"}`;
