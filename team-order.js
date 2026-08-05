(function () {
  function moveTeamAfterReviews() {
    var team = document.getElementById("team");
    var reviews = document.getElementById("reviews");
    if (!team || !reviews) return false;

    if (reviews.nextElementSibling !== team) {
      reviews.insertAdjacentElement("afterend", team);
    }
    return true;
  }

  if (moveTeamAfterReviews()) return;

  var observer = new MutationObserver(function () {
    if (moveTeamAfterReviews()) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
}());
