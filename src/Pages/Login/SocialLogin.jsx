import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { githubLogin, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("  registration");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-neutral btn-sm "
        >
          Google
        </button>
      </div>
      <div className="">
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-neutral btn-sm "
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
