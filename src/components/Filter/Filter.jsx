import { InputFilter, LabelFilter } from "./Filter_styled"

export const Filter = ({value, onChangeFilter}) => {
    return (
        <LabelFilter>
            Find contacts by name
            <InputFilter name="filter" type="text" value={value} onChange={evt => onChangeFilter(evt.target.value)} />
        </LabelFilter>
    )
}