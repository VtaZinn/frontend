import { useEffect, useRef, useState } from 'react';
import '../Header/Header.css';
import './About.css'
import Footer from '../Footer/Footer';

function About() {
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

  const emailLoginRef = useRef(null);
  const emailSubscribeRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubscribe = () => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('name', name);
    closeModalSubscribe();
  };

  const handleLogin = () => {
    const emailStorage = localStorage.getItem('email');
    const passwordStorage = localStorage.getItem('password');

    if (emailStorage === emailLogin && passwordStorage === passwordLogin) {
      closeModal();
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (isOpen && emailLoginRef.current) {
      emailLoginRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpenSubscribe && emailSubscribeRef.current) {
      emailSubscribeRef.current.focus();
    }
  }, [isOpenSubscribe]);

  return(
  <>
      <div className="header">
        <div className="header-menu">
          <h1>TripleSports</h1>
          <div className="header-menu__button">
            <ul className="menu-itens">
              <a href="/"><li className='title-header'>Home</li></a>
              <a href="/About"><li className='title-header'>Sobre nós</li></a>
            </ul>
            <button className='button-enter' onClick={openModal}>Entrar</button>
          </div>
        </div>
        <div className={`header-menu_mobile ${isMenuOpen ? 'header-menu_mobile-background' : ''}`}>
          <div>
            <h1>TripleSports</h1>
          </div>
          <div className="menu-container">
            <div className="hamburger" onClick={toggleMenu}>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className='nav-menu_itens'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">Sobre nós</a></li>
                <button className='button-enter button-enter_mobile' onClick={openModal}>Entrar</button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Modal de Login */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <div className='modal-content_inputs'>
              <h2>Entrar</h2>
              <p>E-mail</p>
              <input
                type="text"
                placeholder="Insira seu e-mail:"
                className="input-field"
                onChange={(e) => { setEmailLogin(e.target.value); }}
                ref={emailLoginRef} // Ref para focar no campo de e-mail
              />
              <p>Senha</p>
              <input
                type="password"
                placeholder="Insira sua senha"
                className="input-field"
                onChange={(e) => { setPasswordLogin(e.target.value); }}
              />
              {error && <p>Email ou senha inválidos!</p>}
              <button className="submit-button" onClick={handleLogin}>Entrar</button>
              <p className='modal-content_signup'>
                ou <span onClick={(e) => { e.preventDefault(); openModalSubscribe(); closeModal(); }}>Inscreva-se</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Inscrição */}
      {isOpenSubscribe && (
        <div className="modal-overlay" onClick={closeModalSubscribe}>
          <div className="modal-content modal-content_subscribe" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModalSubscribe}>&times;</button>
            <div className='modal-content_inputs'>
              <h2>Inscreva-se</h2>
              <p>E-mail</p>
              <input
                type="text"
                placeholder="Insira seu e-mail:"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
                ref={emailSubscribeRef} // Ref para focar no campo de e-mail
              />
              <p>Senha</p>
              <input
                type="password"
                placeholder="Insira sua senha:"
                className="input-field"
                onChange={(e) => { setPassword(e.target.value); }}
              />
              <p>Nome de usuário:</p>
              <input
                type="text"
                placeholder="Insira seu nome de usuário:"
                className="input-field"
                onChange={(e) => { setName(e.target.value); }}
              />
              <button className="submit-button" onClick={handleSubscribe}>Entrar</button>
              <p className='modal-content_signup'>
                já possui uma conta? <span onClick={(e) => { e.preventDefault(); openModal(); closeModalSubscribe(); }}>Faça login.</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className='content-about'>
        <div className='about'>
          <h1>Sobre o TripleSport</h1>
          <p>Bem-vindo ao TripleSport, o seu portal de referência para os melhores 
            eventos esportivos e atividades de entretenimento ao redor do mundo. 
            Nossa missão é conectar entusiastas do esporte, atletas e organizadores 
            de eventos, proporcionando uma plataforma fácil de usar para descobrir, 
            acompanhar e participar dos eventos mais emocionantes.</p>
          <h3>Quem Somos</h3>
          <p>
          Somos uma equipe apaixonada por esportes, sempre à procura de novas maneiras 
          de tornar a experiência dos fãs mais envolvente e acessível. Com o TripleSport, 
          queremos que você nunca perca a chance de participar ou assistir ao seu evento favorito, 
          seja ele um campeonato de futebol, uma maratona, competições de e-sports, ou até eventos 
          mais exclusivos como torneios de esportes radicais.
          </p>
          <h3>Nosso Compromisso</h3>
          <p>Acreditamos que o esporte tem o poder de transformar vidas e comunidades.
             Nosso compromisso é ajudar a criar oportunidades para todos, seja para aqueles
              que buscam praticar, competir ou simplesmente se divertir assistindo. Trabalhamos 
              para garantir que nossa plataforma seja sempre confiável, acessível e com a melhor
              experiência para nossos usuários.</p>
        </div>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
  </>    
  );
}

export default About;