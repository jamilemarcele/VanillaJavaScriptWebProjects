const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
// More is for the pagination results
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
const searchSongs = async (term) => {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    showData(data);
}

// Show song and artist in DOM
const showData = (data) => {
    // Another way to do it with forEach
    // let output = "";
    // data.data.forEach(song => {
    //     output += `
    //     <li>
    //         <span><strong>${song.artist.name}</strong> -
    //         ${song.title}</span>
    //         <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    //     </li>
    //     `;
    // });
    //
    // result.innerHTML = `
    // <ul class="songs">
    //     ${output}
    // </ul>
    // `;

    result.innerHTML = `
        <ul class="songs"> 
        ${data.data.map(song =>
        `<li>
           <span><strong>${song.artist.name}</strong> - ${song.title}</span>
           <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">
              Get Lyrics
           </button>
         </li>`).join("")}
        </ul>
    `;
}


// Event listeners
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim();

    if (!searchTerm) {
        alert("Please type in a search term");
    } else {
        searchSongs(searchTerm);
    }
});
