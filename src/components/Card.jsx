const Card = ({image, handleClick}) => {
  return (
    <div className="card shadow-md border-4 border-amber-100 bg-amber-100 focus:ring hover:bg-amber-300 hover:border-amber-300 active:border-amber-500 border-r-2">
      <img
        className="img-seagal hover:caret-neutral-100 hover:cursor-pointer"
        alt={image.location}
        src={image.location}
        onClick={handleClick}
      ></img>
    </div>
  );
};

export default Card;
