import React from 'react'

function Card(props) {
    let options=props.options;
    let priceOption=Object.keys(options)
    return (
        <div>
            <div class="card mt-3" style={{ width: "18rem", maxWeight: "160px" }}>
                <img
                    src={props.imgsrc}
                    class="card-img-top"
                    alt="..."
                    style={{height:"200px",objectFit:"cover"}}
                />
                <div class="card-body">
                    <h5 class="card-title">{props.foodname}</h5>
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
                            {priceOption.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className="d-inline  h-100 fs-5"> Total price</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
