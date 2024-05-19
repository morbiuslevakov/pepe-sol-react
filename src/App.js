import { useEffect } from "react";

const tg = window.Telegram.WebApp;

function App() {

    // useEffect(() => {
    //     tg.ready();
    // }, [])

  return (
    <div className="App">
        <p>
            Happy hacking {tg.initData.user.username}!
        </p>
        <p>
            Your name is {tg.initData.user.first_name}
        </p>
    </div>
  );
}

export default App;
