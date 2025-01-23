const GenderCheckbox = () => {
    return (
      <div className="flex gap-4">
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <span className="label-text">Male</span>
            <input
              type="radio"
              name="gender"
              className="radio radio-success"
              value="male"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label gap-2 cursor-pointer">
            <span className="label-text">Female</span>
            <input
              type="radio"
              name="gender"
              className="radio radio-success"
              value="female"
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  