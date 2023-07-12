import UserFooter from "../UserUi/UserFooter";
import UserNavBar from "../UserUi/UserNavBar";

const UserLayout = ({ children }: any) => {
  return (
    <>
      <UserNavBar />
      <div> {children}</div>
      <UserFooter />
    </>
  );
};
export default UserLayout;
