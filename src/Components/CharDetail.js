export default function CharDetail(props) {
  return (
    <>
      <form className="w-25 m-auto mt-4">
        <div className="input-group mb-3">
          <span className="input-group-text">Nome</span>
          <label className="form-control w-25">{props.name}</label>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ocupação</span>
          <label className="form-control w-25">{props.occupation}</label>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Arma</span>
          <label className="form-control w-25">{props.weapon}</label>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Em dívida?</span>
          <label className="form-control w-25">
            {props.debt ? "Claro" : "Jamais"}
          </label>
        </div>
      </form>
    </>
  );
}
