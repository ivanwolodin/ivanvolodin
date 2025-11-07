import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1 className="Name">Иван Володин</h1>
        <h2 className="Subtitle">Разработчик · Исследователь · Физик</h2>
      </header>

      <main className="Content">
        <p>
          Добро пожаловать на мой персональный сайт. Здесь я делюсь своими проектами, идеями и
          исследованиями в области вычислительной физики и программирования.
        </p>

        <div className="Links">
          <a href="https://github.com/ivanwolodin1" target="_blank" rel="noopener noreferrer">
            GitHub { }
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn { }
          </a>
          <a href="mailto:ivanwolodin@proton.me">Email { }</a>
        </div>
      </main>

      <footer className="Footer">
        <p>© {new Date().getFullYear()} Иван Володин. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App;
