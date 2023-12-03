export function News() {
  return (
    <div className='news-block'>
      <div className='news-block-container'>
        <div className='news-block-title'>Новости</div>
        <div className='news-block-subtitle'>
          Получайте информацию о последних обновлениях, дополнениях и изменениях
          в игре.
        </div>
        <div className='news-block-subscription'>
          <input
            type='email'
            className='news-block-subscription-email'
            placeholder='Введите свою почту'
          />
          <button className='news-block-subscription-button'>
            Подписаться
          </button>
        </div>
        <img className='news-block-container-img' src='/bell.png' />
      </div>
      <img className='news-block-bg-img' src='/bgg.jpg' />
    </div>
  );
}
