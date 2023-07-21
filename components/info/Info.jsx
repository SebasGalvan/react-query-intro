import React from 'react'

function Info() {
  return (
    <>
        <p>Estoy usando <b>React Query</b> para realizar la consulta al API de posts y obtener sus datos</p>
        <p>Durante la carga aparece "Cargando posts..." hasta que estos esten listos, utilizando la funcionalidad de React Query <b>isLoading.</b></p>
        <p>En caso de suceder un error tambien lo manejamos con las funcianalidades de React Query, <b>isError.</b> </p>
    </>
  )
}

export default Info