import Cards from "./componentes/cards/Cards";
import Filters from "./componentes/filters/Filters";
import Header from "./componentes/Header/Header";
import styles from "./App.module.css";
import { hotelsData } from "./statics/Data";
import { useState } from "react";
import Alerta from "./componentes/Alerta/Alerta";

function App() {
  let [pais, setPais] = useState("todos");
  let [tamanio, setTamanio] = useState("todos");
  let [precio, setPrecio] = useState("todos");
  // const [fechaDesde, setFechaDesde] = useState(null);
  // const [fechaHasta, setFechaHasta] = useState(null);
  const [fechaDesde, setFechaDesde] = useState(null);
  const [fechaHasta, setFechaHasta] = useState(null);
  //estring a destring
  let DS_desde = new Date(fechaDesde + "T00:00:00");
  let DS_hasta = new Date(fechaHasta + "T00:00:00");
  //date string a fechas naturalez
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  let fechaDesdeNatural = DS_desde.toLocaleDateString("es-co", opciones);
  let fechaHastaNatural = DS_hasta.toLocaleDateString("es-co", opciones);
  //tiempo unix
  let fechaDesdeUNIX = DS_desde.getTime();
  let fechaHastaUNIX = DS_hasta.getTime();
  //filtrar hoteles por fecha
  let hotelesFiltradosFecha = hotelsData;
  if (fechaDesde !== "" && fechaHasta !== "") {
    hotelesFiltradosFecha = hotelsData.filter((hotel) => {
      if (
        hotel.availabilityFrom <= fechaDesdeUNIX &&
        hotel.availabilityFrom >= fechaHastaUNIX
      ) {
        return true;
      } else return false;
    });
  }

  const nuevaListaHoteles = () => {
    let nuevaLista = hotelsData
      .filter((hotel) => {
        if (tamanio === "pequeño") {
          return hotel.rooms < 10;
        } else if (tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms <= 20;
        } else if (tamanio === "grande") {
          return hotel.rooms > 20;
        } else {
          return hotel;
        }
      })
      .filter((hotel) => {
        if (hotel.country === pais) {
          console.log("hola");
          return hotel;
        } else if (pais === "todos") {
          return hotel;
        }
        return null;
      })
      .filter((hotel) => {
        if (Number(precio) === hotel.price) {
          return hotel;
        } else if (precio === "todos") {
          return hotel;
        }
      });

    // .filter((hotel)=>{
    //   if ( hotel.country===pais){
    //     return hotel;
    //     }else if (pais === "todos"){
    //       return hotel;
    //       }
    //       return null;
    // })
    // .filter((hotel)=>{
    //   if(hotel.price===Number(precio)){
    //     return hotel;
    //     }else if(precio==="todos"){
    //       return hotel;
    //       }
    //       return null;
    // });
    return nuevaLista;
  };
  const nuevaListaFiltrada = nuevaListaHoteles();

  // const nuevaListaHoteles = () => {
  //   let nuevalista = hotelsData
  //     .filter((hotel) => {
  //       if (tamanio === "pequeño") {
  //         console.log("pequeños");
  //         return hotel.rooms < 10;
  //       } else if (tamanio === "mediano") {
  //         console.log("medianos");
  //         return hotel.rooms > 10 && hotel.rooms <= 20;
  //       } else if (tamanio === "grande") {
  //         return hotel.rooms > 20;
  //       } else {
  //         return hotel;
  //       }
  //     })
  //     .filter((hotel) => {
  //       if (hotel.country === pais) {
  //         console.log("hola");
  //         return hotel;
  //       } else if (pais === "todos") {
  //         return hotel;
  //       }
  //       return null;
  //     });
  //   // .filter((hotel) => {
  //   //   if (hotel.price === Number(precio)) {
  //   //     console.log("hola");
  //   //     return hotel;
  //   //   } else if (precio === "todos") {
  //   //     return hotel;
  //   //   }
  //   // });
  //   // console.log(nuevaLista);
  //   return nuevalista;
  // };
  // const nuevaListaFiltrada = nuevaListaHoteles();

  return (
    <div className={styles.App}>
      <Header
        pais={pais}
        tamanio={tamanio}
        precio={precio}
        fechaDesdeNatrural={fechaDesdeNatural}
        fechaHastaNatural={fechaHastaNatural}
      />
      <Filters
        // pais={pais}
        // setPais={setPais}
        // tamanio={tamanio}
        // setTamanio={setTamanio}
        // precio={precio}
        // setPrecio={setPrecio}
        pais={pais}
        setPais={setPais}
        precio={precio}
        setPrecio={setPrecio}
        tamanio={tamanio}
        setTamanio={setTamanio}
        fechaDesde={fechaDesde}
        setFechaDesde={setFechaDesde}
        fechaHasta={fechaHasta}
        setFechaHasta={setFechaHasta}
        DS_desde={DS_desde}
        DS_hasta={DS_hasta}
        fechaDesdeNatural={fechaDesdeNatural}
        fechaHastaNatural={fechaHastaNatural}
        hotelesFiltradosFecha={hotelesFiltradosFecha}
      />
      {/*  <Cards hotelsData={hotelsData} />}*/}
      <Cards nuevaListaFiltrada={nuevaListaFiltrada} />
      {nuevaListaFiltrada.length === 0 ? (
        <Alerta />
      ) : (
        <cards nuevaListaFiltrada={nuevaListaFiltrada} />
      )}
    </div>
  );
}
export default App;
