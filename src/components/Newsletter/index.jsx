import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import emailjs from 'emailjs-com';

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

  const handleSubmit = async () => {
    if (isValid) {
      try {
        const templateParams = {
          user_email: email,
        };

        await emailjs.send(
          'service_kzk5r19',
          'template_yjn6ypd',
          templateParams,
          'HYDq5ivkhUiTh2RLt'
        );

        toast.success(`Obrigado pela sua assinatura! Você receberá nossas novidades no e-mail inserido.`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });

        setEmail('');
        setIsValid(false);

      } catch (error) {
        console.error('Erro ao enviar email:', error);
        toast.error('Ocorreu um erro ao enviar o email. Tente novamente mais tarde.', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
      }
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
