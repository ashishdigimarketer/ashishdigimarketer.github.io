/**
 * Combined Schema.org Person JSON-LD Data for Ashish Kumar
 * This object can be embedded in an HTML <script type="application/ld+json"> tag
 * or used within a JavaScript application.
 */
const ashishKumarPersonSchema = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Ashish Kumar",
  "url": "https://ashish.website/",
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://ashishkumar.tech.blog/wp-content/uploads/2025/10/ashish-kumar.jpg",
      "contentUrl": "https://ashishkumar.tech.blog/wp-content/uploads/2025/10/ashish-kumar.jpg",
      "caption": "Ashish Kumar"
    },
    {
      "@type": "ImageObject",
      "url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Ashish_Kumar.jpg",
      "contentUrl": "https://upload.wikimedia.org/wikipedia/commons/1/10/Ashish_Kumar.jpg",
      "caption": "Ashish Kumar"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/ashishkgmid/",
    "https://twitter.com/ashishkgmid",
    "https://x.com/ashishkgmid",
    "https://www.instagram.com/ashishkgmid/",
    "https://www.youtube.com/@ashishkgmid",
    "https://www.linkedin.com/in/ashishkgmid/",
    "https://www.pinterest.com/ashishkgmid/",
    "https://github.com/ashishkgmid/",
    "https://orcid.org/0009-0004-4401-3695",
    "https://www.wikidata.org/wiki/Q136708655",
    "https://commons.wikimedia.org/wiki/File:Ashish_Kumar.jpg",
    "https://scholar.google.com/citations?user=00IhU2wAAAAJ&hl=en",
    "https://featured.com/p/ashish-kumar-5053",
    "https://gravatar.com/ashishkgmid",
    "https://www.flickr.com/photos/ashishkgmid/",
    "https://www.flickr.com/people/ashishkgmid/",
    "https://www.goodreads.com/user/show/195134571-ashish-kumar",
    "https://theorg.com/org/web-light-infotech/org-chart/ashish-kumar",
    "https://twitch.tv/ashishkgmid",
    "https://mastodon.social/@ashishkgmid",
    "https://gitlab.com/ashishkgmid",
    "https://stackoverflow.com/users/31808427/ashish-kumar",
    "https://bsky.app/profile/ashishkgmid.bsky.social",
    "https://about.me/ashishkgmid",
    "https://ashishdigimarketer.github.io/",
    "https://ashishkumar.tech.blog/",
    "https://www.google.com/search?kgmid=/g/11yn9v8qp6"
  ],
  "jobTitle": [
    "Digital Marketer",
    "Professional Trader",
    "Entrepreneur"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Web Light Infotech"
  },
  "alternateName": [
    "Ashish",
    "Ashish Digital Marketer",
    "Ashish Professional Trader",
    "Ashish Kumar Entrepreneur",
    "Ashish Kumar Trader"
  ],
  "identifier": [
    {
      "@type": "PropertyValue",
      "name": "kgmid",
      "value": "/g/11yn9v8qp6",
      "url": "https://www.google.com/search?kgmid=/g/11yn9v8qp6"
    },
    {
      "@type": "PropertyValue",
      "name": "orcid",
      "value": "0009-0004-4401-3695",
      "url": "https://orcid.org/0009-0004-4401-3695"
    }
  ],
  "email": "hello@ashish.website",
  "description": "Ashish Kumar is a digital marketer with over 8 years of experience in digital marketing.",
  "homeLocation": {
    "@type": "Place",
    "name": "Delhi"
  },
  "affiliation": {
    "@type": "Organization",
    "name": "Web Light Infotech"
  }
};


const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);

    // Append to the <head>
    document.head.appendChild(script);
}

// Call the function immediately to inject the schema as soon as the file loads
injectPersonSchema();