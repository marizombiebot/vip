
import React, { useEffect, useState } from "react";

const links = [
  { title: "🔥 Assine o VIP no Telegram", url: "https://t.me/marizombiebot" },
  { title: "💋 OnlyFans Exclusivo", url: "https://onlyfans.com/marizombie666" },
  { title: "💖 Fansly Premium", url: "https://fans.ly/marizombie" },
  { title: "👑 FanCentro", url: "https://fancentro.com/marizombie" },
  { title: "🔒 Privacy", url: "https://privacy.com.br/profile/marizombie" },
  { title: "📸 ManyVids", url: "https://cameraprive.com/br/mari-zombie/" },
  { title: "🎥 Vídeos & chamadas (Privê)", url: "https://cameraprive.com/br/mari-zombie/" },
  { title: "🎁 Wishlist Amazon", url: "https://bit.ly/mz-amazonbr" },
  { title: "🎁 Loja do Prazer", url: "https://www.lojadoprazer.com.br/wishlist.asp?idc=b7e8b1e26e959def8cf8ef28e78e6993efceb35425d17ed25133d4ceb21962d4" },
  { title: "💸 Mimos via Mercado Pago", url: "https://link.mercadopago.com.br/tributomz" },
];

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.onTelegramAuth = (user) => {
      setUser(user);
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?7";
    script.setAttribute("data-telegram-login", "marizombiebot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-onauth", "onTelegramAuth(user)");
    script.setAttribute("data-request-access", "write");
    script.async = true;

    const loginDiv = document.getElementById("telegram-login");
    if (loginDiv) loginDiv.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-red-500">🔥 Marizombie WebApp</h1>

      {!user ? (
        <>
          <p className="mb-4 text-gray-300 text-center">
            Conecte-se com o Telegram para acessar todos os conteúdos e links exclusivos.
          </p>
          <div id="telegram-login" />
        </>
      ) : (
        <>
          <p className="mb-4 text-green-400">Bem-vindo(a), {user.first_name}!</p>
          <div className="grid grid-cols-1 gap-3 w-full max-w-md">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl text-center shadow-md transition"
              >
                {link.title}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
