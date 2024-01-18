import { useState } from "react";

const SendUserAge = () => {
  const [age, setAge] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, SetLoading] = useState(false);

  console.log(age);

  const submitAge = async () => {
    if (age === "") {
      setErrorMsg("Enter age");
      return;
    }

    try {
      SetLoading(true);
      const response = await fetch("https://example.com/api", {
        method: "POST",
        header: {
          Aceept: "application/json",
          Content_Type: "application/json",
        },
        body: JSON.stringify({ user_age: age }),
      });

      const result = await response.json();
      SetLoading(false);
      alert("Sent");
    } catch (error) {
      console.log(error);
      setErrorMsg("error.msg");
      SetLoading(false);
    }
  };

  return (
    <>
      <form>
        <label>Age input</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e = setAge(e.target.value))}
        />
        <p>{errorMsg ? "errorMsg" : ""}</p>
        <button disable={loading} onClick={submitAge}>
          Send
        </button>
      </form>
    </>
  );
};

export default SendUserAge;

// function
// array of prices
// each item is price of stock for each day
// [1,2,3,4]

const stocjPrices = [1, 2, 3, 4];

const findMaxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const pontialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, pontialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
};

findMaxProfit();

const maxProfit = findMaxProfit(stocjPrices);

// console.log(maxProfit);
