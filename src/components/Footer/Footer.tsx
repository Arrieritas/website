import styles from './Footer.module.css'
import {MdOutlineBusAlert as BusIcon} from 'react-icons/md'
import {ImOffice as OfficeIcon} from 'react-icons/im'

const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.directions}>
                <article>
                    <OfficeIcon style={{width: '70px', height: '70px'}}/>
                    <h3>DIRECCIÓN OFICINA PRINCIPAL:</h3>
                    <p>CRA. 48 Nro. 131 sur - 06 Barrio la Playita.</p>
                    <span>Teléfono 303-26-62</span>
                </article>
                <article>
                    <BusIcon style={{width: '70px', height: '70px'}}/>
                    <h3>DIRECCIÓN CENTRO DE DESPACHO:</h3>
                    <p>Vereda Primavera, Kilómetro 3, Vía la Pintada Caldas.</p>
                    <span>Teléfono 303-26-62 Ext. 2</span>
                </article>
            </section>
            <span>Todos los derechos reservados Conducciones las Arrieritas {year}</span>
        </footer>
    )
}

export default Footer