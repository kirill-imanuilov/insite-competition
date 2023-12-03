import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import { QuestionMark } from './QuestionMark';

interface QuestionCardProps {
  question: string;
  answer: string;
}

export function QuestionCard(props: QuestionCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className='question-card-container'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>
        <div className='question-card' onClick={() => setIsFlipped(true)}>
          <QuestionMark />
          {props.question}
        </div>
        <div className='question-card' onClick={() => setIsFlipped(false)}>
          {props.answer}
        </div>
      </ReactCardFlip>
    </div>
  );
}
