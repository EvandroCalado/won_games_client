import { IconLock, IconMail } from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../Button';
import { TextField } from '../TextField';

export const FormSignIn = () => {
  return (
    <div>
      <form className="space-y-2">
        <TextField
          name="email"
          type="email"
          placeholder="Email"
          icon={<IconMail />}
        />
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          icon={<IconLock />}
        />

        <a
          href="/"
          className="block pb-4 text-end text-sm text-black duration-150 hover:text-black/70"
        >
          Forgot your password?
        </a>

        <Button size="lg" className="w-full">
          Sign in now
        </Button>
        <div className="pt-2 text-center text-sm text-black">
          Don’t have an account?
          <Link
            href="/sign-up"
            className="ml-1 border-b text-secondary duration-150 hover:text-secondary/70"
          >
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};
