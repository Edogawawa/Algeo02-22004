import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
    const {label, name, type, placeholder, title} = props
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} placeholder={placeholder}/>
        </div>
    );
};

export default InputForm;