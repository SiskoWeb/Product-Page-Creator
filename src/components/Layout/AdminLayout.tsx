import AdminFooter from "../AdminDashboard/AdminFooter";
import AdminNavBar from "../AdminDashboard/AdminNavBar";
import AdminSideBAr from "../AdminDashboard/AdminSideBar";

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <AdminNavBar />
      <div className="admin-content">
        <AdminSideBAr />
        <div className="admin-main"> {children}</div>
      </div>
      <AdminFooter />
    </>
  );
};
export default AdminLayout;
