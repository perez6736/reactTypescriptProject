import { ChildasFC } from './child';

const parent = () => {
  return (
    <ChildasFC color="red" onClick={() => console.log('clicked')}>
      asdasda
    </ChildasFC>
  );
};
