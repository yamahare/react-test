import React from 'react';

type Props = {
  text: string;
};

const Header: React.FC<Props> = props => {
  return (
    <header className="App-header">
      <h2>{props.text}</h2>
    </header>
  );
}

export default Header;
