import React, { FC, useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Layout from '../components/Layout/Layout';
import faqData from '../data/faq.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TabPanelProps, faqSubGroupsTypes } from '../../utils/types';

const faqSubGroupsArr = ['basics', 'services', 'payments', 'changes', 'info'];

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const renderAccordion = (
  faqDataObj: any,
  faqGroup: faqSubGroupsTypes
): React.ReactNode => {
  if (faqDataObj[faqGroup]) {
    return faqDataObj[faqGroup].map((el: any, index: number) => (
      <Accordion key={`accordiong_id_${index}`}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{el.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{el.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ));
  }
  return <div />;
};

const Faq = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Typography variant="h2" align="center">
        FAQ
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {faqSubGroupsArr.length &&
              faqSubGroupsArr.map((el, i) => (
                <Tab
                  label={el.toUpperCase()}
                  {...a11yProps(i)}
                  key={`tab_id_${i}`}
                />
              ))}
          </Tabs>
        </Box>
        {faqSubGroupsArr.length &&
          faqSubGroupsArr.map((el, i) => (
            <TabPanel value={value} index={i} key={`tabpanel_id_${i}`}>
              {renderAccordion(faqData, el)}
            </TabPanel>
          ))}
      </Box>
    </Layout>
  );
};

export default Faq;
