import './SignUp.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import Google from '../../assets/Reges/svg/GoogleButton.svg';
import Apple from '../../assets/Reges/svg/AppleButton.svg';
import Logo from '../../assets/homepage/svg/Logo.svg';
import ChikenHell from '../../assets/Reges/png/ChikenHell.png';
import { useState } from 'react';
import Eyes from '../../assets/Reges/svg/eyes.svg';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface FormData {
  Name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    Name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").max(32).required("Email is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").max(32).required("Password is required"),
  })
  .required();

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [formValues, setFormValues] = useState<FormData>({
    Name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value || '' } as FormData));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    try {
      setError("");
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(userCredential.user, {
        displayName: data.Name
      });
      navigate("/");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className='signup'>
      <div className="signup-container1">
        <Link to="/"><img src={Logo} alt="logo" className="signup-container1__logo" /></Link>
        <main className="main">
          <div className="main-reges">
            <h1 className="main-reges__title">Sign Up To DaPay</h1>
            <div className="main-reges__socials">
              <Link to=""><img src={Google} alt="Google" /></Link>
              <Link to=""><img src={Apple} alt="Apple" /></Link>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="main-reges__form">
            {error && <p className='main-reges__error'>{error}</p>}
            <input
              {...register("Name")}
              className={`main-reges__input ${formValues.Name ? 'main-reges__input--filled' : ''}`}
              placeholder='Enter your name'
              name="Name"
              onChange={handleInputChange}
              value={formValues.Name}
            />
            <p className='main-reges__error'>{errors.Name?.message}</p>

            <input
              {...register("email")}
              className={`main-reges__input ${formValues.email ? 'main-reges__input--filled' : ''}`}
              placeholder='Enter your email'
              name="email"
              onChange={handleInputChange}
              value={formValues.email}
            />
            <p className='main-reges__error'>{errors.email?.message}</p>

            <div className="main-reges__password-wrapper">
              <input
                {...register("password")}
                className={`main-reges__input ${formValues.password ? 'main-reges__input--filled' : ''}`}
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                name="password"
                onChange={handleInputChange}
                value={formValues.password}
              />
              <span
                className="main-reges__password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <img src={Eyes} alt="Eyes" /> : '👁️'}
              </span>
            </div>
            <p className='main-reges__error'>{errors.password?.message}</p>
            <button className="main-reges__btn" type="submit">Sign Up</button>
            <p className="main-reges__text">Already have an account? <Link to="/signin" className="main-reges__link">Log In</Link></p>
          </form>
        </main>
        <div className="signup-container1__info">
          <p className="signup-container1__info-text1">Privacy Policy</p>
          <p className="signup-container1__info-text2">Copyright 2022</p>
        </div>
      </div>
      <div className="signup-container2">
        <img src={ChikenHell} className="signin-container2__img" alt="chiken" />
        <p className="signup-container2__text">Find Foods With Love</p>
      </div>
    </div>
  );
};

export default SignUp;