import './index.css';
import { Title } from './components/blocks/Title';
import { About } from './components/blocks/About';
import { Questions } from './components/blocks/Questions';

export function Page() {
  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <About />
        <Questions />
        <img src='/bg.jpg' />
      </div>
    </div>
  );
}
