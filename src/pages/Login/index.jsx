// import { Link } from "react-router-dom";
import { ICFacebook, ICGoogle, ILLogin, ICLogo } from "../../assets";
import { Input, Button, CheckBox } from "../../components";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 flex flex-col justify-center items-center">
        <img src={ICLogo} alt="" />
        <p className="text-2xl font-semibold mt-10">Login</p>
        <div className="w-4/5 mt-10">
          <div className="flex gap-x-5">
            <Button icon={ICGoogle} text={'Google'} />
            <Button icon={ICFacebook} text={'Facebook'} />
          </div>
          <div className="bg-mainGray w-full h-[2px] flex justify-center items-center mt-8">
            <p className="px-3 bg-white">Or</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-10">
            <Input label={'Email'} type={'email'} />
            <Input label={'Password'} type={'password'} />
          </div>
          <div className="flex justify-between mb-10">
            <CheckBox label='Remember me' />
            <p className="text-mainColor">Reset Password?</p>
          </div>
          <Button color='bg-mainColor' textColor='text-white'>
            Login
          </Button>
        </div>
        <p className="mt-7">Don’t have account yet? <span to={'/signup'} className="text-mainColor">New Account</span></p>
      </div>
      <div className="flex-grow h-screen bg-mainGray flex justify-center items-center">
        <img src={ILLogin} alt="" />
      </div>
    </div>
  )
}

export default Login;