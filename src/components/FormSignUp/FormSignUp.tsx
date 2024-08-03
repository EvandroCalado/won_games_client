import { IconLock, IconMail, IconUserCircle } from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../Button';
import { TextField } from '../TextField';

export const FormSignUp = () => {
  return (
    <div>
      <form className="space-y-2">
        <TextField
          name="name"
          type="text"
          placeholder="Name"
          icon={<IconUserCircle />}
        />
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
        <TextField
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          icon={<IconMail />}
        />

        <div className="pt-4">
          <Button size="lg" className="w-full">
            Sign up now
          </Button>
        </div>
        <div className="pt-2 text-center text-sm text-black">
          Already have an account?
          <Link
            href="/sign-up"
            className="ml-1 border-b text-secondary duration-150 hover:text-secondary/70"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};
