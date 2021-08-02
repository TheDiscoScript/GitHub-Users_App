import * as React from "react";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser, clearHistory } from "../../users/userSlice";

import { RootState } from "../../../app/store";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const History = () => {
  //does not exist on type 'DefaultRootState' - type needed on state
  const allUsers = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "repos",
      headerName: "Repositories",
      width: 400,
      renderCell: (params) => (
        <Box overflow="auto" style={{ width: "400px" }}>
          {params.row.repos.map((obj: any, i: any) => {
            return (
              <a
                key={i}
                style={{
                  padding: "0.3rem",
                  textDecoration: "underline",
                }}
                href={obj.link}
              >
                {obj.name},
              </a>
            );
          })}
        </Box>
      ),
    },
    {
      field: "orgs",
      headerName: "Organizations",
      width: 400,
      renderCell: (params) => (
        <Box overflow="auto" style={{ width: "400px" }}>
          {params.row.orgs.map((obj: any, i: any) => {
            return (
              <a
                key={i}
                style={{
                  padding: "0.3rem",
                  textDecoration: "underline",
                }}
                href={obj.link}
              >
                {obj.name},
              </a>
            );
          })}
        </Box>
      ),
    },
    {
      field: "details",
      headerName: "Details",
      width: 200,
      renderCell: (params) => (
        <>
          <Link to={`/user/${params.row.name}`}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
            >
              Details
            </Button>
          </Link>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            //remove function
            onClick={() => dispatch(removeUser(params.row.id))}
          >
            Remove
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={allUsers}
        columns={columns}
        pageSize={5}
        rowHeight={75}
      />
      <button onClick={() => dispatch(clearHistory())}>Clear History</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default History;
