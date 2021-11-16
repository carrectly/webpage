import React from 'react';
import { Box, Typography, Tabs, Tab, Accordion, AccordionSummary, AccordionDetails  } from '@mui/material';
import Layout from '../components/Layout/Layout';
import faqData from '../data/faq.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faq = () => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

  return (
    <Layout>
      <Typography variant="h2" align="center">
        FAQ
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Item One" />
          <Tab value="two" label="Item Two" />
          <Tab value="three" label="Item Three" />
        </Tabs>

        {faqData.basics && faqData.basics.map((el) => (
                 <Accordion>
                 <AccordionSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel1a-content"
                   id="panel1a-header"
                 >
                   <Typography>{el.question}</Typography>
                 </AccordionSummary>
                 <AccordionDetails>
                   <Typography>
                    {el.answer}
                   </Typography>
                 </AccordionDetails>
               </Accordion>
        ))}
      </Box>
    </Layout>
  );
};

export default faq;
