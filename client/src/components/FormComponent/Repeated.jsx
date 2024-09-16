import { Table } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextAreaCustom } from "./TextAreaCustom";
import styled from "styled-components";
export const StyledTableCell = styled(TableCell)({
  padding: '0',
  border : '1px solid #bdbdbd5c '
})
export const StyledTableCont = styled(TableCell)({
overflow:'revert '
})


function Repeated({ TabHeading, InputData }) {
  const [kpiList, setKpiList] = useState([{ kpi: "" }]);

  const handleKpiChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...kpiList];
    list[index][name] = value;
    setKpiList(list);
  };

  const handleKpiRemove = (index) => {
    const list = [...kpiList];
    list.splice(index, 1);
    setKpiList(list);
  };

  const handleKpiAdd = () => {
    setKpiList([...kpiList, { kpi: "" }]);
  };

  return (
    <>
      <StyledTableCont >
        <Table >
          <TableHead>
            <TableRow>
              <StyledTableCell 
              padding="0"
                style={{
                  fontSize: "12px",
                }}
                align="center"
              >
                S. No
              </StyledTableCell>
               xy

              <StyledTableCell
                style={{
                  fontSize: "12px",
                }}
                align="center"
              >
                Add/Remove
              </StyledTableCell>
            </TableRow>
          </TableHead>

          {kpiList.map((singleKpi, index) => (
            <TableBody key={index}>
              <StyledTableCell align="center">{index + 1}</StyledTableCell>
              {TabHeading.map((item) => {
                return <StyledTableCell align="center">{item.data}</StyledTableCell>;
              })}

              <StyledTableCell align="center" style={{ marginLeft: "10px" }}>
                {kpiList.length - 1 === index && (
                  <button
                    type="button"
                    onClick={handleKpiAdd}
                    className="add-btn"
                  >
                    <span>+</span>
                  </button>
                )}

                {kpiList.length !== 1 && (
                  <button
                    type="button"
                    onClick={() => handleKpiRemove(index)}
                    className="remove-btn"
                  >
                    <span>-</span>
                  </button>
                )}
              </StyledTableCell>
            </TableBody>
          ))}
        </Table>
      </StyledTableCont>
    </>
  );
}

export { Repeated };
