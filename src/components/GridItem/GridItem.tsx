import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
}
const GridItem = ({ item } : Props) => {
  return (
    <div className={styles.gridItem} style={{ backgroundColor: item.color }}> 
        <div className={styles.gridIcon}>
            <img src={item.icon === 'up' ? upImage : downImage} alt={item.title} width={30} />
            
        </div>
        <div className={styles.gridTitle}>{item.title}</div>

        {item.yourImc && (
            <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m²</div>
        )}

        <div className={styles.gridImc}>
            <>
                IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
        </div>
    </div>
  )
}

export default GridItem