function App(){
    let str1 = 'hello';
    let str2 = 'world';
    let greet = str1 + ' ' + str2 + '!';
    console.log('greeting : ' + greet);

    let product = {name:'apple', price:20000};
    let message = '제품 : ' + product.name + ', 단가 : ' + product.price;
    console.log(message);

    let multiLine = 'hello\neveryone'
    console.log(multiLine);

    let value1 = 14;
    let value2 = 5;
    let boolValue = false;
    let operator1 = '연산 결과 : ' + (value1 * value2);
    let operator2 = '삼항 연산자 : ' + (boolValue ? '참' : '거짓') + '입니다.';
    console.log(operator1);
    console.log(operator2);





    //ES6 버전 이후...
    // template literal은 백틱(`) 문자를 사용하여 데이터를 표현하는 방식입니다.
    // 백틱을 사용하고, 수식의 표현은 ${}를 사용합니다.
    
    let str3 = '여러분';
    let str4 = '반갑습니다.';
    greet = `${str3}~~~${str4}`;
    console.log('greeting : ' + greet);

    product = {name:'react', price:30000};
    // toLocaleString() 메소드는 숫자를 3자리마다 콤마 유형으로 변경해주는 자바 스크립트 메소드입니다.
    message = `제품 ${product.name}의 단가는 ${product.price.toLocaleString()}입니다.`; 
    console.log(message);

    multiLine = `여러분
안녕하세요`;
    console.log(multiLine);

    boolValue = 14>5;
    operator1 = `연산 결과 : ${value1 * value2}`;
    operator2 = `삼항 연산자 : ${boolValue ? '참' : '거짓'}입니다.`;
    console.log(operator1);
    console.log(operator2);

    let discount = 0.3;
    message = `할인가 : ${(1-discount) * product.price}원`
     console.log(message);

    return(
        <div className="App">
            탬플릿 문자열
        </div>
    );
}

export default App;