import { BsArrowReturnRight, BsArrowReturnLeft } from "react-icons/bs";

const LetsStart = ({ title }) => {
  return (
    <main className="cooperation">
      <div className="hand-to-hand">
        <div className="hand-to-hand__colored">
          <div className="hand-to-hand__plus"></div>
        </div>
        <div className="hand-to-hand__text">
          <div>
            <h1 className="title">{title}</h1>
            <h1>Zacznijmy współpracę już dziś</h1>
            <h2>aby jutro było lepsze</h2>
          </div>
        </div>
      </div>
      <div className="steps">
        <div className="steps__motto">
          <span></span>
          <p>od sukcesu dzielą nas tylko cztery kroki</p>
        </div>
        <div className="steps__step steps__step--one">
          <div className="step__body">
            <div className="circle">
              <span>1</span>
              <div>
                <p>Analiza</p>
                <p>Faktur</p>
              </div>
            </div>
            <p className="par">
              Pierwszym krokiem jest przeanalizowanie otrzymanych przez Ciebie
              faktur. To konieczne, bo przecież nic jeszcze nie wiemy o Twoich
              przyłączach i wymaganiach. Ustalimy czy dobrze masz dobraną moc,
              jakie masz zużycie czy też jaką grupę taryfową. Będzie to dla nas
              bazą do tego abyśmy mogli ustalić jakie są Twoje potrzeby.
            </p>
          </div>
          <div className="step-arrow step-arrow--right">
            <BsArrowReturnRight />
          </div>
        </div>
        <div className="steps__step steps__step--two">
          <div className="step__body">
            <div className="circle">
              <span>2</span>
              <div>
                <p>Zbieranie</p>
                <p>Ofert</p>
              </div>
            </div>
            <p className="par">
              Uzyskaliśmy możliwość uzyskiwania ofert na warunkach
              preferencyjnych od 10 sprzedawców prądu i 6 sprzedawców gazu.
              Wystąpimy do nich wszystkich z danymi, które pozyskaliśmy w
              poprzednim etapie. Oni doskonale wiedzą, że nie pytamy tylko ich,
              dlatego każdy da najlepsze co w danej chwili może. Kiedy wszystkie
              oferty się pojawią wybierzemy najlepsze i przedstawimy je Tobie.
            </p>
          </div>
          <div className="step-arrow step-arrow--left">
            <BsArrowReturnLeft />
          </div>
        </div>
        <div className="steps__step steps__step--three">
          <div className="step__body">
            <div className="circle">
              <span>3</span>
              <div>
                <p>Wybór</p>
                <p>Najlepszej</p>
              </div>
            </div>
            <p className="par">
              Mamy już oferty, warto zatem je dogłębnie przeanalizować.
              Dzisiejsze niestabilne czasy pokazują, że oprócz informacji o
              cenie warto wiedzieć co nieco o swoim przyszłym sprzedawcy. My
              znamy ich na wylot, chętnie podzielimy się z Tobą naszą wiedzą.
              Wspólnie wyierzemy ofertę, która zapewni korzystne warunki i pewną
              przyszłość.
            </p>
          </div>
          <div className="step-arrow step-arrow--right">
            <BsArrowReturnRight />
          </div>
        </div>
        <div className="steps__step steps__step--four">
          <div className="step__body">
            <div className="circle">
              <span>4</span>
              <div>
                <p>Podpisanie</p>
                <p>Umowy</p>
              </div>
            </div>
            <p className="par">
              Pozostała już tylko formalność - podpisanie umowy. Nie z nami ją
              podpisujesz a z nowym sprzedawcą. Podpisać i dostarczyć musimy
              dokumenty w odpowiednim wskazanym terminie. Zmienność cen na TGE
              powoduje, że sprzedawcy muszą jak najszybciej kupić dla Ciebie
              odpowiednią ilość energii czy gazu i zabezpieczyć w ten sposób
              ceny.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LetsStart;
