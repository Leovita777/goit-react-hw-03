import { Form, Formik } from "formik";
import css from "./SearchBox.module.css";

const SearchBox = ({ onChangeFilter, filter }) => {
  return (
    <label className={css.SearchBox}>
      <span className={css.SearchTitle}>Find contacts by name</span>
      <input
        className={css.SearchInput}
        type="name"
        name="findUser"
        onChange={onChangeFilter}
        value={filter}
      />
    </label>
  );
};

export default SearchBox;
