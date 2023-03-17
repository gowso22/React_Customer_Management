import './App.css';
import Paper from '@mui/material/Paper';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {Component} from 'react';





class App extends Component{
  // props 변경될 수 없는 데이터를 명시할 때
  // 컴포넌트 내에서 데이터가 변경되어 있을 수 있는 경우이므로
  // state 사용
  state = {
    customers : ""
  }
  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
    
  }

  // 비동기적으로 내용을 수행
  callApi = async () =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){    
  return (
    // bootstrap보다 material ui를 이용하여 디자인 적용
    <Paper sx={{overflowX : "auto"}}>
    <Table sx={{maxWidth : '1080px', minWidth : '1080px'}}> 
      <TableHead>
        <TableRow>
          <TableCell>번호</TableCell>
          <TableCell>프로필</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      { // 처음 화면을 보여줄 때 customers의 값이 없이 표시되며 이후 
        // 서버에서 customers 값을 받아오는 방식이므로 this.state.customers 값이 존재할때 Customer 컴포넌트를 보여주도록하며 
        // 아닐 경우 "" 반환
      this.state.customers ? this.state.customers.map(c => {
        return(
          // map을 통해 반복문 실행하려면 key라는 속성이 필요하다.
          <Customer
            key = {c.id}
            id = {c.id}
            image = {c.image}
            name = {c.name}
            birthday = {c.birthday}
            gender = {c.gender}
            job = {c.job}
          />
        )
      }) : "" }
      </TableBody>
    </Table>
    </Paper>
  );
}
}

export default App;
