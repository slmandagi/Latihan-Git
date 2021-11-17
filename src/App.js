// import logo from './logo.svg';
// import './App.css';
import Routing from "./components/config/Routing";
import NavBar from "./components/NavBar";
function Hello(props){ // ini disebut jsx. Jsx hanya bisa dipakai apabila ada react
  // props(atribut) itu mengirim data dari parent ke child. ini karena props sifatnya satu arah. props itu read only
  // const nama = "John Doe";
  return (
    //kalo ada 2 kom yang ingin direturn maka pakai elemen yang lebih tinggi lagi(?), seperti div
    // atau bisa juga div dihilangkan, sehingga menjadi fragmen
    // gunakan div apabila akan ada kustom pada isi didalamnya(warna, bentuk, dll)
    <>
      <h1>Hello {props.name}</h1>
      <h2>Apa kabarnya?</h2>
    </>
  )
}


function App() {
  return (
    <div>
        <NavBar />
    </div>
  );
}

export default App;
