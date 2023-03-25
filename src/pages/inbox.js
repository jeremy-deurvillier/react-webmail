/* ** Point d'entré pour la lecture et l'écriture des e-mails.
*/

import Link from 'next/link'

function Inbox() {
    return (<header className="flex flex-nowrap justify-between items-stretch shadow-lg shadow-neutral-200">
        <div>
            <h1 className="font-mono uppercase p-4">React Webmail</h1>
        </div>
        <div className="w-96 basis-96 self-center">
            <input type="text" name="search" id="search" placeholder="Rechercher" className="bg-neutral-100 w-full rounded-lg m-1 p-1" />
        </div>
        <div>
            <ul>
                <li className="group/usermenu p-4">
                    <Link href="#usermenu">Username</Link>

                    <ul id="usermenu" className="bg-white hidden absolute rounded-b-lg shadow-lg shodow-neutral-200 px-4 py-2 group-hover/usermenu:block translate-y-3 -translate-x-14">
                        <li className="m-2"><Link href="/settings">Paramètres</Link></li>
                        <li className="m-2"><Link href="/help">Aides</Link></li>
                        <li className="m-2"><Link href="/logout">Déconnexion</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>)
}

export default Inbox
