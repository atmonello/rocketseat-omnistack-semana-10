import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input id="github_username" name="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input id="techs" name="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10872514?s=460&v=4" alt="André Monello"/>
              <div className="user-info">
                <strong>André Monello</strong>
                <span>ReactJS, VueJS, Node.js</span>
              </div>
            </header>
            <p>Front-end developer @r7com. Front-end, tech and startups. São Paulo, Brasil.</p>
            <a href="https://github.com/atmonello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10872514?s=460&v=4" alt="André Monello"/>
              <div className="user-info">
                <strong>André Monello</strong>
                <span>ReactJS, VueJS, Node.js</span>
              </div>
            </header>
            <p>Front-end developer @r7com. Front-end, tech and startups. São Paulo, Brasil.</p>
            <a href="https://github.com/atmonello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10872514?s=460&v=4" alt="André Monello"/>
              <div className="user-info">
                <strong>André Monello</strong>
                <span>ReactJS, VueJS, Node.js</span>
              </div>
            </header>
            <p>Front-end developer @r7com. Front-end, tech and startups. São Paulo, Brasil.</p>
            <a href="https://github.com/atmonello">Acessar perfil no GitHub</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/10872514?s=460&v=4" alt="André Monello"/>
              <div className="user-info">
                <strong>André Monello</strong>
                <span>ReactJS, VueJS, Node.js</span>
              </div>
            </header>
            <p>Front-end developer @r7com. Front-end, tech and startups. São Paulo, Brasil.</p>
            <a href="https://github.com/atmonello">Acessar perfil no GitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
