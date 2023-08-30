let boxSearch = document.querySelector(".boxSearch");
let closeSearch = document.querySelector(".closeSearch");
let showSearch = document.querySelector(".showSearch");

showSearch.onclick = (_) => {
  boxSearch.style.display = "block";
};
closeSearch.onclick = (_) => {
  boxSearch.style.display = "none";
};

document.addEventListener("DOMContentLoaded", function () {
  var favoriteBtns = document.querySelectorAll(".favorite-btn");

  favoriteBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      toggleFavorite(btn);
    });

    checkFavoriteStatus(btn);
  });
});

function checkFavoriteStatus(btn) {
  var pageKey = getPageKey(btn);
  var favoritesData = getFavoritesData();

  if (favoritesData[pageKey]) {
    btn.classList.add("clicked");
  }
}

function getFavoritesData() {
  var favoritesData = JSON.parse(localStorage.getItem("favoritesData")) || {};
  return favoritesData;
}

function getPageKey(btn) {
  var category = btn.getAttribute("data-category");
  var pageKey =
    window.location.href +
    "_" +
    category +
    "_" +
    btn.getAttribute("data-page-key");
  return pageKey;
}

function toggleFavorite(btn) {
  var pageKey = getPageKey(btn);
  var favoritesData = getFavoritesData();

  if (favoritesData[pageKey]) {
    btn.classList.remove("clicked");
    delete favoritesData[pageKey];
  } else {
    btn.classList.add("clicked");
    favoritesData[pageKey] = true;
  }

  localStorage.setItem("favoritesData", JSON.stringify(favoritesData));
}

// Favorites
function countFavorites() {
  var favoritesData = JSON.parse(localStorage.getItem("favoritesData")) || {};
  var count = Object.keys(favoritesData).length;
  return count;
}

// عرض العدد الحالي للعناصر المفضلة
var favoritesCount = countFavorites();
var favoritesCountElement = document.getElementById("favorites-count");
favoritesCountElement.textContent = favoritesCount;

// arrow top scroll !!!!

let arrowTop = document.querySelector(".arrowTop");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    arrowTop.style.display = "flex";
  } else {
    arrowTop.style.display = "none";
  }
});

// side bar

let btnSide = document.querySelectorAll(".btnSide");
btnSide.forEach((element) => {
  element.addEventListener("click", function (ev) {
    let btn = ev.target.parentNode;

    let icon = btn.querySelector("i");
    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
      icon.classList.add("anmation");
      icon.classList.remove("anmation2");
    } else if (icon.classList.contains("fa-minus")) {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
      icon.classList.remove("anmation");
      icon.classList.add("anmation2");
    }
  });
});
// -------------- امكانية الوصول -----------


document.addEventListener("DOMContentLoaded", () => {
  const lightMode = document.querySelector("input.lightMode");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeStylesheet.href = "css/light-theme.css";
    lightMode.checked = false;
  } else {
    document.body.classList.remove("light-theme");
    themeStylesheet.href = "css/style.css";
    lightMode.checked = true;
  }

  lightMode.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
      themeStylesheet.href = "css/light-theme.css";
      localStorage.setItem("preferredTheme", "light");
    } else {
      themeStylesheet.href = "css/style.css";
      localStorage.setItem("preferredTheme", "dark");
    }
  });
});

// InputZoom Checkbox
// --------
document.addEventListener("DOMContentLoaded", function () {
  const inputZoom = document.querySelector("input.zoom");
  const zoomValue = localStorage.getItem("zoomValue");
  if (zoomValue === "zoomed") {
    inputZoom.checked = true;
    zoomIn();
  }

  inputZoom.addEventListener("change", function () {
    if (this.checked) {
      zoomIn();
      localStorage.setItem("zoomValue", "zoomed");
    } else {
      zoomOut();
      localStorage.removeItem("zoomValue");
    }
  });

  function zoomIn() {
    document.body.style.zoom = "130%";
  }

  function zoomOut() {
    document.body.style.zoom = "100%";
  }
});

// تقمية الالوان
const colorFilterCheckbox = document.getElementById("colorFilterCheckbox");
const colorPickerContainer = document.getElementById("colorPickerContainer");
const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");

colorFilterCheckbox.addEventListener("change", function () {
  toggleColorPicker();
  applyColorFilter();
});

colorPicker.addEventListener("input", function () {
  const selectedColor = this.value;
  updateColorDisplay(selectedColor);
});

function toggleColorPicker() {
  if (colorFilterCheckbox.checked) {
    colorPickerContainer.style.display = "block";
  } else {
    colorPickerContainer.style.display = "none";
  }
}

function updateColorDisplay(color) {
  colorDisplay.style.backgroundColor = color;
}

function applyColorFilter() {
  if (colorFilterCheckbox.checked) {
    colorDisplay.style.filter = "grayscale(100%)";
  } else {
    colorDisplay.style.filter = "none";
  }
}

// وضعية القارئ
// const readerModeCheckbox = document.getElementById('readerModeCheckbox');
// const paragraphs = document.querySelectorAll('div');
// const paragraphs2 = document.querySelectorAll('div p');
// const paragraphs3 = document.querySelectorAll('h3');

// readerModeCheckbox.addEventListener('change', function () {
//     if (this.checked) {
//         enableReaderMode();
//     } else {
//         disableReaderMode();
//     }
// });

// function enableReaderMode() {
//     paragraphs.forEach(paragraph => {
//         paragraph.style.fontSize = '28px';
//         paragraph.style.lineHeight = '1.6';
//     });
//     paragraphs2.forEach(paragraph => {
//         paragraph.style.fontSize = '28px';
//         paragraph.style.lineHeight = '1.6';
//     });
//     paragraphs3.forEach(paragraph => {
//         paragraph.style.fontSize = '28px';
//         paragraph.style.lineHeight = '1.6';
//     });
// }

// function disableReaderMode() {
//     paragraphs.forEach(paragraph => {
//         paragraph.style.fontSize = '';
//         paragraph.style.lineHeight = '';
//     });
//     paragraphs2.forEach(paragraph => {
//         paragraph.style.fontSize = '';
//         paragraph.style.lineHeight = '';
//     });
//     paragraphs3.forEach(paragraph => {
//         paragraph.style.fontSize = '';
//         paragraph.style.lineHeight = '';
//     });
// }
