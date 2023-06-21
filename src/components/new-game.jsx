import { styles } from "./style";

// const NewGame = ({ style, text, img }) => {
const NewGame = ({ top, text, img }) => {
  return (
    <div
      className={`absolute ${styles.center} top-[${top}px] w-[150px] h-[50px] text-[#000] cursor-pointer gap-3  bg-white rounded-[20px] uppercase transition-[0.010s] active:scale-[0.97]`}
    >
      <i className={`fa-solid ${img}`}></i>
      <span>{text}</span>
    </div>
  );
};

export default NewGame;
