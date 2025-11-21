const profile = document.getElementById("profile");
async function jsonAdd() {
  let data = await fetch("json.json");
  var user = await data.json();
  arry_Staff = user;

  user.forEach((Element) => {
    profile.innerHTML += `
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
}
jsonAdd();
let arry_Staff;
let arry_Staff_conference=[];
let arry_Staff_serveurs=[];
let arry_Staff_securite=[];
let arry_Staff_Reception=[];
let arry_Staff_personnel=[];
let arry_Staff_archives=[];

const form_Modal = document.getElementById("form_Modal");

// <!-- regex -->
const regexName = /^[a-zA-Z\s'-]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const imageUrlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|webp|jpeg)/g;
const phoneNumberRegex = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
// <!-- regex end -->

const exampleModal = document.getElementById("exampleModal");

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
    Experiences: [],
  };
  attend.name = form_Modal[0].value;
  attend.Role = form_Modal[1].value;
  attend.image = form_Modal[2].value;
  attend.Email = form_Modal[3].value;
  attend.Telephone = form_Modal[4].value;
  attend.Experiences.push(form_Modal[6].value);

  arry_Staff.push(attend);
  form_Modal[0].value = "";
  form_Modal[1].value = "";
  form_Modal[2].value = "";
  form_Modal[3].value = "";
  form_Modal[4].value = "";
  form_Modal[6].value = "";

  form_Modal[0].style.border = "";
  form_Modal[1].style.border = "";
  form_Modal[2].style.border = "";
  form_Modal[3].style.border = "";
  form_Modal[4].style.border = "";
  form_Modal[6].style.border = "";
}
function RenderInStaff() {
  profile.innerHTML = "";
  arry_Staff.forEach((Element) => {
    profile.innerHTML += `
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

    console.log(10);
    Experiences_ajouter();
    RenderInStaff();
    modal.hide();
  }
});

const Experiences_dynamique_ajouter = document.getElementById(
  "Experiences_dynamique"
);
button_Experiences.addEventListener("click", button_Experiences_dynamique);
function button_Experiences_dynamique() {
  console.log(10);

  Experiences_dynamique_ajouter.innerHTML += `
  <label for=" " class="col-form-label">Expériences</label>
  <input type="text" class="form-control dynamique " id="dynamique" value="" required placeholder="Expériences">
  <span id="" style="color: red;"></span>
  `;
}

function Experiences_ajouter() {
  let b = document.querySelectorAll(".dynamique");
  b.forEach((Element) => {
    console.log(Element.value);

    arry_Staff.Experiences.push(Element.value);
  });
}

const zone_conference = document
  .getElementById("zone_conference")
  .addEventListener("click", () => {
    modal_zone("conference");


  });
const zone_serveurs = document
  .getElementById("zone_serveurs")
  .addEventListener("click", () => {
    modal_zone("serveurs");
  });
const zone_securite = document
  .getElementById("zone_securite")
  .addEventListener("click", () => {
    modal_zone("securite");
  });
const zone_Reception = document
  .getElementById("zone_Reception")
  .addEventListener("click", () => {
    modal_zone("Reception");
  });
const zone_personnel = document
  .getElementById("zone_personnel")
  .addEventListener("click", () => {
    modal_zone("personnel");
  });
