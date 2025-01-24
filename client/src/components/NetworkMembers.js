import React from "react";

function NetworkMembers() {
  return (
    <div>
      <p className="lead mt-5 mb-4">
        <b>Institutions involved</b>
      </p>
      <div className="bnmembers-container">
        <div className="bnmembers-grid">
          <div className="cell">
            <a
              href="https://ega-archive.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./egalogocolor.png"
                alt="EGA Logo"
                className="cell-image logos"
              />
            </a>
          </div>

          <div className="cell">
            <a
              href="https://elixir-europe.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./elixirlogo.svg"
                alt="CRG Logo"
                className="cell-image logos"
              />
            </a>
          </div>

          <div className="cell">
            <a
              href="https://gdi.onemilliongenomes.eu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./EGDI.svg"
                alt="European Genomic Data Infrastructure Logo"
                className="cell-image logos"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkMembers;
