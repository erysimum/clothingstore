import SignIn from '../../components/signin-signup/signin.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-signup.styles.scss';

const SignInSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
