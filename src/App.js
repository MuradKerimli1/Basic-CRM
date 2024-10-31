import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLogin from "./Pages/UserLogin/UserLogin";
import CustomerPage from "./Pages/CustomerPage/CustomerPage";
import AddForm from "./Pages/AddForm/AddForm";
import { nanoid } from "nanoid";

function App() {
  const [users] = useState([{ name: "admin", password: "admin" }]);

  const [customers, setCustomers] = useState(() => {
    const storedCustomers = localStorage.getItem("customers");
    return storedCustomers
      ? JSON.parse(storedCustomers)
      : [
          {
            id: nanoid(),
            name: "john",
            email: "john23@mail.com",
            number: "7012321",
            age: 50,
          },
          {
            id: nanoid(),
            name: "alice",
            email: "alice@example.com",
            number: "7012345",
            age: 30,
          },
          {
            id: nanoid(),
            name: "bob",
            email: "bob@example.com",
            number: "7016789",
            age: 40,
          },
          {
            id: nanoid(),
            name: "susan",
            email: "susan@example.com",
            number: "7019876",
            age: 28,
          },
          {
            id: nanoid(),
            name: "mike",
            email: "mike@example.com",
            number: "7015432",
            age: 35,
          },
          {
            id: nanoid(),
            name: "linda",
            email: "linda@example.com",
            number: "7018765",
            age: 22,
          },
        ];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  console.log(customers);
  
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <CustomerPage customers={customers} setCustomers={setCustomers} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<UserLogin users={users} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/addForm"
          element={<AddForm setCustomers={setCustomers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
