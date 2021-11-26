import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./ContestDetails.css";
import ContestChallenges from "./ContestChallenges/ContestChallenges";
import ContestQuizzes from "./ContestQuizzes/ContestQuizzes";
import ContestEdit from "./ContestEdit/ContestEdit";
import ContestStatictics from "./ContestStatictics/ContestStatictics";
const ContestDetails = () => {
  return (
    <div className="container add-user-container">
      <ul class="list-group d-flex align-items-center justify-content-center flex-row p-2 mt-3 mb-3">
        <li class="list-group-item user-group-pill">
          <NavLink
            exact
            className="user-navlink pr-3 pl-3 m-2"
            to="/contests/details/edit"
            activeClassName="active-user-pill"
          >
            <i className="fas fa-plus pr-1 pl-1"></i> Add user
          </NavLink>
        </li>
        <li class="list-group-item user-group-pill">
          <NavLink
            exact
            className="user-navlink pr-3 pl-3 m-2"
            to="/contests/details/quizzes"
            activeClassName="active-user-pill"
          >
            <i className="fas fa-clipboard-list pr-2 pl-1"></i>List user
          </NavLink>
        </li>
      </ul>
      <div className="container">
        <Switch>
          <Route path="/contests/details/edit" exact>
            <ContestEdit />
          </Route>
          <Route path="/contests/details/quizzes" exact>
            <ContestQuizzes />
          </Route>
          <Route path="/contests/details/challenges" exact>
            <ContestChallenges />
          </Route>
          <Route path="/contests/details/statistics" exact>
            <ContestStatictics />
          </Route>
          <Route
            path="/contests/details"
            render={() => <Redirect to="/contests/details/edit" />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ContestDetails;
