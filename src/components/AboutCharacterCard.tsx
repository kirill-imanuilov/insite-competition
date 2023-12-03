interface AboutCharacterCardProps {
  characterName: string;
  characterIMG: string;
  characterDescription: string;
}
export function AboutCharacterCard(props: AboutCharacterCardProps) {
  return (
    <div className='about-character-card'>
      <div className='about-character-card-character-name'>
        {props.characterName}
      </div>
      <div className='about-character-card-content'>
        <img
          className='about-character-card-character-img'
          src={props.characterIMG}
        />
        <div className='about-character-card-character-description'>
          {props.characterDescription}
        </div>
      </div>
    </div>
  );
}
