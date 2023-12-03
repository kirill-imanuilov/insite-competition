import { AboutCharacterCard } from '../AboutCharacterCard';

export function About() {
  return (
    <div className='about-block'>
      <div className='about-block-game-plot'>
        <div className='about-block-game-plot-title'>Сюжет игры</div>
        <div className='about-block-game-plot-content'>
          Много лет назад в городе Китежграде могущественная и таинственная злая
          сила угрожала городу и его жителям. В отчаянной попытке защитить город
          появились трое могущественных героев: водитель, пилот и Аркадий
          Паровозов. Вооруженные своими уникальными навыками, эти три героя
          отправляются спасать Китежград из лап злого бихолдера. Вместе они
          должны использовать свои навыки вождения, пилотирования и
          сверхспособности, чтобы справиться с врагами и препятствиями и
          защитить город от сил зла. С помощью сверхзвуковых героев город
          Китежград будет спасен!
        </div>
      </div>
      <div className='about-characters'>
        <AboutCharacterCard
          characterName='Водитель'
          characterIMG='/driver.jpg'
          characterDescription='Водитель - опытный гонщик со страстью к скорости. Он бесстрашен и решителен и использует свои гоночные способности, чтобы опережать врагов и преодолевать препятствия. Его сверхспособности включают в себя: супер-маневренность, позволяющую ему выполнять невероятные трюки, повышенную просночть и улучшенные навыки вождения.'
        />
        <AboutCharacterCard
          characterName='Пилот'
          characterIMG='/pilot.jpg'
          characterDescription='Пилот - опытный и храбрый авиатор. Он использует свои невероятные летные навыки, чтобы опережать врагов и преодолевать препятствия. Его сверхспособности включают в себя: молниеносную реакцию, сверхскорость и улучшенные навыки пилотирования, позволяющие ему летать даже над самой опасной местностью.'
        />
        <AboutCharacterCard
          characterName='Аркадий Паровозов'
          characterIMG='/Arcadii.jpg'
          characterDescription='Легендарный Аркадий Паровозов - могущественный супергерой, которому поручено защищать город от сил зла. Он отважен и использует свою огромную силу и сверхспособности, чтобы опережать врагов и преодолевать препятствия. Его сверхспособности включают в себя: сверхсилу, улучшенные рефлексы и сверхскорость.'
        />
      </div>
    </div>
  );
}
