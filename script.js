function setReceiverTabIndexes(){
    document.getElementById("date").tabIndex=1;
    document.getElementById("receivedAirwayBill" ).tabIndex=2;
    document.getAnimations("message").tabIndex=3;
    document.getElementById('message').tabIndex=4;
    document.getElementById()
}

// // Function to set tabindex for receiver elements
 //function setReceiverTabIndexes() {
  // document.getElementById("receivedAirwayBill").tabIndex = 2;
//   document.getElementById("receivedDate").tabIndex = 4;
//   document.getElementById("receivedMobileNo").tabIndex = 6;
//   document.getElementById("receivedSubject").tabIndex = 8;
//   document.getElementById("receivedWeight").tabIndex = 10;
//   document.getElementById("receivedMessage").tabIndex = 12;
//   document.getElementById("receiveremailid").tabIndex = 14;
//   document.getElementById("receivedAmount").tabIndex = 15;
// }

// // Call the functions to set tab indexes
// setSenderTabIndexes();
 //setReceiverTabIndexes();

// let date = document.getElementById("date").value;
// let mobilenumber = document.getElementById("mobileNo").value;
// let subject = document.getElementById("subject").value;

const scriptURL = "https://script.google.com/macros/s/AKfycbwHyuG6A8Xv7QTdQCWoGLUU9DlGyELGTf_2xTrvEZD-6GXhLX33Wy2LUU4Io94s8NLx/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch((error) => console.error("Error!", error.message));
});



// generateBarcodeBtn.addEventListener('click', () => {
//   displayBarcode();
// });
// function displayBarcode() {
//   const airwayBillNo = document.getElementById('receivedAirwayBill').value;
//   JsBarcode(document.getElementById('receivedbarcodecontainer'), airwayBillNo, {
//       format: "CODE128",
//       width: 2,
//       height: 60,
//   });
// // }
// const courierSelect = document.getElementById("courierSelect");
// courierSelect.onchange = function (e) {
//     const selectedValue = e.target.value;
//     console.log(selectedValue)
//     console.log(e)
//     const companyImage = document.getElementById("companyImage");
//     switch (selectedValue) {
//         case "ST courier":
//             companyImage.src = "./images/dtdc.webp";
//             break;
//         case "xxx courier":
//             companyImage.src = "./images/foot-logo.png";
//             break;
//         case "yyy courier":
//             companyImage.src = "yyy_courier_logo.jpg";
//             break;
//         case "xxb courier":
//             companyImage.src = "xxb_courier_logo.jpg";
//             break;
//         case "aaa courier":
//             companyImage.src = "images/images.jpeg";
//             break;
//         default:
//             companyImage.src = "images/red3.jpg";
//     }
// }

// courierSelect.addEventListener("change", function (e) {
//     const selectedValue = e.target.value;
//     console.log(selectedValue)
//     const companyImage = document.getElementById("companyImage");
//     switch (selectedValue) {
//         case "ST courier":
//             companyImage.src = "./images/dtdc.webp";
//             break;
//         case "xxx courier":
//             companyImage.src = "./images/foot-logo.png";
//             break;
//         case "yyy courier":
//             companyImage.src = "yyy_courier_logo.jpg";
//             break;
//         case "xxb courier":
//             companyImage.src = "xxb_courier_logo.jpg";
//             break;
//         case "aaa courier":
//             companyImage.src = "images/images.jpeg";
//             break;
//         default:
//             companyImage.src = "images/red3.jpg";
//     }
// });


// current date update
const dateInput = document.getElementById('date');
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const day = String(currentDate.getDate()).padStart(2, '0');
dateInput.value = `${year}-${month}-${day}`;

// prevent from the button submiting

const forms= document.getElementById('form');
const staticEntriesCheckbox = document.getElementById('staticEntries');
const staticEntriesDisplay = document.getElementById('staticEntriesDisplay');

forms.addEventListener('submit', function (e) {
  e.preventDefault(); 

  const ReciverEmail = document.getElementById('ReciverEmail').value;
  const airwayBillNo = document.getElementById('receivedAirwayBill').value;
  const message = document.getElementById('message').value;
  const mobileNOR = document.getElementById('ReciverMobile').value;
  const recivierName = document.getElementById('ReciverName').value;

  if (staticEntriesCheckbox.checked) {
    // Display static entries and clear other form fields
    staticEntriesDisplay.innerHTML = `
      <p><strong>Name:</strong> ${ReciverEmail}</p>
      <p><strong>Email:</strong> ${airwayBillNo}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Mobile No:</strong> ${mobileNOR}</p>
      <p><strong>recivierName:</strong>${recivierName}</p>
    `;

    // Clear the form fields
    document.getElementById('ReciverEmail').value = '';
    document.getElementById('receivedAirwayBill').value = '';
    document.getElementById('message').value = '';
    document.getElementById('ReciverMobile').value = '';
    document.getElementById('ReciverName').value = '';
  } else {
    // Clear the static entries display
    staticEntriesDisplay.innerHTML = '';
  }
});
