import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import GradeIcon from '@material-ui/icons/Grade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import axios from 'axios';

class Admin extends Component {
    state = {
        returned: []
    }

    componentDidMount = () => {
        this.getFeedback();
    }

    deleteItem = (id) => {
        axios.delete(`/feedback/${id}`)
        .then((response) => {
            this.getFeedback();
        })
        .catch((error) => {
            alert('Something Bad Happened!!')
            console.log('Error:', error);
        })
    }

    getFeedback = () => {
        axios.get('/feedback')
        .then((response) => {
            this.setState({
            returned: response.data
            })
        })
        .catch((error) => {
            alert('Something Bad Happened!!')
            console.log('Error:', error);
        })
    }
    
    render() {
        return (
            <>
                <Card><CardContent><GradeIcon/>   Feedback Results!</CardContent></Card>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Feeling</TableCell>
                            <TableCell>Comprehension</TableCell>
                            <TableCell>Support</TableCell>
                            <TableCell>Comments</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.returned.map(log => 
                            <TableRow><TableCell>{log.feeling}</TableCell>
                                    <TableCell>{log.understanding}</TableCell> 
                                    <TableCell>{log.support}</TableCell> 
                                    <TableCell>{log.comments}</TableCell>
                                    <TableCell><DeleteSweepIcon onClick={(event) => this.deleteItem(log.id)}/></TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
            </>
        )
    }
}

export default Admin;