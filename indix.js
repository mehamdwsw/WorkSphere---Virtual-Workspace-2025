const profile = document.getElementById("profile");
async function jsonAdd() {
  let data = await fetch("json.json");
  var user = await data.json();
  arry_Staff = user;

  RenderInStaff();
}

jsonAdd();
let arry_Staff;
let arry_Staff_conference = [];
let arry_Staff_serveurs = [];
let arry_Staff_securite = [];
let arry_Staff_Reception = [];
let arry_Staff_personnel = [];
let arry_Staff_archives = [];

const form_Modal = document.getElementById("form_Modal");

// <!-- regex -->
const regexName = /^[a-zA-Z\s'-]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/g;
const phoneNumberRegex = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
// <!-- regex end -->

const exampleModal = document.getElementById("exampleModal");
const alert_zone = document.getElementById("alert_zone");
const ajouter = document.getElementById("ajouter");

document.getElementById("validation_name").addEventListener("input", () => {
  if (regexName.test(form_Modal[0].value)) {
    form_Modal[0].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[0].style.border = "thick solid #ee0b0bff";
  }
});
document.getElementById("validation_Role").addEventListener("click", () => {
  if (form_Modal[1].value != "") {
    form_Modal[1].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[1].style.border = "thick solid #ee0b0bff";
  }
});
document.getElementById("validation_image").addEventListener("input", () => {
  if (imageUrlRegex.test(form_Modal[2].value)) {
    form_Modal[2].style.border = "thick solid #0ee90aff";
    document.getElementById("image_div").innerHTML = `
    <img src="${form_Modal[2].value}" class=" profile-image rounded-circle" style="width: 10vh; height: 10vh;" alt="">
    `;
  } else {
    form_Modal[2].style.border = "thick solid #ee0b0bff";
  }
});
document.getElementById("recipient_Email").addEventListener("input", () => {
  if (emailRegex.test(form_Modal[3].value)) {
    form_Modal[3].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[3].style.border = "thick solid #ee0b0bff";
  }
});
document.getElementById("validation_tel").addEventListener("input", () => {
  if (phoneNumberRegex.test(form_Modal[4].value)) {
    form_Modal[4].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[4].style.border = "thick solid #ee0b0bff";
  }
});
document.getElementById("Experiences").addEventListener("input", () => {
  if (regexName.test(form_Modal[6].value)) {
    form_Modal[6].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[6].style.border = "thick solid #ee0b0bff";
  }
});

function ajouterInStaff() {
  let attend = {
    Experiences: Experiences_ajouter(),
  };
  attend.name = form_Modal[0].value;
  attend.Role = form_Modal[1].value;
  attend.image = form_Modal[2].value;
  attend.Email = form_Modal[3].value;
  attend.Telephone = form_Modal[4].value;
  attend.Experiences.push(form_Modal[6].value);

  arry_Staff.push(attend);

  not_value_form();
  form_Modal[0].style.border = "";
  form_Modal[1].style.border = "";
  form_Modal[2].style.border = "";
  form_Modal[3].style.border = "";
  form_Modal[4].style.border = "";
  form_Modal[6].style.border = "";
}
function not_value_form() {
  form_Modal[0].value = "";
  form_Modal[1].value = "";
  form_Modal[2].value = "";
  form_Modal[3].value = "";
  form_Modal[4].value = "";
  form_Modal[6].value = "";
  Experiences_dynamique_ajouter.innerHTML = "";
}
function RenderInStaff() {
  profile.innerHTML = "";
  arry_Staff.forEach((Element, i) => {
    profile.innerHTML += `
                        <div class="card profile-card p-3" id="profile">
                        <div class="d-flex justify-content-center" style="width: 14vh; height: auto;">
                        <div class=" justify-content-center">
                        <img src="${Element.image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${Element.name}</h6>
                        <button type="button" onclick="modalAffichageDetails(${i})" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#examp">
                        details
                        </button>
                        <button type="button" onclick="modalAffichageEdit(${i})" class="btn btn-secondary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                        edit
                        </button>
                        </div>
                        </div>
                        </div>
                        `;
  });
}
function modalAffichageEdit(i) {
  form_Modal[0].value = arry_Staff[i].name;
  form_Modal[1].value = arry_Staff[i].Role;
  form_Modal[2].value = arry_Staff[i].image;
  form_Modal[3].value = arry_Staff[i].Email;
  form_Modal[4].value = arry_Staff[i].Telephone;
  form_Modal[6].value = arry_Staff[i].Experiences[0];
}
function modalAffichageDetails(i) {
  modal_zone_conference.innerHTML = `
                        <div class="tab-pane fade active show" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                <h5 class="mb-3">About</h5>
                <div class="lead mb-3"><img src="${arry_Staff[i].image}"
                                class=" profile-image rounded-circle" style="width: 15vh; height: 15vh;"></div>
                <h5 class="mb-3">Profile</h5>
                <div class="row g-0">
                  <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Name</div>
                  </div>
                  <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">${arry_Staff[i].name}</div>
                  </div>
                  <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Role</div>
                  </div>
                  <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">${arry_Staff[i].Role}</div>
                  </div>
                  <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Email</div>
                  </div>
                  <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">${arry_Staff[i].Email}</div>
                  </div>
                  <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Telephone</div>
                  </div>
                  <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">${arry_Staff[i].Telephone}</div>
                  </div>
                  <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                    <div class="p-2">Experiences</div>
                  </div>
                  <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                    <div class="p-2">${arry_Staff[i].Experiences}</div>
                  </div>
                  </div>
                </div>
              </div>
                        `;
}

function formvalidation() {
  // value of all inputs

  let name = form_Modal[0].value;
  let Role = form_Modal[1].value;
  let image = form_Modal[2].value;
  let Email = form_Modal[3].value;
  let Telephone = form_Modal[4].value;
  let Experiences = form_Modal[6].value;

  const Nom_error_zone = document.getElementById("Nom-error-zone");
  const Role_error_zone = document.getElementById("Role-error-zone");
  const Email_error_zone = document.getElementById("Email-error-zone");
  const Telephone_error_zone = document.getElementById("Telephone-error-zone");
  const Experiences_error_zone = document.getElementById(
    "Experiences-error-zone"
  );
  const image_error_zone = document.getElementById("image-error-zone");
  // validation
  let haserror = false;
  // ---------
  if (!regexName.test(name)) {
    haserror = true;
    Nom_error_zone.textContent = "Le nom est incorrect.";
  } else {
    Nom_error_zone.textContent = "";
    haserror = false;
  }
  // ---------
  if (!Role) {
    haserror = true;
    Role_error_zone.textContent = "Choisissez une option.";
  } else {
    Role_error_zone.textContent = "";
    haserror = false;
  }
  // ---------
  if (!imageUrlRegex.test(image)) {
    console.log(image);
    haserror = true;
    image_error_zone.textContent = "Le lien vers l'image est incorrect.";
  } else {
    image_error_zone.textContent = "";
    haserror = false;
  }
  // ---------
  if (!emailRegex.test(Email)) {
    haserror = true;
    Email_error_zone.textContent = "Adresse e-mail invalide";
  } else {
    Email_error_zone.textContent = "";
    haserror = false;
  }
  // ---------
  if (!phoneNumberRegex.test(Telephone)) {
    haserror = true;
    Telephone_error_zone.textContent = "Adresse e-mail invalide";
  } else {
    Telephone_error_zone.textContent = "";
    haserror = false;
  }
  // ---------
  if (!regexName.test(Experiences)) {
    haserror = true;
    Experiences_error_zone.textContent = "Expériences incorrectes";
  } else {
    Experiences_error_zone.textContent = "";
    haserror = false;
  }

  // return true if all the fileds correct, false if not

  return haserror;
}

// #####################
let modal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById("exampleModal")
); // Returns a Bootstrap modal instance

