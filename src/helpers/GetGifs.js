export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zStYmmWJ0z5zM5m24ft72NRHm6g99z8n&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const info = data.map( ({id, title, images}) => ({
            id: id,
            title: title,
            url: images.downsized_medium.url
            }
        )
    )
    
    return info;
}