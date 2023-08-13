document.addEventListener("DOMContentLoaded", () => {
  // apparition - disparition modal
  document.querySelector(".btn-signup").addEventListener("click", () => {
    document.querySelector("#modal").classList.add("show");
    document.querySelector("body").classList.add("non-scroll");
  });

  document.querySelector(".fa-xmark").addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("show");
    document.querySelector("body").classList.remove("non-scroll");
  });

  // Form
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const sujet = document.querySelector("#sujet").value;
    const message = document.querySelector("#message").value;

    const response = await axios.post(
      "https://form-b--formulaire-back--hpyqm5px6d9r.code.run/form",
      {
        firstname,
        lastname,
        email,
        sujet,
        message,
      }
    );

    console.log("response>>", response.data);
  });
});
