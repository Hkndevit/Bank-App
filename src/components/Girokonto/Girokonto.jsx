import { useState } from "react";
import "./Girokonto.css"

const Girokonto = () => {
    
    // KONTOSTAND
    const [kontostand, setKontostand] = useState(0);
    const [betrag, setBetrag] = useState("");

    //  EINZAHLEN
    const einzahl = (event) => {
        event.preventDefault();
        setKontostand(kontostand + betrag);
    } 

    // AUSZAHLEN
    const auszahl = (event) => {
        event.preventDefault();
        setKontostand(kontostand - betrag);
        
        if (kontostand - betrag >= 0 ) {
        } else  {
          alert("Abbuchung nicht möglich");
        }
      };


    return (
        <> 
        <section className="automat">
            <form>
        <div className="logo"><h1>Banana Bank</h1></div>
            <h3>Mein Girokonto</h3>

            <div>
                <div className="display">
                <h1>{kontostand} €</h1>
                </div>
            </div>

        
            <div>
                <input className="input" type="number" placeholder="Betrag eingeben" onChange={(event) => setBetrag(Number(event.target.value))}/>
            </div>

            <div className="buttons">
                <input className="einzahlen" type="submit" value="Einzahlen" onClick={(event) => einzahl(event)} />

                <input className="auszahlen" type="submit" value="Auszahlen" onClick={(event) => auszahl(event)} />

            </div>
            </form>
        </section>
        </>
    );
};

export default Girokonto;