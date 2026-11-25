const protestSubmissionForm = document.getElementById("protestSubmissionForm");
const dateInput = document.getElementById("date");
const dateToBeAnnounced = document.getElementById("dateToBeAnnounced");
const formMessage = document.getElementById("formMessage");

dateToBeAnnounced.addEventListener("change", function () {
    dateInput.disabled = dateToBeAnnounced.checked;
    dateInput.required = !dateToBeAnnounced.checked;

    if (dateToBeAnnounced.checked) {
        dateInput.value = "";
    }
});

protestSubmissionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!protestSubmissionForm.checkValidity()) {
        protestSubmissionForm.reportValidity();
        return;
    }

    formMessage.textContent = "Frontend demonstration only — no protest details were saved or sent.";
});
