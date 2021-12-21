import React, { FC } from 'react';
import { DatePicker } from 'antd';
import moment, { Moment } from 'moment';

interface datePickerCustomProps {
  placeHolder: string;
  value?: Moment;
  onChange?: (value: Moment | null, dateString: string) => void;
}

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return (
    (current && current < moment().add(-1, 'days').endOf('day')) ||
    moment(current).weekday() === 0
  );
}

function disabledDateTime() {
  return {
    disabledHours: () => [...range(0, 8), ...range(18, 24)],
  };
}

const DatePickerCustom: FC<datePickerCustomProps> = ({
  placeHolder,
  value,
  onChange,
}) => {
  return (
    <DatePicker
      format="YYYY-MM-DD HH:mm"
      placeholder={placeHolder}
      showTime={{
        defaultValue: moment('00:00:00', 'HH:mm'),
        minuteStep: 60,
      }}
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      hideDisabledOptions={true}
      style={{ width: '100%', padding: '16.5px 14px' }}
      size="large"
      value={value}
      onChange={onChange}
    />
  );
};

export default DatePickerCustom;
