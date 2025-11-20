let arry_Staff = {
  Rôle: "",
  image: "",
  Email: "",
  Téléphone: "",
  Expériences: [],
};

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
document.getElementById("validation_Rôle").addEventListener("click", () => {
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
document.getElementById("Expériences").addEventListener("input", () => {
  if (regexName.test(form_Modal[6].value)) {
    form_Modal[6].style.border = "thick solid #0ee90aff";
  } else {
    form_Modal[6].style.border = "thick solid #ee0b0bff";
  }
});

function ajouterInStaff() {
  const profile = document.getElementById("profile");
  arry_Staff.name = form_Modal[0].value;
  arry_Staff.Rôle = form_Modal[1].value;
  arry_Staff.image = form_Modal[2].value;
  arry_Staff.Email = form_Modal[3].value;
  arry_Staff.Téléphone = form_Modal[4].value;
  arry_Staff.Expériences = form_Modal[6].value;
  profile.innerHTML += `
  <div class="card profile-card p-3" id="profile">
  <div class="d-flex justify-content-center" style="width: 14vh; height: auto;">
  <div class=" justify-content-center">
  <img src="${arry_Staff.image}"
  class=" profile-image rounded-circle" style="width: 5vh; height: 5vh;">
  <h6 class="name">${arry_Staff.name}</h6>
  <button type="button" class="btn btn-secondary" data-bs-toggle="." data-bs-target=".">
  details
  </button>
  </div>
  </div>
  </div>
  `;
  form_Modal[0].value = "";
  form_Modal[1].value = "";
  form_Modal[2].value = "";
  form_Modal[3].value = "";
  form_Modal[4].value = "";
  form_Modal[6].value = "";
}

function formvalidation() {
  // value of all inputs

  let name = form_Modal[0].value;
  let Rôle = form_Modal[1].value;
  let image = form_Modal[2].value;
  let Email = form_Modal[3].value;
  let Téléphone = form_Modal[4].value;
  let Expériences = form_Modal[6].value;

  const tele_error_zone = document.getElementById("tele-error-zone");
  // validation
  let haserror = true;
  if (!regexName.test(name)) {
    haserror = false;
  }
  if (!Rôle) {
    haserror = false;
  }
  if (!imageUrlRegex.test(image)) {
    haserror = false;
  }
  if (!emailRegex.test(Email)) {
    haserror = false;
  }
  if (!phoneNumberRegex.test(Téléphone)) {
    haserror = false;
    tele_error_zone.textContent = "*";
  } else {
    tele_error_zone.textContent = "";
  }
  if (!regexName.test(Expériences)) {
    haserror = false;
  }

  // return true if all the fileds correct, false if not

  return haserror;
}

// #####################
const form_Modal = document.getElementById("form_Modal");
const myModalEl = document.getElementById('exampleModal');

const butSavechanges = document.getElementById("btn_Save_changes");
butSavechanges.addEventListener("click", (e) => {
  const modalInstance = bootstrap.Modal.getInstance(myModalEl);
  
  
  if (formvalidation()) {
    ajouterInStaff();
    modalInstance.hide();
    console.log(10);
    
  }
});
