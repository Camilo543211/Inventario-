import React from 'react';
import {
    useParams,Route, Link
  } from "react-router-dom";
  import { Table, TableRow, TableBody,TableCell, TableHead, Button } from '@material-ui/core'

export default function MisDatos(props) {
    let {talla}=useParams();
    let {cantidad}=useParams();
    let {marca}=useParams();
    let {tipo}=useParams();
    return(
        <div>
                        <>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>tipo</TableCell>
                            <TableCell>Talla</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Marca</TableCell>
                         
                        </TableRow>
                    </TableHead>
                    <TableBody>
                   
                       
                           <TableRow>
                           <TableCell>{tipo}</TableCell>
                               <TableCell>{talla} </TableCell>
                               <TableCell>{cantidad}</TableCell>
                               <TableCell>{marca}</TableCell>
                              
                           </TableRow>
                       
                   
                   </TableBody>
                </Table>
                <Button size="small" color="primary">
              <Link  to ={"/zapatos"}>REGISTRAR DE NUEVO </Link></Button>
                </>


            
        </div>
    )
}