/* =========================
   PAGE CONTROL
========================= */

let currentPage = 1;

const totalPages = 8;


/* =========================
   SHOW PAGE
========================= */

function showPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const page =
        document.getElementById(
            `page${pageNumber}`
        );


    if (page) {

        page.classList.add("active");

        currentPage = pageNumber;

    }

}


/* =========================
   OPEN FILE
========================= */

function openFile() {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    document
        .getElementById("partyPage")
        .classList.add("active");


    /* Small opening party blast */

    createPartyBlast(30);

}


/* =========================
   NEXT PAGE
========================= */

function nextPage() {

    if (currentPage < totalPages) {

        showPage(currentPage + 1);

    }

}


/* =========================
   PREVIOUS PAGE
========================= */

function previousPage() {

    if (currentPage > 1) {

        showPage(currentPage - 1);

    }

}


/* =========================
   KEYBOARD NAVIGATION
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {

            nextPage();

        }


        if (event.key === "ArrowLeft") {

            previousPage();

        }

    }
);


/* =========================
   PARTY BLAST
========================= */

function createPartyBlast(amount = 30) {

    const container =
        document.getElementById(
            "chaos-container"
        );


    const emojis = [

        "🍻",
        "🥂",
        "🍺",
        "🍗",
        "🎂",
        "🎉",
        "🎊",
        "🥳",
        "🏍️",
        "🔥",
        "😂",
        "✨",
        "💥",
        "🔫",
        "🍻",
        "🥂",
        "🎈",
        "⚡"

    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const item =
            document.createElement("div");


        item.className =
            "chaos-item";


        item.innerText =
            emojis[
                Math.floor(
                    Math.random()
                    * emojis.length
                )
            ];


        /* Start from center */

        item.style.left = "50%";

        item.style.top = "50%";


        /* Random explosion direction */

        const x =
            (
                Math.random()
                * 1800
                - 900
            ) + "px";


        const y =
            (
                Math.random()
                * 1200
                - 600
            ) + "px";


        const rotation =
            (
                Math.random()
                * 1000
                - 500
            ) + "deg";


        item.style.setProperty(
            "--x",
            x
        );


        item.style.setProperty(
            "--y",
            y
        );


        item.style.setProperty(
            "--r",
            rotation
        );


        item.style.animationDelay =
            (
                Math.random()
                * 0.35
            ) + "s";


        container.appendChild(item);


        setTimeout(
            () => {

                item.remove();

            },
            2300
        );

    }

}


/* =========================
   FINAL CELEBRATION
========================= */

function celebrate() {

    /* Screen shake */

    document.body.classList.add(
        "shake"
    );


    /* Bright flash */

    document.body.classList.add(
        "flash"
    );


    /* FIRST HUGE BLAST */

    createPartyBlast(150);


    /* SECOND BLAST */

    setTimeout(
        () => {

            createPartyBlast(120);

        },
        250
    );


    /* THIRD BLAST */

    setTimeout(
        () => {

            createPartyBlast(100);

        },
        600
    );


    /* Remove effects */

    setTimeout(
        () => {

            document.body.classList.remove(
                "shake"
            );

            document.body.classList.remove(
                "flash"
            );

        },
        1500
    );

}