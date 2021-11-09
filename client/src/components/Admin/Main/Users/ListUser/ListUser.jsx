import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import './ListUser.css'
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ListUser = (props) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const loadPosts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };
  useEffect(() => {
    loadPosts();
  }, [page]);
  const classes = useStyles();
  return (
    <div className="container-fluid list-user-scroll">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Register number</TableCell>
              <TableCell align="center">Stream</TableCell>
              <TableCell align="center">Course name</TableCell>
              <TableCell align="center">College name</TableCell>
              <TableCell align="center">Batch</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.name}>
                <TableCell component="th" scope="row">
                  {post.id}
                </TableCell>
                <TableCell align="center">{post.userId}</TableCell>
                <TableCell align="center">{post.title}</TableCell>
                <TableCell align="center">{post.completed}</TableCell>
                <TableCell align="center">{post.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* <Box py={3} display="flex" justifyContent="center"> */}

        {/* </Box> */}
      </TableContainer>
      <div className="mt-3 mb-5">
        <Pagination
          className="float-right"
          count={13}
          variant="text"
          shape="rounded"
          onChange={(e, value) => setPage(value)}
        />
      </div>
    </div>
  );
};

export default ListUser;
