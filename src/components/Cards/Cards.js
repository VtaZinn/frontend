import './Cards.css';
import { useEffect, useState } from 'react';

function Card(props) {
  const attractions = props.content._embedded.attractions;

  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem('saved') || '[]');
    
    const itemIndex = savedItems.findIndex(savedItem => savedItem.id === props.content.id);
    if (itemIndex !== -1) {
      setSaved(true); 
    } else {
      setSaved(false); 
    }
  }, [props.content.id]); 

  const handleSave = () => {
    const savedItems = JSON.parse(localStorage.getItem('saved') || '[]');

    const itemIndex = savedItems.findIndex(savedItem => savedItem.id === props.content.id);
  
    if (itemIndex === -1) {
      savedItems.push(props.content);
      setSaved(true); 
    } else {
      savedItems.splice(itemIndex, 1);
      setSaved(false); 
    }

    localStorage.setItem('saved', JSON.stringify(savedItems));

    console.log(savedItems);
  };
  
  return(
    <div className='content-cards_text'>
      <div className={`content-cards-save  ${saved === false ? 'content-cards-icon' : 'content-cards-iconSaved' }`} onClick={handleSave}>

      </div>
      <img src={props.content.images[0]?.url} alt={props.name} className='card-image'/>
      <div className='content-text'>
        <h3>{props.content.name}</h3>
        <p className='content-text_gray'> DATA: {props.content.dates.start.localDate}</p>
        <p>HORÁRIO: {props.content.dates.start.localTime}</p>
        <p className='content-text_gray'> ATRAÇÃO: {attractions && attractions[0]?.name}</p>
      </div>
    </div>
  );
}

function Cards(props) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  const [itemsToShow, setItemsToShow] = useState(3); 

  const [result, setResult] = useState(props.result);
  const [showSave, setShowSave] = useState(false);
  useEffect(()=>{
    setResult(props.result)
  },[
    props.result
  ])

  const showMoreItems = () => {
    setItemsToShow(prev => prev + 3);
  }

  const handleFilter = () => {
    if(showSave === true) {
      setResult(props.result);
      setShowSave(false);
    } else {
      const cardsSaved = JSON.parse(localStorage.getItem('saved') || '[]');
      setResult(cardsSaved);
      setShowSave(true);
    }

  }

  return (
    <>
      <div className='cards'>
        <div className='content-cards'>
          {isLoggedIn === 'true' ? (
            <div>
              <div className='content-cards_header'>
                <h1>Procurar resultados</h1>
                <div className='card-button'>
                  <button className='show-more' onClick={handleFilter}>
                    {showSave === true ? 'Mostrar todos os eventos' : 'Mostrar eventos salvos'}
                  </button>
                </div>
              </div>
              

              {result?.length === 0 && (
                <h2>Nenhum evento com este nome foi encontrado!</h2>
              )}

              <div className='content'>
                {
                  result?.slice(0, itemsToShow).map((item) => {
                    return (
                      <div key={item.id}>
                        {item && <Card content={item} />}
                      </div>
                    );
                  })
                }
              </div> 
              {itemsToShow < result?.length && (
                <div className='card-button'>
                  <button className='show-more' onClick={showMoreItems}>
                    Mostrar mais
                  </button>
                </div>
              )}
            </div>
          ) : (
            <h1>Faça Login para ver os eventos!</h1>
          )}
        </div>
      </div>
    </>
  );
}
export default Cards;