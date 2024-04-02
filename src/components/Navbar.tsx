import Link from "next/link";

export default function Navbar(){
    return(
    <nav className="flex bg-slate-900 w-full justify-between items-center py-4">
        <h1 className="text-4xl">Budget Buddy</h1>
        <ul className="flex gap-6">
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/movimentacoes">Movimentações</Link></li>
          <li><Link href="/categorias">Categorias</Link></li>
        </ul>
        <div className="w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
        </div>
      </nav>
    )
}