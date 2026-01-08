const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
    return (
      <div className="flex gap-4">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className="label-text">Male</span>
            <input
              type="checkbox"
              // name="gender"
              className="checkbox "
              checked = {selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
              
              // value="male"
            />
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className="label-text">Female</span>
            <input
              type="checkbox"
              className="checkbox"
              // name="gender"
              checked = {selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
              // value="female"
            />
          </label>
        </div> 
      </div>
    );
  };
  
  export default GenderCheckbox;
  