import style from '../../components/DarkModeSwitch/DarkModeSwitch.module.css';

const DarkModeSwitch = ({ handleChange, ischecked }) => {
  return (
    <div>
      <label className={style.switch}>
        <input type="checkbox" onChange={handleChange} checked={ischecked} />
        <span
          className={` ${style.slider} absolute top-0 left-0 right-0 bottom-0 rounded-full transition duration-300 cursor-pointer`}
        ></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
