export function Title() {
  return (
    <div>
      <div className='title-block'>
        <div className='title-block-content'>
          <div className='title-block-title'>Герои Китежграда</div>
          <div className='title-block-subtitle'>
            Станьте непревзойденным героем и примите вызов по спасению
            Китежграда!
          </div>
          <button className='title-block-download-button'>Загрузить</button>
        </div>
        <img className='title-block-bg-img' src='/bgs.jpg' />
        <img className='title-block-plane-img' src='/header.jpg' />
      </div>
    </div>
  );
}
