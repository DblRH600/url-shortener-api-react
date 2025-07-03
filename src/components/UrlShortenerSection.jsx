// Shortening Section
import { useState, useEffect } from "react";

const BITLY_API = 'https://api-ssl.bitly.com/v4/shorten';
const TOKEN = '287dd8fc75980c43beee2bf866c727a4fab1eefa';
const MAX_SEARCHES = 5;

function UrlShortenerSection() {
  const [url, setUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState(() => {
    const storedUrls = localStorage.getItem("shortenUrl");
    return storedUrls ? JSON.parse(storedUrls) : [];
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // use effect to save data when changes are made
  useEffect(() => {
    localStorage.setItem("shortenUrl", JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!url) {
      setErrorMessage("Please add a link to shorten");
    }

    try {
      setLoading(true);
      const res = await fetch(BITLY_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ long_url: url }),
      });

      const data = await res.json();

      if (res.ok) {
        setShortenedUrls([
          ...shortenedUrls,
          {
            originalUrl: url,
            shortUrl: data.link,
          },
        ]);

        setErrorMessage("");
        setUrl("");
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="shortener">
      <div className="container">
        {/* content shortener */}
        <div className="shortener-content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={`${errorMessage ? "error-input" : ""}`}
                placeholder="Shorten a link here..."
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button datatype="wide" disabled={loading} className="btn">
              {loading ? "loading..." : " Shorten It! "}
            </button>
          </form>
        </div>

        {/* shortening output */}
        {shortenedUrls.length > 0 && (
          <div className="shorten-cards">
            {/* shortened cards */}
            {shortenedUrls.map((item, index) => (
              <div key={index} className="shorten-card">
                <div className="actual-link">
                  <p>{item.originalUrl}</p>
                </div>
                <div className="shorten-link">
                  <a href={`${item.shortUrl}`} target="_blank">
                    {item.shortUrl}
                  </a>
                  <button
                    className={`btn ${copiedIndex === index ? "copied" : ""}`}
                    datatype="wide"
                    onClick={() => handleCopy(item.shortUrl, index)}
                  >
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default UrlShortenerSection;
