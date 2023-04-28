import data from "../config/Mycar/data.json" assert { type: "json" };

const languageLinks = document.querySelectorAll(".dropdown-content a");

languageLinks.forEach((e) => {
  e.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(e.textContent);
    changeLang(e.textContent);
  });
});

const changeLang = async (lang = "Français") => {
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
    document.getElementsByClassName("btn-readmore")[0].textContent =
      datalang["btn-readmore"];
    document.getElementsByClassName("btn-contactus")[0].textContent =
      datalang["btn-contactus"];
    document.getElementsByClassName("whoarewe")[0].textContent =
      datalang["whoarewe"];
    document.getElementsByClassName("whoarewe-text")[0].textContent =
      datalang["whoarewe-text"];
    document.getElementsByClassName("nb-car")[0].textContent =
      datalang.nbCars[1];
    document.getElementsByClassName("nb-car-t")[0].textContent =
      datalang.nbCars[0];
    document.getElementsByClassName("nbReview")[0].textContent =
      datalang.nbReview[1];
    document.getElementsByClassName("nbReview-t")[0].textContent =
      datalang.nbReview[0];
    /** start park  & tarif */
    let cars = "";
    for (let car of datalang.park) {
      cars += `<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="feature-item bg-light rounded p-4">
          <img
            src="config/Mycar/asset/img/imgCar/${car.image}"
            alt="${car.name}"
            class="w-100 h-100"
          />
          <h5 class="mb-3 p-3 text-center">${car.name}</h5>
          <div class="d-flex flex-column">
            <div>
              <i class="fa fa-gas-pump fs-6">&nbsp;</i> ${car.Carburant}
            </div>

            <div>
              <i class="fa fa-cogs fs-6">&nbsp;</i
              >${car.gear}
            </div>
            <div><i class="fa fa-users fs-6">&nbsp;</i> ${car.passagers}</div>
            <div><i class="fa fa-snowflake fs-6">&nbsp;</i> ${car.clim}</div>
          </div>
        </div>
      </div>`;
    }
    document.getElementsByClassName("parcTarif")[0].innerHTML = cars;
    /** End park  & tarif */

    document.getElementsByClassName("ForRntCar")[0].textContent =
      datalang.ForRntCar;
    document.getElementsByClassName("easySteps")[0].textContent =
      datalang.easySteps;
    document.getElementsByClassName("step1Title")[0].textContent =
      datalang.step1Title;
    document.getElementsByClassName("step1Text")[0].textContent =
      datalang.step1Text;
    document.getElementsByClassName("step2Title")[0].textContent =
      datalang.step2Title;
    document.getElementsByClassName("step2Text")[0].textContent =
      datalang.step2Text;
    document.getElementsByClassName("step3Title")[0].textContent =
      datalang.step3Title;
    document.getElementsByClassName("step3Text")[0].textContent =
      datalang.step3Text;

    document.getElementsByClassName("strongpointsT")[0].textContent =
      datalang.strongpoints.title;

    /** Nos points forts :  */
    let listsP = "";
    for (let point of datalang.strongpoints.points) {
      listsP += ` <li>${point}</li>`;
    }
    document.getElementsByClassName("strongpointsP")[0].innerHTML = listsP;
    /** bouton whatsapp */
    let elementbt = ` <a
    href="https://wa.me/${data[0].phone}"
    class="d-flex bg-primary-gradient rounded py-3 px-4"
  >
    <i
      class="fab fa-whatsapp fa-3x text-white flex-shrink-0"
    ></i>
    <div class="ms-3">
      <p class="text-white mb-0">${
        datalang.lang === "Français"
          ? "réservez votre voiture "
          : "book your car"
      }
          </p>
      <h5 class="text-white mb-0">Whatsapp</h5>
    </div>
  </a>`;

    document.getElementsByClassName("boutonwhats")[0].innerHTML = elementbt;

    /** clients reviews */
    let revsClients = "";
    for (let rev of datalang.reviews.clients) {
      revsClients += ` 
      <div class="testimonial-item rounded p-4 ">
      <div class="d-flex align-items-center mb-4">
        <img
          class="img-fluid bg-white rounded flex-shrink-0 p-1"
          src="img/${rev.image}"
          style="width: 85px; height: 85px"
          alt="review client1"
        />
        <div class="ms-4">
          <h5 class="mb-1">${rev.name}</h5>
          <p class="mb-1 ">${rev.profession}</p>
          <div>
            <small class="fa fa-star text-warning"></small>
            <small class="fa fa-star text-warning"></small>
            <small class="fa fa-star text-warning"></small>
            <small class="fa fa-star text-warning"></small>
            <small class="fa fa-star text-warning"></small>
          </div>
        </div>
      </div>
      <p class="mb-0 revclientsItemT">${rev.Review}</p>
    </div>`;
    }
    document.getElementsByClassName("titleSectionRev")[0].innerHTML =
      datalang.reviews.titleSection;
    document;
    document.getElementsByClassName("revsClients")[0].innerHTML = revsClients;
    document.getElementsByClassName("text-contact-Us")[0].textContent =
      datalang.contactUS;
  }
};
changeLang();
