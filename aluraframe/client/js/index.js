var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor') 
];

document.querySelector(".form").addEventListener("submit", function(event) {
    
    event.preventDefault();
    
    var tr = document.createElement("tr");

    campos.forEach(campo => {
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;
    tr.appendChild(tdVolume);

    var table = document.querySelector("table tbody");
    table.appendChild(tr);
    this.reset();
    campos[0].focus();
});


