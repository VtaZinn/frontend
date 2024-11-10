import '../Content/Content.css'
import Basquete from '../../images/basquete.jpg'

function Content() {
  return(
    <>
      <div className='content'>
        <div className='content-description'>
          <img src={Basquete} alt="Garota meditando" className='ball'/>
          <div className='content-description_text'>
            <h1>Acompanhe todos os eventos que estão acontecendo</h1>
            <p>Descubra o que está acontecendo na sua cidade! Nossa plataforma 
              traz uma seleção dos melhores eventos ao seu redor, desde shows, 
              festivais e palestras até workshops e atividades culturais. Não perca
              a oportunidade de participar de eventos incríveis e conhecer novas pessoas.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;