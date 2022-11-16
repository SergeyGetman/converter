import { useEffect } from "react";

interface Prop {
    className: string;
    amount: number;
}
  

function CurretnTab ({className, amount = 0} : Prop) {
    const course = 36.4;
    amount += 1;
    amount *= course;
    
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