const addArtwork = async(artworkId) =>{
    const id = artworkId;
    fetch(`/api/artworks/${id}`,{
        method:'POST'
    }).then(result=>result.json()).then(json=>console.log(json))
}