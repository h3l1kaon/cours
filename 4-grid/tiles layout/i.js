const tilesContainer = document.querySelector(".tiles");
const changeLastTile = () => {
  return tilesContainer.children.length % 2 !== 0 ? true : false;
};
const changetilesStyle = () => {
  if (changeLastTile()) {
    const lastTile =
      tilesContainer.children[tilesContainer.children.length - 1];
    if (window.innerWidth > 810) {
      lastTile.style.gridArea = "5 / 4 / span 1 / span 1";
    } else {
      lastTile.style.gridColumn = "1 / span 2";
    }
  }
};

window.onresize = changetilesStyle;

const tiles = document.querySelectorAll(".tile");
const image = document.querySelector("#modal_img");

const getBackgroundUrl = (e) => {
  const div = window.getComputedStyle(e.target);
  return div.backgroundImage;
};

const openModal = (e) => {
  let backgroundUrl = getBackgroundUrl(e);
  backgroundUrl = backgroundUrl.slice(5, backgroundUrl.length - 2);
  image.src = backgroundUrl;
  modal.style.display = "block";
};

tiles.forEach((t) => {
  t.addEventListener("click", (e) => openModal(e));
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// replace all images on each reload

const unsplashRandomUrl = "https://source.unsplash.com/random";

// get and set random images for each tile in the document;

const setRandoms = () => {
  tiles.forEach((t, i) => {
    setTimeout(() => {
      fetch(unsplashRandomUrl)
        .then((res) => {
          t.style.backgroundImage = 'url("' + res.url + '")';
        })
        .catch((err) => console.error(err));
    }, 1500 * i);
  });
  console.log("hehe");
};

const button = document
  .querySelector("#changePictures")
  .addEventListener("click", () => setRandoms());
