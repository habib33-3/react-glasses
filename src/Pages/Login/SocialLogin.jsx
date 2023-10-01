import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, googleLogin } = useContext(AuthContext);

  const handleSocialLogin = (media) => {
    media().then();
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
    </>
  );
};

export default SocialLogin;
