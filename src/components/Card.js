import React from 'react'

function Card() {
    return (
        <div>
            <div class="card mt-3" style={{ width: "18rem", maxWeight: "160px" }}>
                <img
                    src="https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    class="card-img-top"
                    alt="..."
                />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">this is not so important</p>
                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {" "}
                                        {i + 1}{" "}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            <option value="half">Half</option>
                            <option value="Full">Full</option>
                        </select>
                        <div className="d-inline  h-100 fs-5"> Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
