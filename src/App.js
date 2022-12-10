import './App.css';
import Product from './compement/profil';

function App() {
  const eventHandler = ( name) => {

    alert (name)
  }
return (
    <div>
   <Product title="islem" text="bonjour" textButton="sumbit"><img src="img2.jpg" eventHandler={eventHandler}></img></Product>
   <Product/>
    </div>
  );
}

export default App;
