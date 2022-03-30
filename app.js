const gifContainer = $("#gif-container");

$("#search-form").on("submit", async (e) => {
    e.preventDefault();
    const search = $("#search-input");
    let searched = search.val();
    search.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search",
    {params: {q: searched, api_key:"M9clInkYZNURHJ7xxhVxFW2S3S8PQDIf"}});
    console.log(response);

    gifs(response.data);
});



function gifs(response){
    let numGifs = response.data.length;
    if(numGifs > 0){
        let randGif = Math.floor(Math.random() * numGifs);
        let newGif = $("<img/>", {
            class: "gif",
            src: response.data[randGif].images.original.url,
            width: 400,
            height: 400
        });
        console.log(newGif);
        gifContainer.append(newGif);
    }
}

$("#remove-button").on("click", (e) => {
    gifContainer.empty();
})