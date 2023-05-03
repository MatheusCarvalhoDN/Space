import logo1 from './logo1.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'


export default function Cabecalho(){
  return (
    <header className={styles.cabecalho}>
      <img src={logo1} alt="Logo do Alura Space" />
      <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="text"
        placeholder="O que você procura?" />
        <img src={search} alt="ícone de lupa" />
      </div>
    </header>
  )
}