import {useState,useEffect} from 'react' 
import Counter from './components/Counter';
// bir condition içinde hookları kullanmamalıyız.

function App() {
 
  // const [number,setNumber] = useState(0);
  // const [ name,setName] = useState("Ayse")
  // useEffect(()=>{
  //   console.log('Component mount edildi')
  // },[])// arrayi bos bırakaırsak component mount edildigi anı yakalarsın demek oluyor
  // // useEffect(()=> {
  // //   console.log("state güncellendi")
  // // })
  // //eger sadece number güncellendiginde state güncellendi demek istersem;array icinde o stati veririz
  // // useEffect(()=> {
  // //   console.log("Number veya name state i güncellendi")
  // // },[number,name])
  // useEffect(()=> {
  //   console.log("Number state i güncellendi")
  // },[number])
  // useEffect(()=> {
  //   console.log("Name state i güncellendi")
  // },[name])

//Mount demek componentın doma yüklenmesi anlamına gelmektedir

const [isVisible,setIsVisible]= useState(true);
  return (
    <div className="App">
     { isVisible == true ?  <Counter/> : '' } 
      <button onClick={()=> setIsVisible(!isVisible) }>Toggle</button>
    </div>
  );
}

export default App;
// Not: Toogle butonuna bastıgımızda domdan kaldırılsa bile güncelleme islemine devam ettiğini gördük.
// Verdiği hata da su sekildedir. Cant perform a React state update on an unmounted component.
// React unmount edilmis componentlarda state güncellemeleri yapıldıgında performanslı çalışmayabilir demek istiyor.

// Bu durum çözmek icin component unmounted edildiginde seetIntervali durdurmamız gerekmektedir.