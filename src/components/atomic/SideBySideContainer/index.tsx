import Box from '@mui/material/Box';
import styles from './index.module.css';

type SideBySideContainerProps = {
  children: any
}

const SideBySideContainer = ({ children }: SideBySideContainerProps) => (
  <Box className={styles.mainContainer}>
    {children}
  </Box>
);

export default SideBySideContainer;