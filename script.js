const btnLocalizacao = document.getElementById("btnLocalizacao");
const submenu = document.getElementById("submenu");

btnLocalizacao.addEventListener("click", (e) => {
    e.stopPropagation();
    submenu.classList.toggle("active");
});

document.addEventListener("click", () => {
    submenu.classList.remove("active");
});
