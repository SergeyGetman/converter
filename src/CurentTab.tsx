interface Prop {
    className: string;
    amount: number;
    state: any;
}
  

function CurretnTab ({className, amount = 0, state} : Prop) {
  
    const {rates} = state;
    let curentUAN = rates?.UAH
    amount = amount * curentUAN;
    
    return (

        <div className={className}>
            <table>
                <td>
                    {`amount ${amount}`}
                    <tr></tr>
                    <hr />
                </td>    
            </table>        
        </div>
    )

}

export default CurretnTab;