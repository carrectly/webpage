import React from 'react';
import { Controller, Control, FieldErrors } from 'react-hook-form';
import {
  Autocomplete,
  TextField,
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material';

interface formFieldProps {
  control: Control;
  errors: FieldErrors;
  fieldName: string;
  fieldLabel: string;
  options: string[];
  required?: boolean;
  loading?: boolean;
  disabled?: boolean;
  handleChange?: (value: string) => void;
}

const ControlledAutocompleteField: React.FC<formFieldProps> = ({
  control,
  errors,
  fieldName,
  fieldLabel,
  required,
  options,
  loading,
  disabled,
}) => {
  const OPTIONS_LIMIT = 500;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (
    options: unknown[],
    state: FilterOptionsState<unknown>
  ) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Controller
      name={fieldName}
      control={control}
      rules={{ required }}
      defaultValue={null}
      render={({ field }) => (
        <Autocomplete
          {...field}
          fullWidth
          options={options}
          loading={loading}
          disabled={disabled}
          onChange={(_, data) => field.onChange(data)}
          filterOptions={filterOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={errors[fieldName] && `${fieldLabel} is required`}
              error={Boolean(errors[fieldName])}
              label={fieldLabel}
              variant="outlined"
            />
          )}
        />
      )}
    />
  );
};

export default ControlledAutocompleteField;
