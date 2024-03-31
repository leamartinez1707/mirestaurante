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
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip: number
}
export default function TipForm({ setTip, tip }: TipFormProps) {
  return (
    <div>
      <h3 className="text-2xl font-black">Propina: </h3>

      <form action="">
        {tipOptions.map(tipOpt => (
          <div className="flex gap-3" key={tipOpt.id}>
            <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
            <input
              id={tipOpt.id}
              type="radio"
              name="tip"
              value={tipOpt.value}
              onChange={e => setTip(+e.target.value)}
              checked={tipOpt.value === tip}
            />
          </div>
        ))}


      </form>
    </div>
  )
}
