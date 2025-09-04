function App({type, items}) {
  console.log("컨텐트");

  const ListTag = type === 'ul' ? 'ul' : 'ol';

  return (
    <nav>
      <ListTag>
        {items.map((item, index) => (
          <li key={index}><a href={`${item.link}.html`}>{item.name}</a></li>
        ))}
      </ListTag>
    </nav>
  );
}

export default App;

// function App({bread01, bread02, bread03, bread04}) {
//   return (
//     <nav>
//       <ul>
//         <li><a href="1.html">{bread01}</a></li>
//         <li><a href="2.html">{bread02}</a></li>
//         <li><a href="3.html">{bread03}</a></li>
//         <li><a href="4.html">{bread04}</a></li>
//       </ul>
//     </nav>
//   );
// }