import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
 const [gif, setGif] = useState('');
 const [loading, setLoading] = useState('false');


 async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    console.log(imageSource)
    setGif(imageSource)
    setLoading(false);
}

 useEffect( () => {
    fetchData();
 },[] )

function clickHandler() {
  fetchData();
}

  return (
    <div className='w-1/2 min-h-500 gap-10 p-10 bg-white rounded-lg border border-red-500 flex flex-col items-center justify-center '>
        <h1 className='text-3xl'>
            Random
        </h1>

{
    loading ? (<Spinner/>) : (<img src={gif} width='300' />
)
}

        <button onClick={clickHandler} 
        className="bg-blue-300 rounded-lg text-lg w-1/2 pt-3" >
            Generate another random gif 
        </button>

    </div>
  )
}

export default Random