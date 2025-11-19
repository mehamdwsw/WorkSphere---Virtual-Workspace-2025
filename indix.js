let arry_Staff = {
  Rôle: "",
  image: "",
  Email: "",
  Téléphone: "",
  Expériences: [],
};
const form_Modal = document.getElementById("form_Modal");
const butSavechanges = document.getElementById("btn_Save_changes");
const regexName = /^[a-zA-Z\s'-]+$/;
butSavechanges.addEventListener("click", true_Tajoute);
const ajouter = document.getElementById("ajouter");
let nan = false;
butSavechanges.setAttribute("data-bs-dismiss", "modal");
function true_Tajoute() {
  
  
  

  
  
  butSavechanges.click();

if (butSavechanges.attributes[3].value="1") {
    ajouterInDiv();
    console.log(10);
    butSavechanges.setAttribute("data-bs-dismiss", "modal");
  }
  butSavechanges.setAttribute("data-bs-dismiss", "1");
}
function ajouterInDiv() { 
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
  form_Modal[1].value = "réception";
  form_Modal[2].value = "";
  form_Modal[3].value = "";
  form_Modal[4].value = "";
  form_Modal[6].value = "";
}
// const modalElement = document.getElementById('exampleModal');
  // const modalInstance = bootstrap.Modal.getInstance(modalElement);
  // modalInstance.hide();
  //   if (!regexName.test(form_Modal[0].value)) {
  //     return;
  //   }