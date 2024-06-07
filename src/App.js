import { useEffect } from 'react';
import { fetchData } from './utils/api-utils';

export const App = () => {
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        tg.ready();
        fetchData(tg.initData).then();
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