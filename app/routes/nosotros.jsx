import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'


export function meta(){
  return(
    {
      title: 'Guitar LA - Nosotros',
      description: 'Ventas de guitarras, blog de musica y mas'
    }
  )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    { //Esto lo que hace es precargar las imagenes pesadas para que vaya mas rapido
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}



function Nosotros() {
  
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>

        <div className="contenido">
          <img src={imagen} alt="Imagen sobre nosotros" />

          <div>

            <p>Curabitur erat urna, scelerisque luctus eros non, porttitor egestas eros. Curabitur sit amet ultricies purus. Aliquam erat volutpat. In vitae imperdiet felis, eget maximus dolor. Proin tincidunt tellus et lorem interdum porta. Ut dapibus magna risus, ac auctor arcu iaculis et. Sed euismod vestibulum mattis. Aliquam id maximus mi. Nulla vel risus diam. Donec et lectus at metus laoreet dapibus vel ut ex. Duis dapibus non mi non egestas. Duis vulputate commodo finibus. Aenean varius mi erat, quis suscipit nisl malesuada vitae. Proin sed magna dignissim, pellentesque quam at, porttitor est. Cras tempor nulla nec eros dictum, vitae mollis erat tincidunt.</p>

            <p>Curabitur erat urna, scelerisque luctus eros non, porttitor egestas eros. Curabitur sit amet ultricies purus. Aliquam erat volutpat. In vitae imperdiet felis, eget maximus dolor. Proin tincidunt tellus et lorem interdum porta. Ut dapibus magna risus, ac auctor arcu iaculis et. Sed euismod vestibulum mattis. Aliquam id maximus mi. Nulla vel risus diam. Donec et lectus at metus laoreet dapibus vel ut ex. Duis dapibus non mi non egestas. Duis vulputate commodo finibus. Aenean varius mi erat, quis suscipit nisl malesuada vitae. Proin sed magna dignissim, pellentesque quam at, porttitor est. Cras tempor nulla nec eros dictum, vitae mollis erat tincidunt.</p>
          </div>
        </div>
    </main>
  )
}

export default Nosotros
