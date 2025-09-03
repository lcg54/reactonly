function App() {
    console.log('\n배열에서 : ');
    let arr1 = ['김의찬', '이기현'];
    let arr2 = ['강유리', '심수현'];
    let merge1 = [arr1, arr2];
    let merge2 = [...arr1, ...arr2];
    console.log(arr1);
    console.log(arr2);
    console.log(merge1);
    console.log(merge2);
    console.log(merge2.map(item => item));

    console.log('\n객체에서 : ');
    const myCar = { brand: '현대', model: '소나타', color: '흰색' };
    const myCarUpdate = { type: '중형', year: 2025, color: '검정색' };
    const myCarInfo1 = { myCar, myCarUpdate };
    const myCarInfo2 = { ...myCar, ...myCarUpdate };
    console.log(myCar);
    console.log(myCarUpdate);
    console.log(myCarInfo1);
    console.log(myCarInfo2);


    return (
        <div className="App">
            ...으로 끄집어내기
        </div>
    );
}

export default App;