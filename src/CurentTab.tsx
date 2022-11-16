interface Prop {
    className: string;
    amount: number;
}
  

function CurretnTab ({className, amount = 0} : Prop) {
    
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