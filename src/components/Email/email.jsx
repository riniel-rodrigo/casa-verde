import PropTypes from 'prop-types';
import { Html, Button } from "@react-email/components";

export function Email(props) {
  const { url } = props;
  return (
    <Html lang="pt-br">
        <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa oi</p>
      <Button href={url}>Clique aqui</Button>
    </Html>
  );
}

Email.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Email;
