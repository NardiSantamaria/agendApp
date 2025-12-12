import React from "react";
import { Box, FormControl, MenuItem, Select, Modal,TextField, Button, InputLabel } from "@mui/material";
import "../../styles/modals/formAddTask.scss";
import agregarTaskimg from "../../images/agregar.png";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

function FormAddTask(props){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        cleanFields();
    };

    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [tipo, setChangetipo]=React.useState(2);
    const [taskTitle, setTaskTitle]=React.useState('');
    const [description, setDescr]=React.useState('');
    const [status, setStatus]=React.useState(1);
    const [titleError, setTitleError]=React.useState(null);
    const [descriptionError, setDescriptionError]=React.useState(null);
    const [dateError, setDateError]=React.useState(null);
    const [timeError, setTimeError]=React.useState(null);
    const [formError, setFormError]=React.useState(null);

    const handleChangeTipo=(event)=>{
        setChangetipo(event.target.value);
        if(event.target.value==2){
            setDate(null);
            setTime(null);
        }
    }

    const handleChangeTaskTitle=(event) =>{
        if(event.target.value.length==0){
            setTitleError(true);
        }else{
            setTitleError(false);
        }
        setTaskTitle(event.target.value)
    }

    const handleChangeDes=(event)=>{
        if(event.target.value.length>200){
            setDescriptionError(true);
        }else{
            setDescriptionError(false);
        }
        setDescr(event.target.value)
    }
    
    const showError=(message)=>{
        return <label className="error-message" id="error-message">{message}</label>
    }

    const dateTimeFormat=()=>{
        let dateTime=null;
        if(date!=null && time!=null ){
        dateTime=dayjs(date).format('YYYY-MM-DD') + 'T' + dayjs(time).format('HH:mm:ss') ;
        }if(date!=null && time==null){
            dateTime=dayjs(date).format('YYYY-MM-DD') + 'T' + '00:00:00' ;
        }
        return dateTime;
    }

    const validateDate=()=>{
        if(dayjs(date).isBefore(dayjs())){
            setDateError(true);
            showError("La fecha no puede ser anterior a la actual");
        }else{
            setDateError(false);
        }
        if(date!=null && time==null){
            setTimeError(true);
            showError("La fecha es obligatoria si se selecciona una hora");
        }else{
            setTimeError(false);
        }
        if(dateError || timeError){
            setFormError(true);
        }
    }  

     React.useEffect(()=>{
        validateDate();
    },[formError]);

    const cleanFields=()=>{
        setTaskTitle('');
        setDescr('');   
        setChangetipo(0);
        setDate(null);
        setTime(null);
        setStatus(1);
    }

    const request = ()=>{
        fetch("http://localhost:8080/task/task/create" ,{
            method: "Post",
            body: JSON.stringify({
                taskTittle:taskTitle,
                taskDescription:description,
                idType:tipo,
                idStatus:status,
                taskScheduledDateTime:dateTimeFormat()
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(response=>response.json()).then(res=>{
            console.log(res);
            if(tipo==1){
                props.updateListSQ(res);
            }else{
                props.updateListNS(res);
            }
            handleClose();
        }).catch(e =>{
            console.log(e);
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        request();
    }

    return<div className="">
        <div className="row">
            <a onClick={handleOpen} className="addTaskButton">
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
                    <TextField required onChange={handleChangeTaskTitle} margin="none" id="Title-field" label="Titulo" variant="outlined"  className="field-form-modal-addTask"/>
                    {titleError && showError("El titulo es obligatorio")}
                    <TextField required onChange={handleChangeDes} multiline  rows={4} margin="normal" id="description-field" label="Description" variant="outlined"/>
                    {descriptionError && showError("La descripcion es muy larga")}
                    <FormControl>
                        <InputLabel id="tipo-modal-form">Tipo</InputLabel>
                        <Select onChange={handleChangeTipo } value={tipo} label="Tipo" labelId="tipo-modal-form" id="select-tipo" className="select-field"> 
                            <MenuItem value={"1"}>Scheduled </MenuItem>
                            <MenuItem value={"2"}>No Schedule </MenuItem>
                        </Select>
                    </FormControl>
                    {
                        tipo==1&&(<LocalizationProvider id="select-datetime" dateAdapter={AdapterDayjs} >
                            <DatePicker id="timepicker" className="datetimeField select-field" onChange={setDate} value={date}/>
                            <TimePicker id="datepicker" className="datetimeField select-field"
                                value={time}
                                onChange={setTime}
                                format="hh:mm:ss"
                            />
                        </LocalizationProvider>)
                    }            
                    <Button id='saveTask' className="submit-button" onClick={handleSubmit} disabled={formError}>Guardar</Button>
                    { formError && showError("Revisar los campos del formulario")}      
                </FormControl>
            </Box>
        </Modal>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
}
export default FormAddTask;