const butSavechanges = document.getElementById("btn_Save_changes");
const button_Experiences = document.getElementById("button_Experiences");
butSavechanges.addEventListener("click", () => {
  console.log(formvalidation());
  if (!formvalidation()) {
    ajouterInStaff();
    RenderInStaff();
    modal.hide();
  }
});

const Experiences_dynamique_ajouter = document.getElementById(
  "Experiences_dynamique"
);
button_Experiences.addEventListener("click", button_Experiences_dynamique);
function button_Experiences_dynamique() {
  console.log(222);

  Experiences_dynamique_ajouter.innerHTML += `
  <label for=" " class="col-form-label">Expériences</label>
  <input type="text" class="form-control dynamique " id="dynamique" value="" required placeholder="Expériences">
  <span id="" style="color: red;"></span>
  `;
}

function Experiences_ajouter() {
  let b = document.querySelectorAll(".dynamique");
  let arr_Experiences = [];
  b.forEach((Element) => {
    arr_Experiences.push(Element.value);
  });
  return arr_Experiences;
}

document.getElementById("zone_conference").addEventListener("click", () => {
  modal_zone("conference");
});
document.getElementById("zone_serveurs").addEventListener("click", () => {
  modal_zone("serveurs");
});
document.getElementById("zone_securite").addEventListener("click", () => {
  modal_zone("securite");
});
document.getElementById("zone_Reception").addEventListener("click", () => {
  modal_zone("Reception");
});
document.getElementById("zone_personnel").addEventListener("click", () => {
  modal_zone("personnel");
});
document.getElementById("zone_archives").addEventListener("click", () => {
  modal_zone("archives");
});