const zone_archives = document
  .getElementById("zone_archives")
  .addEventListener("click", () => {
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
                        <span style="display: none;"></span>
                        </div>
                        </div>
                        </div>
                        `;
  });
}
const modal_zone_add = document.getElementById("modal_zone_add");
// modal_zone_add.addEventListener('click',add_Modal_Zone)
function modalZoneAdd(indix, zone) {
  const div_zone_conference = document.getElementById("div_zone_conference");
  const div_zone_serveurs = document.getElementById("div_zone_serveurs");
  const div_zone_securite = document.getElementById("div_zone_securite");
  const div_zone_Reception = document.getElementById("div_zone_Reception");
  const div_zone_personnel = document.getElementById("div_zone_personnel");
  const div_zone_archives = document.getElementById("div_zone_archives");
  switch (zone) {
    case "conference": {
      div_zone_conference.innerHTML += `
                        <div class=" d-flex justify-content-center">
                        <img src="${arry_Staff[indix].image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${arry_Staff[indix].name}</h6>
                        <button type="button" onclick="modalZoneClose('conference')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                        X
                        <span style="display: none;"></span>
                        </div>
                        
                        
                        `;
      break;
    }
    case "serveurs": {
      div_zone_serveurs.innerHTML += `
                        
                        
                        <div class=" d-flex justify-content-center">
                        <img src="${arry_Staff[indix].image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${arry_Staff[indix].name}</h6>
                        <button type="button" onclick="modalZoneClose('serveurs')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                        X
                        <span style="display: none;"></span>
                        </div>
                        
                        
                        `;
      break;
    }
    case "securite": {
      div_zone_securite.innerHTML += `
                        
                        
                        <div class=" d-flex justify-content-center">
                        <img src="${arry_Staff[indix].image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${arry_Staff[indix].name}</h6>
                        <button type="button" onclick="modalZoneClose('securite')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                        X
                        <span style="display: none;"></span>
                        </div>
                        
                        
                        `;
      break;
    }
    case "Reception": {
      div_zone_Reception.innerHTML += `
                        
                        
                        <div class=" d-flex justify-content-center">
                        <img src="${arry_Staff[indix].image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${arry_Staff[indix].name}</h6>
                        <button type="button" onclick="modalZoneClose('Reception')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                        X
                        <span style="display: none;"></span>
                        </div>
                        
                        
                        `;
      break;
    }
    case "personnel": {
      div_zone_personnel.innerHTML += `
                        
                        
                        <div class=" d-flex justify-content-center">
                        <img src="${arry_Staff[indix].image}"
                        class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
                        <h6 class="name">${arry_Staff[indix].name}</h6>
                        <button type="button" onclick="modalZoneClose('personnel')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
                        X
                        <span style="display: none;"></span>
                        </div>
                        
                        
                        `;
      break;
    }
    case "archives": {
      
      div_zone_archives.innerHTML += ` 
      
      
      <div class=" d-flex justify-content-center">
      <img src="${arry_Staff[indix].image}"
      class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
      <h6 class="name">${arry_Staff[indix].name}</h6>
      <button type="button" onclick="modalZoneClose('archives')" class=" btn btn btn-danger" data-bs-toggle="." data-bs-target=".">
      X
      <span style="display: none;"></span>
      </div>
      
      
      `;
      arry_Staff_archives.push(arry_Staff[0]) 
      arry_Staff.splice(indix,1)
       RenderInStaff()
      break;
    }
  }
}
function  RenderInStaff_dynamic(arry){

}
function modalZoneClose(zone) {
  if (zone == "conference") {
  }
  if (zone == "serveurs") {
  }
  if (zone == "securite") {
  }
  if (zone == "Reception") {
  }
  if (zone == "personnel") {
  }
  if (zone == "archives") {
  }
}
const Search_profile = document.getElementById("Search_profile");
Search_profile.addEventListener("input", () => {
  let HTML=''
  if(Search_profile.value==''){
    arry_Staff.forEach((Element)=>{
     HTML+= `
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
  })

profile.innerHTML=HTML; 
  }
  
  Search_profile_vaeli(Search_profile.value).forEach((Element)=>{
     HTML+= `
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
  })

profile.innerHTML=HTML; 
  

});

function Search_profile_vaeli(Search_vaeli) {
  let Search_add=[];
  arry_Staff.forEach((Element) => {
    Element.Experiences.forEach((elme) => {
      if (elme == Search_vaeli) {
        Search_add.push(Element);
      }
    });
  });
  return Search_add;
}
