import { Box, Container } from "@mui/material";
import { CustomerListToolbar } from "../components/Customer/CustomerListToolbar";
// import { customers } from "../_mocks_/customers";
import CustomerListResults from "../components/Customer/CustomerListResults";
import { useState, useEffect } from "react";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://smart-batter.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((json) => setCustomers(json))
      .catch((e) => console.log(e));
  }, []);

  const saveUser = (user) => {
    // console.log("save", user);
    fetch(`https://smart-batter.herokuapp.com/api/users/${user.id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify({ name: user.name, img_url: user.img_url })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCustomers((prevState) => {
          let users = [...prevState];
          let index = users.findIndex((u) => u.id === user.id);
          users[index] = json;
          return users;
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 0
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            {customers.length === 0 ? (
              <p>No Users!!!</p>
            ) : (
              <CustomerListResults customers={customers} saveUser={saveUser} />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Customer;
