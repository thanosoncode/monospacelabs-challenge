import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "./redux/usersSlice";
import Spinner from "./components/Spinner/Spinner";
import Error from "./components/Error/Error";
import {
  Container,
  TableContainer,
  Header,
  Table,
  Tbody,
  Left,
  Right,
  Switch,
  CrewContainer,
  Crew,
  TdStatus,
  ThStatus,
} from "./styles/App.styled";
import { FiUsers } from "react-icons/fi";
import questionmark from "../src/assets/images/Questionmark.svg";

const App = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.users.list);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [selected, setSelected] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleCheckboxInputChange = (e, id) => {
    const selectedItem = { id, checked: e.target.checked };
    const ids = selected.map((item) => item.id);
    if (selectedItem.checked === true && !ids.includes(selectedItem.id)) {
      setSelected([...selected, selectedItem]);
    }
    if (selectedItem.checked === false) {
      setSelected(selected.filter((item) => item.id !== id));
    }
  };

  const handleStatusSwitchClick = (item) => {
    setSelected([]);
    fetch(
      `https://thanosoncode.users.challenge.dev.monospacelabs.com/users/${item.id}`,
      {
        mode: "cors",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          ...item,
          active: !item.active,
        }),
      }
    )
      .then((result) => result.json())
      .then((response) => {
        dispatch(getUsers());
      });
  };

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  } else {
    return (
      <>
        <Container>
          <TableContainer>
            <Header>
              <Left>
                <div>
                  <span>
                    <FiUsers />
                  </span>
                </div>
                <span>Users</span>
              </Left>
              <Right>
                <span>{selected.length} selected</span>
                <img src={questionmark} alt="questionmark" />
              </Right>
            </Header>
            <Table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>type</th>
                  <th>name</th>
                  <th>email</th>
                  <th>telephone</th>
                  <ThStatus>status</ThStatus>
                </tr>
              </thead>

              <Tbody>
                {list.map((item, index) => {
                  const { type, name, phone, email, active, id } = item;
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          onChange={(e) => handleCheckboxInputChange(e, id)}
                        />
                      </td>

                      <CrewContainer>
                        <Crew type={type}>{type.substr(0, 2)}</Crew>
                      </CrewContainer>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{phone}</td>
                      <TdStatus>
                        <Switch
                          border={active ? "#99d9d9" : "#d8d8d8"}
                          color={active ? "#99d9d9" : "#d8d8d8"}
                          position={
                            active ? "translateX(100%)" : "translateX(0)"
                          }
                          onClick={() => handleStatusSwitchClick(item)}
                        >
                          <div></div>
                        </Switch>
                      </TdStatus>
                    </tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </>
    );
  }
};

export default App;
