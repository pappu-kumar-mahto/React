import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js'
import { useEffect, useState } from 'react';

export default function Home() {

    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
            .then((data) => setPost(data))
            .catch(console.error)
    }, [])

    return (
      <main>
        <section>
          <h1></h1>
          <h2></h2>
          <div>
            <article>
              <link>
                <span>
                  <img />
                  <span>
                    <h3></h3>
                  </span>
                </span>
              </link>
            </article>
          </div>
        </section>
      </main>
    );
}