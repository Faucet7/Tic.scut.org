var pageList = [
  {
    version: 1,
    url: "FirstVersionPage/index.html",
  },
  {
    version: 2,
    url: "",
  },
  {
    version: 3,
    url: "",
  },
];

var nowPage = {};

function created() {
  nowPage = pageList[0];
}
created();

function switchPage(step) {
  switch (nowPage.version + step) {
    case 0:
      break;
    case pageList.length + 1:
      break;
    default:
      nowPage = pageList[nowPage.version + step - 1];
      break;
  }
  document.getElementById("versionBtn").textContent =
    "Version " + nowPage.version;
}

function goVersionPage() {
  window.location.href = nowPage.url;
  console.log(window.navigator);
}
