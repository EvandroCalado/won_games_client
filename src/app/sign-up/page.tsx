import { FormSignUp } from '@/components';
import { Auth } from '@/templates';

const SignupPage = () => {
  return (
    <Auth title="Sign up">
      <FormSignUp />
    </Auth>
  );
};

export default SignupPage;
