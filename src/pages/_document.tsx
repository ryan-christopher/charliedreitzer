import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
//import loading from "../app/loader";
let loader = `
    #globalLoader{
        position: fixed;
        z-index: 1700;
        top: 0;
        left: 0;
        background-color: #3f4739;
        width: 100vw;
        height: 100vh;
    }

    #preloadtext{
        font-family: Palfour;
        text-transform: lowercase;
        color: #f4f2ec;
        text-align: center;
        font-size: 40px;
        animation: loadanim 1s;
    }
    #preloadimg{
        display:block;
        margin-top: 40vh;
        margin-left: auto;
        margin-right: auto;
        animation: loadanim 1s;
    }

    @keyframes loadanim {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }


    .preload-finish {
        transform: translateX(-100vw);
        pointer-events: none;
        transition: all 1s ease 1s;
      }
`

class MyDocument extends Document {
    render() {
        return (
            <Html style={{ background: "#3f4739" }}>

                <Head>
                    <style>
                        {loader}
                    </style>
                </Head>
                <body>
                    <div id='globalLoader'>
                        <Image src="/media/sigwhite.png"
                            id="preloadimg"
                            alt="Charlie's signature."
                            width={200} height={200} />
                        <h2 id="preloadtext">Charlie Dreitzer</h2>
                    </div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument