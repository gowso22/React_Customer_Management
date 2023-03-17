import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

// 클래스형 컴포넌트 생성
// Customer 컴포넌트 분리
class Customer extends React.Component{
    render(){
        return(
            <TableRow>
               <TableCell>{this.props.id}</TableCell>
               <TableCell><img src={this.props.image} alt='profile'></img></TableCell>
               <TableCell>{this.props.name}</TableCell>
               <TableCell>{this.props.birthday}</TableCell>
               <TableCell>{this.props.gender}</TableCell>
               <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}


export default Customer;