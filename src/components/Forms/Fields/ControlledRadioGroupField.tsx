import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

interface RadioGroupFieldProps {
  control: Control;
  fieldName: string;
  fieldLabel: string;
  options: { label: string; value: string }[];
}

const ControlledRadioGroupField: React.FC<RadioGroupFieldProps> = ({
  control,
  fieldName,
  fieldLabel,
  options = [],
}) => {
  if (options.length === 0) return null;

  return (
    <Controller
      control={control}
      name={fieldName}
      defaultValue={options[0].value}
      render={({ field }) => (
        <FormControl fullWidth>
          <FormLabel component="legend">{fieldLabel}</FormLabel>
          <RadioGroup row value={field.value || ''} onChange={(e) => field.onChange(e)}>
            {options.map((option) => (
              <FormControlLabel
                key={`${fieldName}-${option.value}-option`}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
};

export default ControlledRadioGroupField;
