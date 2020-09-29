import { compose } from 'redux';

import connectRedux from './redux'
import connectTheme from './theme'


export default compose(connectTheme, connectRedux);