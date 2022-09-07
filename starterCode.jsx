
const ATMDeposit = (onChange, isDeposit) => {
    const choice = ["Deposit", "Cash Back"];
    const deposit = 1;

    if (deposit >= !deposit) {
        return `Warning: Overdraft Fee Will Be Charged`
    }
    return (
        <label className="label huge">
            {/*Deposit number is fetched w/ T/F 0/1*/}
            <h3>{choice[Number(!isDeposit)]}</h3>
            <input type="number" onChange={onChange}></input>
            <input type="submit" value={"submit"} onClick={handleSubmit}></input>
        </label>
    );
}
const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };

    let transactionState = 0; // state of this transaction
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(true);

    let status = `Account Balance $ ${totalState}`;
    //print for checking if rerendering correctly
    console.log('Account rendered')
    const onChange = event => {
        console.log(`handleChange ${event.target.value}`);
        transactionState = Number(event.target.value);
    };
    const handleSubmit =  () => {
        let newTotal = isDeposit ? totalState + setIsDeposit : totalState - deposit;
        setTotalState(totalState + transactionState);
        event.preventDefault();
        // document.getElementById("total").innerHTML = status;
    };

return (
    <form onSubmit={handleSubmit}>
      <h2 id={'total'}>Account Balance {accountState}</h2>
       <button onClick={()=> setIsDeposit(true)}>Deposit</button>
        <h2 id={'total'}>Account Balance {accountState}</h2>
        <button onClick={()=> setIsDeposit(false)}>Cash Back</button>
        <ATMDeposit onChange={handleChange}> Deposit</ATMDeposit>
    </form>
  );
};

// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
