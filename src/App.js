import Header from './components/Header';
import Hero from './components/Hero';
import CardGroup from './components/CardGroup';
import Cta from './components/Cta';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header 
      iconText='Site icon'
      LinkTextOne='lorem'
      LinkSrcOne='https://www.nikharpandya.com'

      LinkTextTwo='lorem'
      LinkSrcTwo='https://www.nikharpandya.com'

      LinkTextThree='lorem'
      LinkSrcThree='https://www.nikharpandya.com'

      LinkTextFour='lorem'
      LinkSrcFour='https://www.nikharpandya.com'
      />

      <Hero 
      ImgSrc='https://upload.wikimedia.org/wikipedia/commons/3/32/House_sparrow04.jpg'
      Title='This is a bird'
      BtnSrc='https://www.nikharpandya.com'
      BtnText='Visit me'
      />


      <CardGroup 
      ImgOne='https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'
      TitleOne='Hello from card'
      DescOne='Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to '
      UserNameOne='Nikhar'

      ImgTwo='https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg'
      TitleTwo='Hello from card'
      DescTwo='Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to '
      UserNameTwo='Nikhar'

      ImgThree='https://images6.alphacoders.com/312/thumb-1920-312773.jpg'
      TitleThree='Hello from card'
      DescThree='Sets the width and height of the background image. The first value sets the width, the second value sets the height. If only one value is given, the second is set to '
      UserNameThree='Nikhar'
      />

      <Cta
      BackgroundColor='blue'
      Title='Lets work on projects'
      Icon='😎'
      BtnText='Connect with me'
      BtnUrl=''
      BtnColor='red'
       />
       
      <Footer
      ptone='lorem'
      psone='https://nikharpandya.com'
      pttwo='lorem'
      pstwo='https://nikharpandya.com'
      ptthree='lorem'
      psthree='https://nikharpandya.com'
      ptfour='lorem'
      psfour='https://nikharpandya.com'

      pstyle='circle'

      stone='lorem'
      ssone='https://nikharpandya.com'
      sttwo='lore'
      sstwo='https://nikharpandya.com'
      stthree='lorem'
      ssthree='https://nikharpandya.com'
      stfour='lorem'
      ssfour='https://nikharpandya.com'

      sstyle='square'

      quote='this will display the quote text'

       />
    </div>
  );
}

export default App;
