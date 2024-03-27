import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({ field, form, ...props }) => {
  const { name, value, onChange } = field;

  const handleChange = (value, countryData, event, formattedvalue) => {
    form.setFieldValue(name, value);
    console.log({ value, countryData, event, formattedvalue, form });

    if (onChange) {
      onChange(value, countryData, event, formattedvalue);
    }
  };

  return (
    <PhoneInput
      placeholder={"+380"}
      country={"ua"}
      value={value}
      onChange={handleChange}
      inputProps={{
        name,
        className: props.className,
      }}
      parse={(value) => value.replace(/\D/g, "")}
    />
  );
};

export default PhoneNumberInput;
