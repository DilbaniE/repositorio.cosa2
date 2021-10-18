import style from "./Card.module.css";

function Card({ hotel }) {
  const reserbado = () => {
    alert("hotel reserbado");
  };
  return (
    <div className={style.card}>
      <h1 className={style.titulo}>{hotel.name}</h1>
      <h5 className={style.titulo}>{hotel.country}</h5>
      <img src={hotel.photo} className={style.imagen} alt="" />
      <p>tamaño:{hotel.rooms}</p>
      {Array.from({ length: hotel.price }).map((e) => {
        return <span>$</span>;
      })}
      ;
      <div className={style.conten}>
        <p>{hotel.description}</p>
      </div>
      {Array.from({ length: 4 - hotel.price }).map((e) => {
        return <span className={style.opaco}>$</span>;
      })}
      ;<button onClick={reserbado}>reserbado</button>
    </div>
  );
}

export default Card;
