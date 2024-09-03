import React, { useEffect } from "react";
import { Box, FormControl, MenuItem, Select, Modal,TextField, Button, InputLabel } from "@mui/material";
import "../../styles/modals/formAddTask.scss";
import agregarTaskimg from "../../images/agregar.png";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import Status from '../Status';
function FormAddTask(){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [tipo, setChangetipo]=React.useState(0);
    const [tittle, setTittle]=React.useState('');
    const [description, setDescr]=React.useState('');
    const [status, setStatus]=React.useState(0);
    
    const handleChangeStatus=(event)=>{
        console.log('-------------------------');
        console.log(event);
        setStatus(event.target.value)
    }
    const showFields=()=>{
        console.log(tipo);
        if(tipo==1){

        }
    }
    useEffect(()=>{
        showFields();
    }, [tipo])
    const handleChangeTipo=(event)=>{
        setChangetipo(event.target.value);
        
    }
    const handleChangeTittle=(event) =>{
        setTittle(event.target.value)
    }
    const handleChangeDes=(event)=>{
        setDescr(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        const request = ()=>{
            fetch("http://localhost:8080/task/task/create" ,{
                method: "Post",
                body: JSON.stringify({
                    tittle,
                    description,
                    idType:tipo,
                    idStatus:status,
                    scheduledDatetime:date+time,
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(response=>response.json()).then(res=>{
                console.log(res);
                handleClose();
            }).catch(e =>{
                console.log(e);
            })
        }
        let dateformat = new Date(date);
        dateformat=dateformat.toJSON().slice(0, 10);
        request();
        let datetime= String(dateformat);
        console.log(JSON.stringify({
            tittle,
            description,
            idType:tipo,
            idStatus:status,
            scheduledDatetime:time
        }));

    }
    return<div className="">
        <div className="row">
            <h2>Tareas de hoy</h2>
            <a onClick={handleOpen}>
                <img src={agregarTaskimg} alt="logo"/> 
            </a>
        </div>
        <Modal
            open={open}        
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="modal-form">
            <Box className="box-styles">
                <div className="row">
                    <h4 id="modal-modal-title">Crear nueva tarea</h4>
                    <Button onClick={handleClose} style={{height:'35px', minWidth:'40px', margin:'28px'}}> X</Button>
                </div>
                <FormControl className="form-modal-addTask">
                    <TextField onChange={handleChangeTittle} required margin="none" id="tittle-field" label="Titulo" variant="outlined"  className="field-form-modal-addTask"/>
                    <TextField onChange={handleChangeDes}required  multiline  rows={4} margin="normal" id="description-field" label="Descripcion" variant="outlined"/>
                    <FormControl>
                        <InputLabel id="tipo-modal-form">Tipo</InputLabel>
                        <Select onChange={handleChangeTipo } value={tipo} label="Tipo" labelId="tipo-modal-form" id="select-tipo" className="select-field"> 
                            <MenuItem value={"1"}>Scheduled </MenuItem>
                            <MenuItem value={"2"}>No Schedule </MenuItem>
                        </Select>
                    </FormControl>
                    {
                        tipo==1&&(<LocalizationProvider id="select-datetime" dateAdapter={AdapterDayjs}>
                            <DatePicker id="timepicker" className="datetimeField" onChange={setDate} value={date}/>
                            <TimePicker id="datepicker" className="datetimeField select-field"
                                value={time}
                                onChange={setTime}
                                format="hh:mm:ss"
                            />
                        </LocalizationProvider>)
                    }
                    {
                        tipo==1?(<Status visibility={false} statusV={status} changeStatus={handleChangeStatus}></Status>):null
                    }
                    
                    <Button id='saveTask' style={{marginTop:'12px'}} onClick={handleSubmit}>Guardar</Button>
                </FormControl>
            </Box>
        </Modal>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
    
}
export default FormAddTask;