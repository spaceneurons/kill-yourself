import { Button } from "@mui/material";
import React from "react";

const Proposals = ({ proposals, page, setPage }) => {
  return (
    <div>
      <div>
      <Button
        onClick={() => setPage("")}
        variant='contained'
      >
        Go back
      </Button>
      </div>
      <br />
      <table className="table table-hover">
        <caption>List of Projects</caption>
          <thead>
            <tr>
                <th scope="col">#</th>
              <th scope="col">Project name</th>
              <th scope="col">Problem statement</th>
              <th scope="col">Proposed action</th>
              <th scope="col">Expected result</th>
            </tr>
          </thead>
        {proposals.map(({ project_name, problem_statement, proposed_action, expected_result }, index) => {
          return (page === "" ? (
            <h3>--No projects to display--</h3>
          ) : (
            <tbody>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{project_name}</td>
                <td>{problem_statement}</td>
                <td>{proposed_action}</td>
                <td>{expected_result}</td>
              </tr>
            </tbody>
          ));
        }
        )}
        </table>
    </div>
  );
};

export default Proposals;
