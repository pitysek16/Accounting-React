import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in company</h1>
      <p>Total number of employees: {employees}</p>
      <p>The promotion will be given to: {increased}</p>
    </div>
  );
};

export default AppInfo;
