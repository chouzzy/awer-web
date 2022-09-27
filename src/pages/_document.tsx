import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
         
         {/* HTML Meta Tags */}
         <meta name="description" content="Assessoria de gestão e soluções tecnológicas"/>

         {/* { <!-- Facebook Meta Tags --> } */}
         <meta property="og:url" content="https://www.awer.co/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Awer"/>
         <meta property="og:description" content="Assessoria de gestão e soluções tecnológicas"/>
         <meta property="og:image" content="https://www.awer.co/static/img/logo-meta.png"/>

         {/* { <!-- Twitter Meta Tags --> } */}
         <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="awer.co"/>
         <meta property="twitter:url" content="https://www.awer.co/"/>
         <meta name="twitter:title" content="Awer"/>
         <meta name="twitter:description" content="Assessoria de gestão e soluções tecnológicas"/>
         <meta name="twitter:image" content="https://www.awer.co/static/img/logo-meta.png"/>

         {/* { <!-- Meta Tags Generated via https://www.opengraph.xyz --> } */}
               

         <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"/>
         <link rel="shortcut icon" href="/static/img/awer-icon.ico" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}