function App(){
    console.log('\n매개변수가 없는 함수 표현식');
    const function01 = function(){
        return 'hello~world';
    }
    console.log(function01());
    
    console.log('\n매개변수가 없는 화살표 함수');
    const function02 = () => {
        return '여러분~ 안녕하세요';
    }
    console.log(function02());
    
    console.log('\n중괄호와 return문이 없는 화살표 함수');
    const function03 = () => '어서오세요~ 반가워요';
    console.log(function03());

    console.log('\nif문 활용');
    const function04 = (name) => {
        if (name === undefined) {
            return '누구신가요?';
        }else{
            return `${name}님 안녕하세요!`
        }
    }
    const name = '김철수';
    console.log(function04(name));

    console.log('\n매개변수 2개 + 삼항연산자 활용');
    const function05 = (first, second) => 
        second === undefined ? `second가 없습니다.` : `${first} 더하기 ${second}는 ${first + second}입니다.`;
    console.log(function05(10, 20));

    console.log('\n매개변수 2개 + 삼항연산자 활용(2)');
    const function06 = (name, age) => 
        age > 19 ? `${name}님은 성인입니다.` : `${name}님은 ${age}세 이므로 미성년자입니다.`;
    console.log(function06('김철수', 17));

    console.log('\n반환 타입이 객체인 경우');
    const function07 = (st, nd) => {
        const res = {add:st+nd, mul:st*nd}
        return res;
    }
    console.log(function07(14,5))
    console.log(`key 이름을 이용하여 접근이 가능합니다. (['key'] 또는 .key)`)
    console.log('덧셈 : ' + function07(10,20)['add'])
    console.log('곱셈 : ' + function07(10,20).mul)

    return(
        <div className="App">
            화살표 함수
        </div>
    );
}

export default App;