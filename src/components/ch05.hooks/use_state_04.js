import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // 회원 명단 (사실 이 데이터는 SpringBoot에서 받아와야 함)
  const [members, setMembers] = useState([
    {id:1, name:'김길선', age:22},
    {id:2, name:'임우경', age:45},
    {id:3, name:'황인태', age:60},
    {id:4, name:'윤철용', age:15},
  ]);

  const nameChange = (e) => setName(e.target.value);
  const ageChange = (e) => setAge(e.target.value);

  const addMember = () => {
    const newMember = {
      id: members.length + 1,
      name: name,
      age: Number(age),
    };
    setMembers([...members, newMember]); // 기존 members 배열에 새 회원 추가하여 갱신
    setName(''); // 입력란 초기화
    setAge('');

    alert('회원 정보가 추가되었습니다.');
  }; 

  const deleteMember = (e) => {
    const filteredMembers = members.filter(member => member.id !== Number(e.target.id)); // HTML 요소의 id 속성은 문자열로 저장됨
    setMembers(filteredMembers);
    
    alert('회원 정보가 삭제되었습니다.');
  };
  
  const showMemberList = members.map(member => (
    <li id={member.id} key={member.id} onDoubleClick={deleteMember}>
      {member.name}({member.age})
    </li>
  ));

  return (
    <div className="App">
      이름 : &nbsp;&nbsp;<input type="text" value={name} onChange={nameChange} /><br />
      나이 : &nbsp;&nbsp;<input type="number" value={age} onChange={ageChange} /><br /><br />
      
      <button onClick={addMember}>추가</button><br /><br />
      
      <h4>회원 목록</h4>
      <ul>{showMemberList}</ul>
    </div>
  );
}

export default App;