let modal_zone_conference = document.getElementById("modal_zone");

function modal_zone(zone) {
  modal_zone_conference.innerHTML = "";
  arry_Staff.forEach((Element, i) => {
    modal_zone_conference.innerHTML += `
                        <div class="M profile-card p-3" id="profile">
                        <div class="d-flex justify-content-center" style="width: 14vh; height: auto;">
                        <div class=" justify-content-center">
                        <img src="${Element.image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${Element.name}</h6>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="." data-bs-target=".">
                        details
                        </button><button data-bs-dismiss="modal" onclick="modalZoneAdd(${i},'${zone}')" id="modal_zone_add" type="button" class="btn btn-success modal_zone_add " data-bs-toggle="." data-bs-target=".">
                        add
                        </button>
                        
                        </div>
                        </div>
                        </div>
                        `;
  });
}
const modal_zone_add = document.getElementById("modal_zone_add");
const div_zone_conference = document.getElementById("div_zone_conference");
const div_zone_serveurs = document.getElementById("div_zone_serveurs");
const div_zone_securite = document.getElementById("div_zone_securite");
const div_zone_Reception = document.getElementById("div_zone_Reception");
const div_zone_personnel = document.getElementById("div_zone_personnel");
const div_zone_archives = document.getElementById("div_zone_archives");

function display_none_alert_zone() {
  alert_zone.style.display = "none";
}
function modalZoneAdd(indi, zone) {
  switch (zone) {
    case "conference": {
      if (
        arry_Staff[indi].Role == "réception" ||
        arry_Staff[indi].Role == "Techniciens IT" ||
        arry_Staff[indi].Role == "Agents de sécurité" ||
        arry_Staff[indi].Role == "Nettoyage" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Autres"
      ) {
        arry_Staff_conference.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("conference");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }

      break;
    }
    case "serveurs": {
      if (
        arry_Staff[indi].Role == "Techniciens IT" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Nettoyage"
      ) {
        arry_Staff_serveurs.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("serveurs");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }

      break;
    }
    case "securite": {
      if (
        arry_Staff[indi].Role == "Agents de sécurité" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Nettoyage"
      ) {
        arry_Staff_securite.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("securite");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }

      break;
    }
    case "Reception": {
      if (
        arry_Staff[indi].Role == "réception" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Nettoyage"
      ) {
        arry_Staff_Reception.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("Reception");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }

      break;
    }
    case "personnel": {
      if (
        arry_Staff[indi].Role == "réception" ||
        arry_Staff[indi].Role == "Techniciens IT" ||
        arry_Staff[indi].Role == "Agents de sécurité" ||
        arry_Staff[indi].Role == "Nettoyage" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Autres"
      ) {
        arry_Staff_personnel.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("personnel");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }

      break;
    }
    case "archives": {
      if (
        arry_Staff[indi].Role == "réception" ||
        arry_Staff[indi].Role == "Techniciens IT" ||
        arry_Staff[indi].Role == "Agents de sécurité" ||
        arry_Staff[indi].Role == "Manager" ||
        arry_Staff[indi].Role == "Autres"
      ) {
        arry_Staff_archives.push(arry_Staff[indi]);
        arry_Staff.splice(indi, 1);
        RenderInStaff();
        RenderInZone_dynamic("archives");
        check_arr()
      } else {
        alert_zone.style.display = "block";
        setTimeout(display_none_alert_zone, 1000);
      }
      break;
    }
  }
}
function check_arr() {
   
    if(arry_Staff_serveurs.length==0){
       linear_gradient_yes('serveurs')
    }else{
      linear_gradient_no('serveurs')
    }
  
  
    if(arry_Staff_securite.length==0){
       linear_gradient_yes('securite')
    }else{
      linear_gradient_no('securite')
    }
  
  
   if(arry_Staff_Reception.length==0){
       linear_gradient_yes('Reception')
    }else{
      linear_gradient_no('Reception')
    }
  

  
    if(arry_Staff_archives.length==0){
       linear_gradient_yes('archives')
    }else{
      linear_gradient_no('archives')
    }
  
}

