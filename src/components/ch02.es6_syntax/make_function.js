function App() {
    console.log("함수 만들기 예시");

    console.log("함수 선언문");
    function power01(a, b) {
        return (a * a) + (b * b);
    }

    let su01 = 2;
    let su02 = 3;
    let message = `power01(${su01}, ${su02}) 실행 결과 : `;
    console.log(message + power01(su01, su02));

    console.log(power01(5)); // a만 할당하고 b를 할당을 안함 (undefined)
    console.log('NaN은 Not a Number의 줄임말입니다.');


    console.log('\n함수 표현식');
    const power02 = function (a, b = 5) { return (a * a) + (b * b) };
    let su03 = 4;
    let su04 = 5;
    let message1 = `power02(${su03}, ${su04}) 실행 결과 : `;
    console.log(message1 + power02(su03, su04));

    console.log(power02(3)); // b에 기본값이 할당되어 있어 작동


    return (
        <div className="App">
            함수 만들기
        </div>
    );
}

export default App;