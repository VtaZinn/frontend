import './Header.css';
import React, { useEffect, useState } from 'react';
import {search} from '../../api/events'

function Header(props){
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubscribe, setOpenSubiscribe] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setError(false);
  }

  const openModalSubscribe = () => setOpenSubiscribe(true);
  const closeModalSubscribe = () => setOpenSubiscribe(false); 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [error, setError] = useState(false);

  const [keyword, setKeyWord] = useState('');


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.keyCode === 27) {
        closeModal(); 
        closeModalSubscribe();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async () => {
    const response = await search(keyword);
    props.setResult(response);
  }

  useEffect(()=>{
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleSubscribe = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('name', name);
    closeModalSubscribe();
  }

  const handleLogin = () => {
    const emailStorage = localStorage.getItem('email');
    const passwordStorage = localStorage.getItem('password');

    if(emailStorage === emailLogin && passwordStorage === passwordLogin){
      closeModal();
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setError(true);
    }
  }

  return(
    <>
      <div className="header">
        <div className="header-menu">
          <h1>TripleSports</h1>
          <div className="header-menu__button">
            <h1 className='title-header'>Home</h1>
            <button className='button-enter' onClick={openModal}>Entrar</button>
          </div>
        </div>
        <div className={`header-menu_mobile ${isMenuOpen ? 'header-menu_mobile-background' : ''}`}>
          <div>
            <h1>TripleSports</h1>
          </div>
          <div>
          <div className="menu-container">
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className='nav-menu_itens'>
              <li><a href="/">Home</a></li>
              <button className='button-enter button-enter_mobile' onClick={openModal}>Entrar</button>
            </ul>
          </nav>
        </div>
          </div>
          
        </div>
        <div className='content-header'>
          <div className='content-header_title'>
            <h1>Quais eventos</h1>
            <h1>estão acontecendo?</h1>
            <p>Encontre eventos perto de sua casa!</p>
            <div className='content-header_button'>
              <input type='text' placeholder='Inserir tema' onChange={(e)=>{setKeyWord(e.target.value)}}/>
              <button className='btn-search' onClick={handleSearch}>Procurar</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className='modal-content_inputs'>
              <h2>Entrar</h2>
              <p>E-mail</p>
              <input type="text" placeholder="Insira seu e-mail:" className="input-field" onChange={(e)=>{setEmailLogin(e.target.value)}}/>
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha" className="input-field" onChange={(e)=>{setPasswordLogin(e.target.value)}} />
              {error && <p>Email ou senha inválidos!</p>}
              <button className="submit-button" onClick={handleLogin}>
                Entrar
              </button>
              <p className='modal-content_signup'>
                ou <span onClick={(e) => { e.preventDefault(); openModalSubscribe();  closeModal();}}>Inscreva-se</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {isOpenSubscribe && (
        <div className="modal-overlay" onClick={closeModalSubscribe}>
          <div className="modal-content modal-content_subscribe" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModalSubscribe}>
              &times;
            </button>
            <div className='modal-content_inputs'>
              <h2>Inscreva-se</h2>
              <p>E-mail</p>
              <input type="text" placeholder="Insira seu e-mail:" className="input-field" onChange={(e)=>setEmail(e.target.value)}/>
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha:" className="input-field" onChange={(e)=>{setPassword(e.target.value)}}/>
              <p>Nome de usuário:</p>
              <input type="text" placeholder="Insira seu nome de usuário:" className="input-field" onChange={(e)=>{setName(e.target.value)}}/>
              <button className="submit-button" onClick={handleSubscribe}>
                Entrar
              </button>
              <p className='modal-content_signup'>
                ja possui uma conta? <span onClick={(e) => {e.preventDefault(); openModal(); closeModalSubscribe();}}>Faça login.</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
