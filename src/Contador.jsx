import { useState } from "react";
import styles from "./button.module.css";

export default function Contador() {
  let [contador, setContador] = useState(0);

  //verifica se contador é menor que 10, se sim, ele continua incrementando
  function increase() {
    contador < 10 ? setContador(++contador) : null;
    console.log(contador);
  }

  function decrease() {
    //verifica se contador é maior que 0, se sim, ele continua decrementando
    contador > 0 ? setContador(--contador) : null;
    console.log(contador);
  }

  let displayColor = "black";

  if (contador === 10) {
    displayColor = "green";
  } else if (contador === 0) {
    displayColor = "red";
  }

  return (
    <div className="contador">

      <h1>Contador</h1>

      <p style={{ color: displayColor }}>{contador}</p>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={decrease}>
          -
        </button>

        <button className={styles.button} onClick={increase}>
          +
        </button>
      </div>
      
      <span>Criado por <a href="https://github.com/EcsedeiPedro" target="_blank" rel="noreferrer">Pedro Ecsedei</a></span>

    </div>
  );
}
