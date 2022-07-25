const Info = ({data}) => {
  return (
    <div className="informacion">
    {data?.carrier?.name != null && <h3>Nombre: <span>{data?.carrier.name}</span></h3>}
    {data?.ip != null && <h3>IP:  <span>{data?.ip}</span></h3>}
    {data?.connection?.domain != null && <h3>Dominio: <span><a href={`https://${data?.connection.domain}`} target="_blank">{data?.connection.domain}</a></span></h3>}
    {data?.connection?.organization != null && <h3>Organización: <span>{data?.connection.organization}</span></h3>}
    {data?.connection?.type != null && <h3>Tipo: <span>{data?.connection.type}</span></h3>}

    <div>
      {data?.location?.country?.name != null && <h3>País: <span>{data?.location.country.name}</span></h3>}
      {data?.location?.country?.flag?.wikimedia != null && <img width="50" src={`${data?.location.country.flag.wikimedia}`} alt="imagen" />}
    </div>

  </div>
  )
}

export default Info