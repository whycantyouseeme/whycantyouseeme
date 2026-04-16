const catalogData = {
    "thought dump": {
        href: "catalog/dump.html",
        date: "<3",
        pinned: true
    },
    "message to six": {
        href: "catalog/20.html",
        date: "16/04/2026"
    },
    "randys story": {
        href: "catalog/19.html",
        date: "13/04/2026"
    },
    "i wrote a story instead of finishing this": {
        href: "catalog/18.html",
        date: "13/04/2026"
    },
    "love is parasitic": {
        href: "catalog/17.html",
        date: "26/03/2026"
    },
    "i don't really feel like me": {
        href: "catalog/16.html",
        date: "14/03/2026"
    },
    "god could be here": {
        href: "catalog/15.html",
        date: "24/02/2026"
    },
    "the world around us": {
        href: "catalog/14.html",
        date: "23/10/2025"
    },
    "remedy for the mentally estranged": {
        href: "catalog/13.html",
        date: "13/09/2025"
    },
    "entry of the plague": {
        href: "catalog/12.html",
        date: "16/08/2025"
    },
    "untitled (2)": {
        href: "catalog/11.html",
        date: "12/08/2025"
    },
    "an old suicide note": {
        href: "catalog/10.html",
        date: "12/08/2025"
    },
    "entry for the unrequited lover": {
        href: "catalog/9.html",
        date: "10/08/2025"
    },
    "dissociate": {
        href: "catalog/8.html",
        date: "22/07/2025"
    },
    "what is a human?": {
        href: "catalog/7.html",
        date: "20/07/2025"
    },
    "i don't remember writing this": {
        href: "catalog/6.html",
        date: "25/06/2025"
    },
    "fear": {
        href: "catalog/5.html",
        date: "06/06/2025"
    },
    "untitled (1)": {
        href: "catalog/4.html",
        date: "25/05/2025"
    },
    "old solipsism thoughts": {
        href: "media/outdated.jpg",
        date: "16/03/2025"
    },
    "exhaustion": {
        href: "catalog/2.html",
        date: "10/02/2025"
    },
    "my old ascii thing people copied": {
        href: "catalog/1.html",
        date: "23/07/2024"
    }
};


const entries = Object.entries(catalogData);

const parse = (d) => {
    const [day, month, year] = d.split("/");
    return new Date(`${year}-${month}-${day}`);
};


const pinned = entries.filter(([_, data]) => data.pinned);
const normal = entries.filter(([_, data]) => !data.pinned);

normal.sort((a, b) => parse(b[1].date) - parse(a[1].date));

const ul = document.getElementById("catalog");

pinned.forEach(([title, data]) => {
    const li = document.createElement("li");

    li.innerHTML = `
        PIN - 
        <a href="${data.href}">${title}</a>
        <span class="date"> - ${data.date}</span>
    `;

    ul.appendChild(li);
});

normal.forEach(([title, data], index) => {
    const li = document.createElement("li");

    li.innerHTML = `
        ${normal.length - index} - 
        <a href="${data.href}">${title}</a>
        <span class="date"> - ${data.date}</span>
    `;

    ul.appendChild(li);
});
