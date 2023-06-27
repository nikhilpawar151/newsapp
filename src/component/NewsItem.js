import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, name, publishedAt } =
      this.props;
    return (
      <div>
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className=" badge rounded-pill bg-success"
              style={{ left: "90%", zIndex: "1" }}
            >
              {name}
            </span>
          </div>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://www.coindesk.com/resizer/1N6i-osL42NueOB6cKlY4VzKv2E=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/AQYH7YB57JDLVHJSOBBCMKBZAA.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description === null || description.length === 0
                ? "Description not available"
                : description.slice(0, 100) + "..."}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(publishedAt).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
