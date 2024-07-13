import { FaCircle } from "react-icons/fa";

import bannerImg from "../../assets/banner-img.jpg";

import * as S from "./styles.js";

export default function Banner() {
    return (
        <S.BannerContainer>
            <S.Banner>
                <img src={bannerImg} alt="Planta" />
                <div>
                    <span>Como conseguir</span>
                    <h2>minha planta</h2>

                    <ul>
                        <li>
                            <FaCircle style={{ color: 'ffcb47', fontSize: '2.5rem'}} />
                            <span>Escolha suas plantas</span>
                        </li>
                        <li>
                            <FaCircle style={{ color: 'ffcb47', fontSize: '2.5rem'}} />
                            <span>Faça seu pedido</span>
                        </li>
                        <li>
                            <FaCircle style={{ color: 'ffcb47', fontSize: '2.5rem'}} />
                            <span>Aguarde na sua casa</span>
                        </li>
                    </ul>
                </div>
            </S.Banner>
        </S.BannerContainer>
    )
}
