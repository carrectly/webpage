import React, { FC } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Control, Controller } from 'react-hook-form';

interface ControlledDatePickerFieldProps {
  fieldName: string;
  fieldLabel: string;
  control: Control;
  required?: boolean;
}

function range(start: number, end: number) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current: moment.MomentInput) {
  // Can not select days before today and today
  return (
    (current && current < moment().endOf('day')) ||
    moment(current).weekday() === 0
  );
}

function disabledDateTime() {
  return {
    disabledHours: () => [...range(0, 8), ...range(18, 24)],
  };
}

const ControlledDatePickerField: FC<ControlledDatePickerFieldProps> = ({
  control,
  fieldName,
  fieldLabel,
  required,
}) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{ required }}
      render={({ field }) => (
        <DatePicker
          format="YYYY-MM-DD HH:mm"
          placeholder={fieldLabel}
          showTime={{
            defaultValue: moment('00:00:00', 'HH:mm'),
            minuteStep: 60,
          }}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          hideDisabledOptions={true}
          style={{ width: '100%', padding: '16.5px 14px' }}
          size="large"
          {...field}
        />
      )}
    />
  );
};

export default ControlledDatePickerField;
