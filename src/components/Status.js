import React, { useEffect } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

function Status(props){
    const [statusValues, setStatus]=React.useState([]);
    if(props.visibility==true){
        document.getElementById("select-status").style.visibility="visible";
    }
    useEffect(()=>{
        const requestStatus = ()=>{
            fetch("http://localhost:8080/status/getAll",{
                method:"GET"
            }).then(
                res=>{
                    return res.json()
                }
            ).then(
                (resJson)=>{
                    setStatus(resJson);
                    console.log(resJson);
                }
            ).catch(
                error=>{
                    console.log(error);
                }
            )
        }
        requestStatus();
    }, []);
    return<FormControl className="selectstatus">
        <InputLabel id="etapa-modal-form">Status</InputLabel>
        <Select onChange={props.changeStatus} value={props.statusV} label="Etapa" labelId="etapa-modal-form" id="select-status" className="select-field">
            {statusValues.map(status=>(
                <MenuItem key={status.idStatus} value={status.idStatus}>{status.status}</MenuItem>
            ))}
        </Select>
    </FormControl>
}
export default Status;