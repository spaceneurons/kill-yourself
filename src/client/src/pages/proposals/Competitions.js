import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Competitions = ({ page, setPage }) => {

  const [competitions, setCompetitions] = useState([]);

  const getCompetitions = async () => {
    try {
      const response = await axios.get("/api/competition");
      const data = response.data;
      setCompetitions(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCompetitions();
  }, [page]);


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
            <br />
      <table className="table table-hover">
        <caption>List of Competitions</caption>
          <thead>
            <tr>
                <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Contact person</th>
            </tr>
          </thead>
            {competitions.map(({ comp_title, comp_desc, contact_pers }, index) => {
            return (page === "" ? (
              <h3>--No competitions to display--</h3>
              ) : (
                <tbody>
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{comp_title}</td>
                    <td>{comp_desc}</td>
                    <td>{contact_pers}</td>
                  </tr>
                </tbody>
              ));
            }
            )}
      </table>
        </div>
  );
};

export default Competitions;
