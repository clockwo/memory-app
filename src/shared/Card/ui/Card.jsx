import './Card.scss';

const Card = ({ title, src }) => {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
      <img className="card__img" src={src} />
    </article>
  );
};

export default Card;
