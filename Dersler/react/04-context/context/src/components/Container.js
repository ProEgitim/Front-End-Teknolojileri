import { useTheme } from '../context/ThemeContext';
import Button from '../components/Button';
import Nav from '../components/Nav';

function Container() {
  const { theme } = useTheme();
  return (
      <div className={`app ${theme}`}>
        <Nav />
        <Button/>
      </div>
  );
}

export default Container;
