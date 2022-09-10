import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function MovieStats() {
    return (
        <>
            <div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Movie Stats</h5>
                        <h6 className="card-subtitle mb-2 text-muted">#Top Ranked Movies</h6>
                        <ol>
                            <li>#batman</li>
                            <li>#spiderman</li>
                            <li>#Dangal</li>
                            <li>#KGF</li>
                            <li>#Robo</li>

                        </ol>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieStats;