import axios from 'axios';

const apiKey = 'VK2rDjWWXPZuHgMqPUgahFNu3dqLUdfm'
//https://api.giphy.com/v1/gifs/random?apikey=${api_Key}

const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    api_key: apiKey
  }
})

giphyApi.get('/random')
  .then(resp => {

    // console.log(resp.data.data.images.original.url)
    // const url = resp.data.data.images.original.url
    // const img = document.createElement('img')
    // img.src = url
    // document.body.append( img)
    const { data } = resp.data
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url

    document.body.append(img)
    console.log(resp)
  })
