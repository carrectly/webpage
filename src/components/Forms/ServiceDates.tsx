import { List, ListItem } from '@mui/material';
import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => [...range(0, 8), ...range(18, 24)],
  };
}

export default function DatePickerPage() {
  return (
    <List>
      <ListItem>
        <DatePicker
          format="YYYY-MM-DD HH:mm"
          placeholder="Desired vehicle pickup date:"
          showTime={{
            defaultValue: moment('00:00:00', 'HH:mm'),
            minuteStep: 60,
          }}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          hideDisabledOptions={true}
          style={{ width: '100%', padding: '16.5px 14px' }}
          size="large"
        />
      </ListItem>
      <ListItem>
        <DatePicker
          format="YYYY-MM-DD HH"
          placeholder="Desired vehicle return date:"
          showTime={{
            defaultValue: moment('00:00:00', 'HH:mm'),
            minuteStep: 60,
          }}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          hideDisabledOptions={true}
          style={{ width: '100%', padding: '16.5px 14px' }}
          size="large"
        />
      </ListItem>
    </List>
  );
}
