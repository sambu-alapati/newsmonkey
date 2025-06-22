import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      searchQuery: '',
      category: 'technology', // default
      date: '' // for date filtering
    };
  }

  componentDidMount() {
    this.fetchNews();
  }
  fetchNews = async () => {
    this.setState({ loading: true });
    const baseUrl = "https://newsapi.org/v2/everything";
    const query = this.state.searchQuery || this.state.category || "technology";
    const apiKey = "ee5ef07dee2b4057b294441275fca8aa";
    const dateParam = this.state.date ? `&from=${this.state.date}&to=${this.state.date}` : "";
    const url = `${baseUrl}?q=${query}${dateParam}&sortBy=publishedAt&apiKey=${apiKey}`;

    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      // Safe check: articles must be an array
      this.setState({
        articles: Array.isArray(parsedData.articles) ? parsedData.articles : [],
        loading: false
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ articles: [], loading: false });
    }
  };

  handleCategoryChange = (category) => {
    this.setState({ category, searchQuery: '', date: '' }, () => this.fetchNews());
  };

  render() {
    const { mode } = this.props;

    return (
      <div className={`container my-4 text-${mode === 'light' ? 'dark' : 'light'}`}>
        <h2 className="text-center mb-4">NewsMonkey - Top Headlines</h2>

        {/* 🔍 Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}
            placeholder="Search news..."
            value={this.state.searchQuery}
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') this.fetchNews();
            }}
          />
        </div>

        {/* 📅 Date Picker */}
        <div className="mb-3">
          <input
            type="date"
            className={`form-control bg-${mode} text-${mode === 'light' ? 'dark' : 'light'}`}
            value={this.state.date}
            onChange={(e) => this.setState({ date: e.target.value }, () => this.fetchNews())}
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

        {/* 📰 News Grid */}
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem
                title={element.title || ""}
                description={element.description || ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
