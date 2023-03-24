/* ** Page d'accueil du webmail.
* La page contient le formulaire de connexion à la boite e-mail.
*/

function Home() {
    return (<div className="font-sans grid justify-center content-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
        <form method="POST" action="/inbox">
            <div className="bg-white w-80 rounded-lg">
                <h1 className="font-mono uppercase font-bold text-xl text-center border-b p-4">React Webmail</h1>
                <div className="p-6 pt-4">
                    <h2 className="font-bold text-xl text-neutral-800 text-center mb-6">Connexion</h2>

                    <label htmlFor="email" className="block mb-1">E-mail :</label>
                    <input type="text" name="email" id="email" className="bg-neutral-100 w-full rounded-lg p-1" />
                    
                    <label htmlFor="password" className="block mt-1 mb-1">Mot de passe :</label>
                    <input type="password" name="password" id="password" className="bg-neutral-100 w-full rounded-lg p-1" />

                    <input type="submit" name="submit" value="Se connecter" className="uppercase text-white bg-gradient-to-r from-sky-500 to-indigo-500 block w-full rounded-lg mt-4 p-2 cursor-pointer" />
                </div>
            </div>
        </form>
    </div>)
}

export default Home
