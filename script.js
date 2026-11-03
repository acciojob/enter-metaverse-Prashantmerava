document.addEventListener("DOMContentLoaded", function() {

    let btn = document.getElementById("enterBtn");
    let status = document.getElementById("status");

    btn.addEventListener("click", function() {

        let heading = document.createElement("h1");
        heading.textContent = "Entered Metaverse";

        status.replaceWith(heading);

    });

});