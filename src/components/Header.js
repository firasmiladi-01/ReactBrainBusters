import { Box, Stack, Typography } from "@mui/material";
import { useScore } from "../ScoreContext";
function Header(props) {
  const {score}=useScore(); 
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="auto">
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <nav>
            <Typography variant="h4" gutterBottom>
              React Brain Busters
            </Typography>
          </nav>
          <nav>
            Question Number {props.currentQuestion + 1}/{props.size}
          </nav>
          <nav>
            <>your score: {score}</>
          </nav>
        </Stack>
      </Box>
    </Box>
  );
}
export default Header;
