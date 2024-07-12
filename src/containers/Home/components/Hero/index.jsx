import * as S from './styles.js';
import * as GB from '../../../../styles/globalStyles.js';
import Newsletter from '../../../../components/Newsletter/index.jsx';

export default function Hero() {
  return (
    <S.containerHero>
      <S.Hero>
        <S.section1>
          <span>Sua casa com as </span>
          <S.div1>
            <div>
              <GB.Title>melhores</GB.Title>
              <GB.Title>plantas</GB.Title>
            </div>
            <p>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
            <Newsletter />
          </S.div1>
        </S.section1>
      </S.Hero>
    </S.containerHero>
  )
}
