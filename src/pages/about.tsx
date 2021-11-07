import EmotionButton from '../components/Buttons/EmotionButton';
import StyledEmotionButton from '../components/Buttons/StyledEmotionButton';
import Layout from '../components/Layout/Layout';
import AboutCard from '../components/AboutCards/AboutCard';
import aboutInfoArray from '../data/about.json'
import {Box} from '@mui/material'

const about = () => {
  console.log(aboutInfoArray[0])
  return (
    <Layout>
    <div>
      <h1>About</h1>
      <StyledEmotionButton />
      <Box display="flex" flexDirection='row' flexWrap='wrap'>
      {aboutInfoArray.map((el) => (
          <AboutCard info={el}/>
      ))}
    </Box>
    </div>
    </Layout>
  );
};

export default about;
