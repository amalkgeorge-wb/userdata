import { Button } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
export default function UserForm(props) {
    const {userList,setUserList,setFilteredData} = props
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async(data )=> {
        let newData= [...userList]
        data['id']= newData.length+1
        newData.push(data)
        setUserList(newData)
        await setFilteredData(newData)
        props?.setOpenDrawer(false)
        reset()
    };

  return (
    <div>
      <Drawer
        anchor={"right"}
        className="drawer"
        open={props?.openDrawer}
        onClose={() => props?.setOpenDrawer(false)}
      >
        <div className="d-flex justify-content-between mt-2 ms-1 me-1 mb-2 drawer-header">
            <h1 className="drawer-title ms-2">ADD USER</h1>
            <button onClick={()=>props?.setOpenDrawer(false)} className="close-drawer me-2">X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField 
            sx={{minWidth:350}}
            className="ms-3 me-3 mb-3"
            id="name" 
            label="Name" 
            type="name" 
            variant="outlined" 
            {...register('name',{ required: true })}
            helperText={errors?.name&&"name is required."}
            />
          </div>

          <div>
            <TextField
              sx={{minWidth:350}}
              className="ms-3 me-3 mb-3"
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              {...register('email',{ required: true })}
              helperText={errors?.email&&"email is required."}
            />
          </div>

          <div>
            <TextField
              sx={{minWidth:350}}
              className="ms-3 me-3 mb-3"
              id="phone"
              label="Phone"
              type="number"
              variant="outlined"
              {...register('phone',{ required: true })}
              helperText={errors?.phone&&"phone is required."}
            />
          </div>
          <div className="drawer-buttons">
            <Button variant="outlined" onClick={()=>props?.setOpenDrawer(false)}>Cancel</Button>
            <Button className="drawer-add-btn" variant="contained" type="submit">Add User</Button>
          </div>
        </form>
      </Drawer>
    </div>
  );
}
