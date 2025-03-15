import { HtmlHTMLAttributes, ReactEventHandler, useState } from 'react';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const onSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSub}>
        <input value={term} onChange={onChange}></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepoList;
