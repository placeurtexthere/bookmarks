document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("bookmarks-container");

    try {
        const response = await fetch("bookmarks.json");
        const bookmarks = await response.json();

        bookmarks.forEach(bookmark => {
            const bookmarkElement = document.createElement("div");
            bookmarkElement.classList.add("bookmark");

            bookmarkElement.innerHTML = `
                <h2><a href="${bookmark.url}" target="_blank">${bookmark.title}</a></h2>
                <p>${bookmark.description}</p>
            `;

            container.appendChild(bookmarkElement);
        });
    } catch (error) {
        container.innerHTML = "<p>Failed to load bookmarks.</p>";
    }
});
