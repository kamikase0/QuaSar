const api_Key = 'VK2rDjWWXPZuHgMqPUgahFNu3dqLUdfm'
//https://api.giphy.com/v1/gifs/random?apikey=VK2rDjWWXPZuHgMqPUgahFNu3dqLUdfm

fetch(`https://api.giphy.com/v1/gifs/random?apikey=${api_Key}`)
  .then(resp => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original
    //console.log(url)
    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
  })

// .catch(e => console.log(e))
