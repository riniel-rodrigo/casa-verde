import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import * as S from './styles.js';

export default function Header() {
  const { pathname } = useLocation();

  return (
    <S.containerHeader>
      <S.Header>
        <img src={logo} alt="Logo - Folha comum e nome 'Casa Verde' ao lado " />

        <S.ListBox>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/How">
              Como Fazer
            </Link>
          </li>

          <li>
            <Link to="/Offers">
              Ofertas
            </Link>
          </li>

          <li>
            <Link to="/Depositions">
            Depoimentos
            </Link>
          </li>

          <li>
            <Link to="/Videos">
            Vídeos
            </Link>
          </li>

          <li>
            <Link to="/Cart">
            Carrinho
            </Link>
          </li>
        </S.ListBox>
      </S.Header>
    </S.containerHeader>
  )
}
