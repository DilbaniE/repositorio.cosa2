import react from "react";
import style from "./Filters.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { hotelsData } from "../../statics/Data";

function Filters({
  hotelesFiltradosFecha,
  fechaDesdeNatural,
  fechaHastaNatural,
  pais,
  setPais,
  precio,
  setPrecio,
  tamanio,
  setTamanio,
  fechaDesde,
  setFechaDesde,
  fechaHasta,
  setFechaHasta,
  DS_desde,
  DS_hasta
}) {
  const manejarFechaDesde = (e) => {
    setFechaDesde(e.target.value);
  };
  const manejarFechaHasta = (e) => {
    setFechaHasta(e.target.value);
  };

  const limpiarFiltros = () => {
    // alert("limpiar");
    setFechaDesde("");
    setFechaHasta("");
    setPais("todos");
    setPrecio("todos");
    setTamanio("todos");
  };

  const cambioPais = (e) => {
    setPais(e.target.value);
    let nuevaLista = hotelsData;

    console.log(nuevaLista);
  };

  const cambioPrecio = (e) => {
    setPrecio(e.target.value);
    let nuevaLista2 = hotelsData;

    return nuevaLista2;
  };

  const cambioTamanio = (e) => {
    setTamanio(e.target.value);
  };

  return (
    <div className={style.tituloFilters}>
      <div>
        <input value={fechaDesde} type="date" onChange={manejarFechaDesde} />
      </div>
      <div>
        <input value={fechaHasta} type="date" onChange={manejarFechaHasta} />
      </div>
      {/* soy el Filters
      {hotelesFiltradosFecha.map((hotel) => {
        return <h2>{hotel.name}</h2>;
      })} */}
      ;
      <select value={pais} name="" id="" onChange={cambioPais}>
        <option value="todos">todos los paises</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select value={tamanio} name="" id="" onChange={cambioTamanio}>
        <option value="todos">todos los tamaños</option>
        <option value="pequeño">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
      <select value={precio} name="" id="" onChange={cambioPrecio}>
        <option value="todos">todos</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>
      <button onClick={limpiarFiltros} className={style.button}>
        <FontAwesomeIcon icon={faTrash} />
        --limpiar
      </button>
    </div>
  );
}
export default Filters;
