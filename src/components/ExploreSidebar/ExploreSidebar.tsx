'use client';

import { IconFilter, IconX } from '@tabler/icons-react';
import { FC, useState } from 'react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Heading } from '../Heading';
import { Radio } from '../Radio';

type FieldProps = {
  label: string;
  name: string;
};

export type ItemProps = {
  title: string;
  name: string;
  type: 'checkbox' | 'radio';
  fields: FieldProps[];
};

export type ValuesProps = {
  [key: string]: string | boolean;
};

export type ExploreSidebarProps = {
  items: ItemProps[];
  initialValues?: ValuesProps;
  onFilter: (values: ValuesProps) => void;
};

export const ExploreSidebar: FC<ExploreSidebarProps> = ({
  items,
  initialValues = {},
  onFilter,
}) => {
  const [values, setValues] = useState<ValuesProps>(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    setIsOpen(false);
    onFilter(values);
  };

  const handleChange = (name: string, value: string | boolean) => {
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  return (
    <div
      className={`${isOpen ? 'p-4 transition-[background] duration-300 max-md:bg-white' : 'duration-300'} md:block`}
    >
      {/* open/close icons */}
      <div>
        <IconFilter
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
          className={`${isOpen ? 'hidden' : 'max-md:block'} cursor-pointer text-white md:hidden`}
        />
        <IconX
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
          className={`${isOpen ? 'max-md:block' : ''} ml-auto hidden cursor-pointer text-black`}
        />
      </div>

      {/* filter and button */}
      <div
        data-testid="explore-sidebar"
        aria-hidden={isOpen}
        className={`${isOpen ? 'max-md:visible max-md:opacity-100' : 'max-md:invisible max-md:opacity-0'} relative flex flex-col justify-between transition-opacity duration-300 max-md:pb-8`}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className={`${isOpen ? 'max-md:relative max-md:top-0 max-md:[&>div>label]:text-black' : 'max-md:top-8'} mb-6 border-b-[1px] border-gray/40 pb-6 transition-[top] duration-300 [&>div>input]:mb-2`}
          >
            <Heading
              as="h3"
              size="md"
              lineBottomSecondary
              className={`${isOpen ? 'max-md:text-black' : ''} mb-4`}
            >
              {item.title}
            </Heading>

            {/* render checkbox */}
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isCheked={!!values[field.name]}
                  onCheck={(value) => handleChange(field.name, value)}
                />
              ))}

            {/* render radio */}
            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  value={field.name}
                  defaultChecked={field.name === values[item.name]}
                  onChange={() => handleChange(item.name, field.name)}
                />
              ))}
          </div>
        ))}

        {/* button */}
        <div className="bottom-0 left-0 right-0 border-t-[1px] p-4 max-md:fixed max-md:border-gray/40 max-md:bg-white">
          <Button onClick={handleFilter} className="mt-2 w-full">
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};
