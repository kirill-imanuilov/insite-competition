import { QuestionCard } from '../QuestionCard';

export function Questions() {
  return (
    <div className='questions-block'>
      <div className='questions-block-content'>
        <div className='questions-block-title'>
          Есть вопросы? Давайте на них ответим
        </div>
        <div className='questions-block-subtitle'>
          Нажмите на волшебные карточки, чтобы найти ответы на часто задаваемые
          вопросы об игре.
        </div>
        <div className='questions-block-cards'>
          <div className='questions-block-cards-row'>
            <QuestionCard
              question='Каковы особенности игры?'
              answer='В Героях Китежграда есть множество захватывающих побочных миссий и испытаний, а также множество разнообразных врагов для сражения.'
            />
            <QuestionCard
              question='С какими врагами я столкнусь?'
              answer='В процессе игры вы столкнетесь со множеством разнообразных врагов для сражения.'
            />
          </div>
          <div className='questions-block-cards-row'>
            <QuestionCard
              question='Могу ли я играть с друзьями?'
              answer='Да, вы можете играть с друзьями.'
            />
            <QuestionCard
              question='Как мне улучшить своих персонажей?'
              answer='Вы можете улучшать своих персонажей с помощью специальных предметов и снаряжения.'
            />
          </div>
        </div>
      </div>
      <img className='questions-block-bg-img' src='/bgf.jpg' />
      <img
        className='go-to-the-top-button'
        src='/button.jpg'
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
}
