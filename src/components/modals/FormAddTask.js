import React from "react";
import { Box, FormControl, MenuItem, Select, Modal,TextField, Button, InputLabel } from "@mui/material";
import "../../styles/modals/formAddTask.scss";
import agregarTaskimg from "../../images/agregar.png";
function FormAddTask(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [tipo, setChangetipo]=React.useState('Scheduled');
    const [status, setChangestatus]=React.useState('Pending');
    const handleChangeStatus=(event)=>{
        setChangestatus(event.target.value)
    };
    const handleChangeTipo=(event)=>{
        setChangetipo(event.target.value)
    }
    const [tittle, setTittle]=React.useState('');
    const [description, setDescr]=React.useState('');
    const [hora, setHora]=React.useState('');
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
                    <TextField required margin="none" id="tittle-field" label="Titulo" variant="outlined"  className="field-form-modal-addTask"/>
                    <TextField required  multiline  rows={4} margin="normal" id="description-field" label="Descripcion" variant="outlined"/>
                    <FormControl>
                        <InputLabel id="etapa-modal-form">Etapa</InputLabel>
                        <Select onChange={handleChangeStatus} value={status} label="Etapa" labelId="etapa-modal-form" id="select-status" className="select-field">
                            <MenuItem value={"Pending"}>Pendiente</MenuItem>
                            <MenuItem value={"Started"}>Iniciada</MenuItem>
                            <MenuItem value={"Done"}>Terminada</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="tipo-modal-form">Tipo</InputLabel>
                        <Select onChange={handleChangeTipo} value={tipo} label="Tipo" labelId="tipo-modal-form" id="select-tipo" className="select-field"> 
                            <MenuItem value={"Scheduled"}>Scheduled </MenuItem>
                            <MenuItem value={"NonSchedule"}>No Schedule </MenuItem>
                        </Select> 
                    </FormControl>
                    <TextField margin="normal" required id="hora" label="HORA" variant="outlined" style={{display:'none'}}/>
                    <Button id='saveTask' style={{marginTop:'12px'}}>Guardar</Button>
                </FormControl>
            </Box>

        </Modal>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>
    
}
export default FormAddTask;