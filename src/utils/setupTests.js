import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import firebase from 'firebase';

Enzyme.configure({adapter: new Adapter()});

global.shalllow = Enzyme.shallow;

// Start firebase

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: 'https://oscars-29f50.firebaseio.com',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};

firebase.initializeApp(config);
