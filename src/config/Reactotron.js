import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

//react-app coloca essa variával nas variáveis de desenvolvimento
if(process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}
