import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import { getInitials } from "../utils/getInitials";
// import UserEditModal from "./UserEditModal";

const TableWithActions = ({ values, limit, headings, dataType }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  return (
    <div>
      <Table id="table-to-xls">
        <TableHead>
          <TableRow>
            {headings.map((head) => (
              <TableCell sx={{ fontSize: 12, padding: "15px" }}>
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {values.slice(0, limit).map((val) => { */}
          {values.map((val) => {
            return (
              <TableRow
                padding="checkbox"
                hover
                key={val.id}
                onClick={() => navigate(`${val.id}`)}
              >
                {headings.map((head) => {
                  if (dataType === "basic") {
                    if (head === "Name") {
                      return (
                        <TableCell padding="checkbox">
                          {/* <Checkbox
                          color="primary"
                          // indeterminate={
                          //   numSelected > 0 && numSelected < rowCount
                          // }
                          // checked={rowCount > 0 && numSelected === rowCount}
                          // onChange={onSelectAllClick}
                          inputProps={{
                            "aria-label": "select all desserts"
                          }}
                        /> */}
                          {val.name}
                        </TableCell>
                      );
                    }
                    if (head === "Email") {
                      return <TableCell>{val.email}</TableCell>;
                    }
                    if (head === "Phone") {
                      return <TableCell>{val.phone}</TableCell>;
                    }
                    if (head === "Devices") {
                      return <TableCell>{val.devices.toString()}</TableCell>;
                    }
                    if (head === "Actions") {
                      return <TableCell>{val.actions}</TableCell>;
                    }
                  } else if (dataType === "schedulehistory") {
                    if (head === "Schedule Id") {
                      return <TableCell>{val.schedule_id}</TableCell>;
                    }
                    if (head === "Schedule Date") {
                      return <TableCell>{val.schedule_date}</TableCell>;
                    }
                    if (head === "Schedule Time") {
                      return <TableCell>{val.schedule_time}</TableCell>;
                    }
                    if (head === "Recipe") {
                      return <TableCell>{val.recipe}</TableCell>;
                    }
                    if (head === "Amount") {
                      return <TableCell>{val.amount}</TableCell>;
                    }
                    if (head === "Time Taken") {
                      return <TableCell>{val.time_taken}</TableCell>;
                    }
                    if (head === "Scheduled From") {
                      return <TableCell>{val.scheduled_from}</TableCell>;
                    }
                    if (head === "Status") {
                      return <TableCell>{val.status}</TableCell>;
                    }
                  } else if (dataType === "machine") {
                    if (head === "Machine Id") {
                      return <TableCell>{val.machine_id}</TableCell>;
                    }
                    if (head === "Customer Id") {
                      return <TableCell>{val.customer_id}</TableCell>;
                    }
                    if (head === "Customer Name") {
                      return <TableCell>{val.customer_name}</TableCell>;
                    }
                    if (head === "Last Scheduled") {
                      return <TableCell>{val.last_scheduled}</TableCell>;
                    }
                    if (head === "Manufactured On") {
                      return <TableCell>{val.manufactured_on}</TableCell>;
                    }
                    if (head === "Macufactured By") {
                      return <TableCell>{val.manufactured_by}</TableCell>;
                    }
                    if (head === "Health") {
                      return <TableCell>{val.health}</TableCell>;
                    }
                    if (head === "Machine Status") {
                      return (
                        <TableCell>
                          <p
                            style={{
                              background: "green",
                              padding: "5px",
                              borderRadius: "10px",
                              margin: 0,
                              color: "#fff",
                              textAlign: "center"
                            }}
                          >
                            {val.status}
                          </p>
                        </TableCell>
                      );
                    }
                  } else if (dataType === "PreferedRecipe") {
                    if (head === "Recipe Id") {
                      return <TableCell>{val.recipe_id}</TableCell>;
                    }
                    if (head === "Recipe Name") {
                      return <TableCell>{val.recipe_name}</TableCell>;
                    }
                    if (head === "Created On") {
                      return <TableCell>{val.created_on}</TableCell>;
                    }
                    if (head === "Total Usage") {
                      return <TableCell>{val.total_usage}</TableCell>;
                    }
                    if (head === "Average Usage Per Day") {
                      return <TableCell>{val.average_usage_per_day}</TableCell>;
                    }
                    if (head === "Success Ratio") {
                      return <TableCell>{val.success_ratio}</TableCell>;
                    }
                    if (head === "Customer Rating") {
                      return <TableCell>{val.customer_rating}</TableCell>;
                    }
                  } else if (dataType === "CustomerFedRecipe") {
                    if (head === "Recipe Id") {
                      return <TableCell>{val.recipe_id}</TableCell>;
                    }
                    if (head === "Recipe Name") {
                      return <TableCell>{val.recipe_name}</TableCell>;
                    }
                    if (head === "Recipe Owner") {
                      return <TableCell>{val.recipe_owner}</TableCell>;
                    }
                    if (head === "Sb Location") {
                      return <TableCell>{val.sb_location}</TableCell>;
                    }
                    if (head === "Created On") {
                      return <TableCell>{val.created_on}</TableCell>;
                    }
                    if (head === "Total Usage") {
                      return <TableCell>{val.total_usage}</TableCell>;
                    }
                    if (head === "Average Usage Per Day") {
                      return <TableCell>{val.average_usage_per_day}</TableCell>;
                    }
                  } else if (dataType === "PreferedRecipe") {
                    if (head === "Recipe Id") {
                      return <TableCell>{val.recipe_id}</TableCell>;
                    }
                    if (head === "Recipe Name") {
                      return <TableCell>{val.recipe_name}</TableCell>;
                    }
                    if (head === "Created On") {
                      return <TableCell>{val.created_on}</TableCell>;
                    }
                    if (head === "Total Usage") {
                      return <TableCell>{val.total_usage}</TableCell>;
                    }
                    if (head === "Average Usage Per Day") {
                      return <TableCell>{val.average_usage_per_day}</TableCell>;
                    }
                    if (head === "Success Ratio") {
                      return <TableCell>{val.success_ratio}</TableCell>;
                    }
                    if (head === "Customer Rating") {
                      return <TableCell>{val.customer_rating}</TableCell>;
                    }
                  } else if (dataType === "RecipeUsage") {
                    if (head === "Recipe Id") {
                      return <TableCell>{val.recipe_id}</TableCell>;
                    }
                    if (head === "Recipe Name") {
                      return <TableCell>{val.recipe_name}</TableCell>;
                    }
                    if (head === "Recipe Owner") {
                      return <TableCell>{val.recipe_owner}</TableCell>;
                    }
                    if (head === "Sb Location") {
                      return <TableCell>{val.sb_location}</TableCell>;
                    }
                    if (head === "Created On") {
                      return <TableCell>{val.created_on}</TableCell>;
                    }
                    if (head === "Total Usage") {
                      return <TableCell>{val.total_usage}</TableCell>;
                    }
                    if (head === "Average Usage Per Day") {
                      return <TableCell>{val.average_usage_per_day}</TableCell>;
                    }
                  }
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableWithActions;

{
  /* <TableCell>
                <Box
              sx={{
                alignItems: "center",
                display: "flex"
              }}
            >
              <Avatar src={val.img_url} sx={{ mr: 2 }}>
                {getInitials(val.name)}
              </Avatar>
              <Typography variant="body1">{val.name}</Typography>
            </Box>
                <Typography variant="body1">{val.name}</Typography>
              </TableCell>
              <TableCell>{val.email}</TableCell>
              <TableCell>{val.phone}</TableCell>
              <TableCell>{val.devices.toString()}</TableCell>
              <TableCell>Active</TableCell> */
}
