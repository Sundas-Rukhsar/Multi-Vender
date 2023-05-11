import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const addArt = () => {
    navigate("/form");
  };
  const showArt = () => {
    navigate("/admin-products");
  };
  const showUsers = () => {
    navigate("/allusers");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="d-flex justify-content-around text-center">
        <button onClick={addArt} type="button" className="btn btn-primary">
          Add Art
        </button>
        <button onClick={showArt} type="button" className="btn btn-primary">
          All Arts
        </button>
        <button onClick={showUsers} type="button" className="btn btn-primary">
          Show All Users
        </button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Admin;
