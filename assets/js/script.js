window.onload = function () {
  let banner = document.createElement("div");
  let container = document.createElement("div");
  let row = document.createElement("div");
  let col = document.createElement("div");
  let h1 = document.createElement("h1");
  let message = document.createTextNode(
    "This site is temporarily unavailable due to the fact that the owner of the site did not pay for the work of the developer!"
  );

  // YouTube frame
  let youtubeFrame = document.createElement("iframe");
  youtubeFrame.classList.add("mx-auto");
  youtubeFrame.classList.add("d-block");
  youtubeFrame.setAttribute(
    "src",
    "https://www.youtube.com/embed/k-LPLazY22I?autoplay=1"
  );
  youtubeFrame.setAttribute(
    "allow",
    "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  );
  youtubeFrame.setAttribute("allowfullscreen", "");
  youtubeFrame.setAttribute("frameborder", "0");

  h1.appendChild(message);
  banner.classList.add("banner");
  container.classList.add("container");
  row.classList.add("row");
  col.classList.add("col-12");
  document.body.appendChild(banner);
  banner.appendChild(container);
  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(h1);
  col.appendChild(youtubeFrame);
};
