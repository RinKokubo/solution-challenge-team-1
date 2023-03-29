import applogo from '../images/applogo.png'; 
import sign_in from '../images/signin.png';
import create_account from '../images/createanacc.png';
const Start = () => {
  return (
    <div className="bg-[#4ed1a3] min-h-screen flex flex-col items-center relative"> 
      <div className="bg-[#d9d9d9] w-48 h-48 rounded-full mt-16 flex justify-center items-center"> 
        <img src={applogo} alt="App Logo" /> {/* applogo を画像ファイルに置き換え */}
      </div>
      <h1 className="text-white text-4xl mx-8">PinPointMe</h1> 
      <div className="absolute bottom-16 flex flex-col items-center"> 
      <a href="/sign_in"className=""><img src={sign_in} class="w-64 object-contain rounded-lg" alt="Sign In" style={{marginBottom: '20px'}} /></a> 
        <a href="/create_account" className=""><img src={create_account} class="w-64 object-contain rounded-lg" alt="Create an account" /></a> 
      </div>
    </div>
  );
};
export default Start