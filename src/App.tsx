import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import Arrow from './assets/leftarrow.png';
import { Level, calculateIMC, levels } from './helpers/imc';
import GridItem from './components/GridItem/GridItem';


const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);


  const handleCalculate = () => {
    if(height && weight){
      setToShow(calculateIMC(height, weight));
    }else{
     alert('Preencha todos os campos');
    }
  }

  const handleBack = () => {
    setToShow(null);
    setHeight(0);
    setWeight(0);
  }


  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.logoTipo}>
          <img src={poweredImage} alt='logo' width={200} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>IMC é a sigla para Indice de Massa Corpórea, parametro adotado pela Organização Mundial de Saúde (OMS)</p>

          <input
          type='number'
          placeholder='Digite a sua altura (Ex: 1.78)'
          disabled= {toShow ? true : false}
          value={height > 0 ? height : ''} 
          onChange={ e => setHeight(parseFloat(e.target.value))}
          />

          <input
          type='number'
          placeholder='Digite o seu peso (Ex: 75)'
          disabled= {toShow ? true : false}
          value={weight > 0 ? weight : ''} 
          onChange={ e => setWeight(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculate} disabled= {toShow ? true : false}> Calcular </button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key) => (
               <GridItem key={key} item={item} />
            ))}
          </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBack}>
              <img src={Arrow} alt='arrow' width={25} />
            </div>
            <GridItem item={toShow} />
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;