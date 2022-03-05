import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from '../components/Button';
import Nav from '../components/Nav';

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
      <div className={`app ${theme}`}>
        <Nav />
        <Button/>
      </div>
  );
}

export default Container;
