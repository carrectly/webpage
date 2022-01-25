import React from 'react';
import { List, ListItem, Typography } from '@mui/material';
import { Control, FieldErrors } from 'react-hook-form';
import ControlledInputField from './Fields/ControlledInputField';
import { IMaskInput } from 'react-imask';

interface CustomerInformationFormProps {
  control: Control;
  errors: FieldErrors;
}

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        //@ts-expect-error Incorrect type declaration in library, no fix at time of import
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export const CustomerInformationForm: React.FC<
  CustomerInformationFormProps
> = ({ control, errors }) => {
  const customerFields = [
    {
      fieldName: 'firstName',
      fieldLabel: 'First Name',
    },
    {
      fieldName: 'lastName',
      fieldLabel: 'Last Name',
    },
    {
      fieldName: 'email',
      fieldLabel: 'Email',
      extraProps: { inputProps: { type: 'email' } },
      rules: {
        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      },
    },
    {
      fieldName: 'phoneNumber',
      fieldLabel: 'Phone Number',
      extraProps: {
        InputProps: {
          inputComponent: TextMaskCustom as any,
        },
      },
      rules: {
        minLength: 14,
      },
      helperText: {
        minLength: undefined,
      },
    },
  ];

  return (
    <>
      <Typography component="h4" variant="h4" align="center">
        Customer Information
      </Typography>

      <List>
        {customerFields.map((field) => (
          <ListItem key={`customer-input-${field.fieldName}`}>
            <ControlledInputField
              control={control}
              errors={errors}
              required
              minLength={2}
              fieldName={field.fieldName}
              fieldLabel={field.fieldLabel}
              customRules={field.rules}
              extraProps={field.extraProps}
              customHelperText={field.helperText}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
