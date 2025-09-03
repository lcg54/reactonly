function App(){
    let header = 'IT 과목';
    let subject = ['java', 'react', 'html', 'javascript', 'bootstrap', 'oracle'];

    let result = '';
    result += `     <h1>${header}</h1>`;
    result += `
    <ul>`;
    for(const item of subject){ // for(타입 요소명:배열명) // 자바랑 비슷함
        result += `
        <li>${item}</li>`;
    }
    result += `
    </ul>`;
    console.log(result);

    // result2 변수에 <ol> 태그를 사용하여 순서가 있는 목록으로 만들기 (콘솔출력x)
    const result2 = (
        <>
            <h1>{header}</h1>
            <ol>
                {subject.map(item => <li key={item}>{item}</li>)}
            </ol>
        </> 
    ); 


    return(
        <div className="App">
            {/*보안(XSS 공격) 때문에 기본적으로 모든 내용을 문자열로 보여줍니다.*/}
            {/*문자열 형식으로 HTML 태그 형태로 렌더링하기*/}
            <div dangerouslySetInnerHTML={{__html : result}} />
            
            {/*리액트 스럽게 렌더링하기*/}
            {result2}
        </div>
    );  
}

export default App ;