import { Button } from './components/button';
import { EyeOpen } from './icons';

function App() {
  return (
    <div>
        <Button size={54} type='primary' startIcon={<EyeOpen />} href='https://www.google.com/'>asd</Button>
    </div>
  );
}

export default App;
