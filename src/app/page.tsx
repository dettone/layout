"use client"
import { useEffect, useState } from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import Header from "./components/header";
import NewsletterModal from "./components/newsLetterModal";
import Head from 'next/head'
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, [])

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    
    <div>
          <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
           {isModalOpen && <NewsletterModal onClose={handleCloseModal} />}
        <Header />
        <Body />
        <Footer />
    </div>
  );
   
}
