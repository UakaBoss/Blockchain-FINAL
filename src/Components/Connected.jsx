import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime} minutes <span id="live">LIVE</span></p>
            { props.showButton ? (
                <p className="connected-account">You have already voted o_O</p>
            ) : (
                <div>
                    <input type="number" placeholder="Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
            <br/>
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            
            <div class="card-collection">
                <div class="card">
                    <img src={require('../images/candidat-1.png')} class="card-img" alt="candidat-1"/>
                    <div class="card-description">
                        <h2 class="card-title">Ualikhan Kamarov</h2>
                        <p class="card-text">20 years old</p>
                    </div>
                </div>

                <div class="card">
                    <img src={require('../images/candidat-2.jpg')} class="card-img" alt="candidat-2"/>
                    <div class="card-description">
                        <h2 class="card-title">Aigali Sultankul</h2>
                        <p class="card-text">19 y.o.</p>
                    </div>
                </div>

                <div class="card">
                    <img src={require('../images/candidat-3.jpg')} class="card-img" alt="candidat-3"/>
                    <div class="card-description">
                        <h2 class="card-title">Alibi Kemelbek</h2>
                        <p class="card-text">19 y.o.</p>
                    </div>
                </div>

                <div class="card">
                    <img src={require('../images/candidat-4.jpg')} class="card-img" alt="candidat-4"/>
                    <div class="card-description">
                        <h2 class="card-title">Beksultan Nalibek</h2>
                        <p class="card-text">19 y.o.</p>
                    </div>
                </div>
                
                <div class="card">
                    <img src={require('../images/candidat-5.jpg')} class="card-img" alt="candidat-5"/>
                    <div class="card-description">
                        <h2 class="card-title">Ali Atchibaev</h2>
                        <p class="card-text">19 y.o.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connected;