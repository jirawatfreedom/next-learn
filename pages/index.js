import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link href="/portfolio">
            <a className="underline">PortfolioPage</a>
          </Link>
        </li>
        <li>
          <Link href="/clients">
            <a className="underline">ClientPage</a>
          </Link>
        </li>
      </ul>


    </>
  )
}
export default HomePage
