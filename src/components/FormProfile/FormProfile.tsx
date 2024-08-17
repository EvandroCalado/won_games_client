import { Button } from '../Button';
import { Heading } from '../Heading';
import { TextField } from '../TextField';

export const FormProfile = () => {
  return (
    <div>
      <Heading lineBottomPrimary color="black" className="mb-8">
        My account
      </Heading>

      <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <TextField name="name" label="Name" placeholder="John Doe" />
        <TextField
          name="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
          disabled
        />

        <TextField
          name="password"
          label="Password"
          type="password"
          placeholder="Type your password"
        />
        <TextField
          name="newPassword"
          label="New password"
          type="password"
          placeholder="Type your new password"
        />

        <Button className="mt-8 max-md:w-full md:col-span-2 md:justify-self-end">
          Save
        </Button>
      </form>
    </div>
  );
};
