import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      searchQuery: '',
      category: 'technology'
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    this.setState({ loading: true });

    const API_KEY = "e351652eaf6723e725ed1eb73012713a"; // Replace with your actual GNews API key
    const { searchQuery, category } = this.state;
    const query = searchQuery || category || "technology";

    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&token=${API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      this.setState({
        articles: Array.isArray(data.articles) ? data.articles : [],
        loading: false
      });
    } catch (err) {
      console.error("❌ Error fetching news:", err);
      this.setState({ articles: [], loading: false });
    }
  };

  handleCategoryChange = (category) => {
    this.setState({ category, searchQuery: '' }, this.fetchNews);
  };

  render() {
    const { mode } = this.props;
    const { searchQuery, loading, articles } = this.state;

    return (
      <div className={`container my-4 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <h2 className="text-center mb-4">NewsMonkey - Top Headlines</h2>

        {/* 🔍 Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') this.fetchNews();
            }}
          />
        </div>

        {/* 🗂️ Category Buttons */}
        <div className="mb-4 d-flex flex-wrap gap-2 justify-content-center">
          {["Technology", "Business", "Health", "Sports", "Science", "Entertainment"].map((cat) => (
            <button
              key={cat}
              className="btn btn-outline-primary btn-sm"
              onClick={() => this.handleCategoryChange(cat.toLowerCase())}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔄 Loading */}
        {loading && <p className="text-center">Loading...</p>}

        {/* 📰 News Grid */}
        <div className="row">
          {articles.map((article) => (
            <div className="col-md-3" key={article.url}>
              <NewsItem
                title={article.title || ""}
                description={article.description || ""}
                imageUrl={article.image}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
