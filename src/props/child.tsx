interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Hello World ! {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

export const ChildasFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      Hello World ! {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
