const fecharMenu = document.getElementById("fechar-menu");
const abrirMenu = document.getElementById("abrir-menu");

fecharMenu.addEventListener("click", () => {
    document.getElementById("container-lateral").style.display = "none";
    abrirMenu.style.display = "unset";
})

abrirMenu.addEventListener("click", () => {
    abrirMenu.style.display = "none";
    document.getElementById("container-lateral").style.display = "flex";
})
