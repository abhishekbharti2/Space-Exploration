import DummyData from '../DataSet/DocsData.json'
import React, {useState} from 'react';
import './Search.css';
import './Navbar.js'

export default function Search(props) {

  const [result, setResult] = useState(DummyData);
  const [error, setError] = useState(null);

    const getDataNow = async () =>{
    console.log(props.getData)
    let res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${props.getData}`)
    if(res.ok){
      let data = await res.json();
      setResult(data);
      setError(null)
    }
    else{
      setError("Couldn't get the Data");
      setResult(null);
    }
  }
  if(props.getData){
    getDataNow();
    props.setData(null);
  }
  return (
    <div className="search-container">
      {error && <img src = 'https://www.cedarforestfence.com/wp-content/uploads/2024/07/pngtree-error-404-page-not-found-png-image_3832696-removebg-preview.png' className='error-img' alt='error'/>}
      
      {result && (
        <div className="item-container">
          <h3 className="search-title">{result.title}</h3>
          {result.thumbnail && (
            <img
              src={result.thumbnail.source}
              alt={result.title}
              className="search-img"
            />
          )}
          <p className="search-info">{result.extract}</p>
          <a
            href={result.content_urls.desktop.page}
            target="_blank"
            rel="noreferrer"
            className="read-more"
          >
            Read more
          </a>
        </div>
      )}
    </div>
  );
}
