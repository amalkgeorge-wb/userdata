import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function UserNav(props){
    return(
        <div className='d-flex justify-content-between ms-5 me-5 mb-3'>
        <div>
        <input
          id="filled-search"
          className='search-field'
          placeholder="Search Full Name / Email"
          type="search"
          variant="filled"
          onChange={(e)=>props?.setSearchKey(e.target.value)}
        />
        <Button className='ms-2' variant="contained" onClick={()=>props?.handleSearch()}>Search</Button>
        </div>
        <div>
        <Button variant="contained" onClick={()=>{props?.setOpenDrawer(true)}}>Add user</Button>
        </div>
        </div>
    )
}