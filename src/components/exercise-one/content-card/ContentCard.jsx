import "./content-card.scss";

const ContentCard = ({
  brandName,
  heading,
  price,
  oldPrice,
  imageDesktop,
  imageMobile,
  link = "#"
}) => {

  return (

    <a
      href={link}
      className="
      content-card
      group
      flex flex-col
      w-full
      no-underline
      text-inherit
      transition-all
      duration-300
      hover:-translate-y-[6px]
      hover:shadow-[0_12px_24px_rgba(0,0,0,0.18)]
      "
    >

      <picture
        className="
        content-card__picture
        w-full
        block
        overflow-hidden
        aspect-[456/710]
        max-[576px]:aspect-[173/276]
        "
      >

        <source
          media="(max-width:768px)"
          srcSet={imageMobile}
        />

        <img
          src={imageDesktop}
          alt={heading}
          className="
          content-card__image
          w-full
          h-full
          object-cover
          block
          transition-transform
          duration-500
          group-hover:scale-105
          "
        />

      </picture>

      <div
        className="
        content-card__info
        grid
        grid-cols-[1fr_auto]
        grid-rows-[auto_auto]
        w-full
        bg-[#52994B]
        text-white
        px-[12px]
        py-[8px]

        max-[768px]:grid-cols-1
        max-[768px]:grid-rows-[auto_auto_auto]
        max-[768px]:px-[8px]
        "
      >

        <span className="content-card__brand col-span-2 max-[768px]:col-auto">
          {brandName}
        </span>

        <h3 className="content-card__title">
          {heading}
        </h3>

        <div
          className="
          content-card__price
          flex
          gap-[8px]
          items-center
          justify-self-end
          max-[768px]:justify-self-start
          "
        >

          <span className="content-card__price-current">
            {price}
          </span>

          <span className="content-card__price-old">
            {oldPrice}
          </span>

        </div>

      </div>

    </a>

  );

};

export default ContentCard;