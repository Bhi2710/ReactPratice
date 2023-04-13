import React, { useEffect, useState } from 'react'

const Photo = () => {

    const [photos, setPhotos] = useState("nature");
    const [result, setResult] = useState([]);

    const changePhotos = () => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${photos}&client_id=IWL2h8fldqu6CUScgHQVG7YgASuXNJeQPQaBfSumloE`)
            .then(res => res.json())
            .then(data => {
                setResult(data.results);
            }
        )
    }

    useEffect(()=>{
        changePhotos();
    },[])


    return (
        <>
            <div>
                <div className='nav-form'>
                    <p>Image Search</p>
                    <div>
                        <input type='text' value={photos} onChange={(e) => {setPhotos(e.target.value)}} />&emsp;
                        <button type='submit' onClick={changePhotos}>Search</button>
                    </div>
                </div>
            </div>


            <div  className='image-container'>
              {result.map((ele,idx)=>{
                return(
                    <>
                      <div key={idx}>
                        <img src={ele.urls.small}  alt={ele.description} width="350px" height="350px"/>
                      </div>
                      <div className='map_detail'>
                        <p>{ele.user.first_name}</p>
                        <p>{ele.created_at}</p>
                      </div>
                    </>
                )
              })}
            </div>
        </>
    )
}

export default Photo