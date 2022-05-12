import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Button, TextField } from "@mui/material";


const ProposalTempl = ({ setPage }) => {

  const CHARACTER_LIMIT = 255;

  const [proposalName, setProposalName] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [proposedAction, setProposedAction] = useState("");
  const [expectedResult, setExpectedResult] = useState("");
  const [proposals, setProposals] = useState([]);

  const project_name = proposalName;
  const problem_statement = problemStatement;
  const proposed_action = proposedAction;
  const expected_result = expectedResult;

  const handleProposalName = (e) => {
    e.preventDefault();
    setProposalName(e.target.value);
  };

  const handleProblemStatement = (e) => {
    e.preventDefault();
    setProblemStatement(e.target.value);
  };

  const handleProposedAction = (e) => {
    e.preventDefault();
    setProposedAction(e.target.value);
  };

  const handleExpectedResult = (e) => {
    e.preventDefault();
    setExpectedResult(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { project_name, problem_statement, proposed_action, expected_result };

      const res = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      setProposals([...proposals, res]);
      setProposalName("");
      setProblemStatement("");
      setProposedAction("");
      setExpectedResult("");
      setPage("");

    } catch (error) {
      console.error(error.message);
    }
  };


  return (
    <div>
      <Container
        style={{ width: "100%" }}
      >
        <Button
        onClick={() => setPage("")}
        variant='contained'
      >
          Back
        </Button>
        <br />
        <br />
        <TextField
          required
          id="project-name"
          label="Project name"
          placeholder="What is the name of your proposal?"
          variant="outlined"
          style={{ width: "100%" }}
          value={proposalName}
          onChange={handleProposalName}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-basic"
          label="Problem statement"
          variant="outlined"
          placeholder='What problem are you trying to solve?'
          style={{ width: "100%" }}
          value={problemStatement}
          onChange={handleProblemStatement}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-multiline-static"
          label="Proposed action"
          placeholder='How are you going to solve the problem?'
          multiline
          rows={5}
          inputProps={{
            maxLength: CHARACTER_LIMIT,
          }}
          style={{ width: "100%" }}
          value={proposedAction}
          onChange={handleProposedAction}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-multiline-static"
          label="Expected result"
          placeholder='What are you hoping to achieve?'
          multiline
          rows={5}
          inputProps={{
            maxLength: CHARACTER_LIMIT,
          }}
          style={{ width: "100%" }}
          value={expectedResult}
          onChange={handleExpectedResult}
        />
        <br />
        <br />
        <div>
          <Button
            id='submit'
            variant="contained"
            size='large'
            onClick={handleSubmit}
            color='primary'
          >
            Add Project
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ProposalTempl;