function linear_gradient_yes(zone) {
  if (zone == "serveurs") {
    document.querySelectorAll("#linear_gradient_div")[1].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), url("/image/Screenshot\ 2025-11-15\ 172934.png")';
  }
  if (zone == "securite") {
    document.querySelectorAll("#linear_gradient_div")[2].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), url("/image/Screenshot\ 2025-11-15\ 173903.png")';
  }
  if (zone == "Reception") {
    document.querySelectorAll("#linear_gradient_div")[3].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), url("/image/Screenshot\ 2025-11-15\ 174245.png")';
  }

  if (zone == "archives") {
    document.querySelectorAll("#linear_gradient_div")[5].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0.3), rgba(255, 0, 0, 0.3)), url("/image/FEFWE.png")';
  }
}
function linear_gradient_no(zone) {
  if (zone == "serveurs") {
    document.querySelectorAll("#linear_gradient_div")[1].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url("/image/Screenshot\ 2025-11-15\ 172934.png")';
  }
  if (zone == "securite") {
    document.querySelectorAll("#linear_gradient_div")[2].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url("/image/Screenshot\ 2025-11-15\ 173903.png")';
  }
  if (zone == "Reception") {
    document.querySelectorAll("#linear_gradient_div")[3].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url("/image/Screenshot\ 2025-11-15\ 174245.png")';
  }

  if (zone == "archives") {
    document.querySelectorAll("#linear_gradient_div")[5].style.backgroundImage =
      'linear-gradient(rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url("/image/FEFWE.png")';
  }
}
function RenderInZone_dynamic(zone) {
  if (zone == "conference") {
    div_zone_conference.innerHTML = "";
    arry_Staff_conference.forEach((Element, indix) => {
      div_zone_conference.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('conference','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
  if (zone == "serveurs") {
    div_zone_serveurs.innerHTML = "";
    arry_Staff_serveurs.forEach((Element, indix) => {
      div_zone_serveurs.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('serveurs','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
  if (zone == "securite") {
    div_zone_securite.innerHTML = "";
    arry_Staff_securite.forEach((Element, indix) => {
      div_zone_securite.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('securite','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
  if (zone == "Reception") {
    div_zone_Reception.innerHTML = "";
    arry_Staff_Reception.forEach((Element, indix) => {
      div_zone_Reception.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('Reception','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
  if (zone == "personnel") {
    div_zone_personnel.innerHTML = "";
    arry_Staff_personnel.forEach((Element, indix) => {
      div_zone_personnel.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('personnel','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
  if (zone == "archives") {
    div_zone_archives.innerHTML = "";
    arry_Staff_archives.forEach((Element, indix) => {
      div_zone_archives.innerHTML += ` 
                    <div class=" d-flex justify-content-center">
                    <img src="${Element.image}"
                    class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                    <h6 class="name">${Element.name}</h6>
                    <button type="button" onclick="modalZoneClose('archives','${Element.Email}')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                    X
                    <span style="display: none;"></span>
                    </div>
                    `;
    });
  }
}

function modalZoneClose(zone, Email) {
  if (zone == "conference") {
    arry_Staff_conference.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_conference.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("conference");
    check_arr()
  }
  if (zone == "serveurs") {
    arry_Staff_serveurs.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_serveurs.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("serveurs");
    check_arr()
  }
  if (zone == "securite") {
    arry_Staff_securite.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_securite.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("securite");
    check_arr()
  }
  if (zone == "Reception") {
    arry_Staff_Reception.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_Reception.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("Reception");
    check_arr()
  }
  if (zone == "personnel") {
    arry_Staff_personnel.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_personnel.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("personnel");
    check_arr()
  }
  if (zone == "archives") {
    arry_Staff_archives.forEach((Element, i) => {
      if (Element.Email === Email) {
        arry_Staff.push(Element);
        arry_Staff_archives.splice(i, 1);
      }
    });
    RenderInStaff();
    RenderInZone_dynamic("archives");
    check_arr()
  }
}
const Search_profile = document.getElementById("Search_profile");
Search_profile.addEventListener("input", () => {
  if (Search_profile.value == "") {
    RenderInStaff();
    return;
  }
  let HTML = "";
  Search_profile_vaeli(Search_profile.value).forEach((Element) => {
    HTML += `
                        <div class="card profile-card p-3" id="profile">
                        <div class="d-flex justify-content-center" style="width: 14vh; height: auto;">
                        <div class=" justify-content-center">
                        <img src="${Element.image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${Element.name}</h6>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="." data-bs-target=".">
                        details
                        </button>
                        </div>
                        </div>
                        </div>
                        `;
  });

  profile.innerHTML = HTML;
});

function Search_profile_vaeli(Search_vaeli) {
  let Search_add = [];
  arry_Staff.forEach((Element) => {
    Element.Experiences.forEach((elme) => {
      if (elme.includes(Search_vaeli)) {
        Search_add.push(Element);
      }
    });
  });
  return Search_add;
}
check_arr()
