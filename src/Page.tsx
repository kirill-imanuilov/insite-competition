import './index.css';
import { Title } from './components/blocks/Title';
import { About } from './components/blocks/About';
import { Questions } from './components/blocks/Questions';
import { News } from './components/blocks/News';

export function Page() {
  return (
    <div className='page'>
      <div className='page-content'>
        <Title />
        <About />
        <Questions />
        <img src='/bg.jpg' />
        <News />
        <div className='go-text'>
          Отправляйтесь в эпическое приключение прямо сейчас
        </div>
      </div>
    </div>
  );
}
