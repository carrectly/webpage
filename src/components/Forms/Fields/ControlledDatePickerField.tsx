import React, { FC, useCallback } from 'react';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';
import { Control, Controller } from 'react-hook-form';
interface ControlledDatePickerFieldProps {
  fieldName: string;
  fieldLabel: string;
  control: Control;
  required?: boolean;
  disabled?: boolean;
  startDate?: Moment;
}

function range(start: number, end: number) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

const ControlledDatePickerField: FC<ControlledDatePickerFieldProps> = ({
  control,
  fieldName,
  fieldLabel,
  required,
  startDate = moment(),
  disabled,
}) => {
  const disabledDate = useCallback(
    (date: Moment) => {
      const dateToCheck = date
        .clone()
        .set({ hour: startDate.hour(), minute: 10, second: 0 });
      return (
        dateToCheck.weekday() === 0 ||
        dateToCheck < startDate.clone().startOf('day') ||
        (dateToCheck.isSame(startDate, 'day') &&
          dateToCheck >
            startDate.clone().set({ hour: 16, minute: 0, second: 0 }))
      );
    },
    [startDate]
  );

  const disabledTime = useCallback(
    (date: Moment | null) => {
      if (date && date.isSame(startDate, 'day')) {
        return {
          disabledHours: () => [
            ...range(
              0,
              startDate.clone().add(150, 'minutes').startOf('hour').hour()
            ),
            ...range(18, 24),
          ],
        };
      }
      return {
        disabledHours: () => [...range(0, 8), ...range(18, 24)],
      };
    },
    [startDate]
  );

  return (
    <Controller
      control={control}
      name={fieldName}
      rules={{ required }}
      render={({ field }) => (
        <DatePicker
          format="YYYY-MM-DD HH:00"
          placeholder={fieldLabel}
          disabled={disabled}
          showTime={{
            showHour: true,
            hideDisabledOptions: true,
          }}
          disabledDate={disabledDate}
          disabledTime={disabledTime}
          style={{ width: '100%', padding: '16.5px 14px' }}
          size="large"
          {...field}
        />
      )}
    />
  );
};

export default ControlledDatePickerField;
