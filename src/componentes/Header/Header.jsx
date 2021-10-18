import style from "./Header.module.css";

function Header({
  pais,
  tamanio,
  precio,
  fechaDesdeNatrural,
  fechaHastaNatural
}) {
  return (
    <div className={style.tituloHeader}>
      <h1 className={style.sub}>Este es el estado del pais:{pais} </h1>
      <h1 className={style.sub}> Este es el tamanio:{tamanio} </h1>
      <h1 className={style.sub}>Este es el precio : {precio}</h1>
      <h1 className={style.sub}> fecha desde: {fechaDesdeNatrural}</h1>
      <h1 className={style.sub}> fecha hasta: {fechaHastaNatural}</h1>
    </div>
  );
}
export default Header;
