import { MdOutlineEmail } from "react-icons/md";
import * as S from "./styles.js";

export default function Newsletter() {
  return (
    <div>
        <S.NewsletterDiv>
            <div>
                <MdOutlineEmail style={{ color: '#bcbcbc', fontSize: '1.7rem'}}/>
                <input type="email" placeholder="Insira seu e-mail" />
            </div>
            <button>Assinar newsletter</button>
        </S.NewsletterDiv>
    </div>
  )
}
