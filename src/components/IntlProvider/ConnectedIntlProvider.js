import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { LANGUAGE, PT_BR, EN_US } from "../../lang";

const mapStateToProps = (state) => {
  const locale = state.location.value;
  const messages = locale === LANGUAGE.EN_US ? EN_US : PT_BR;
  return { locale, messages };
}

export default connect(mapStateToProps)(IntlProvider);