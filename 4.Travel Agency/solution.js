window.addEventListener('load', solution);

function solution() {
  const addButton = document.getElementById('submitBTN');
  addButton.addEventListener('click', addEvent);
  function addEvent(e){
    e.preventDefault();
    let fullName = document.getElementById('fname');
    let email = document.getElementById('email');
    let phoneNumber = document.getElementById('phone');
    let address = document.getElementById('address');
    let postalCode = document.getElementById('code');
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');


    let div = document.getElementById('block');
    addButton.disabled = true;
    editButton.disabled = false;
    continueButton.disabled = false;
    if(!fullName.value && !email.value){
      return;
    }
    let ul = document.getElementById('infoPreview');
    let fullNameLi = document.createElement('li');
    let emailLi= document.createElement('li');
    let phoneNumberLi= document.createElement('li');
    let addressLi = document.createElement('li');
    let postalCodeLi= document.createElement('li');
    let fullNameTextContent = 'Full Name: ' + fullName.value;
    let fullEmailTextContent = 'Email: ' + email.value;
    let fullPhoneNumberTextContent = 'Phone Number: ' + phoneNumber.value;
    let fullAddressTextContent = 'Address: '+ address.value;
    let fullPostalCodeTextContent = 'Postal Code: ' + postalCode.value;
    fullNameLi.textContent = fullNameTextContent;
    emailLi.textContent = fullEmailTextContent;
    phoneNumberLi.textContent = fullPhoneNumberTextContent
    addressLi.textContent = fullAddressTextContent
    postalCodeLi.textContent = fullPostalCodeTextContent;
    ul.appendChild(fullNameLi);
    ul.appendChild(emailLi);
    ul.appendChild(phoneNumberLi);
    ul.appendChild(addressLi);
    ul.appendChild(postalCodeLi);
    fullName.value = '';
    email.value = '';
    phoneNumber.value = '';
    address.value = '';
    postalCode.value = '';
    editButton.addEventListener('click', editInfo);
    continueButton.addEventListener('click', continueInfo);
    function editInfo(e){
      e.preventDefault();
      let nameE = fullNameTextContent.split(': ');
      let emailE = fullEmailTextContent.split(': ');
      let phoneE = fullPhoneNumberTextContent.split(': ')
      let addressE = fullAddressTextContent.split(': ');
      let postalCodeE = fullPostalCodeTextContent.split(': ');

      fullName.value = nameE[1];
      email.value = emailE[1];
      phoneNumber.value = phoneE[1];
      address.value = addressE[1];
      postalCode.value = postalCodeE[1];
      addButton.disabled= false;
      editButton.disabled = true;
      continueButton.disabled= true;

      ul.remove();

    }
    function continueInfo(){

      div.innerHTML= '';
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank You For Your Reservation.';
      div.appendChild(h3);

    }



  }

}
function solution() {
  let nameField = document.querySelector('#fname');
  let mailField = document.querySelector('#email');
  let phoneField = document.querySelector('#phone');
  let adressField = document.querySelector('#address');
  let postalField = document.querySelector('#code');

  let submitButton = document.querySelector('#submitBTN');

  let previewBox = document.querySelector("#infoPreview");

  //let actions = document.querySelector('.actions');
  let block = document.querySelector('#block');


  submitButton.addEventListener('click', (event) => {
    if (!nameField.value || !mailField.value) {
      return;
    }

    let name = nameField.value;
    let mail = mailField.value;
    let phone = phoneField.value;
    let address = adressField.value;
    let postal = postalField.value;

    let nameLI = document.createElement('li');
    nameLI.textContent = `Full Name: ${name}`;

    let mailLI = document.createElement('li');
    mailLI.textContent = `Email: ${mail}`;

    let phoneLI = document.createElement('li');
    phoneLI.textContent = `Phone Number: ${phone}`;

    let addressLI = document.createElement('li');
    addressLI.textContent = `Address: ${address}`;

    let postalLI = document.createElement('li');
    postalLI.textContent = `Postal Code: ${postal}`;

    previewBox.appendChild(nameLI)
    previewBox.appendChild(mailLI);
    previewBox.appendChild(phoneLI);
    previewBox.appendChild(addressLI);
    previewBox.appendChild(postalLI);

    nameField.value = '';
    mailField.value = '';
    phoneField.value = '';
    adressField.value = '';
    postalField.value = '';
    event.target.disabled = true; //disables submit button

    let editButton = document.querySelector('#editBTN');
    let continueButton = document.querySelector('#continueBTN');

    editButton.disabled = false;
    continueButton.disabled = false;

    editButton.addEventListener('click', (event) => {
      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;

      previewBox.removeChild(nameLI)
      previewBox.removeChild(mailLI);
      previewBox.removeChild(phoneLI);
      previewBox.removeChild(addressLI);
      previewBox.removeChild(postalLI);

      nameField.value = name;
      mailField.value = mail;
      phoneField.value = phone;
      adressField.value = address;
      postalField.value = postal;
    });

    continueButton.addEventListener('click', (event) => {
      block.innerHTML = '';
      let h3 = document.createElement('h3');
      h3.textContent = `Thank you for your reservation!`;
      block.appendChild(h3);
    });
  });
}