const containerHTML = document.querySelector('.container');
const selectIcon = document.querySelector('#icon-type');

function printIcons(icons, container) {
    // svuoto il container delle icone
    container.innerHTML = "";
    // aggiungo le icone
    icons.forEach((elm) => {
        const icon = `
            <div class="icon">
                <i class="${elm.family} ${elm.prefix+elm.name}" style="color: ${elm.color}"></i>
                <div>${elm.name}</div>
            </div>
        `;
        container.innerHTML = container.innerHTML + icon;
    });
}

// on load della pagina aggiungo tutte le icone presenti nell'array
printIcons(icons, containerHTML);

// on select change filtro e stampo le icone
selectIcon.addEventListener("change", function() {
    // leggo il valore della select
    const iconTypeSelected = this.value;
    // filtro le icone in base al type, icon.type === iconTypeSelected ma se iconTypeSelected è vuoto vuol dire che è stato selezionato "All"
    const iconsFiltered = icons.filter(elm => elm.type === iconTypeSelected || iconTypeSelected === "");
    // stampo nuovamente le icone
    printIcons(iconsFiltered, containerHTML);
});