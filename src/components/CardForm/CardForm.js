import styles from "./CardForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const CardForm = (props) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    console.log('Adding new card', title, 'Column ID' , props.columnId);
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle("");
  };
  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div className={styles.padding}><TextInput value={title} onChange={(e) => setTitle(e.target.value)} /></div>
      <div className={styles.padding}><Button>Add card</Button></div>
    </form>
  );
};

export default CardForm;