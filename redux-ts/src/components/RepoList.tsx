import { HtmlHTMLAttributes, ReactEventHandler, useState } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepo } = useActions();
  const { data, error, loading } = useTypedSelector((state) => {
    return state.repos;
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepo(term);
  };

  return (
    <div>
      <form onSubmit={onSub}>
        <input value={term} onChange={onChange}></input>
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>'Loading..'</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepoList;
