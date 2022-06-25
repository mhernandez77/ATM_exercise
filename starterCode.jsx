
const ATMDeposit = (onChange) => {
    return (
        <label className="label huge">
            Deposit:
            <input type="number" onChange={onChange}></input>
            <input type="submit" value={"submit"} onClick={handleSubmit}></input>
            {/*<h2 id="total">{status}</h2>*/}
        </label>
    );
};
}
const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };
  const handleSubmit = event => {
    alert(`Account total = ${accountState}`);
    event.preventDefault();
  };

    let transactionState = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    let status = `Account Balance $ ${totalState}`;
    //print for checking if rerendering correctly
    console.log('Account rendered')
    const handleChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionState = Number(event.target.value);
    };
    const handleSubmit =  () => {
        setTotalState(totalState + transactionState);
        // document.getElementById("total").innerHTML = status;
        event.preventDefault();
    };
//     return (
//         <label className="label huge">
//             Deposit:
//             <input type="number" onChange={handleChange}></input>
//             <input type="submit" value={"submit"} onClick={handleSubmit}></input>
//             <h2 id="total">{status}</h2>
//         </label>
//     );
// };

return (
    <form onSubmit={handleSubmit}>
      <h2 id={'total'}>Account Balance {accountState}</h2>
      <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};

// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
