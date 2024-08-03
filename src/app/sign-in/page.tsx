import { FormSignIn } from '@/components';
import { Auth } from '@/templates';

const SigninPage = () => {
  return (
    <Auth title="Sign in">
      <FormSignIn />
    </Auth>
  );
};

export default SigninPage;
