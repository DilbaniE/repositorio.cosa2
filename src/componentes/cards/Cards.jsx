import style from "./Cards.module.css";
import Card from "../card/Card";

function Cards({ nuevaListaFiltrada }) {
  // console.log(hotelsData);

  return (
    <main className={style.main}>
      {nuevaListaFiltrada.map((hotel) => {
        return <Card key={hotel.slug} hotel={hotel} />;
      })}
      ;
    </main>
  );
}

export default Cards;
