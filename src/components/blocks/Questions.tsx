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
        <div className='questions-block-cards'></div>
      </div>
      <img className='questions-block-bg-img' src='/bgf.jpg' />
    </div>
  );
}
