import { useState } from "react";
import FormComponent from "./components/FormComponent/Form-component.jsx";
import HeaderComponent from "./components/HeaderComponent/Header-component.jsx";
import InputGroupComponent from "./components/InputGroupComponent/Input-group-component.jsx";
import InputComponent from "./components/InputComponent/Input-component.jsx";
import ActionComponent from "./components/ActionsComponent/action-component.jsx";
import ButtonComponent from "./components/UIComponent/ButtonComponent/ButtonComponent.jsx";
import TableComponent from "./components/TableComponent/Table-component.jsx";

function App() {
  const calculateHandler = (data) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +data["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +data["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +data["expected-return"] / 100;
    const duration = +data["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    return yearlyData;
  };

  const [userInput, setUserInput] = useState({});

  const [yearlyData, setYearlyData] = useState([]);

  const dataHandler = function (data, label) {
    setUserInput((oldData) => ({
      ...oldData,
      [label]: +data,
    }));
  };

  const yearlyDataHandler = (data) => {
    setYearlyData(data);
  };

  const yearlyDataReset = () => {
    setYearlyData([]);
  };

  return (
    <div>
      <HeaderComponent />
      <FormComponent>
        <InputGroupComponent>
          <InputComponent
            label={"current-savings"}
            userData={userInput["current-savings"]}
            dataHandler={dataHandler}
          >
            Current Savings ($)
          </InputComponent>
          <InputComponent
            label={"yearly-contribution"}
            userData={userInput["yearly-contribution"]}
            dataHandler={dataHandler}
          >
            Yearly Contribution
          </InputComponent>
        </InputGroupComponent>
        <InputGroupComponent>
          <InputComponent
            label={"expected-return"}
            userData={userInput["expected-return"]}
            dataHandler={dataHandler}
          >
            Expected Interest (%, per year)
          </InputComponent>
          <InputComponent
            label={"duration"}
            userData={userInput["expected-return"]}
            dataHandler={dataHandler}
          >
            Investment Duration (years)
          </InputComponent>
        </InputGroupComponent>
        <ActionComponent>
          <ButtonComponent
            type={"reset"}
            yearlyDataReset={yearlyDataReset}
          ></ButtonComponent>
          <ButtonComponent
            type={"submit"}
            userData={userInput}
            dataHandler={calculateHandler}
            setYearlyState={yearlyDataHandler}
            yearly={yearlyData}
          ></ButtonComponent>
        </ActionComponent>
      </FormComponent>
      <TableComponent data={yearlyData}></TableComponent>
    </div>
  );
}

export default App;
