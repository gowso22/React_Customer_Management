import './App.css';
import Paper from '@mui/material/Paper';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import {Component} from 'react';

// 고객정보를 배열 형식으로 표현
const customers = [
  {
  'id' : 1,
  // 64*64크기의 사진을 아무거나 가져옴
  'image' : 'https://placeimg.com/64/64/any/1',
  'name' : '홍길동',
  'birthday' : '041222',
  'gender' : '남자',
  'job' : '대학생',
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any/2',
  'name' : '이고잉',
  'birthday' : '991222',
  'gender' : '남자',
  'job' : '교육생',
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any/3',
  'name' : '이순신',
  'birthday' : '000112',
  'gender' : '남자',
  'job' : '프로그래머',
}
];


class App extends Component{
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
      {
      customers.map(c => {
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
      })
    }
      </TableBody>
    </Table>
    </Paper>
  );
}
}

export default App;
