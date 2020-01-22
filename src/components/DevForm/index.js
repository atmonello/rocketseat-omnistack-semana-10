import React, { useState } from 'react';

import './styles.css';

export default function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username,
      techs,
    });

    setGithubUsername('');
    setTechs([]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          id="github_username"
          name="github_username"
          required
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          id="techs"
          name="techs"
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}
