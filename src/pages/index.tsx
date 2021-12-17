import {GetServerSideProps} from "next"
import Head from "next/head"
import {SubscribeButton} from "../components/SubscribeButton"
import girlPic from "../assets/mulher.svg"

import styles from "./home.module.scss"
import {stripe} from "../services/stripes"

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | MS Blog</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome!</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src={girlPic} alt="Girl Coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1K7SbxDzteuG8UQ8v4B6FgJG")

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    }
  }
}
