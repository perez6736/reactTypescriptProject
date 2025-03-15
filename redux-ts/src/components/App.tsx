import { Provider } from 'react-redux';
import { store } from '../state';
import RepoList from './RepoList';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>search for repo</h1>
        <RepoList></RepoList>
      </div>
    </Provider>
  );
}

export default App;
