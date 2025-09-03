function App() {
    console.log('자바스크립트 배열 관련 map 함수');


    const num = [4, 9, 16, 25];

    console.log('\nmap 함수의 첫번째 매개변수 : function');
    const multifly = (num) => (10 * num);
    const res1 = num.map(multifly);
    console.log(res1);

    console.log('\n소수점 제한');
    const double = (n) => (2 * n).toFixed(1); // 소수점 첫째자리까지
    const res2 = num.map(double);
    console.log(res2);

    console.log('\nMath 객체 사용');
    const res3 = num.map(Math.sqrt); // 루트
    console.log(res3);

    console.log('\n비어있는 배열의 경우');
    const res4 = [].map(multifly);
    console.log(res4);


    const foods = ['라면', '우동', '짜장면', '짬뽕', '칼국수', '마라탕'];

    console.log('\n함수를 map에서 바로 생성 + 반복문');
    const res5 = foods.map(item => `맛있는 ${item} 좋아요`);
    console.log(res5);

    console.log('\n콘솔이 아닌 웹에서 출력 + key 지정');
    const res6 = foods.map(item => (<li key={item}>맛있는 {item} 좋아요</li>));

    console.log('\nindex 이용 + 양자택일');
    const res7 = foods.map((item, idx) => 
        (idx % 2 === 0 ? <li key={idx}>{item}이 좋아요</li> : <li key={idx}>{item}은 싫어요</li>));

    const words = ['love', 'peace', 'hello', 'sea', 'identification', 'create', 'table'];

    console.log('\nif문에서 else가 없는 경우 : 삼항연산자 -> &&연산자')
    const max_length = 4;
    let short_length_array = [];
    words.map(sentence => 
        (sentence.length <= max_length && short_length_array.push(sentence)));
    console.log(short_length_array);


    const customers = [
        {fname:'민정', lname:'김', age:10},
        {fname:'효리', lname:'최', age:20},
        {fname:'지영', lname:'강', age:30},
    ];
    const getCustomer = (person, idx) => {
        const isAdult = person.age >= 19 ? '성인' : '미성년자';
        return (
            <li key={idx}>
                {person.lname} {person.fname}님, 나이: {person.age}세 ({isAdult})
            </li>
        );
    };
    const CustomerList = () => {
        const myList = customers.map(getCustomer);
        return <ol>{myList}</ol>
    };


    const WinterItems = () => {
        const items = [
            {name:'눈사람', description:'겨울철에 만드는 재미있는 친구'},
            {name:'얼음', description:'차갑고 단단한 겨울의 상징'},
            {name:'눈', description:'하얗게 내리는 겨울 풍경'},
            {name:'바람', description:'차가운 겨울바람'},

        ];
        const itemList = items.map(item => (
            <li key={item.name}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
        ));
        return(
            <ul>{itemList}</ul>
        );
    }



    return (
        <div className="App">
            배열 함수(map)
            <h4>단순 출력</h4>
            <ul>{res6}</ul>
            <h4>양자택일</h4>
            <ol>{res7}</ol>
            <h4>고객 리스트</h4>
            <CustomerList />
            <h4>겨울 품목 리스트</h4>
            <WinterItems />
        </div>
    );
}

export default App;