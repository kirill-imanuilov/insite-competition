import './index.css';
import { Title } from './components/blocks/Title';
import { About } from './components/blocks/About';

export function Page() {
  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <About />
      </div>
    </div>
  );
}
