
import logo from '../../assets/logo.svg';

import * as S from './styles.js';

export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="Logo - Folha comum e nome 'Casa Verde' ao lado " />

      <S.ListBox>
        <li>Como Fazer</li>
        <li>Ofertas</li>
        <li>Depoimentos</li>
        <li>Vídeos</li>
        <li>Carrinho</li>
      </S.ListBox>
    </S.Header>
  )
}
