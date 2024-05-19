import { useEffect } from 'react';

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
    }, [])

  return (
    <div className="App">
        <p>
            Hello brooo!
        </p>
        <p>
            Happy hacking {tg.initDataUnsafe?.user?.username}!
        </p>
        <p>
            Your name is {tg.initDataUnsafe?.user?.first_name}
        </p>
    </div>
  );
}