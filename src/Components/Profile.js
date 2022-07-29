import { Link } from "react-router-dom";
export default function Profile(props) {
  return (
    <>
      <form className="w-25 m-auto mt-4">
        <div className="input-group mb-3">
          <span className="input-group-text">Nome</span>
          <label className="form-control w-25">{props.name}</label>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Email</span>
          <label className="form-control w-25">{props.email}</label>
        </div>
        <Link to="/profile/edit">
          <button className="btn btn-primary w-25">Editar</button>
        </Link>
      </form>
    </>
  );
}
