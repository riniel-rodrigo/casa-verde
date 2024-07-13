import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

import * as S from "./styles.js";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValid(validateEmail(emailValue));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = () => {
    if (isValid) {
      toast.success(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail inserido.`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }

  };
  return (
    <div>
      <ToastContainer />
      <S.NewsletterDiv>
        <div>
          <MdOutlineEmail style={{ color: '#bcbcbc', fontSize: '1.7rem' }} />
          <input
            type="email"
            placeholder="Insira seu e-mail"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <S.SubmitButton
          onClick={handleSubmit}
          valid={isValid}
          disabled={!isValid}
        >
          Assinar newsletter
        </S.SubmitButton>
      </S.NewsletterDiv>
    </div>
  )
}
