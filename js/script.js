import data from "../config/Mycar/data.json" assert { type: "json" };

const languageLinks = document.querySelectorAll(".dropdown-content a");

languageLinks.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(e.textContent);
    changeLang(e.textContent);
  });
});

const changeLang = (lang) => {
  const datalang = data.find((data) => data.lang === lang);
  console.log(datalang);

  if (datalang) {
    /** name Ste */
    document.getElementsByClassName("nameSte")[0].textContent = data[0].name;
    /** start nav bar */
    for (
      let i = 0;
      i < document.getElementsByClassName("nav-link").length;
      i++
    ) {
      document.getElementsByClassName("nav-link")[i].textContent =
        datalang.navbar[i];
    }

    /** text  banner */
    document.getElementsByClassName("textBanner1")[0].textContent =
      datalang.textBanner1;
    document.getElementsByClassName("textBanner2")[0].textContent =
      datalang.textBanner2;
  }
  document.getElementsByClassName("btn-readmore")[0].textContent =
    datalang["btn-readmore"];
  document.getElementsByClassName("btn-contactus")[0].textContent =
    datalang["btn-contactus"];
};
