import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Danny', age: 30 },
  { name: 'Tom', age: 23 },
  { name: 'Kevin', age: 26 },
];

const UserSearch: React.FC = () => {
  const [name, SetName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  return (
    <div>
      usersearch
      <input value={name} onChange={(e) => SetName(e.target.value)} />
      <button onClick={onClick}>Find user</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  );
};

export default UserSearch;
