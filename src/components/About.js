const About = () => {
  return (
    <div className="about">
      <header className="about__header">
        <div className="colored-blue"></div>
        <div className="colored-blue-fiter"></div>
        <div className="content-header">
          <h1>Gdzie inni widzą problemy</h1>
          <h2>My widzimy możliwości</h2>
        </div>
      </header>
      <main className="about__main">
        <div className="text">
          <h3>
            Współpracowaliśmy już z wieloma firmami na wyłączność, jednak w
            dzisiejszych czasach to nie ma sensu. Porównywać należy jednocześnie
            wiele ofert.
          </h3>
          <p>
            Obecnie korzystamy z usług 10 sprzedawców prądu i 6 gazu. Wybierzemy
            dla Ciebie najlepszą ofertę.
          </p>
        </div>
        <div className="numbers">
          <div>
            <p>10</p>
            <span>firm sprzedających prąd</span>
          </div>
          <div>
            <p>6</p>
            <span>firm sprzedających gaz</span>
          </div>
          <div>
            <p>1000+</p>
            <span>zadowolonych klientów</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
