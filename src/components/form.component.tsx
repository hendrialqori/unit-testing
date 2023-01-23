export const RegisterForm: React.FC = () => {
  return (
    <form>
      <div role="heading" aria-level={2}>
        Form register
      </div>
      <div aria-label="input-name-wrapper">
        <label htmlFor="name">name</label>
        <input type="text" id="name" />
      </div>
      <div aria-label="select-wrapper">
        <label htmlFor="job-location">job location</label>
        <select id="job-selection">
          <option value="">Select the location</option>
          <option value="ID">Indonesia</option>
          <option value="MY">Malaysia</option>
          <option value="AUS">Australia</option>
        </select>
      </div>
      <div aria-label="term-agree-wrapper">
        <label>
          <input type="checkbox" checked={true} />I agree to the terms and
          condition
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
