import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="">
        <img
          src="https://avatars.githubusercontent.com/u/58996814?s=460&u=78c0b4e5174cdec529708125bf4a221d1f7c55c4&v=4"
          alt="Caio Cichetti"
        />
        <div>
          <strong>caiocichetti/github-explorer</strong>
          <p>Me aventurando no frontend 🚀</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
