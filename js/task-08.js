const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail !== "" && password !== "") {
    console.log(formData);
    form.reset();
    return;
  }
  alert("не введені всі поля");
  form.reset();
  // mail !== "" && password !== ""
  //   ? console.log(formData)
  //   : alert("не введені всі поля");
}
