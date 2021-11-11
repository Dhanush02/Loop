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
import "./ListUser.css";
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });
const tableData = [
  {
    register_number: 1813015,
    course: "MECH",
    stream: "B.E",
    college: "KSRCT",
    batch: "2018-2012",
  },
  {
    register_number: 1813016,
    course: "ECE",
    stream: "B.E",
    college: "KSRCE",
    batch: "2018-2012",
  },
  {
    register_number: 1813017,
    course: "IT",
    stream: "B.E",
    college: "KSRIET",
    batch: "2018-2012",
  },
  {
    register_number: 1813018,
    course: "CSE",
    stream: "B.E",
    college: "KSRCT",
    batch: "2018-2012",
  },
  {
    register_number: 1813019,
    course: "EEE",
    stream: "B.E",
    college: "KSRCE",
    batch: "2018-2012",
  },
  {
    register_number: 1813016,
    course: "IT",
    stream: "B.E",
    college: "KSRIET",
    batch: "2018-2012",
  },
];
const ListUser = (props) => {
  //   const [posts, setPosts] = useState([]);
  //   const [page, setPage] = useState(1);
  //   const loadPosts = async () => {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/todos?_page=${page}`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setPosts(data);
  //   };
  //   useEffect(() => {
  //     loadPosts();
  //   }, [page]);
  //   const classes = useStyles();
  const sortTypes = {
    up: {
      class: "sort-up",
      fn: (a, b) => a.register_number - b.register_number,
    },
    down: {
      class: "sort-down",
      fn: (a, b) => b.register_number - a.register_number,
    },
    default: {
      class: "sort",
      fn: (a, b) => a,
    },
  };

  const [currentSort, setCurrentSort] = useState("default");
  const onSortChange = () => {
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    setCurrentSort(nextSort);
  };
  return (
    <>
      {tableData.length > 0 && (
        <table className="table-responsive table">
          <thead>
            <tr>
              <th>
                Register number
                <button onClick={onSortChange}>
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>
              </th>
              <th>Stream</th>
              <th>Course</th>
              <th>College</th>
              <th>Batch</th>
              {/* <th>
                Net Worth
                <button onClick={onSortChange}>
                  <i className={`fas fa-${sortTypes[currentSort].class}`} />
                </button>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {[...tableData].sort(sortTypes[currentSort].fn).map((p) => (
              <tr>
                <td>{p.register_number}</td>
                <td>{p.course}</td>
                <td>{p.college}</td>
                <td>{p.stream}</td>
                <td>{p.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
    // <div className="container-fluid list-user-scroll">
    //   <TableContainer component={Paper}>
    //     <Table className={classes.table} aria-label="simple table">
    //       <TableHead>
    //         <TableRow>
    //           <TableCell>Register number</TableCell>
    //           <TableCell align="center">Stream</TableCell>
    //           <TableCell align="center">Course name</TableCell>
    //           <TableCell align="center">College name</TableCell>
    //           <TableCell align="center">Batch</TableCell>
    //         </TableRow>
    //       </TableHead>
    //       <TableBody>
    //         {posts.map((post) => (
    //           <TableRow key={post.name}>
    //             <TableCell component="th" scope="row">
    //               {post.id}
    //             </TableCell>
    //             <TableCell align="center">{post.userId}</TableCell>
    //             <TableCell align="center">{post.title}</TableCell>
    //             <TableCell align="center">{post.completed}</TableCell>
    //             <TableCell align="center">{post.title}</TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <div className="mt-3 mb-5">
    //     <Pagination
    //       className="float-right"
    //       count={13}
    //       variant="text"
    //       onChange={(e, value) => setPage(value)}
    //     />
    //   </div>
    // </div>
  );
};

export default ListUser;
