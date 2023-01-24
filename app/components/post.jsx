import {Link} from '@remix-run/react';
import {formatearFecha} from '~/utils/helpers'

function Post({post}) {

    const {titulo, contenido,url, publishedAt, imagen} =post
  return (
    <article className='post'>
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen Blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="resumen">{contenido}</p>
            <Link className='enlace' to={`/blog/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post
