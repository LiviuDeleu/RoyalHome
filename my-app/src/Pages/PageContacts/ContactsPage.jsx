import "../PageContacts/ContactsPage.css"
export default function ContactsPage(){
    return(<>
        
    <div className="YellowBlockContacts">
       <div id="ContainerContactPage">
            <div className="tablediv" id="tabledivblack">Adress</div>
            <div className="tablediv" id="tabledivblack">Telefon Number1</div>
            <div className="tablediv" id="tabledivblack">Telefon Number2</div>
            <div className="tablediv" id="tabledivblack">Administrator Name</div>
            <div className="tablediv">mun. Balți</div>
            <div className="tablediv">+373-69-754-470</div>
            <div className="tablediv">+373-79-223-444</div>
            <div className="tablediv">Andrei</div>
            <div className="tablediv">mun. Chișinău</div>
            <div className="tablediv">+373-69-278-725</div>
            <div className="tablediv">+373-79-909-454</div>
            <div className="tablediv">Gheorghe</div>
            <div className="tablediv">r. Glodeni</div>
            <div className="tablediv">+373-69-643-333</div>
            <div className="tablediv">+373-79-123-456</div>
            <div className="tablediv">Maxim</div>
            <div className="tablediv">r. Cahul</div>
            <div className="tablediv">+373-69-232-345</div>
            <div className="tablediv">+373-79-234-543</div>
            <div className="tablediv">Ruben</div>
       </div>
       <p id="TextContactPage">​Send a message to get in touch with one of the <br/>
            operators or call the number above...</p>
    </div>
        <div id="GreenBlocContactPage">
            <div id="BlockWhiteContactPage">
                <input type="text"  placeholder="Yor Name" className="inputcontact"/>
                <input type="mail" placeholder="E-mail" className="inputcontact"/>
                <input type="text" placeholder="Message" id="inputRichText"/>
                <button id="GreenButtonContactPage">Submit</button>
            </div>
        </div>
    </>)
}