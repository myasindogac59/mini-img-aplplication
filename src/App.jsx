import { useState } from 'react'


function App() {
  const picturesIDs = [200, 201, 203, 204]
  const [imageId, setImageId] = useState(picturesIDs[0])
  const getLoremPicsumImg = (id, width = 800, height = 450) => `https://picsum.photos/id/${id}/${width}/${height}`;
  function handleClick(id) {
    setImageId(id)
  }
  return (
    <main className="container">
      <hgroup>
        <h2>Mini Gorsel Uygulamasi</h2>
        <h3>Görsel:</h3>
      </hgroup>
      <img
        src={getLoremPicsumImg(imageId)}
        alt="" style={{ width: "100%" }}
      />
      <div className="grid" style={{ marginTop: "30px" }}>
      {
  picturesIDs.map((item, index) => <div key={index}>
    <img 
    onClick={()=> handleClick(item)}
    src={getLoremPicsumImg(item, 100, 100)}
    alt="" 
     />
  </div>)
}
      </div>
    </main>
  )
}
// Eski Yontem: 5 adet gorsel render etmek icin***
// {
//   [...Array(5)].map((item, index) => <div key={index}>
//     <img 
//     onClick={()=> handleClick(200 + index)}
//     src={getLoremPicsumImg((200 + index), 100, 100)}
//     alt="" 
//      />
//   </div>)
// }
export default App
