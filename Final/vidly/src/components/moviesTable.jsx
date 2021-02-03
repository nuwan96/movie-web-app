//               Example   09  Hiding Delete Button         ////
///                      video  -  188 , 189
///                  App.js  , moviesTable.jsx       ------

import React, { Component } from "react";
import auth from "../services/authService"; // get the auth service for identify user is admin or not
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  //  clean and clear the constructor
  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    ),
  };

  /////// ------------------   user is admin " delete button is apper otherwise not appear "

  constructor() {
    super();
    // this constr. is a custome constr. is not a default constr. ,
    // so when that time we have to call the parent constr.

    const user = auth.getCurrentUser(); // get the user is admin or not

    // if user is tru and user is admin then , disply the delete button
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  //////

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
