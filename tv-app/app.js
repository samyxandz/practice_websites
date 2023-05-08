const form = document.getElementById('search-form')
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const para={params:{q:searchTerm}}   
    const res =await axios.get(`http://api.tvmaze.com/search/shows`,para)
    makeImages(res.data)
    form.elements.query.value = '';
    setTimeout(()=>document.getElementById('image_space').innerHTML='',15000);
}
)

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.getElementById('image_space').appendChild(img)
        }
    }
}
