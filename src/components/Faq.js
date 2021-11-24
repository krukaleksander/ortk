// spróbujemy z useEffect

import { useEffect } from "react";

const Faq = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  });
  return (
    <div className="faq">
      <div className="container">
        <h2 className="faq__title">Najczęściej zadawane pytania</h2>
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title">
                Kto może zmienić sprzedawcę energii elektrycznej?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Sprzedawcę może zmienić dowolny Odbiorca, czyli każdy, kto
                otrzymuje lub pobiera energię elektryczną na podstawie umowy z
                przedsiębiorstwem energetycznym.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title"> Co oznacza skrót PPE?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                PPE (Punkt Poboru Energii), to miejsce w jakim dokonywany jest
                pomiar zużytej energii elektrycznej oznaczone przez OSD
                unikalnym numerem. Jeżeli pod jednym adresem znajduje się więcej
                niż jedno urządzenie pomiarowe, to są one odrębnymi punktami
                poboru.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title"> Co oznacza skrót OSD?</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                OSD (Operator Systemu Dystrybucyjnego) to lokalny zakład
                energetyczny, który jest właścicielem sieci dystrybucyjnej na
                obszarze swojego działania. OSD odpowiada za prawidłowe
                działanie i stan techniczny linii zasilających, stacji
                transformatorowych oraz dokonuje odczytów stanów liczników
                energii elektrycznej.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czy Proces Zmiany Sprzedawcy jest bezpłatny?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                TAK, Proces Zmiany Sprzedawcy jest bezpłatny, pod warunkiem, że
                Klient udzieli odpowiedniego pełnomocnictwa.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Jak długo trwa Proces Zmiany Sprzedawcy?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Termin zmiany sprzedawcy jest ustawowo regulowany i wynosi 21
                dni, niezależnie od tego czy jest to pierwsza czy kolejna zmiana
                sprzedawcy. Należy jednak pamiętać, iż czas ten będzie również
                wynikał z terminów wypowiedzenia umowy poprzedniemu sprzedawcy,
                który może wynosić nawet 3 miesiące.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czy w trakcie Procesu Zmiany Sprzedawcy mam zapewnioną ciągłość
                dostaw prądu?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Tak, oczywiście. Nie ma możliwości, aby Klient został pozbawiony
                dostaw energii w trakcie PZS. Dostawy gwarantuje Operator
                Systemu Dystrybucyjnego (OSD, czyli dystrybutor) działający na
                danym terenie - zapewnia on stałe i nieprzerwane dostawy
                energii.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czy zmiana sprzedawcy wiąże się z wymianą licznika?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Absolutnie nie, pamiętajmy że zmianiamy tylko sprzedawcę energii
                a nie dostawcę, który jest właścicielem kabli, liczników, itp.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czy po zmianie sprzedawcy na Inną firmę zmieniają się stawki
                dystrybucyjne?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Klient rozliczany jest nadal zgodnie z taryfą danego Operatora
                Systemu Dystrybucyjnego, nic nie ulega zmianie.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czym jest opłata handlowa?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Jest to opłata, która pokrywa koszty związane z obsługą Klienta
                (Odbiorcy).
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Czy można zrezygnować z umowy?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Tak, Klient (Odbiorca) może odstąpić od umowy w każdym momencie
                jej obowiązywania. Jeśli współpraca jest rozwiązywana na
                życzenie Klienta (Odbiorcy) przed terminem, a także gdy jej
                przyczyną jest niewykonanie usługi z winy Klienta, Sprzedawca ma
                prawo naliczyć karę zgodnie z zapisami w umowie.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                Co dzieje się po przekroczeniu terminu obowiązywania umowy?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Jeżeli Klient (Odbiorca) nie zgłosi wypowiedzenia umowy,
                automatycznie ulega ona przedłużeniu na czas nieokreślony, na
                warunkach standardowej taryfy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
