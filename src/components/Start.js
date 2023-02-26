// 起動画面
// className = CSS
// bg-[#4ed1a3] これは、bg=バックグラウンド　つまり背景の色が#4ed1a3
// text-white これは、文字の色が白
// 詳しくは、https://tailwindcss.com/docs/flex-basis で検索

const Start = () => {
  return (
    <div className="bg-[#4ed1a3] min-h-screen flex flex-col items-center relative">
      <div className="bg-[#d9d9d9] w-[150px] h-[150px] rounded-full mt-[90px] flex justify-center items-center">
        app logo
      </div>
      <h1 className="text-white text-[32px] mx-[50px]">App Name</h1>
      <div className="absolute bottom-[50px] flex flex-col items-center">
        <a href="/sign_in" className="">Sign in</a>
        <a href="/create_account" className="">Create an account</a>
      </div>
    </div>
  )
}

export default Start