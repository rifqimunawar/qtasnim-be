import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <div className="navbar bg-base-100 shadow-lg mb-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none mr-8">
          <Link to={'/jenis'} className="mr-5 text-md text-sky-950">
            Jenis Barang
          </Link>
          <Link to={'/barang'} className="mr-5 text-md text-sky-950">
            Barang
          </Link>
        </div>
        <div className="flex-none gap-2 min-w-36">
          <div className="form-control w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
