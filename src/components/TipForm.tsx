import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducers"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipFormProps = {
  dispatch: Dispatch<OrderActions>,
  tip: number
}
export default function TipForm({ dispatch, tip }: TipFormProps) {
  return (
    <div>
      <h3 className="text-2xl font-semibold">Propina: </h3>

      <form action="">
        {tipOptions.map(tipOpt => (
          <div className="flex gap-3" key={tipOpt.id}>
            <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
            <input
              id={tipOpt.id}
              type="radio"
              name="tip"
              value={tipOpt.value}
              onChange={e => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })}
              checked={tipOpt.value === tip}
            />
          </div>
        ))}


      </form>
    </div>
  )
}
