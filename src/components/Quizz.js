import {
  Box,
  Typography,
  Checkbox,
  Stack,
  Divider,
  Button,
  FormControlLabel,
  Alert,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { useScore } from "../ScoreContext";

function Quizz(props) {
  const { score, setScore } = useScore();
  const choices = [
    ...props.question.correctChoices,
    ...props.question.wrongChoices,
  ];
  choices.sort(() => Math.random() - 0.5);
  const [confirmed, setConfirmed] = useState(false);
  const [correct, setCorrect] = useState(false);
  const handleConfirm = () => {
    setConfirmed(true);
    setCorrect(
      answers.every((val) => props.question.correctChoices.includes(val)) &&
        answers.length
    );
  };
  useEffect(() => {
    if (correct) {
      setScore(score + 1);
    }
  }, [correct]);
  const alert = () => {
    if (correct && confirmed)
      return <Alert severity="success">Correct !</Alert>;
    else if (!correct && confirmed)
      return <Alert severity="error">Wrong !</Alert>;
  };
  const answers = [];

  return (
    <Box
      position={"absolute"}
      left="10vw"
      top={"25vh"}
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="600px"
      minWidth="700px"
    >
      <Stack direction="column" spacing={"5vh"}>
        <Box>
          <Typography variant="h4">
            Question {props.currentQuestion + 1}: {props.question.question}
          </Typography>
        </Box>
        <Box>
          <Stack
            textAlign={"left"}
            direction="column"
            divider={<Divider flexItem />}
          >
            {choices.map((choice) => {
              return (
                <FormControlLabel
                  key={choice}
                  control={<Checkbox />}
                  label={choice}
                  onClick={(e) => {
                    if (e.target.checked) {
                      answers.push(choice);
                    } else {
                      const index = answers.indexOf(choice);
                      answers.splice(index, 1);
                      console.log(answers);
                    }
                  }}
                />
              );
            })}
          </Stack>
        </Box>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={"60vw"}
        >
          <Button
            variant="outlined"
            onClick={props.handlePrevious}
            disabled={props.currentQuestion === 0}
          >
            <ArrowBackIosIcon />
            Previous
          </Button>
          {confirmed ? (
            <Button
              variant="outlined"
              onClick={() => {
                props.handleNext();
                setConfirmed(false);
                setCorrect(false);
              }}
              disabled={props.currentQuestion === props.size - 1}
            >
              <ArrowForwardIosIcon />
              Next
            </Button>
          ) : (
            <Button variant="outlined" onClick={handleConfirm}>
              confirm
            </Button>
          )}
        </Stack>
        <Box height={"1vh"}>{alert()}</Box>
      </Stack>
    </Box>
  );
}
export default Quizz;
