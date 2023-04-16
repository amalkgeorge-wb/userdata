import UserTable from "./userTable";
import UserNav from "./userNav";
import { useEffect, useState } from "react";
import UserForm from "./userForm";
export default function UserData() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userList, setUserList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // having 2 states help for the the local storage of the filter functionality, 
        //if we are managing in a single state, once the filter occurs the entire array will only have one of the filtered value
        setUserList(json); 
        setFilteredData(json); 
      });
  }, []);
// this function handles the search functionality
  const handleSearch = () => {
    if (searchKey) {
        //this maps and returns the filtered items from the userlist array
      let filteredResults = userList.filter((item) => {
        return item.name === searchKey || item.email === searchKey;
      });
      setFilteredData(filteredResults);
      console.log("prsss", filteredResults);
    } else {
        // if searchkey is empty we list all the userlist
      return setFilteredData(userList);
    }
  };

  return (
    <div style={{margin:"30px"}}>
      <UserNav
        setOpenDrawer={setOpenDrawer}
        setSearchKey={setSearchKey}
        handleSearch={handleSearch}
      />
      {filteredData && <UserTable filteredData={filteredData} />}
      <UserForm
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        userList={userList}
        setUserList={setUserList}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}
