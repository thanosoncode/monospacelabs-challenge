import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1722px;
  height: 618px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  color: ${({ theme }) => theme.color};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  padding: 16px 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Left = styled.div`
  div {
    position: relative;
    border: 1px solid black;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    //fix
    margin-right: 10px;
  }
  span:first-child {
    position: absolute;
    top: 5px;

    font-size: 22px;
  }
`;

export const Right = styled.div`
  font-size: 12px;
  font-weight: 500;

  img {
    display: block;
    width: 20px;
    height: 20px;
    //fix maybe
    margin-left: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.blue};

  input {
    width: 12px;
    height: 12px;
    //36
    margin-right: 10px;
  }

  th:not(:last-child) {
    color: ${({ theme }) => theme.blue};

    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 15px;
    text-transform: uppercase;
    text-align: left;
  }

  tr {
    height: 56px;
  }

  th:nth-child(2) {
    padding-right: 180px;
  }
  th:nth-child(3) {
    padding-right: 180px;
  }
  th:nth-child(4) {
    padding-right: 180px;
  }
  th:nth-child(5) {
    padding-right: 180px;
  }
`;

export const CrewContainer = styled.td`
  position: relative;
  /* padding-right: 180px; */
`;

export const Crew = styled.div`
  position: absolute;
  background: ${({ color, type, theme }) => {
    if (type === "Supervisor") {
      return theme.teal;
    }
    if (type === "Guest") {
      return "#8A98CA";
    }
    if (type === "Employee") {
      return "#E17878";
    }
    if (type === "Stakeholder") return "#F2AC57";
  }};

  color: ${({ theme }) => theme.blue};
  font-weight: bold;
  text-align: center;
  height: 14px;
  width: 34px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const Tbody = styled.tbody`
  font-size: 14px;
  color: ${({ theme }) => theme.blue};

  tr {
    cursor: pointer;
  }

  tr:hover {
    background-color: rgba(57, 98, 141, 0.05);
  }
`;

export const ThStatus = styled.th`
  text-align: center;
  color: ${({ theme }) => theme.blue};

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 15px;
  text-transform: uppercase;
`;

export const TdStatus = styled.td`
  position: relative;
`;

export const Switch = styled.div`
  position: absolute;
  top: 21px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.color};
  width: 24px;
  height: 13px;
  border-radius: 999px;

  div {
    position: absolute;
    width: 11px;
    height: 11px;
    left: 1px;
    top: 1px;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;

    border: 1px solid ${(props) => props.color};

    background-color: #ffffff;
    transition: 0.3s ease;
    transform: ${(props) => props.position};
  }
`;
