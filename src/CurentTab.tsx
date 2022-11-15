import { useState } from "react";

interface Prop {
    className: string;
    amount: number;
}
  

function CurretnTab ({className, amount = 0} : Prop) {
    const [currensy, setCurrensy] = useState("");

    const handleChange = (e) => {
        setCurrensy(e.target.value)
      }

      const amountEuroInUan = () => {
        console.log();
        
      }
    
    
    return (

        <div className={className}>
            <table>
                <td>
                    {`amount ${amount}`}
                    <tr>{currensy}</tr>
                    <hr />
                </td>    
            </table>

            <input type="input" placeholder="choise your currency" value={currensy} onChange={handleChange}></input>
        
        </div>
    )

}

export default CurretnTab;