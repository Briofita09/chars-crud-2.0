export default function Char(props) {
  return (
    <div className="col-sm-4 mt-4 mb-4">
      <div className="card w-75">
        <div className="card-body">
          <p className="card-title"> Nome: {props.name}</p>
          <p className="card-text"> Ocupação: {props.occupation}</p>
          <button className="btn btn-primary w-25">Editar</button>
          <button
            className="btn btn-danger w-25 ms-2"
            onClick={props.deleteChar}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
