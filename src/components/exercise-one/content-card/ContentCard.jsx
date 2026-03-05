import "./content-card.scss";

const ContentCard = ({ description }) => {
  return (
    <article className="content-card flex flex-col h-full">
      <div className="content-card__image-wrapper pt-5 px-5">
        <img
          className="content-card__image w-full block rounded-lg"
          src="https://placehold.co/400x300"
          alt="Card image"
        />
      </div>

      <div className="content-card__body flex flex-col flex-1 p-5 text-center">
        <p className="content-card__description flex-grow">
          {description}
        </p>

        <button className="content-card__button self-center">
          READ MORE
        </button>
      </div>
    </article>
  );
};

export default ContentCard;