saveBtn.addEventListener("click", function (event) {
    console.log($("#optionState").val());
    event.preventDefault();
    localStorage.setItem("optionState", JSON.stringify(optionState));
  });