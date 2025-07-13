const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const encodedSearchText = queryArray[queryArray.length - 1];
console.log("search text -->", decodeURI(encodedSearchText));

const rootElem = document.getElementById("search-result-video-card");

const renderSearchResults = (data) => {
  const contents = data.contents;

  contents.forEach((obj) => {
    const { video } = obj;
    console.log("🔸 video:", video);

    const { thumbnails, title, descriptionSnippet, publishedTimeText, stats } = video;

    const newDiv = document.createElement("div");
    newDiv.className = "search-result-video-card";

    newDiv.innerHTML = `
      <div class='thumbnail-container'>
        <img src='${thumbnails.pop()}' width='100%'>
      </div>
      <div class='video-data-container'>
        <p>${title}</p>
        <p>${stats.views}</p>
        <p>${publishedTimeText}</p>
        <p>${descriptionSnippet}</p>
      </div>
    `;

    rootElem.appendChild(newDiv);
  });
};

const getSearchResults = () => {
  fetch(`https://youtube138.p.rapidapi.com/search/?q=${encodedSearchText}&hl=en&gl=US`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
      "x-rapidapi-key": "1a1ab9338bmsh4bfff8e240b3a37p16e373jsn99f4b6020162"
    }
  })
    .then((response) => response.json())
    .then((data) => {
      renderSearchResults(data);
    })
    .catch((err) => {
      console.warn("API failed, using dummy data.");
      renderSearchResults(dummyData); // fallback
    });
};

// Dummy data for fallback
const dummyData = {
  contents: [
    {
      video: {
        thumbnails: [
          "https://i.ytimg.com/vi/abcd1234hqdefault.jpg",
          "https://i.ytimg.com/vi/abcd1234mqdefault.jpg"
        ],
        title: "Learn JavaScript in 15 Minutes",
        descriptionSnippet: "Quick crash course on JavaScript for beginners.",
        publishedTimeText: "2 days ago",
        stats: {
          views: "1.2M views"
        }
      }
    },
    {
      video: {
        thumbnails: [
          "https://i.ytimg.com/vi/efgh5678hqdefault.jpg",
          "https://i.ytimg.com/vi/efgh5678mqdefault.jpg"
        ],
        title: "ReactJS Full Tutorial for Beginners",
        descriptionSnippet: "Step-by-step guide to mastering React.",
        publishedTimeText: "1 week ago",
        stats: {
          views: "950K views"
        }
      }
    },
    {
      video: {
        thumbnails: [
          "https://i.ytimg.com/vi/ijkl9101hqdefault.jpg",
          "https://i.ytimg.com/vi/ijkl9101mqdefault.jpg"
        ],
        title: "HTML + CSS Complete Course",
        descriptionSnippet: "Master web design with HTML and CSS.",
        publishedTimeText: "3 months ago",
        stats: {
          views: "3.4M views"
        }
      }
    }
  ]
};

// Start the search
getSearchResults();
